from typing import Optional
from decimal import Decimal

from dipdup.models import OperationData, Origination, Transaction
from dipdup.context import HandlerContext

import demo_joko.models as models

from demo_joko.types.marketplace_objkt.parameter.ask import AskParameter
from demo_joko.types.marketplace_objkt.storage import MarketplaceObjktStorage


async def on_ask(
    ctx: HandlerContext,
    ask: Transaction[AskParameter, MarketplaceObjktStorage],
) -> None:
    asker_address = ask.data.sender_address

    asker,bool = await models.Asker.get_or_create(address = asker_address)

    ask = models.Ask(
        asker = asker,
        amount = Decimal(ask.parameter.amount) / (10 ** 6),
        token_address = ask.parameter.token.address,
        token_id = ask.parameter.token.token_id,
        editions = ask.parameter.editions,
        level = ask.data.level,
        timestamp = ask.data.timestamp,
    )
    await ask.save()