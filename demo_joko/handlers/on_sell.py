from decimal import Decimal
import demo_joko.models as models

from dipdup.context import HandlerContext
from dipdup.models import Transaction
from demo_joko.types.sell_buy_rarible.parameter.sell import SellParameter
from demo_joko.types.sell_buy_rarible.storage import SellBuyRaribleStorage

async def on_sell(
    ctx: HandlerContext,
    sell: Transaction[SellParameter, SellBuyRaribleStorage],
) -> None:
    seller_address = sell.data.sender_address

    seller,bool = await models.Seller.get_or_create(address = seller_address)

    sell = models.Sell(
        seller = seller,
        sale_amount = Decimal(sell.parameter.s_sale.sale_amount) / (10 ** 6),
        token_address = sell.parameter.s_asset_contract,
        token_id = sell.parameter.s_asset_token_id,
        level = sell.data.level,
        timestamp = sell.data.timestamp,
    )
    await sell.save()