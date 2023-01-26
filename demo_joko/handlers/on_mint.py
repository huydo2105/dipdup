from decimal import Decimal
import demo_joko.models as models

from demo_joko.types.fa2Contract_JOKO.parameter.mint import MintParameter
from demo_joko.types.fa2Contract_JOKO.storage import Fa2ContractJOKOStorage
from dipdup.context import HandlerContext
from dipdup.models import Transaction

async def on_mint(
    ctx: HandlerContext,
    mint: Transaction[MintParameter, Fa2ContractJOKOStorage],
) -> None:
    # owner_address = mint.parameter.address
    base_rarible_url = "https://rarible.com/token/tezos/"
    base_objkts_url = "https://objkt.com/asset/"
    contract_address = "KT1JkaXjdxrWSrVjXzufTgdJTJC9UoQjkveW"
    rarible_url = base_rarible_url + contract_address + ":" + mint.parameter.token_id
    objkts_url = base_objkts_url + contract_address + "/" + mint.parameter.token_id
    # owner,bool = await models.Mint.get_or_create(address = owner_address)

    mint = models.Mint(
        id = mint.parameter.token_id,
        owner = mint.parameter.address,
        token_id = mint.parameter.token_id,
        amount = mint.parameter.amount,
        level = mint.data.level,
        rarible_url = rarible_url,
        objkts_url = objkts_url,
        timestamp = mint.data.timestamp,
    )
    await mint.save()