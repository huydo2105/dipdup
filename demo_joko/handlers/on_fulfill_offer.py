
from dipdup.models import Transaction
from demo_joko.types.fa2Contract_JOKO.storage import Fa2ContractJOKOStorage
from demo_joko.types.marketplace_objkt.parameter.fulfill_offer import FulfillOfferParameter
from dipdup.context import HandlerContext
from demo_joko.types.marketplace_objkt.storage import MarketplaceObjktStorage
from demo_joko.types.fa2Contract_JOKO.parameter.transfer import TransferParameter

async def on_fulfill_offer(
    ctx: HandlerContext,
    fulfill_offer: Transaction[FulfillOfferParameter, MarketplaceObjktStorage],
    transfer: Transaction[TransferParameter, Fa2ContractJOKOStorage],
) -> None:
    fulfill_offer_address = fulfill_offer.data.sender_address
    # assert fulfill_offer.data.amount is not None
    offer_id = bid.parameter.offer_id
    offer = bid.storage.offers[offer_id]
    fulfill_offer_amount = Decimal(offer.amount) / (10 ** 6)
    fulfill_offerer,bool = await models.To.get_or_create(address = fulfill_offer_address)

    transfer_parameter = transfer.parameter.__root__[0]
    from_address = transfer_parameter.from_
    from_, bool = await models.From.get_or_create(address=from_address)

    for transfer_tx in transfer_parameter.txs:
        token_qty = int(transfer_tx.amount)
        token_id = transfer_tx.token_id
        
        fulfill_offer = models.LastSale(
            to_ = fulfill_offerer,
            amount = fulfill_offer_amount,
            token_qty = token_qty,
            token_id = token_id,
            from_ = from_,
            level = fulfill_offer.data.level,
            timestamp = fulfill_offer.data.timestamp,
        )
        await fulfill_offer.save()