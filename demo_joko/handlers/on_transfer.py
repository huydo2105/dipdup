from decimal import Decimal
import demo_joko.models as models

from dipdup.context import HandlerContext
from dipdup.models import Transaction
from demo_joko.types.fa2Contract_JOKO.storage import Fa2ContractJOKOStorage
from demo_joko.types.fa2Contract_JOKO.parameter.transfer import TransferParameter

async def on_transfer(
    ctx: HandlerContext,
    transfer: Transaction[TransferParameter, Fa2ContractJOKOStorage],
) -> None:
    transfer_parameter = transfer.parameter.__root__[0]

    for transfer_tx in transfer_parameter.txs:
        await models.Mint.update_or_create(
            id = transfer_tx.token_id,
            defaults={
                        'owner': transfer_tx.to_,
                        'amount': transfer_tx.amount,
                        'token_id': transfer_tx.token_id,
                        'level': transfer.data.level,
                        'timestamp': transfer.data.timestamp
                    },
        )
        # await transfer.save()
    