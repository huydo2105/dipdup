from decimal import Decimal
import demo_joko.models as models

from demo_joko.types.marketplace_objkt.parameter.offer import OfferParameter
from dipdup.context import HandlerContext
from demo_joko.types.marketplace_objkt.storage import MarketplaceObjktStorage
from dipdup.models import Transaction

async def on_offer(
    ctx: HandlerContext,
    offer: Transaction[OfferParameter, MarketplaceObjktStorage],
) -> None:
    amount =  Decimal(offer.parameter.amount) / (10 ** 6)

    offer = models.Offer(
        amount = amount,
        token_address = offer.parameter.token.address,
        token_id = offer.parameter.token.token_id,
        level = offer.data.level,
        timestamp = offer.data.timestamp,
    )
    await offer.save()