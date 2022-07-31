from typing import Optional
from decimal import Decimal

from dipdup.context import HandlerContext
from demo_joko.types.marketplace_objkt.parameter.fulfill_ask import FulfillAskParameter
from dipdup.models import Transaction
from demo_joko.types.fa2Contract_JOKO.parameter.transfer import TransferParameter
from demo_joko.types.marketplace_objkt.storage import MarketplaceObjktStorage
from demo_joko.types.fa2Contract_JOKO.storage import Fa2ContractJOKOStorage
import demo_joko.models as models

async def on_fulfill_ask(
    ctx: HandlerContext,
    fulfill_ask: Transaction[FulfillAskParameter, MarketplaceObjktStorage],
    transfer: Transaction[TransferParameter, Fa2ContractJOKOStorage],
) -> None:
    fulfill_asker_address = fulfill_ask.data.sender_address
    # assert fulfill_ask.data.amount is not None
    fulfill_ask_amount = Decimal(fulfill_ask.data.amount) / (10 ** 6)
    fulfill_asker,bool = await models.To.get_or_create(address = fulfill_asker_address)

    transfer_parameter = transfer.parameter.__root__[0]
    from_address = transfer_parameter.from_
    from_, bool = await models.From.get_or_create(address=from_address)

    for transfer_tx in transfer_parameter.txs:
        token_qty = int(transfer_tx.amount)
        token_id = transfer_tx.token_id
        
        fullfil_ask = models.LastSale(
            to_ = fulfill_asker,
            amount = fulfill_ask_amount,
            token_qty = token_qty,
            token_id = token_id,
            from_ = from_,
            ask_id = fulfill_ask.parameter.ask_id,
            level = fulfill_ask.data.level,
            timestamp = fulfill_ask.data.timestamp,
        )
        await fullfil_ask.save()