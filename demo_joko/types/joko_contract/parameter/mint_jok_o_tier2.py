# generated by datamodel-codegen:
#   filename:  mint_JOKO_tier2.json

from __future__ import annotations

from pydantic import BaseModel, Extra


class MintJOKOTier2Parameter(BaseModel):
    class Config:
        extra = Extra.forbid

    amount_tokens: str
    artist: str
    pixel_artist: str
