from typing import Optional
from decimal import Decimal
from demo_joko.types.objktswap_fa12.storage import ObjktswapFa12Storage
from demo_joko.types.objktswap_fa12.parameter.create_auction import CreateAuctionParameter
from dipdup.context import HandlerContext
from dipdup.models import Transaction
import demo_joko.models as models

async def on_ask_auction(
    ctx: HandlerContext,
    create_auction: Transaction[CreateAuctionParameter, ObjktswapFa12Storage],
) -> None:
    auction_creator_address = create_auction.data.sender_address

    auction_creator,bool = await models.AuctionCreator.get_or_create(address = auction_creator_address)

    askAuction = models.AskAuction(
        auction_creator = auction_creator,
        reserve = Decimal(create_auction.parameter.reserve) / (10 ** 6),
        price_increment = Decimal(create_auction.parameter.price_increment) / (10 ** 6),
        token_address = create_auction.parameter.token.address,
        token_id = create_auction.parameter.token.token_id,
        start_time = create_auction.parameter.start_time,
        end_time = create_auction.parameter.end_time,
        # shares_amount = create_auction.parameter.shares,
        level = create_auction.data.level,
        timestamp = create_auction.data.timestamp,
    )
    await askAuction.save()