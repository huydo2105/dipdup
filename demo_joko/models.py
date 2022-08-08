from tortoise import Model, fields
from enum import IntEnum

class BidStatus(IntEnum):
    ACTIVE = 0
    FINISHED = 1
    CANCELED = 2


class Bid(Model):
    id = fields.BigIntField(pk=True)
    bidder = fields.ForeignKeyField('models.Bidder', 'bids')
    price = fields.DecimalField(decimal_places = 6, max_digits = 16,default = 0)
    highest_bidder = fields.ForeignKeyField('models.HighestBidder', 'bids')
    token_address = fields.CharField(36)
    token_id = fields.CharField(100)
    start_time = fields.DatetimeField()
    end_time = fields.DatetimeField()
    level = fields.BigIntField()
    timestamp = fields.DatetimeField()

class Ask(Model):
    id = fields.BigIntField(pk=True)
    asker = fields.ForeignKeyField('models.Asker', 'asks')
    amount = fields.CharField(200)
    token_address = fields.CharField(36)
    token_id = fields.CharField(100)
    editions = fields.CharField(36)
    level = fields.BigIntField()
    timestamp = fields.DatetimeField()

class LastSale(Model):
    id = fields.BigIntField(pk=True)
    to_ = fields.ForeignKeyField('models.To', 'last_sales')
    from_ = fields.ForeignKeyField('models.From', 'last_sales')
    amount = fields.CharField(200)
    token_id = fields.CharField(100)
    token_qty = fields.DecimalField(decimal_places = 6, max_digits = 32)
    ask_id = fields.CharField(100)
    level = fields.BigIntField()
    timestamp = fields.DatetimeField()

class AskAuction(Model):
    id = fields.BigIntField(pk=True)
    auction_creator = fields.ForeignKeyField('models.AuctionCreator', 'ask_auctions')
    price_increment = fields.CharField(200)
    reserve = fields.CharField(200)
    token_address = fields.CharField(36)
    token_id = fields.CharField(100)
    # shares_amount = fields.CharField(100)
    # share_address = fields.CharField(100)
    level = fields.BigIntField()
    timestamp = fields.DatetimeField()
    start_time = fields.DatetimeField()
    end_time = fields.DatetimeField()

class Sell(Model):
    id = fields.BigIntField(pk=True)
    seller = fields.ForeignKeyField('models.Seller', 'sells')
    sale_amount = fields.CharField(200)
    token_address = fields.CharField(36)
    token_id = fields.CharField(100)
    level = fields.BigIntField()
    timestamp = fields.DatetimeField()

class Buy(Model):
    id = fields.BigIntField(pk=True)
    buyer = fields.ForeignKeyField('models.Buyer', 'buys')
    buy_from = fields.CharField(200)
    buy_amount = fields.CharField(200)
    token_address = fields.CharField(36)
    token_id = fields.CharField(100)
    level = fields.BigIntField()
    timestamp = fields.DatetimeField()

class Buyer(Model):
    address = fields.CharField(36, pk=True)

class Seller(Model):
    address = fields.CharField(36, pk=True)

class AuctionCreator(Model):
    address = fields.CharField(36, pk=True)

class From(Model):
    address = fields.CharField(36, pk=True)

class To(Model):
    address = fields.CharField(36, pk=True)

class Asker(Model):
    address = fields.CharField(36, pk=True)

class HighestBidder(Model):
    address = fields.CharField(36, pk=True)

class Bidder(Model):
    address = fields.CharField(36, pk=True)
    