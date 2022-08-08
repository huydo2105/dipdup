from typing import Optional
from decimal import Decimal

from dipdup.models import OperationData, Origination, Transaction
from dipdup.context import HandlerContext

import demo_joko.models as models

from demo_joko.types.objktswap_fa12.parameter.bid import BidParameter
from demo_joko.types.objktswap_fa12.storage import ObjktswapFa12Storage
from demo_joko.types.objktwrap_fa12.parameter.transfer import TransferParameter
from demo_joko.types.objktwrap_fa12.storage import ObjktwrapFa12Storage


async def on_bid(
    ctx: HandlerContext,
    bid: Transaction[BidParameter, ObjktswapFa12Storage],
    transfer: Transaction[TransferParameter, ObjktwrapFa12Storage],
) -> None:
    # To get bid of our token just change token_address = our smart contract token
    auction_id = bid.parameter.auction_id
    auction = bid.storage.auctions[auction_id]
    bidder_address = bid.data.sender_address
    highest_bidder_address = auction.highest_bidder
    price =  Decimal(bid.parameter.amount) / (10 ** 6)

    bidder,bool = await models.Bidder.get_or_create(address = bidder_address)
    highest_bidder,boolean = await models.HighestBidder.get_or_create(address = highest_bidder_address)
    # await bidder.save()
    # await highest_bidder.save()
  
    bid = models.Bid(
        bidder = bidder,
        price = price,
        highest_bidder = highest_bidder,
        token_address = auction.token.address,
        token_id = auction.token.token_id,
        start_time = auction.start_time,
        end_time = auction.end_time,
        level = transfer.data.level,
        status = models.BidStatus.ACTIVE,
        timestamp = transfer.data.timestamp,
    )
    await bid.save()