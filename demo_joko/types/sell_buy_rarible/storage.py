# generated by datamodel-codegen:
#   filename:  storage.json

from __future__ import annotations

from typing import Dict, Optional

from pydantic import BaseModel, Extra


class SellBuyRaribleStorage(BaseModel):
    class Config:
        extra = Extra.forbid

    owner: str
    protocol_fee: str
    transfer_manager: str
    sales_storage: str
    owner_candidate: Optional[str]
    max_bundle_items: str
    max_fees_limit: str
    metadata: Dict[str, str]