from decimal import Decimal
import demo_joko.models as models

from dipdup.context import HandlerContext
from dipdup.models import Transaction
from demo_joko.types.sell_buy_rarible.parameter.buy import BuyParameter
from demo_joko.types.sell_buy_rarible.storage import SellBuyRaribleStorage

async def on_buy(
    ctx: HandlerContext,
    buy: Transaction[BuyParameter, SellBuyRaribleStorage],
) -> None:
    buyer_address = buy.data.sender_address

    buyer,bool = await models.Buyer.get_or_create(address = buyer_address)

    buy = models.Buy(
        buyer = buyer,
        buy_amount = Decimal(buy.data.amount) / (10 ** 6),
        buy_from = buy.parameter.b_seller,
        token_address = buy.parameter.b_asset_contract,
        token_id = buy.parameter.b_asset_token_id,
        level = buy.data.level,
        timestamp = buy.data.timestamp,
    )
    await buy.save()