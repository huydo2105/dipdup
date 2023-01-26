import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    bigint: any,
    jsonb: any,
    numeric: any,
    timestamptz: any,
}


/** columns and relationships of "ask" */
export interface ask {
    amount: Scalars['String']
    /** An object relationship */
    asker: asker
    askerId: Scalars['String']
    editions: Scalars['String']
    id: Scalars['bigint']
    level: Scalars['bigint']
    timestamp: Scalars['timestamptz']
    tokenAddress: Scalars['String']
    tokenId: Scalars['String']
    __typename: 'ask'
}


/** columns and relationships of "ask_auction" */
export interface ask_auction {
    /** An object relationship */
    auctionCreator: auction_creator
    auctionCreatorId: Scalars['String']
    endTime: Scalars['timestamptz']
    id: Scalars['bigint']
    level: Scalars['bigint']
    priceIncrement: Scalars['String']
    reserve: Scalars['String']
    startTime: Scalars['timestamptz']
    timestamp: Scalars['timestamptz']
    tokenAddress: Scalars['String']
    tokenId: Scalars['String']
    __typename: 'ask_auction'
}


/** select columns of table "ask_auction" */
export type ask_auction_select_column = 'auctionCreatorId' | 'endTime' | 'id' | 'level' | 'priceIncrement' | 'reserve' | 'startTime' | 'timestamp' | 'tokenAddress' | 'tokenId'


/** select columns of table "ask" */
export type ask_select_column = 'amount' | 'askerId' | 'editions' | 'id' | 'level' | 'timestamp' | 'tokenAddress' | 'tokenId'


/** columns and relationships of "asker" */
export interface asker {
    address: Scalars['String']
    /** An array relationship */
    asks: ask[]
    __typename: 'asker'
}


/** select columns of table "asker" */
export type asker_select_column = 'address'


/** columns and relationships of "auction_creator" */
export interface auction_creator {
    address: Scalars['String']
    /** An array relationship */
    askAuctions: ask_auction[]
    __typename: 'auction_creator'
}


/** select columns of table "auction_creator" */
export type auction_creator_select_column = 'address'


/** columns and relationships of "bid" */
export interface bid {
    /** An object relationship */
    bidder: bidder
    bidderId: Scalars['String']
    endTime: Scalars['timestamptz']
    /** An object relationship */
    highestBidder: highest_bidder
    highestBidderId: Scalars['String']
    id: Scalars['bigint']
    level: Scalars['bigint']
    price: Scalars['numeric']
    startTime: Scalars['timestamptz']
    timestamp: Scalars['timestamptz']
    tokenAddress: Scalars['String']
    tokenId: Scalars['String']
    __typename: 'bid'
}


/** select columns of table "bid" */
export type bid_select_column = 'bidderId' | 'endTime' | 'highestBidderId' | 'id' | 'level' | 'price' | 'startTime' | 'timestamp' | 'tokenAddress' | 'tokenId'


/** columns and relationships of "bidder" */
export interface bidder {
    address: Scalars['String']
    /** An array relationship */
    bids: bid[]
    __typename: 'bidder'
}


/** select columns of table "bidder" */
export type bidder_select_column = 'address'


/** columns and relationships of "buy" */
export interface buy {
    buyAmount: Scalars['String']
    buyFrom: Scalars['String']
    /** An object relationship */
    buyer: buyer
    buyerId: Scalars['String']
    id: Scalars['bigint']
    level: Scalars['bigint']
    timestamp: Scalars['timestamptz']
    tokenAddress: Scalars['String']
    tokenId: Scalars['String']
    __typename: 'buy'
}


/** select columns of table "buy" */
export type buy_select_column = 'buyAmount' | 'buyFrom' | 'buyerId' | 'id' | 'level' | 'timestamp' | 'tokenAddress' | 'tokenId'


/** columns and relationships of "buyer" */
export interface buyer {
    address: Scalars['String']
    /** An array relationship */
    buys: buy[]
    __typename: 'buyer'
}


/** select columns of table "buyer" */
export type buyer_select_column = 'address'


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contract {
    address: Scalars['String']
    createdAt: Scalars['timestamptz']
    name: Scalars['String']
    typename?: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_contract'
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata {
    contract: Scalars['String']
    createdAt: Scalars['timestamptz']
    id: Scalars['Int']
    metadata: Scalars['jsonb']
    network: Scalars['String']
    updateId: Scalars['Int']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_contract_metadata'
}


/** select columns of table "dipdup_contract_metadata" */
export type dipdup_contract_metadata_select_column = 'contract' | 'createdAt' | 'id' | 'metadata' | 'network' | 'updateId' | 'updatedAt'


/** select columns of table "dipdup_contract" */
export type dipdup_contract_select_column = 'address' | 'createdAt' | 'name' | 'typename' | 'updatedAt'


/** columns and relationships of "dipdup_head" */
export interface dipdup_head {
    createdAt: Scalars['timestamptz']
    hash: Scalars['String']
    level: Scalars['Int']
    name: Scalars['String']
    timestamp: Scalars['timestamptz']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_head'
}


/** select columns of table "dipdup_head" */
export type dipdup_head_select_column = 'createdAt' | 'hash' | 'level' | 'name' | 'timestamp' | 'updatedAt'


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_status {
    name?: Scalars['String']
    status?: Scalars['String']
    __typename: 'dipdup_head_status'
}


/** select columns of table "dipdup_head_status" */
export type dipdup_head_status_select_column = 'name' | 'status'


/** columns and relationships of "dipdup_index" */
export interface dipdup_index {
    configHash: Scalars['String']
    createdAt: Scalars['timestamptz']
    level: Scalars['Int']
    name: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status: Scalars['String']
    template?: Scalars['String']
    templateValues?: Scalars['jsonb']
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_index'
}


/** select columns of table "dipdup_index" */
export type dipdup_index_select_column = 'configHash' | 'createdAt' | 'level' | 'name' | 'status' | 'template' | 'templateValues' | 'type' | 'updatedAt'


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schema {
    createdAt: Scalars['timestamptz']
    hash: Scalars['String']
    name: Scalars['String']
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_schema'
}


/** select columns of table "dipdup_schema" */
export type dipdup_schema_select_column = 'createdAt' | 'hash' | 'name' | 'reindex' | 'updatedAt'


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadata {
    contract: Scalars['String']
    createdAt: Scalars['timestamptz']
    id: Scalars['Int']
    metadata: Scalars['jsonb']
    network: Scalars['String']
    tokenId: Scalars['String']
    updateId: Scalars['Int']
    updatedAt: Scalars['timestamptz']
    __typename: 'dipdup_token_metadata'
}


/** select columns of table "dipdup_token_metadata" */
export type dipdup_token_metadata_select_column = 'contract' | 'createdAt' | 'id' | 'metadata' | 'network' | 'tokenId' | 'updateId' | 'updatedAt'


/** columns and relationships of "from" */
export interface from {
    address: Scalars['String']
    /** An array relationship */
    lastSales: last_sale[]
    __typename: 'from'
}


/** select columns of table "from" */
export type from_select_column = 'address'


/** columns and relationships of "highest_bidder" */
export interface highest_bidder {
    address: Scalars['String']
    /** An array relationship */
    bids: bid[]
    __typename: 'highest_bidder'
}


/** select columns of table "highest_bidder" */
export type highest_bidder_select_column = 'address'


/** columns and relationships of "last_sale" */
export interface last_sale {
    amount: Scalars['String']
    askId: Scalars['String']
    fromId: Scalars['String']
    /** An object relationship */
    from_: from
    id: Scalars['bigint']
    level: Scalars['bigint']
    timestamp: Scalars['timestamptz']
    toId: Scalars['String']
    /** An object relationship */
    to_: to
    tokenId: Scalars['String']
    tokenQty: Scalars['numeric']
    __typename: 'last_sale'
}


/** select columns of table "last_sale" */
export type last_sale_select_column = 'amount' | 'askId' | 'fromId' | 'id' | 'level' | 'timestamp' | 'toId' | 'tokenId' | 'tokenQty'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "ask" */
    ask: ask[]
    /** fetch data from the table: "ask_auction" */
    askAuction: ask_auction[]
    /** fetch data from the table: "ask_auction" using primary key columns */
    askAuctionByPk?: ask_auction
    /** fetch data from the table: "ask" using primary key columns */
    askByPk?: ask
    /** fetch data from the table: "asker" */
    asker: asker[]
    /** fetch data from the table: "asker" using primary key columns */
    askerByPk?: asker
    /** fetch data from the table: "auction_creator" */
    auctionCreator: auction_creator[]
    /** fetch data from the table: "auction_creator" using primary key columns */
    auctionCreatorByPk?: auction_creator
    /** fetch data from the table: "bid" */
    bid: bid[]
    /** fetch data from the table: "bid" using primary key columns */
    bidByPk?: bid
    /** fetch data from the table: "bidder" */
    bidder: bidder[]
    /** fetch data from the table: "bidder" using primary key columns */
    bidderByPk?: bidder
    /** fetch data from the table: "buy" */
    buy: buy[]
    /** fetch data from the table: "buy" using primary key columns */
    buyByPk?: buy
    /** fetch data from the table: "buyer" */
    buyer: buyer[]
    /** fetch data from the table: "buyer" using primary key columns */
    buyerByPk?: buyer
    /** fetch data from the table: "dipdup_contract" */
    dipdupContract: dipdup_contract[]
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdupContractByPk?: dipdup_contract
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdupContractMetadata: dipdup_contract_metadata[]
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdupContractMetadataByPk?: dipdup_contract_metadata
    /** fetch data from the table: "dipdup_head" */
    dipdupHead: dipdup_head[]
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdupHeadByPk?: dipdup_head
    /** fetch data from the table: "dipdup_head_status" */
    dipdupHeadStatus: dipdup_head_status[]
    /** fetch data from the table: "dipdup_index" */
    dipdupIndex: dipdup_index[]
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdupIndexByPk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdupSchema: dipdup_schema[]
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdupSchemaByPk?: dipdup_schema
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdupTokenMetadata: dipdup_token_metadata[]
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdupTokenMetadataByPk?: dipdup_token_metadata
    /** fetch data from the table: "from" */
    from: from[]
    /** fetch data from the table: "from" using primary key columns */
    fromByPk?: from
    /** fetch data from the table: "highest_bidder" */
    highestBidder: highest_bidder[]
    /** fetch data from the table: "highest_bidder" using primary key columns */
    highestBidderByPk?: highest_bidder
    /** fetch data from the table: "last_sale" */
    lastSale: last_sale[]
    /** fetch data from the table: "last_sale" using primary key columns */
    lastSaleByPk?: last_sale
    /** fetch data from the table: "sell" */
    sell: sell[]
    /** fetch data from the table: "sell" using primary key columns */
    sellByPk?: sell
    /** fetch data from the table: "seller" */
    seller: seller[]
    /** fetch data from the table: "seller" using primary key columns */
    sellerByPk?: seller
    /** fetch data from the table: "to" */
    to: to[]
    /** fetch data from the table: "to" using primary key columns */
    toByPk?: to
    __typename: 'query_root'
}


/** columns and relationships of "sell" */
export interface sell {
    id: Scalars['bigint']
    level: Scalars['bigint']
    saleAmount: Scalars['String']
    /** An object relationship */
    seller: seller
    sellerId: Scalars['String']
    timestamp: Scalars['timestamptz']
    tokenAddress: Scalars['String']
    tokenId: Scalars['String']
    __typename: 'sell'
}


/** select columns of table "sell" */
export type sell_select_column = 'id' | 'level' | 'saleAmount' | 'sellerId' | 'timestamp' | 'tokenAddress' | 'tokenId'


/** columns and relationships of "seller" */
export interface seller {
    address: Scalars['String']
    /** An array relationship */
    sells: sell[]
    __typename: 'seller'
}


/** select columns of table "seller" */
export type seller_select_column = 'address'

export interface subscription_root {
    /** fetch data from the table: "ask" */
    ask: ask[]
    /** fetch data from the table: "ask_auction" */
    askAuction: ask_auction[]
    /** fetch data from the table: "ask_auction" using primary key columns */
    askAuctionByPk?: ask_auction
    /** fetch data from the table: "ask" using primary key columns */
    askByPk?: ask
    /** fetch data from the table: "asker" */
    asker: asker[]
    /** fetch data from the table: "asker" using primary key columns */
    askerByPk?: asker
    /** fetch data from the table: "auction_creator" */
    auctionCreator: auction_creator[]
    /** fetch data from the table: "auction_creator" using primary key columns */
    auctionCreatorByPk?: auction_creator
    /** fetch data from the table: "bid" */
    bid: bid[]
    /** fetch data from the table: "bid" using primary key columns */
    bidByPk?: bid
    /** fetch data from the table: "bidder" */
    bidder: bidder[]
    /** fetch data from the table: "bidder" using primary key columns */
    bidderByPk?: bidder
    /** fetch data from the table: "buy" */
    buy: buy[]
    /** fetch data from the table: "buy" using primary key columns */
    buyByPk?: buy
    /** fetch data from the table: "buyer" */
    buyer: buyer[]
    /** fetch data from the table: "buyer" using primary key columns */
    buyerByPk?: buyer
    /** fetch data from the table: "dipdup_contract" */
    dipdupContract: dipdup_contract[]
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdupContractByPk?: dipdup_contract
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdupContractMetadata: dipdup_contract_metadata[]
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdupContractMetadataByPk?: dipdup_contract_metadata
    /** fetch data from the table: "dipdup_head" */
    dipdupHead: dipdup_head[]
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdupHeadByPk?: dipdup_head
    /** fetch data from the table: "dipdup_head_status" */
    dipdupHeadStatus: dipdup_head_status[]
    /** fetch data from the table: "dipdup_index" */
    dipdupIndex: dipdup_index[]
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdupIndexByPk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdupSchema: dipdup_schema[]
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdupSchemaByPk?: dipdup_schema
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdupTokenMetadata: dipdup_token_metadata[]
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdupTokenMetadataByPk?: dipdup_token_metadata
    /** fetch data from the table: "from" */
    from: from[]
    /** fetch data from the table: "from" using primary key columns */
    fromByPk?: from
    /** fetch data from the table: "highest_bidder" */
    highestBidder: highest_bidder[]
    /** fetch data from the table: "highest_bidder" using primary key columns */
    highestBidderByPk?: highest_bidder
    /** fetch data from the table: "last_sale" */
    lastSale: last_sale[]
    /** fetch data from the table: "last_sale" using primary key columns */
    lastSaleByPk?: last_sale
    /** fetch data from the table: "sell" */
    sell: sell[]
    /** fetch data from the table: "sell" using primary key columns */
    sellByPk?: sell
    /** fetch data from the table: "seller" */
    seller: seller[]
    /** fetch data from the table: "seller" using primary key columns */
    sellerByPk?: seller
    /** fetch data from the table: "to" */
    to: to[]
    /** fetch data from the table: "to" using primary key columns */
    toByPk?: to
    __typename: 'subscription_root'
}


/** columns and relationships of "to" */
export interface to {
    address: Scalars['String']
    /** An array relationship */
    lastSales: last_sale[]
    __typename: 'to'
}


/** select columns of table "to" */
export type to_select_column = 'address'

export type Query = query_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "ask" */
export interface askRequest{
    amount?: boolean | number
    /** An object relationship */
    asker?: askerRequest
    askerId?: boolean | number
    editions?: boolean | number
    id?: boolean | number
    level?: boolean | number
    timestamp?: boolean | number
    tokenAddress?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "ask" */
export interface ask_aggregate_order_by {avg?: (ask_avg_order_by | null),count?: (order_by | null),max?: (ask_max_order_by | null),min?: (ask_min_order_by | null),stddev?: (ask_stddev_order_by | null),stddev_pop?: (ask_stddev_pop_order_by | null),stddev_samp?: (ask_stddev_samp_order_by | null),sum?: (ask_sum_order_by | null),var_pop?: (ask_var_pop_order_by | null),var_samp?: (ask_var_samp_order_by | null),variance?: (ask_variance_order_by | null)}


/** columns and relationships of "ask_auction" */
export interface ask_auctionRequest{
    /** An object relationship */
    auctionCreator?: auction_creatorRequest
    auctionCreatorId?: boolean | number
    endTime?: boolean | number
    id?: boolean | number
    level?: boolean | number
    priceIncrement?: boolean | number
    reserve?: boolean | number
    startTime?: boolean | number
    timestamp?: boolean | number
    tokenAddress?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "ask_auction" */
export interface ask_auction_aggregate_order_by {avg?: (ask_auction_avg_order_by | null),count?: (order_by | null),max?: (ask_auction_max_order_by | null),min?: (ask_auction_min_order_by | null),stddev?: (ask_auction_stddev_order_by | null),stddev_pop?: (ask_auction_stddev_pop_order_by | null),stddev_samp?: (ask_auction_stddev_samp_order_by | null),sum?: (ask_auction_sum_order_by | null),var_pop?: (ask_auction_var_pop_order_by | null),var_samp?: (ask_auction_var_samp_order_by | null),variance?: (ask_auction_variance_order_by | null)}


/** order by avg() on columns of table "ask_auction" */
export interface ask_auction_avg_order_by {id?: (order_by | null),level?: (order_by | null)}


/** Boolean expression to filter rows from the table "ask_auction". All fields are combined with a logical 'AND'. */
export interface ask_auction_bool_exp {_and?: (ask_auction_bool_exp[] | null),_not?: (ask_auction_bool_exp | null),_or?: (ask_auction_bool_exp[] | null),auctionCreator?: (auction_creator_bool_exp | null),auctionCreatorId?: (String_comparison_exp | null),endTime?: (timestamptz_comparison_exp | null),id?: (bigint_comparison_exp | null),level?: (bigint_comparison_exp | null),priceIncrement?: (String_comparison_exp | null),reserve?: (String_comparison_exp | null),startTime?: (timestamptz_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),tokenAddress?: (String_comparison_exp | null),tokenId?: (String_comparison_exp | null)}


/** order by max() on columns of table "ask_auction" */
export interface ask_auction_max_order_by {auctionCreatorId?: (order_by | null),endTime?: (order_by | null),id?: (order_by | null),level?: (order_by | null),priceIncrement?: (order_by | null),reserve?: (order_by | null),startTime?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by min() on columns of table "ask_auction" */
export interface ask_auction_min_order_by {auctionCreatorId?: (order_by | null),endTime?: (order_by | null),id?: (order_by | null),level?: (order_by | null),priceIncrement?: (order_by | null),reserve?: (order_by | null),startTime?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** Ordering options when selecting data from "ask_auction". */
export interface ask_auction_order_by {auctionCreator?: (auction_creator_order_by | null),auctionCreatorId?: (order_by | null),endTime?: (order_by | null),id?: (order_by | null),level?: (order_by | null),priceIncrement?: (order_by | null),reserve?: (order_by | null),startTime?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by stddev() on columns of table "ask_auction" */
export interface ask_auction_stddev_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by stddev_pop() on columns of table "ask_auction" */
export interface ask_auction_stddev_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by stddev_samp() on columns of table "ask_auction" */
export interface ask_auction_stddev_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by sum() on columns of table "ask_auction" */
export interface ask_auction_sum_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by var_pop() on columns of table "ask_auction" */
export interface ask_auction_var_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by var_samp() on columns of table "ask_auction" */
export interface ask_auction_var_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by variance() on columns of table "ask_auction" */
export interface ask_auction_variance_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by avg() on columns of table "ask" */
export interface ask_avg_order_by {id?: (order_by | null),level?: (order_by | null)}


/** Boolean expression to filter rows from the table "ask". All fields are combined with a logical 'AND'. */
export interface ask_bool_exp {_and?: (ask_bool_exp[] | null),_not?: (ask_bool_exp | null),_or?: (ask_bool_exp[] | null),amount?: (String_comparison_exp | null),asker?: (asker_bool_exp | null),askerId?: (String_comparison_exp | null),editions?: (String_comparison_exp | null),id?: (bigint_comparison_exp | null),level?: (bigint_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),tokenAddress?: (String_comparison_exp | null),tokenId?: (String_comparison_exp | null)}


/** order by max() on columns of table "ask" */
export interface ask_max_order_by {amount?: (order_by | null),askerId?: (order_by | null),editions?: (order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by min() on columns of table "ask" */
export interface ask_min_order_by {amount?: (order_by | null),askerId?: (order_by | null),editions?: (order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** Ordering options when selecting data from "ask". */
export interface ask_order_by {amount?: (order_by | null),asker?: (asker_order_by | null),askerId?: (order_by | null),editions?: (order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by stddev() on columns of table "ask" */
export interface ask_stddev_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by stddev_pop() on columns of table "ask" */
export interface ask_stddev_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by stddev_samp() on columns of table "ask" */
export interface ask_stddev_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by sum() on columns of table "ask" */
export interface ask_sum_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by var_pop() on columns of table "ask" */
export interface ask_var_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by var_samp() on columns of table "ask" */
export interface ask_var_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by variance() on columns of table "ask" */
export interface ask_variance_order_by {id?: (order_by | null),level?: (order_by | null)}


/** columns and relationships of "asker" */
export interface askerRequest{
    address?: boolean | number
    /** An array relationship */
    asks?: [{
    /** distinct select on columns */
    distinct_on?: (ask_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ask_order_by[] | null),
    /** filter the rows returned */
    where?: (ask_bool_exp | null)},askRequest] | askRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "asker". All fields are combined with a logical 'AND'. */
export interface asker_bool_exp {_and?: (asker_bool_exp[] | null),_not?: (asker_bool_exp | null),_or?: (asker_bool_exp[] | null),address?: (String_comparison_exp | null),asks?: (ask_bool_exp | null)}


/** Ordering options when selecting data from "asker". */
export interface asker_order_by {address?: (order_by | null),asks_aggregate?: (ask_aggregate_order_by | null)}


/** columns and relationships of "auction_creator" */
export interface auction_creatorRequest{
    address?: boolean | number
    /** An array relationship */
    askAuctions?: [{
    /** distinct select on columns */
    distinct_on?: (ask_auction_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ask_auction_order_by[] | null),
    /** filter the rows returned */
    where?: (ask_auction_bool_exp | null)},ask_auctionRequest] | ask_auctionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "auction_creator". All fields are combined with a logical 'AND'. */
export interface auction_creator_bool_exp {_and?: (auction_creator_bool_exp[] | null),_not?: (auction_creator_bool_exp | null),_or?: (auction_creator_bool_exp[] | null),address?: (String_comparison_exp | null),askAuctions?: (ask_auction_bool_exp | null)}


/** Ordering options when selecting data from "auction_creator". */
export interface auction_creator_order_by {address?: (order_by | null),askAuctions_aggregate?: (ask_auction_aggregate_order_by | null)}


/** columns and relationships of "bid" */
export interface bidRequest{
    /** An object relationship */
    bidder?: bidderRequest
    bidderId?: boolean | number
    endTime?: boolean | number
    /** An object relationship */
    highestBidder?: highest_bidderRequest
    highestBidderId?: boolean | number
    id?: boolean | number
    level?: boolean | number
    price?: boolean | number
    startTime?: boolean | number
    timestamp?: boolean | number
    tokenAddress?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "bid" */
export interface bid_aggregate_order_by {avg?: (bid_avg_order_by | null),count?: (order_by | null),max?: (bid_max_order_by | null),min?: (bid_min_order_by | null),stddev?: (bid_stddev_order_by | null),stddev_pop?: (bid_stddev_pop_order_by | null),stddev_samp?: (bid_stddev_samp_order_by | null),sum?: (bid_sum_order_by | null),var_pop?: (bid_var_pop_order_by | null),var_samp?: (bid_var_samp_order_by | null),variance?: (bid_variance_order_by | null)}


/** order by avg() on columns of table "bid" */
export interface bid_avg_order_by {id?: (order_by | null),level?: (order_by | null),price?: (order_by | null)}


/** Boolean expression to filter rows from the table "bid". All fields are combined with a logical 'AND'. */
export interface bid_bool_exp {_and?: (bid_bool_exp[] | null),_not?: (bid_bool_exp | null),_or?: (bid_bool_exp[] | null),bidder?: (bidder_bool_exp | null),bidderId?: (String_comparison_exp | null),endTime?: (timestamptz_comparison_exp | null),highestBidder?: (highest_bidder_bool_exp | null),highestBidderId?: (String_comparison_exp | null),id?: (bigint_comparison_exp | null),level?: (bigint_comparison_exp | null),price?: (numeric_comparison_exp | null),startTime?: (timestamptz_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),tokenAddress?: (String_comparison_exp | null),tokenId?: (String_comparison_exp | null)}


/** order by max() on columns of table "bid" */
export interface bid_max_order_by {bidderId?: (order_by | null),endTime?: (order_by | null),highestBidderId?: (order_by | null),id?: (order_by | null),level?: (order_by | null),price?: (order_by | null),startTime?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by min() on columns of table "bid" */
export interface bid_min_order_by {bidderId?: (order_by | null),endTime?: (order_by | null),highestBidderId?: (order_by | null),id?: (order_by | null),level?: (order_by | null),price?: (order_by | null),startTime?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** Ordering options when selecting data from "bid". */
export interface bid_order_by {bidder?: (bidder_order_by | null),bidderId?: (order_by | null),endTime?: (order_by | null),highestBidder?: (highest_bidder_order_by | null),highestBidderId?: (order_by | null),id?: (order_by | null),level?: (order_by | null),price?: (order_by | null),startTime?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by stddev() on columns of table "bid" */
export interface bid_stddev_order_by {id?: (order_by | null),level?: (order_by | null),price?: (order_by | null)}


/** order by stddev_pop() on columns of table "bid" */
export interface bid_stddev_pop_order_by {id?: (order_by | null),level?: (order_by | null),price?: (order_by | null)}


/** order by stddev_samp() on columns of table "bid" */
export interface bid_stddev_samp_order_by {id?: (order_by | null),level?: (order_by | null),price?: (order_by | null)}


/** order by sum() on columns of table "bid" */
export interface bid_sum_order_by {id?: (order_by | null),level?: (order_by | null),price?: (order_by | null)}


/** order by var_pop() on columns of table "bid" */
export interface bid_var_pop_order_by {id?: (order_by | null),level?: (order_by | null),price?: (order_by | null)}


/** order by var_samp() on columns of table "bid" */
export interface bid_var_samp_order_by {id?: (order_by | null),level?: (order_by | null),price?: (order_by | null)}


/** order by variance() on columns of table "bid" */
export interface bid_variance_order_by {id?: (order_by | null),level?: (order_by | null),price?: (order_by | null)}


/** columns and relationships of "bidder" */
export interface bidderRequest{
    address?: boolean | number
    /** An array relationship */
    bids?: [{
    /** distinct select on columns */
    distinct_on?: (bid_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bid_order_by[] | null),
    /** filter the rows returned */
    where?: (bid_bool_exp | null)},bidRequest] | bidRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "bidder". All fields are combined with a logical 'AND'. */
export interface bidder_bool_exp {_and?: (bidder_bool_exp[] | null),_not?: (bidder_bool_exp | null),_or?: (bidder_bool_exp[] | null),address?: (String_comparison_exp | null),bids?: (bid_bool_exp | null)}


/** Ordering options when selecting data from "bidder". */
export interface bidder_order_by {address?: (order_by | null),bids_aggregate?: (bid_aggregate_order_by | null)}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** columns and relationships of "buy" */
export interface buyRequest{
    buyAmount?: boolean | number
    buyFrom?: boolean | number
    /** An object relationship */
    buyer?: buyerRequest
    buyerId?: boolean | number
    id?: boolean | number
    level?: boolean | number
    timestamp?: boolean | number
    tokenAddress?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "buy" */
export interface buy_aggregate_order_by {avg?: (buy_avg_order_by | null),count?: (order_by | null),max?: (buy_max_order_by | null),min?: (buy_min_order_by | null),stddev?: (buy_stddev_order_by | null),stddev_pop?: (buy_stddev_pop_order_by | null),stddev_samp?: (buy_stddev_samp_order_by | null),sum?: (buy_sum_order_by | null),var_pop?: (buy_var_pop_order_by | null),var_samp?: (buy_var_samp_order_by | null),variance?: (buy_variance_order_by | null)}


/** order by avg() on columns of table "buy" */
export interface buy_avg_order_by {id?: (order_by | null),level?: (order_by | null)}


/** Boolean expression to filter rows from the table "buy". All fields are combined with a logical 'AND'. */
export interface buy_bool_exp {_and?: (buy_bool_exp[] | null),_not?: (buy_bool_exp | null),_or?: (buy_bool_exp[] | null),buyAmount?: (String_comparison_exp | null),buyFrom?: (String_comparison_exp | null),buyer?: (buyer_bool_exp | null),buyerId?: (String_comparison_exp | null),id?: (bigint_comparison_exp | null),level?: (bigint_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),tokenAddress?: (String_comparison_exp | null),tokenId?: (String_comparison_exp | null)}


/** order by max() on columns of table "buy" */
export interface buy_max_order_by {buyAmount?: (order_by | null),buyFrom?: (order_by | null),buyerId?: (order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by min() on columns of table "buy" */
export interface buy_min_order_by {buyAmount?: (order_by | null),buyFrom?: (order_by | null),buyerId?: (order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** Ordering options when selecting data from "buy". */
export interface buy_order_by {buyAmount?: (order_by | null),buyFrom?: (order_by | null),buyer?: (buyer_order_by | null),buyerId?: (order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by stddev() on columns of table "buy" */
export interface buy_stddev_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by stddev_pop() on columns of table "buy" */
export interface buy_stddev_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by stddev_samp() on columns of table "buy" */
export interface buy_stddev_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by sum() on columns of table "buy" */
export interface buy_sum_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by var_pop() on columns of table "buy" */
export interface buy_var_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by var_samp() on columns of table "buy" */
export interface buy_var_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by variance() on columns of table "buy" */
export interface buy_variance_order_by {id?: (order_by | null),level?: (order_by | null)}


/** columns and relationships of "buyer" */
export interface buyerRequest{
    address?: boolean | number
    /** An array relationship */
    buys?: [{
    /** distinct select on columns */
    distinct_on?: (buy_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (buy_order_by[] | null),
    /** filter the rows returned */
    where?: (buy_bool_exp | null)},buyRequest] | buyRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "buyer". All fields are combined with a logical 'AND'. */
export interface buyer_bool_exp {_and?: (buyer_bool_exp[] | null),_not?: (buyer_bool_exp | null),_or?: (buyer_bool_exp[] | null),address?: (String_comparison_exp | null),buys?: (buy_bool_exp | null)}


/** Ordering options when selecting data from "buyer". */
export interface buyer_order_by {address?: (order_by | null),buys_aggregate?: (buy_aggregate_order_by | null)}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractRequest{
    address?: boolean | number
    createdAt?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_bool_exp {_and?: (dipdup_contract_bool_exp[] | null),_not?: (dipdup_contract_bool_exp | null),_or?: (dipdup_contract_bool_exp[] | null),address?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),name?: (String_comparison_exp | null),typename?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataRequest{
    contract?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    metadata?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    network?: boolean | number
    updateId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract_metadata". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_metadata_bool_exp {_and?: (dipdup_contract_metadata_bool_exp[] | null),_not?: (dipdup_contract_metadata_bool_exp | null),_or?: (dipdup_contract_metadata_bool_exp[] | null),contract?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),network?: (String_comparison_exp | null),updateId?: (Int_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_contract_metadata". */
export interface dipdup_contract_metadata_order_by {contract?: (order_by | null),createdAt?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),network?: (order_by | null),updateId?: (order_by | null),updatedAt?: (order_by | null)}


/** Ordering options when selecting data from "dipdup_contract". */
export interface dipdup_contract_order_by {address?: (order_by | null),createdAt?: (order_by | null),name?: (order_by | null),typename?: (order_by | null),updatedAt?: (order_by | null)}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headRequest{
    createdAt?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export interface dipdup_head_bool_exp {_and?: (dipdup_head_bool_exp[] | null),_not?: (dipdup_head_bool_exp | null),_or?: (dipdup_head_bool_exp[] | null),createdAt?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_head". */
export interface dipdup_head_order_by {createdAt?: (order_by | null),hash?: (order_by | null),level?: (order_by | null),name?: (order_by | null),timestamp?: (order_by | null),updatedAt?: (order_by | null)}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusRequest{
    name?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head_status". All fields are combined with a logical 'AND'. */
export interface dipdup_head_status_bool_exp {_and?: (dipdup_head_status_bool_exp[] | null),_not?: (dipdup_head_status_bool_exp | null),_or?: (dipdup_head_status_bool_exp[] | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_head_status". */
export interface dipdup_head_status_order_by {name?: (order_by | null),status?: (order_by | null)}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexRequest{
    configHash?: boolean | number
    createdAt?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    templateValues?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_index". All fields are combined with a logical 'AND'. */
export interface dipdup_index_bool_exp {_and?: (dipdup_index_bool_exp[] | null),_not?: (dipdup_index_bool_exp | null),_or?: (dipdup_index_bool_exp[] | null),configHash?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null),template?: (String_comparison_exp | null),templateValues?: (jsonb_comparison_exp | null),type?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_index". */
export interface dipdup_index_order_by {configHash?: (order_by | null),createdAt?: (order_by | null),level?: (order_by | null),name?: (order_by | null),status?: (order_by | null),template?: (order_by | null),templateValues?: (order_by | null),type?: (order_by | null),updatedAt?: (order_by | null)}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaRequest{
    createdAt?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export interface dipdup_schema_bool_exp {_and?: (dipdup_schema_bool_exp[] | null),_not?: (dipdup_schema_bool_exp | null),_or?: (dipdup_schema_bool_exp[] | null),createdAt?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),name?: (String_comparison_exp | null),reindex?: (String_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_schema". */
export interface dipdup_schema_order_by {createdAt?: (order_by | null),hash?: (order_by | null),name?: (order_by | null),reindex?: (order_by | null),updatedAt?: (order_by | null)}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataRequest{
    contract?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    metadata?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    network?: boolean | number
    tokenId?: boolean | number
    updateId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_token_metadata". All fields are combined with a logical 'AND'. */
export interface dipdup_token_metadata_bool_exp {_and?: (dipdup_token_metadata_bool_exp[] | null),_not?: (dipdup_token_metadata_bool_exp | null),_or?: (dipdup_token_metadata_bool_exp[] | null),contract?: (String_comparison_exp | null),createdAt?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),network?: (String_comparison_exp | null),tokenId?: (String_comparison_exp | null),updateId?: (Int_comparison_exp | null),updatedAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_token_metadata". */
export interface dipdup_token_metadata_order_by {contract?: (order_by | null),createdAt?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),network?: (order_by | null),tokenId?: (order_by | null),updateId?: (order_by | null),updatedAt?: (order_by | null)}


/** columns and relationships of "from" */
export interface fromRequest{
    address?: boolean | number
    /** An array relationship */
    lastSales?: [{
    /** distinct select on columns */
    distinct_on?: (last_sale_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (last_sale_order_by[] | null),
    /** filter the rows returned */
    where?: (last_sale_bool_exp | null)},last_saleRequest] | last_saleRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "from". All fields are combined with a logical 'AND'. */
export interface from_bool_exp {_and?: (from_bool_exp[] | null),_not?: (from_bool_exp | null),_or?: (from_bool_exp[] | null),address?: (String_comparison_exp | null),lastSales?: (last_sale_bool_exp | null)}


/** Ordering options when selecting data from "from". */
export interface from_order_by {address?: (order_by | null),lastSales_aggregate?: (last_sale_aggregate_order_by | null)}


/** columns and relationships of "highest_bidder" */
export interface highest_bidderRequest{
    address?: boolean | number
    /** An array relationship */
    bids?: [{
    /** distinct select on columns */
    distinct_on?: (bid_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bid_order_by[] | null),
    /** filter the rows returned */
    where?: (bid_bool_exp | null)},bidRequest] | bidRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "highest_bidder". All fields are combined with a logical 'AND'. */
export interface highest_bidder_bool_exp {_and?: (highest_bidder_bool_exp[] | null),_not?: (highest_bidder_bool_exp | null),_or?: (highest_bidder_bool_exp[] | null),address?: (String_comparison_exp | null),bids?: (bid_bool_exp | null)}


/** Ordering options when selecting data from "highest_bidder". */
export interface highest_bidder_order_by {address?: (order_by | null),bids_aggregate?: (bid_aggregate_order_by | null)}

export interface jsonb_cast_exp {String?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {_cast?: (jsonb_cast_exp | null),
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "last_sale" */
export interface last_saleRequest{
    amount?: boolean | number
    askId?: boolean | number
    fromId?: boolean | number
    /** An object relationship */
    from_?: fromRequest
    id?: boolean | number
    level?: boolean | number
    timestamp?: boolean | number
    toId?: boolean | number
    /** An object relationship */
    to_?: toRequest
    tokenId?: boolean | number
    tokenQty?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "last_sale" */
export interface last_sale_aggregate_order_by {avg?: (last_sale_avg_order_by | null),count?: (order_by | null),max?: (last_sale_max_order_by | null),min?: (last_sale_min_order_by | null),stddev?: (last_sale_stddev_order_by | null),stddev_pop?: (last_sale_stddev_pop_order_by | null),stddev_samp?: (last_sale_stddev_samp_order_by | null),sum?: (last_sale_sum_order_by | null),var_pop?: (last_sale_var_pop_order_by | null),var_samp?: (last_sale_var_samp_order_by | null),variance?: (last_sale_variance_order_by | null)}


/** order by avg() on columns of table "last_sale" */
export interface last_sale_avg_order_by {id?: (order_by | null),level?: (order_by | null),tokenQty?: (order_by | null)}


/** Boolean expression to filter rows from the table "last_sale". All fields are combined with a logical 'AND'. */
export interface last_sale_bool_exp {_and?: (last_sale_bool_exp[] | null),_not?: (last_sale_bool_exp | null),_or?: (last_sale_bool_exp[] | null),amount?: (String_comparison_exp | null),askId?: (String_comparison_exp | null),fromId?: (String_comparison_exp | null),from_?: (from_bool_exp | null),id?: (bigint_comparison_exp | null),level?: (bigint_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),toId?: (String_comparison_exp | null),to_?: (to_bool_exp | null),tokenId?: (String_comparison_exp | null),tokenQty?: (numeric_comparison_exp | null)}


/** order by max() on columns of table "last_sale" */
export interface last_sale_max_order_by {amount?: (order_by | null),askId?: (order_by | null),fromId?: (order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),toId?: (order_by | null),tokenId?: (order_by | null),tokenQty?: (order_by | null)}


/** order by min() on columns of table "last_sale" */
export interface last_sale_min_order_by {amount?: (order_by | null),askId?: (order_by | null),fromId?: (order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),toId?: (order_by | null),tokenId?: (order_by | null),tokenQty?: (order_by | null)}


/** Ordering options when selecting data from "last_sale". */
export interface last_sale_order_by {amount?: (order_by | null),askId?: (order_by | null),fromId?: (order_by | null),from_?: (from_order_by | null),id?: (order_by | null),level?: (order_by | null),timestamp?: (order_by | null),toId?: (order_by | null),to_?: (to_order_by | null),tokenId?: (order_by | null),tokenQty?: (order_by | null)}


/** order by stddev() on columns of table "last_sale" */
export interface last_sale_stddev_order_by {id?: (order_by | null),level?: (order_by | null),tokenQty?: (order_by | null)}


/** order by stddev_pop() on columns of table "last_sale" */
export interface last_sale_stddev_pop_order_by {id?: (order_by | null),level?: (order_by | null),tokenQty?: (order_by | null)}


/** order by stddev_samp() on columns of table "last_sale" */
export interface last_sale_stddev_samp_order_by {id?: (order_by | null),level?: (order_by | null),tokenQty?: (order_by | null)}


/** order by sum() on columns of table "last_sale" */
export interface last_sale_sum_order_by {id?: (order_by | null),level?: (order_by | null),tokenQty?: (order_by | null)}


/** order by var_pop() on columns of table "last_sale" */
export interface last_sale_var_pop_order_by {id?: (order_by | null),level?: (order_by | null),tokenQty?: (order_by | null)}


/** order by var_samp() on columns of table "last_sale" */
export interface last_sale_var_samp_order_by {id?: (order_by | null),level?: (order_by | null),tokenQty?: (order_by | null)}


/** order by variance() on columns of table "last_sale" */
export interface last_sale_variance_order_by {id?: (order_by | null),level?: (order_by | null),tokenQty?: (order_by | null)}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}

export interface query_rootRequest{
    /** fetch data from the table: "ask" */
    ask?: [{
    /** distinct select on columns */
    distinct_on?: (ask_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ask_order_by[] | null),
    /** filter the rows returned */
    where?: (ask_bool_exp | null)},askRequest] | askRequest
    /** fetch data from the table: "ask_auction" */
    askAuction?: [{
    /** distinct select on columns */
    distinct_on?: (ask_auction_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ask_auction_order_by[] | null),
    /** filter the rows returned */
    where?: (ask_auction_bool_exp | null)},ask_auctionRequest] | ask_auctionRequest
    /** fetch data from the table: "ask_auction" using primary key columns */
    askAuctionByPk?: [{id: Scalars['bigint']},ask_auctionRequest]
    /** fetch data from the table: "ask" using primary key columns */
    askByPk?: [{id: Scalars['bigint']},askRequest]
    /** fetch data from the table: "asker" */
    asker?: [{
    /** distinct select on columns */
    distinct_on?: (asker_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (asker_order_by[] | null),
    /** filter the rows returned */
    where?: (asker_bool_exp | null)},askerRequest] | askerRequest
    /** fetch data from the table: "asker" using primary key columns */
    askerByPk?: [{address: Scalars['String']},askerRequest]
    /** fetch data from the table: "auction_creator" */
    auctionCreator?: [{
    /** distinct select on columns */
    distinct_on?: (auction_creator_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (auction_creator_order_by[] | null),
    /** filter the rows returned */
    where?: (auction_creator_bool_exp | null)},auction_creatorRequest] | auction_creatorRequest
    /** fetch data from the table: "auction_creator" using primary key columns */
    auctionCreatorByPk?: [{address: Scalars['String']},auction_creatorRequest]
    /** fetch data from the table: "bid" */
    bid?: [{
    /** distinct select on columns */
    distinct_on?: (bid_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bid_order_by[] | null),
    /** filter the rows returned */
    where?: (bid_bool_exp | null)},bidRequest] | bidRequest
    /** fetch data from the table: "bid" using primary key columns */
    bidByPk?: [{id: Scalars['bigint']},bidRequest]
    /** fetch data from the table: "bidder" */
    bidder?: [{
    /** distinct select on columns */
    distinct_on?: (bidder_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bidder_order_by[] | null),
    /** filter the rows returned */
    where?: (bidder_bool_exp | null)},bidderRequest] | bidderRequest
    /** fetch data from the table: "bidder" using primary key columns */
    bidderByPk?: [{address: Scalars['String']},bidderRequest]
    /** fetch data from the table: "buy" */
    buy?: [{
    /** distinct select on columns */
    distinct_on?: (buy_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (buy_order_by[] | null),
    /** filter the rows returned */
    where?: (buy_bool_exp | null)},buyRequest] | buyRequest
    /** fetch data from the table: "buy" using primary key columns */
    buyByPk?: [{id: Scalars['bigint']},buyRequest]
    /** fetch data from the table: "buyer" */
    buyer?: [{
    /** distinct select on columns */
    distinct_on?: (buyer_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (buyer_order_by[] | null),
    /** filter the rows returned */
    where?: (buyer_bool_exp | null)},buyerRequest] | buyerRequest
    /** fetch data from the table: "buyer" using primary key columns */
    buyerByPk?: [{address: Scalars['String']},buyerRequest]
    /** fetch data from the table: "dipdup_contract" */
    dipdupContract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdupContractByPk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdupContractMetadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest] | dipdup_contract_metadataRequest
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdupContractMetadataByPk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdupHead?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdupHeadByPk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_head_status" */
    dipdupHeadStatus?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest] | dipdup_head_statusRequest
    /** fetch data from the table: "dipdup_index" */
    dipdupIndex?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdupIndexByPk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdupSchema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdupSchemaByPk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdupTokenMetadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest] | dipdup_token_metadataRequest
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdupTokenMetadataByPk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** fetch data from the table: "from" */
    from?: [{
    /** distinct select on columns */
    distinct_on?: (from_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (from_order_by[] | null),
    /** filter the rows returned */
    where?: (from_bool_exp | null)},fromRequest] | fromRequest
    /** fetch data from the table: "from" using primary key columns */
    fromByPk?: [{address: Scalars['String']},fromRequest]
    /** fetch data from the table: "highest_bidder" */
    highestBidder?: [{
    /** distinct select on columns */
    distinct_on?: (highest_bidder_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (highest_bidder_order_by[] | null),
    /** filter the rows returned */
    where?: (highest_bidder_bool_exp | null)},highest_bidderRequest] | highest_bidderRequest
    /** fetch data from the table: "highest_bidder" using primary key columns */
    highestBidderByPk?: [{address: Scalars['String']},highest_bidderRequest]
    /** fetch data from the table: "last_sale" */
    lastSale?: [{
    /** distinct select on columns */
    distinct_on?: (last_sale_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (last_sale_order_by[] | null),
    /** filter the rows returned */
    where?: (last_sale_bool_exp | null)},last_saleRequest] | last_saleRequest
    /** fetch data from the table: "last_sale" using primary key columns */
    lastSaleByPk?: [{id: Scalars['bigint']},last_saleRequest]
    /** fetch data from the table: "sell" */
    sell?: [{
    /** distinct select on columns */
    distinct_on?: (sell_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (sell_order_by[] | null),
    /** filter the rows returned */
    where?: (sell_bool_exp | null)},sellRequest] | sellRequest
    /** fetch data from the table: "sell" using primary key columns */
    sellByPk?: [{id: Scalars['bigint']},sellRequest]
    /** fetch data from the table: "seller" */
    seller?: [{
    /** distinct select on columns */
    distinct_on?: (seller_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (seller_order_by[] | null),
    /** filter the rows returned */
    where?: (seller_bool_exp | null)},sellerRequest] | sellerRequest
    /** fetch data from the table: "seller" using primary key columns */
    sellerByPk?: [{address: Scalars['String']},sellerRequest]
    /** fetch data from the table: "to" */
    to?: [{
    /** distinct select on columns */
    distinct_on?: (to_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (to_order_by[] | null),
    /** filter the rows returned */
    where?: (to_bool_exp | null)},toRequest] | toRequest
    /** fetch data from the table: "to" using primary key columns */
    toByPk?: [{address: Scalars['String']},toRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "sell" */
export interface sellRequest{
    id?: boolean | number
    level?: boolean | number
    saleAmount?: boolean | number
    /** An object relationship */
    seller?: sellerRequest
    sellerId?: boolean | number
    timestamp?: boolean | number
    tokenAddress?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "sell" */
export interface sell_aggregate_order_by {avg?: (sell_avg_order_by | null),count?: (order_by | null),max?: (sell_max_order_by | null),min?: (sell_min_order_by | null),stddev?: (sell_stddev_order_by | null),stddev_pop?: (sell_stddev_pop_order_by | null),stddev_samp?: (sell_stddev_samp_order_by | null),sum?: (sell_sum_order_by | null),var_pop?: (sell_var_pop_order_by | null),var_samp?: (sell_var_samp_order_by | null),variance?: (sell_variance_order_by | null)}


/** order by avg() on columns of table "sell" */
export interface sell_avg_order_by {id?: (order_by | null),level?: (order_by | null)}


/** Boolean expression to filter rows from the table "sell". All fields are combined with a logical 'AND'. */
export interface sell_bool_exp {_and?: (sell_bool_exp[] | null),_not?: (sell_bool_exp | null),_or?: (sell_bool_exp[] | null),id?: (bigint_comparison_exp | null),level?: (bigint_comparison_exp | null),saleAmount?: (String_comparison_exp | null),seller?: (seller_bool_exp | null),sellerId?: (String_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),tokenAddress?: (String_comparison_exp | null),tokenId?: (String_comparison_exp | null)}


/** order by max() on columns of table "sell" */
export interface sell_max_order_by {id?: (order_by | null),level?: (order_by | null),saleAmount?: (order_by | null),sellerId?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by min() on columns of table "sell" */
export interface sell_min_order_by {id?: (order_by | null),level?: (order_by | null),saleAmount?: (order_by | null),sellerId?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** Ordering options when selecting data from "sell". */
export interface sell_order_by {id?: (order_by | null),level?: (order_by | null),saleAmount?: (order_by | null),seller?: (seller_order_by | null),sellerId?: (order_by | null),timestamp?: (order_by | null),tokenAddress?: (order_by | null),tokenId?: (order_by | null)}


/** order by stddev() on columns of table "sell" */
export interface sell_stddev_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by stddev_pop() on columns of table "sell" */
export interface sell_stddev_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by stddev_samp() on columns of table "sell" */
export interface sell_stddev_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by sum() on columns of table "sell" */
export interface sell_sum_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by var_pop() on columns of table "sell" */
export interface sell_var_pop_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by var_samp() on columns of table "sell" */
export interface sell_var_samp_order_by {id?: (order_by | null),level?: (order_by | null)}


/** order by variance() on columns of table "sell" */
export interface sell_variance_order_by {id?: (order_by | null),level?: (order_by | null)}


/** columns and relationships of "seller" */
export interface sellerRequest{
    address?: boolean | number
    /** An array relationship */
    sells?: [{
    /** distinct select on columns */
    distinct_on?: (sell_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (sell_order_by[] | null),
    /** filter the rows returned */
    where?: (sell_bool_exp | null)},sellRequest] | sellRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "seller". All fields are combined with a logical 'AND'. */
export interface seller_bool_exp {_and?: (seller_bool_exp[] | null),_not?: (seller_bool_exp | null),_or?: (seller_bool_exp[] | null),address?: (String_comparison_exp | null),sells?: (sell_bool_exp | null)}


/** Ordering options when selecting data from "seller". */
export interface seller_order_by {address?: (order_by | null),sells_aggregate?: (sell_aggregate_order_by | null)}

export interface subscription_rootRequest{
    /** fetch data from the table: "ask" */
    ask?: [{
    /** distinct select on columns */
    distinct_on?: (ask_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ask_order_by[] | null),
    /** filter the rows returned */
    where?: (ask_bool_exp | null)},askRequest] | askRequest
    /** fetch data from the table: "ask_auction" */
    askAuction?: [{
    /** distinct select on columns */
    distinct_on?: (ask_auction_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ask_auction_order_by[] | null),
    /** filter the rows returned */
    where?: (ask_auction_bool_exp | null)},ask_auctionRequest] | ask_auctionRequest
    /** fetch data from the table: "ask_auction" using primary key columns */
    askAuctionByPk?: [{id: Scalars['bigint']},ask_auctionRequest]
    /** fetch data from the table: "ask" using primary key columns */
    askByPk?: [{id: Scalars['bigint']},askRequest]
    /** fetch data from the table: "asker" */
    asker?: [{
    /** distinct select on columns */
    distinct_on?: (asker_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (asker_order_by[] | null),
    /** filter the rows returned */
    where?: (asker_bool_exp | null)},askerRequest] | askerRequest
    /** fetch data from the table: "asker" using primary key columns */
    askerByPk?: [{address: Scalars['String']},askerRequest]
    /** fetch data from the table: "auction_creator" */
    auctionCreator?: [{
    /** distinct select on columns */
    distinct_on?: (auction_creator_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (auction_creator_order_by[] | null),
    /** filter the rows returned */
    where?: (auction_creator_bool_exp | null)},auction_creatorRequest] | auction_creatorRequest
    /** fetch data from the table: "auction_creator" using primary key columns */
    auctionCreatorByPk?: [{address: Scalars['String']},auction_creatorRequest]
    /** fetch data from the table: "bid" */
    bid?: [{
    /** distinct select on columns */
    distinct_on?: (bid_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bid_order_by[] | null),
    /** filter the rows returned */
    where?: (bid_bool_exp | null)},bidRequest] | bidRequest
    /** fetch data from the table: "bid" using primary key columns */
    bidByPk?: [{id: Scalars['bigint']},bidRequest]
    /** fetch data from the table: "bidder" */
    bidder?: [{
    /** distinct select on columns */
    distinct_on?: (bidder_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (bidder_order_by[] | null),
    /** filter the rows returned */
    where?: (bidder_bool_exp | null)},bidderRequest] | bidderRequest
    /** fetch data from the table: "bidder" using primary key columns */
    bidderByPk?: [{address: Scalars['String']},bidderRequest]
    /** fetch data from the table: "buy" */
    buy?: [{
    /** distinct select on columns */
    distinct_on?: (buy_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (buy_order_by[] | null),
    /** filter the rows returned */
    where?: (buy_bool_exp | null)},buyRequest] | buyRequest
    /** fetch data from the table: "buy" using primary key columns */
    buyByPk?: [{id: Scalars['bigint']},buyRequest]
    /** fetch data from the table: "buyer" */
    buyer?: [{
    /** distinct select on columns */
    distinct_on?: (buyer_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (buyer_order_by[] | null),
    /** filter the rows returned */
    where?: (buyer_bool_exp | null)},buyerRequest] | buyerRequest
    /** fetch data from the table: "buyer" using primary key columns */
    buyerByPk?: [{address: Scalars['String']},buyerRequest]
    /** fetch data from the table: "dipdup_contract" */
    dipdupContract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdupContractByPk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdupContractMetadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest] | dipdup_contract_metadataRequest
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdupContractMetadataByPk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdupHead?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdupHeadByPk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_head_status" */
    dipdupHeadStatus?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest] | dipdup_head_statusRequest
    /** fetch data from the table: "dipdup_index" */
    dipdupIndex?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdupIndexByPk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdupSchema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdupSchemaByPk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdupTokenMetadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest] | dipdup_token_metadataRequest
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdupTokenMetadataByPk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** fetch data from the table: "from" */
    from?: [{
    /** distinct select on columns */
    distinct_on?: (from_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (from_order_by[] | null),
    /** filter the rows returned */
    where?: (from_bool_exp | null)},fromRequest] | fromRequest
    /** fetch data from the table: "from" using primary key columns */
    fromByPk?: [{address: Scalars['String']},fromRequest]
    /** fetch data from the table: "highest_bidder" */
    highestBidder?: [{
    /** distinct select on columns */
    distinct_on?: (highest_bidder_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (highest_bidder_order_by[] | null),
    /** filter the rows returned */
    where?: (highest_bidder_bool_exp | null)},highest_bidderRequest] | highest_bidderRequest
    /** fetch data from the table: "highest_bidder" using primary key columns */
    highestBidderByPk?: [{address: Scalars['String']},highest_bidderRequest]
    /** fetch data from the table: "last_sale" */
    lastSale?: [{
    /** distinct select on columns */
    distinct_on?: (last_sale_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (last_sale_order_by[] | null),
    /** filter the rows returned */
    where?: (last_sale_bool_exp | null)},last_saleRequest] | last_saleRequest
    /** fetch data from the table: "last_sale" using primary key columns */
    lastSaleByPk?: [{id: Scalars['bigint']},last_saleRequest]
    /** fetch data from the table: "sell" */
    sell?: [{
    /** distinct select on columns */
    distinct_on?: (sell_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (sell_order_by[] | null),
    /** filter the rows returned */
    where?: (sell_bool_exp | null)},sellRequest] | sellRequest
    /** fetch data from the table: "sell" using primary key columns */
    sellByPk?: [{id: Scalars['bigint']},sellRequest]
    /** fetch data from the table: "seller" */
    seller?: [{
    /** distinct select on columns */
    distinct_on?: (seller_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (seller_order_by[] | null),
    /** filter the rows returned */
    where?: (seller_bool_exp | null)},sellerRequest] | sellerRequest
    /** fetch data from the table: "seller" using primary key columns */
    sellerByPk?: [{address: Scalars['String']},sellerRequest]
    /** fetch data from the table: "to" */
    to?: [{
    /** distinct select on columns */
    distinct_on?: (to_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (to_order_by[] | null),
    /** filter the rows returned */
    where?: (to_bool_exp | null)},toRequest] | toRequest
    /** fetch data from the table: "to" using primary key columns */
    toByPk?: [{address: Scalars['String']},toRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "to" */
export interface toRequest{
    address?: boolean | number
    /** An array relationship */
    lastSales?: [{
    /** distinct select on columns */
    distinct_on?: (last_sale_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (last_sale_order_by[] | null),
    /** filter the rows returned */
    where?: (last_sale_bool_exp | null)},last_saleRequest] | last_saleRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "to". All fields are combined with a logical 'AND'. */
export interface to_bool_exp {_and?: (to_bool_exp[] | null),_not?: (to_bool_exp | null),_or?: (to_bool_exp[] | null),address?: (String_comparison_exp | null),lastSales?: (last_sale_bool_exp | null)}


/** Ordering options when selecting data from "to". */
export interface to_order_by {address?: (order_by | null),lastSales_aggregate?: (last_sale_aggregate_order_by | null)}

export type QueryRequest = query_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const ask_possibleTypes: string[] = ['ask']
export const isask = (obj?: { __typename?: any } | null): obj is ask => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isask"')
  return ask_possibleTypes.includes(obj.__typename)
}



const ask_auction_possibleTypes: string[] = ['ask_auction']
export const isask_auction = (obj?: { __typename?: any } | null): obj is ask_auction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isask_auction"')
  return ask_auction_possibleTypes.includes(obj.__typename)
}



const asker_possibleTypes: string[] = ['asker']
export const isasker = (obj?: { __typename?: any } | null): obj is asker => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isasker"')
  return asker_possibleTypes.includes(obj.__typename)
}



const auction_creator_possibleTypes: string[] = ['auction_creator']
export const isauction_creator = (obj?: { __typename?: any } | null): obj is auction_creator => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_creator"')
  return auction_creator_possibleTypes.includes(obj.__typename)
}



const bid_possibleTypes: string[] = ['bid']
export const isbid = (obj?: { __typename?: any } | null): obj is bid => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isbid"')
  return bid_possibleTypes.includes(obj.__typename)
}



const bidder_possibleTypes: string[] = ['bidder']
export const isbidder = (obj?: { __typename?: any } | null): obj is bidder => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isbidder"')
  return bidder_possibleTypes.includes(obj.__typename)
}



const buy_possibleTypes: string[] = ['buy']
export const isbuy = (obj?: { __typename?: any } | null): obj is buy => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isbuy"')
  return buy_possibleTypes.includes(obj.__typename)
}



const buyer_possibleTypes: string[] = ['buyer']
export const isbuyer = (obj?: { __typename?: any } | null): obj is buyer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isbuyer"')
  return buyer_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_possibleTypes: string[] = ['dipdup_contract']
export const isdipdup_contract = (obj?: { __typename?: any } | null): obj is dipdup_contract => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_possibleTypes: string[] = ['dipdup_contract_metadata']
export const isdipdup_contract_metadata = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata"')
  return dipdup_contract_metadata_possibleTypes.includes(obj.__typename)
}



const dipdup_head_possibleTypes: string[] = ['dipdup_head']
export const isdipdup_head = (obj?: { __typename?: any } | null): obj is dipdup_head => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_possibleTypes: string[] = ['dipdup_head_status']
export const isdipdup_head_status = (obj?: { __typename?: any } | null): obj is dipdup_head_status => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status"')
  return dipdup_head_status_possibleTypes.includes(obj.__typename)
}



const dipdup_index_possibleTypes: string[] = ['dipdup_index']
export const isdipdup_index = (obj?: { __typename?: any } | null): obj is dipdup_index => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_possibleTypes: string[] = ['dipdup_schema']
export const isdipdup_schema = (obj?: { __typename?: any } | null): obj is dipdup_schema => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_possibleTypes: string[] = ['dipdup_token_metadata']
export const isdipdup_token_metadata = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata"')
  return dipdup_token_metadata_possibleTypes.includes(obj.__typename)
}



const from_possibleTypes: string[] = ['from']
export const isfrom = (obj?: { __typename?: any } | null): obj is from => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isfrom"')
  return from_possibleTypes.includes(obj.__typename)
}



const highest_bidder_possibleTypes: string[] = ['highest_bidder']
export const ishighest_bidder = (obj?: { __typename?: any } | null): obj is highest_bidder => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ishighest_bidder"')
  return highest_bidder_possibleTypes.includes(obj.__typename)
}



const last_sale_possibleTypes: string[] = ['last_sale']
export const islast_sale = (obj?: { __typename?: any } | null): obj is last_sale => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islast_sale"')
  return last_sale_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const sell_possibleTypes: string[] = ['sell']
export const issell = (obj?: { __typename?: any } | null): obj is sell => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issell"')
  return sell_possibleTypes.includes(obj.__typename)
}



const seller_possibleTypes: string[] = ['seller']
export const isseller = (obj?: { __typename?: any } | null): obj is seller => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseller"')
  return seller_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



const to_possibleTypes: string[] = ['to']
export const isto = (obj?: { __typename?: any } | null): obj is to => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isto"')
  return to_possibleTypes.includes(obj.__typename)
}



/** columns and relationships of "ask" */
export interface askPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
asker: (askerPromiseChain & {get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>) => Promise<FieldsSelection<asker, R>>}),
    askerId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    editions: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "ask" */
export interface askObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
asker: (askerObservableChain & {get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>) => Observable<FieldsSelection<asker, R>>}),
    askerId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    editions: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "ask_auction" */
export interface ask_auctionPromiseChain{
    
/** An object relationship */
auctionCreator: (auction_creatorPromiseChain & {get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>) => Promise<FieldsSelection<auction_creator, R>>}),
    auctionCreatorId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    endTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    priceIncrement: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    reserve: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "ask_auction" */
export interface ask_auctionObservableChain{
    
/** An object relationship */
auctionCreator: (auction_creatorObservableChain & {get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>) => Observable<FieldsSelection<auction_creator, R>>}),
    auctionCreatorId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    endTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    priceIncrement: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    reserve: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "asker" */
export interface askerPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
asks: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_order_by[] | null),
/** filter the rows returned */
where?: (ask_bool_exp | null)}) => {get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Promise<FieldsSelection<ask, R>[]>})&({get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Promise<FieldsSelection<ask, R>[]>})
}


/** columns and relationships of "asker" */
export interface askerObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
asks: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_order_by[] | null),
/** filter the rows returned */
where?: (ask_bool_exp | null)}) => {get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Observable<FieldsSelection<ask, R>[]>})&({get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Observable<FieldsSelection<ask, R>[]>})
}


/** columns and relationships of "auction_creator" */
export interface auction_creatorPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
askAuctions: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_auction_order_by[] | null),
/** filter the rows returned */
where?: (ask_auction_bool_exp | null)}) => {get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Promise<FieldsSelection<ask_auction, R>[]>})&({get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Promise<FieldsSelection<ask_auction, R>[]>})
}


/** columns and relationships of "auction_creator" */
export interface auction_creatorObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
askAuctions: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_auction_order_by[] | null),
/** filter the rows returned */
where?: (ask_auction_bool_exp | null)}) => {get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Observable<FieldsSelection<ask_auction, R>[]>})&({get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Observable<FieldsSelection<ask_auction, R>[]>})
}


/** columns and relationships of "bid" */
export interface bidPromiseChain{
    
/** An object relationship */
bidder: (bidderPromiseChain & {get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>) => Promise<FieldsSelection<bidder, R>>}),
    bidderId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    endTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** An object relationship */
highestBidder: (highest_bidderPromiseChain & {get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>) => Promise<FieldsSelection<highest_bidder, R>>}),
    highestBidderId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "bid" */
export interface bidObservableChain{
    
/** An object relationship */
bidder: (bidderObservableChain & {get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>) => Observable<FieldsSelection<bidder, R>>}),
    bidderId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    endTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** An object relationship */
highestBidder: (highest_bidderObservableChain & {get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>) => Observable<FieldsSelection<highest_bidder, R>>}),
    highestBidderId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "bidder" */
export interface bidderPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
bids: ((args?: {
/** distinct select on columns */
distinct_on?: (bid_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bid_order_by[] | null),
/** filter the rows returned */
where?: (bid_bool_exp | null)}) => {get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Promise<FieldsSelection<bid, R>[]>})&({get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Promise<FieldsSelection<bid, R>[]>})
}


/** columns and relationships of "bidder" */
export interface bidderObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
bids: ((args?: {
/** distinct select on columns */
distinct_on?: (bid_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bid_order_by[] | null),
/** filter the rows returned */
where?: (bid_bool_exp | null)}) => {get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Observable<FieldsSelection<bid, R>[]>})&({get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Observable<FieldsSelection<bid, R>[]>})
}


/** columns and relationships of "buy" */
export interface buyPromiseChain{
    buyAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    buyFrom: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
buyer: (buyerPromiseChain & {get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>) => Promise<FieldsSelection<buyer, R>>}),
    buyerId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "buy" */
export interface buyObservableChain{
    buyAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    buyFrom: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
buyer: (buyerObservableChain & {get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>) => Observable<FieldsSelection<buyer, R>>}),
    buyerId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "buyer" */
export interface buyerPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
buys: ((args?: {
/** distinct select on columns */
distinct_on?: (buy_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buy_order_by[] | null),
/** filter the rows returned */
where?: (buy_bool_exp | null)}) => {get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Promise<FieldsSelection<buy, R>[]>})&({get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Promise<FieldsSelection<buy, R>[]>})
}


/** columns and relationships of "buyer" */
export interface buyerObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
buys: ((args?: {
/** distinct select on columns */
distinct_on?: (buy_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buy_order_by[] | null),
/** filter the rows returned */
where?: (buy_bool_exp | null)}) => {get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Observable<FieldsSelection<buy, R>[]>})&({get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Observable<FieldsSelection<buy, R>[]>})
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updateId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updateId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headPromiseChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headObservableChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexPromiseChain{
    configHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    templateValues: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexObservableChain{
    configHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    templateValues: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaPromiseChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaObservableChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updateId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updateId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "from" */
export interface fromPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
lastSales: ((args?: {
/** distinct select on columns */
distinct_on?: (last_sale_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (last_sale_order_by[] | null),
/** filter the rows returned */
where?: (last_sale_bool_exp | null)}) => {get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Promise<FieldsSelection<last_sale, R>[]>})&({get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Promise<FieldsSelection<last_sale, R>[]>})
}


/** columns and relationships of "from" */
export interface fromObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
lastSales: ((args?: {
/** distinct select on columns */
distinct_on?: (last_sale_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (last_sale_order_by[] | null),
/** filter the rows returned */
where?: (last_sale_bool_exp | null)}) => {get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Observable<FieldsSelection<last_sale, R>[]>})&({get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Observable<FieldsSelection<last_sale, R>[]>})
}


/** columns and relationships of "highest_bidder" */
export interface highest_bidderPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
bids: ((args?: {
/** distinct select on columns */
distinct_on?: (bid_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bid_order_by[] | null),
/** filter the rows returned */
where?: (bid_bool_exp | null)}) => {get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Promise<FieldsSelection<bid, R>[]>})&({get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Promise<FieldsSelection<bid, R>[]>})
}


/** columns and relationships of "highest_bidder" */
export interface highest_bidderObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
bids: ((args?: {
/** distinct select on columns */
distinct_on?: (bid_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bid_order_by[] | null),
/** filter the rows returned */
where?: (bid_bool_exp | null)}) => {get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Observable<FieldsSelection<bid, R>[]>})&({get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Observable<FieldsSelection<bid, R>[]>})
}


/** columns and relationships of "last_sale" */
export interface last_salePromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    askId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    fromId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
from_: (fromPromiseChain & {get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>) => Promise<FieldsSelection<from, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    toId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
to_: (toPromiseChain & {get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>) => Promise<FieldsSelection<to, R>>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenQty: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>})
}


/** columns and relationships of "last_sale" */
export interface last_saleObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    askId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    fromId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
from_: (fromObservableChain & {get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>) => Observable<FieldsSelection<from, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    toId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
to_: (toObservableChain & {get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>) => Observable<FieldsSelection<to, R>>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenQty: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>})
}

export interface query_rootPromiseChain{
    
/** fetch data from the table: "ask" */
ask: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_order_by[] | null),
/** filter the rows returned */
where?: (ask_bool_exp | null)}) => {get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Promise<FieldsSelection<ask, R>[]>})&({get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Promise<FieldsSelection<ask, R>[]>}),
    
/** fetch data from the table: "ask_auction" */
askAuction: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_auction_order_by[] | null),
/** filter the rows returned */
where?: (ask_auction_bool_exp | null)}) => {get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Promise<FieldsSelection<ask_auction, R>[]>})&({get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Promise<FieldsSelection<ask_auction, R>[]>}),
    
/** fetch data from the table: "ask_auction" using primary key columns */
askAuctionByPk: ((args: {id: Scalars['bigint']}) => ask_auctionPromiseChain & {get: <R extends ask_auctionRequest>(request: R, defaultValue?: (FieldsSelection<ask_auction, R> | undefined)) => Promise<(FieldsSelection<ask_auction, R> | undefined)>}),
    
/** fetch data from the table: "ask" using primary key columns */
askByPk: ((args: {id: Scalars['bigint']}) => askPromiseChain & {get: <R extends askRequest>(request: R, defaultValue?: (FieldsSelection<ask, R> | undefined)) => Promise<(FieldsSelection<ask, R> | undefined)>}),
    
/** fetch data from the table: "asker" */
asker: ((args?: {
/** distinct select on columns */
distinct_on?: (asker_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (asker_order_by[] | null),
/** filter the rows returned */
where?: (asker_bool_exp | null)}) => {get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>[]) => Promise<FieldsSelection<asker, R>[]>})&({get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>[]) => Promise<FieldsSelection<asker, R>[]>}),
    
/** fetch data from the table: "asker" using primary key columns */
askerByPk: ((args: {address: Scalars['String']}) => askerPromiseChain & {get: <R extends askerRequest>(request: R, defaultValue?: (FieldsSelection<asker, R> | undefined)) => Promise<(FieldsSelection<asker, R> | undefined)>}),
    
/** fetch data from the table: "auction_creator" */
auctionCreator: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_creator_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_creator_order_by[] | null),
/** filter the rows returned */
where?: (auction_creator_bool_exp | null)}) => {get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>[]) => Promise<FieldsSelection<auction_creator, R>[]>})&({get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>[]) => Promise<FieldsSelection<auction_creator, R>[]>}),
    
/** fetch data from the table: "auction_creator" using primary key columns */
auctionCreatorByPk: ((args: {address: Scalars['String']}) => auction_creatorPromiseChain & {get: <R extends auction_creatorRequest>(request: R, defaultValue?: (FieldsSelection<auction_creator, R> | undefined)) => Promise<(FieldsSelection<auction_creator, R> | undefined)>}),
    
/** fetch data from the table: "bid" */
bid: ((args?: {
/** distinct select on columns */
distinct_on?: (bid_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bid_order_by[] | null),
/** filter the rows returned */
where?: (bid_bool_exp | null)}) => {get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Promise<FieldsSelection<bid, R>[]>})&({get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Promise<FieldsSelection<bid, R>[]>}),
    
/** fetch data from the table: "bid" using primary key columns */
bidByPk: ((args: {id: Scalars['bigint']}) => bidPromiseChain & {get: <R extends bidRequest>(request: R, defaultValue?: (FieldsSelection<bid, R> | undefined)) => Promise<(FieldsSelection<bid, R> | undefined)>}),
    
/** fetch data from the table: "bidder" */
bidder: ((args?: {
/** distinct select on columns */
distinct_on?: (bidder_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bidder_order_by[] | null),
/** filter the rows returned */
where?: (bidder_bool_exp | null)}) => {get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>[]) => Promise<FieldsSelection<bidder, R>[]>})&({get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>[]) => Promise<FieldsSelection<bidder, R>[]>}),
    
/** fetch data from the table: "bidder" using primary key columns */
bidderByPk: ((args: {address: Scalars['String']}) => bidderPromiseChain & {get: <R extends bidderRequest>(request: R, defaultValue?: (FieldsSelection<bidder, R> | undefined)) => Promise<(FieldsSelection<bidder, R> | undefined)>}),
    
/** fetch data from the table: "buy" */
buy: ((args?: {
/** distinct select on columns */
distinct_on?: (buy_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buy_order_by[] | null),
/** filter the rows returned */
where?: (buy_bool_exp | null)}) => {get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Promise<FieldsSelection<buy, R>[]>})&({get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Promise<FieldsSelection<buy, R>[]>}),
    
/** fetch data from the table: "buy" using primary key columns */
buyByPk: ((args: {id: Scalars['bigint']}) => buyPromiseChain & {get: <R extends buyRequest>(request: R, defaultValue?: (FieldsSelection<buy, R> | undefined)) => Promise<(FieldsSelection<buy, R> | undefined)>}),
    
/** fetch data from the table: "buyer" */
buyer: ((args?: {
/** distinct select on columns */
distinct_on?: (buyer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buyer_order_by[] | null),
/** filter the rows returned */
where?: (buyer_bool_exp | null)}) => {get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>[]) => Promise<FieldsSelection<buyer, R>[]>})&({get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>[]) => Promise<FieldsSelection<buyer, R>[]>}),
    
/** fetch data from the table: "buyer" using primary key columns */
buyerByPk: ((args: {address: Scalars['String']}) => buyerPromiseChain & {get: <R extends buyerRequest>(request: R, defaultValue?: (FieldsSelection<buyer, R> | undefined)) => Promise<(FieldsSelection<buyer, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdupContract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdupContractByPk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdupContractMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdupContractMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdupHead: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdupHeadByPk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdupHeadStatus: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdupIndex: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdupIndexByPk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdupSchema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdupSchemaByPk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdupTokenMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdupTokenMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "from" */
from: ((args?: {
/** distinct select on columns */
distinct_on?: (from_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (from_order_by[] | null),
/** filter the rows returned */
where?: (from_bool_exp | null)}) => {get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>[]) => Promise<FieldsSelection<from, R>[]>})&({get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>[]) => Promise<FieldsSelection<from, R>[]>}),
    
/** fetch data from the table: "from" using primary key columns */
fromByPk: ((args: {address: Scalars['String']}) => fromPromiseChain & {get: <R extends fromRequest>(request: R, defaultValue?: (FieldsSelection<from, R> | undefined)) => Promise<(FieldsSelection<from, R> | undefined)>}),
    
/** fetch data from the table: "highest_bidder" */
highestBidder: ((args?: {
/** distinct select on columns */
distinct_on?: (highest_bidder_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (highest_bidder_order_by[] | null),
/** filter the rows returned */
where?: (highest_bidder_bool_exp | null)}) => {get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>[]) => Promise<FieldsSelection<highest_bidder, R>[]>})&({get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>[]) => Promise<FieldsSelection<highest_bidder, R>[]>}),
    
/** fetch data from the table: "highest_bidder" using primary key columns */
highestBidderByPk: ((args: {address: Scalars['String']}) => highest_bidderPromiseChain & {get: <R extends highest_bidderRequest>(request: R, defaultValue?: (FieldsSelection<highest_bidder, R> | undefined)) => Promise<(FieldsSelection<highest_bidder, R> | undefined)>}),
    
/** fetch data from the table: "last_sale" */
lastSale: ((args?: {
/** distinct select on columns */
distinct_on?: (last_sale_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (last_sale_order_by[] | null),
/** filter the rows returned */
where?: (last_sale_bool_exp | null)}) => {get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Promise<FieldsSelection<last_sale, R>[]>})&({get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Promise<FieldsSelection<last_sale, R>[]>}),
    
/** fetch data from the table: "last_sale" using primary key columns */
lastSaleByPk: ((args: {id: Scalars['bigint']}) => last_salePromiseChain & {get: <R extends last_saleRequest>(request: R, defaultValue?: (FieldsSelection<last_sale, R> | undefined)) => Promise<(FieldsSelection<last_sale, R> | undefined)>}),
    
/** fetch data from the table: "sell" */
sell: ((args?: {
/** distinct select on columns */
distinct_on?: (sell_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (sell_order_by[] | null),
/** filter the rows returned */
where?: (sell_bool_exp | null)}) => {get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Promise<FieldsSelection<sell, R>[]>})&({get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Promise<FieldsSelection<sell, R>[]>}),
    
/** fetch data from the table: "sell" using primary key columns */
sellByPk: ((args: {id: Scalars['bigint']}) => sellPromiseChain & {get: <R extends sellRequest>(request: R, defaultValue?: (FieldsSelection<sell, R> | undefined)) => Promise<(FieldsSelection<sell, R> | undefined)>}),
    
/** fetch data from the table: "seller" */
seller: ((args?: {
/** distinct select on columns */
distinct_on?: (seller_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (seller_order_by[] | null),
/** filter the rows returned */
where?: (seller_bool_exp | null)}) => {get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>[]) => Promise<FieldsSelection<seller, R>[]>})&({get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>[]) => Promise<FieldsSelection<seller, R>[]>}),
    
/** fetch data from the table: "seller" using primary key columns */
sellerByPk: ((args: {address: Scalars['String']}) => sellerPromiseChain & {get: <R extends sellerRequest>(request: R, defaultValue?: (FieldsSelection<seller, R> | undefined)) => Promise<(FieldsSelection<seller, R> | undefined)>}),
    
/** fetch data from the table: "to" */
to: ((args?: {
/** distinct select on columns */
distinct_on?: (to_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (to_order_by[] | null),
/** filter the rows returned */
where?: (to_bool_exp | null)}) => {get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>[]) => Promise<FieldsSelection<to, R>[]>})&({get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>[]) => Promise<FieldsSelection<to, R>[]>}),
    
/** fetch data from the table: "to" using primary key columns */
toByPk: ((args: {address: Scalars['String']}) => toPromiseChain & {get: <R extends toRequest>(request: R, defaultValue?: (FieldsSelection<to, R> | undefined)) => Promise<(FieldsSelection<to, R> | undefined)>})
}

export interface query_rootObservableChain{
    
/** fetch data from the table: "ask" */
ask: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_order_by[] | null),
/** filter the rows returned */
where?: (ask_bool_exp | null)}) => {get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Observable<FieldsSelection<ask, R>[]>})&({get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Observable<FieldsSelection<ask, R>[]>}),
    
/** fetch data from the table: "ask_auction" */
askAuction: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_auction_order_by[] | null),
/** filter the rows returned */
where?: (ask_auction_bool_exp | null)}) => {get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Observable<FieldsSelection<ask_auction, R>[]>})&({get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Observable<FieldsSelection<ask_auction, R>[]>}),
    
/** fetch data from the table: "ask_auction" using primary key columns */
askAuctionByPk: ((args: {id: Scalars['bigint']}) => ask_auctionObservableChain & {get: <R extends ask_auctionRequest>(request: R, defaultValue?: (FieldsSelection<ask_auction, R> | undefined)) => Observable<(FieldsSelection<ask_auction, R> | undefined)>}),
    
/** fetch data from the table: "ask" using primary key columns */
askByPk: ((args: {id: Scalars['bigint']}) => askObservableChain & {get: <R extends askRequest>(request: R, defaultValue?: (FieldsSelection<ask, R> | undefined)) => Observable<(FieldsSelection<ask, R> | undefined)>}),
    
/** fetch data from the table: "asker" */
asker: ((args?: {
/** distinct select on columns */
distinct_on?: (asker_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (asker_order_by[] | null),
/** filter the rows returned */
where?: (asker_bool_exp | null)}) => {get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>[]) => Observable<FieldsSelection<asker, R>[]>})&({get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>[]) => Observable<FieldsSelection<asker, R>[]>}),
    
/** fetch data from the table: "asker" using primary key columns */
askerByPk: ((args: {address: Scalars['String']}) => askerObservableChain & {get: <R extends askerRequest>(request: R, defaultValue?: (FieldsSelection<asker, R> | undefined)) => Observable<(FieldsSelection<asker, R> | undefined)>}),
    
/** fetch data from the table: "auction_creator" */
auctionCreator: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_creator_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_creator_order_by[] | null),
/** filter the rows returned */
where?: (auction_creator_bool_exp | null)}) => {get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>[]) => Observable<FieldsSelection<auction_creator, R>[]>})&({get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>[]) => Observable<FieldsSelection<auction_creator, R>[]>}),
    
/** fetch data from the table: "auction_creator" using primary key columns */
auctionCreatorByPk: ((args: {address: Scalars['String']}) => auction_creatorObservableChain & {get: <R extends auction_creatorRequest>(request: R, defaultValue?: (FieldsSelection<auction_creator, R> | undefined)) => Observable<(FieldsSelection<auction_creator, R> | undefined)>}),
    
/** fetch data from the table: "bid" */
bid: ((args?: {
/** distinct select on columns */
distinct_on?: (bid_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bid_order_by[] | null),
/** filter the rows returned */
where?: (bid_bool_exp | null)}) => {get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Observable<FieldsSelection<bid, R>[]>})&({get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Observable<FieldsSelection<bid, R>[]>}),
    
/** fetch data from the table: "bid" using primary key columns */
bidByPk: ((args: {id: Scalars['bigint']}) => bidObservableChain & {get: <R extends bidRequest>(request: R, defaultValue?: (FieldsSelection<bid, R> | undefined)) => Observable<(FieldsSelection<bid, R> | undefined)>}),
    
/** fetch data from the table: "bidder" */
bidder: ((args?: {
/** distinct select on columns */
distinct_on?: (bidder_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bidder_order_by[] | null),
/** filter the rows returned */
where?: (bidder_bool_exp | null)}) => {get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>[]) => Observable<FieldsSelection<bidder, R>[]>})&({get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>[]) => Observable<FieldsSelection<bidder, R>[]>}),
    
/** fetch data from the table: "bidder" using primary key columns */
bidderByPk: ((args: {address: Scalars['String']}) => bidderObservableChain & {get: <R extends bidderRequest>(request: R, defaultValue?: (FieldsSelection<bidder, R> | undefined)) => Observable<(FieldsSelection<bidder, R> | undefined)>}),
    
/** fetch data from the table: "buy" */
buy: ((args?: {
/** distinct select on columns */
distinct_on?: (buy_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buy_order_by[] | null),
/** filter the rows returned */
where?: (buy_bool_exp | null)}) => {get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Observable<FieldsSelection<buy, R>[]>})&({get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Observable<FieldsSelection<buy, R>[]>}),
    
/** fetch data from the table: "buy" using primary key columns */
buyByPk: ((args: {id: Scalars['bigint']}) => buyObservableChain & {get: <R extends buyRequest>(request: R, defaultValue?: (FieldsSelection<buy, R> | undefined)) => Observable<(FieldsSelection<buy, R> | undefined)>}),
    
/** fetch data from the table: "buyer" */
buyer: ((args?: {
/** distinct select on columns */
distinct_on?: (buyer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buyer_order_by[] | null),
/** filter the rows returned */
where?: (buyer_bool_exp | null)}) => {get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>[]) => Observable<FieldsSelection<buyer, R>[]>})&({get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>[]) => Observable<FieldsSelection<buyer, R>[]>}),
    
/** fetch data from the table: "buyer" using primary key columns */
buyerByPk: ((args: {address: Scalars['String']}) => buyerObservableChain & {get: <R extends buyerRequest>(request: R, defaultValue?: (FieldsSelection<buyer, R> | undefined)) => Observable<(FieldsSelection<buyer, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdupContract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdupContractByPk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdupContractMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdupContractMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdupHead: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdupHeadByPk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdupHeadStatus: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdupIndex: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdupIndexByPk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdupSchema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdupSchemaByPk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdupTokenMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdupTokenMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "from" */
from: ((args?: {
/** distinct select on columns */
distinct_on?: (from_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (from_order_by[] | null),
/** filter the rows returned */
where?: (from_bool_exp | null)}) => {get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>[]) => Observable<FieldsSelection<from, R>[]>})&({get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>[]) => Observable<FieldsSelection<from, R>[]>}),
    
/** fetch data from the table: "from" using primary key columns */
fromByPk: ((args: {address: Scalars['String']}) => fromObservableChain & {get: <R extends fromRequest>(request: R, defaultValue?: (FieldsSelection<from, R> | undefined)) => Observable<(FieldsSelection<from, R> | undefined)>}),
    
/** fetch data from the table: "highest_bidder" */
highestBidder: ((args?: {
/** distinct select on columns */
distinct_on?: (highest_bidder_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (highest_bidder_order_by[] | null),
/** filter the rows returned */
where?: (highest_bidder_bool_exp | null)}) => {get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>[]) => Observable<FieldsSelection<highest_bidder, R>[]>})&({get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>[]) => Observable<FieldsSelection<highest_bidder, R>[]>}),
    
/** fetch data from the table: "highest_bidder" using primary key columns */
highestBidderByPk: ((args: {address: Scalars['String']}) => highest_bidderObservableChain & {get: <R extends highest_bidderRequest>(request: R, defaultValue?: (FieldsSelection<highest_bidder, R> | undefined)) => Observable<(FieldsSelection<highest_bidder, R> | undefined)>}),
    
/** fetch data from the table: "last_sale" */
lastSale: ((args?: {
/** distinct select on columns */
distinct_on?: (last_sale_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (last_sale_order_by[] | null),
/** filter the rows returned */
where?: (last_sale_bool_exp | null)}) => {get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Observable<FieldsSelection<last_sale, R>[]>})&({get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Observable<FieldsSelection<last_sale, R>[]>}),
    
/** fetch data from the table: "last_sale" using primary key columns */
lastSaleByPk: ((args: {id: Scalars['bigint']}) => last_saleObservableChain & {get: <R extends last_saleRequest>(request: R, defaultValue?: (FieldsSelection<last_sale, R> | undefined)) => Observable<(FieldsSelection<last_sale, R> | undefined)>}),
    
/** fetch data from the table: "sell" */
sell: ((args?: {
/** distinct select on columns */
distinct_on?: (sell_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (sell_order_by[] | null),
/** filter the rows returned */
where?: (sell_bool_exp | null)}) => {get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Observable<FieldsSelection<sell, R>[]>})&({get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Observable<FieldsSelection<sell, R>[]>}),
    
/** fetch data from the table: "sell" using primary key columns */
sellByPk: ((args: {id: Scalars['bigint']}) => sellObservableChain & {get: <R extends sellRequest>(request: R, defaultValue?: (FieldsSelection<sell, R> | undefined)) => Observable<(FieldsSelection<sell, R> | undefined)>}),
    
/** fetch data from the table: "seller" */
seller: ((args?: {
/** distinct select on columns */
distinct_on?: (seller_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (seller_order_by[] | null),
/** filter the rows returned */
where?: (seller_bool_exp | null)}) => {get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>[]) => Observable<FieldsSelection<seller, R>[]>})&({get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>[]) => Observable<FieldsSelection<seller, R>[]>}),
    
/** fetch data from the table: "seller" using primary key columns */
sellerByPk: ((args: {address: Scalars['String']}) => sellerObservableChain & {get: <R extends sellerRequest>(request: R, defaultValue?: (FieldsSelection<seller, R> | undefined)) => Observable<(FieldsSelection<seller, R> | undefined)>}),
    
/** fetch data from the table: "to" */
to: ((args?: {
/** distinct select on columns */
distinct_on?: (to_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (to_order_by[] | null),
/** filter the rows returned */
where?: (to_bool_exp | null)}) => {get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>[]) => Observable<FieldsSelection<to, R>[]>})&({get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>[]) => Observable<FieldsSelection<to, R>[]>}),
    
/** fetch data from the table: "to" using primary key columns */
toByPk: ((args: {address: Scalars['String']}) => toObservableChain & {get: <R extends toRequest>(request: R, defaultValue?: (FieldsSelection<to, R> | undefined)) => Observable<(FieldsSelection<to, R> | undefined)>})
}


/** columns and relationships of "sell" */
export interface sellPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    saleAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
seller: (sellerPromiseChain & {get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>) => Promise<FieldsSelection<seller, R>>}),
    sellerId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "sell" */
export interface sellObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    saleAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
seller: (sellerObservableChain & {get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>) => Observable<FieldsSelection<seller, R>>}),
    sellerId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    tokenAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "seller" */
export interface sellerPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
sells: ((args?: {
/** distinct select on columns */
distinct_on?: (sell_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (sell_order_by[] | null),
/** filter the rows returned */
where?: (sell_bool_exp | null)}) => {get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Promise<FieldsSelection<sell, R>[]>})&({get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Promise<FieldsSelection<sell, R>[]>})
}


/** columns and relationships of "seller" */
export interface sellerObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
sells: ((args?: {
/** distinct select on columns */
distinct_on?: (sell_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (sell_order_by[] | null),
/** filter the rows returned */
where?: (sell_bool_exp | null)}) => {get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Observable<FieldsSelection<sell, R>[]>})&({get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Observable<FieldsSelection<sell, R>[]>})
}

export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "ask" */
ask: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_order_by[] | null),
/** filter the rows returned */
where?: (ask_bool_exp | null)}) => {get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Promise<FieldsSelection<ask, R>[]>})&({get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Promise<FieldsSelection<ask, R>[]>}),
    
/** fetch data from the table: "ask_auction" */
askAuction: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_auction_order_by[] | null),
/** filter the rows returned */
where?: (ask_auction_bool_exp | null)}) => {get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Promise<FieldsSelection<ask_auction, R>[]>})&({get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Promise<FieldsSelection<ask_auction, R>[]>}),
    
/** fetch data from the table: "ask_auction" using primary key columns */
askAuctionByPk: ((args: {id: Scalars['bigint']}) => ask_auctionPromiseChain & {get: <R extends ask_auctionRequest>(request: R, defaultValue?: (FieldsSelection<ask_auction, R> | undefined)) => Promise<(FieldsSelection<ask_auction, R> | undefined)>}),
    
/** fetch data from the table: "ask" using primary key columns */
askByPk: ((args: {id: Scalars['bigint']}) => askPromiseChain & {get: <R extends askRequest>(request: R, defaultValue?: (FieldsSelection<ask, R> | undefined)) => Promise<(FieldsSelection<ask, R> | undefined)>}),
    
/** fetch data from the table: "asker" */
asker: ((args?: {
/** distinct select on columns */
distinct_on?: (asker_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (asker_order_by[] | null),
/** filter the rows returned */
where?: (asker_bool_exp | null)}) => {get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>[]) => Promise<FieldsSelection<asker, R>[]>})&({get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>[]) => Promise<FieldsSelection<asker, R>[]>}),
    
/** fetch data from the table: "asker" using primary key columns */
askerByPk: ((args: {address: Scalars['String']}) => askerPromiseChain & {get: <R extends askerRequest>(request: R, defaultValue?: (FieldsSelection<asker, R> | undefined)) => Promise<(FieldsSelection<asker, R> | undefined)>}),
    
/** fetch data from the table: "auction_creator" */
auctionCreator: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_creator_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_creator_order_by[] | null),
/** filter the rows returned */
where?: (auction_creator_bool_exp | null)}) => {get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>[]) => Promise<FieldsSelection<auction_creator, R>[]>})&({get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>[]) => Promise<FieldsSelection<auction_creator, R>[]>}),
    
/** fetch data from the table: "auction_creator" using primary key columns */
auctionCreatorByPk: ((args: {address: Scalars['String']}) => auction_creatorPromiseChain & {get: <R extends auction_creatorRequest>(request: R, defaultValue?: (FieldsSelection<auction_creator, R> | undefined)) => Promise<(FieldsSelection<auction_creator, R> | undefined)>}),
    
/** fetch data from the table: "bid" */
bid: ((args?: {
/** distinct select on columns */
distinct_on?: (bid_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bid_order_by[] | null),
/** filter the rows returned */
where?: (bid_bool_exp | null)}) => {get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Promise<FieldsSelection<bid, R>[]>})&({get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Promise<FieldsSelection<bid, R>[]>}),
    
/** fetch data from the table: "bid" using primary key columns */
bidByPk: ((args: {id: Scalars['bigint']}) => bidPromiseChain & {get: <R extends bidRequest>(request: R, defaultValue?: (FieldsSelection<bid, R> | undefined)) => Promise<(FieldsSelection<bid, R> | undefined)>}),
    
/** fetch data from the table: "bidder" */
bidder: ((args?: {
/** distinct select on columns */
distinct_on?: (bidder_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bidder_order_by[] | null),
/** filter the rows returned */
where?: (bidder_bool_exp | null)}) => {get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>[]) => Promise<FieldsSelection<bidder, R>[]>})&({get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>[]) => Promise<FieldsSelection<bidder, R>[]>}),
    
/** fetch data from the table: "bidder" using primary key columns */
bidderByPk: ((args: {address: Scalars['String']}) => bidderPromiseChain & {get: <R extends bidderRequest>(request: R, defaultValue?: (FieldsSelection<bidder, R> | undefined)) => Promise<(FieldsSelection<bidder, R> | undefined)>}),
    
/** fetch data from the table: "buy" */
buy: ((args?: {
/** distinct select on columns */
distinct_on?: (buy_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buy_order_by[] | null),
/** filter the rows returned */
where?: (buy_bool_exp | null)}) => {get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Promise<FieldsSelection<buy, R>[]>})&({get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Promise<FieldsSelection<buy, R>[]>}),
    
/** fetch data from the table: "buy" using primary key columns */
buyByPk: ((args: {id: Scalars['bigint']}) => buyPromiseChain & {get: <R extends buyRequest>(request: R, defaultValue?: (FieldsSelection<buy, R> | undefined)) => Promise<(FieldsSelection<buy, R> | undefined)>}),
    
/** fetch data from the table: "buyer" */
buyer: ((args?: {
/** distinct select on columns */
distinct_on?: (buyer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buyer_order_by[] | null),
/** filter the rows returned */
where?: (buyer_bool_exp | null)}) => {get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>[]) => Promise<FieldsSelection<buyer, R>[]>})&({get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>[]) => Promise<FieldsSelection<buyer, R>[]>}),
    
/** fetch data from the table: "buyer" using primary key columns */
buyerByPk: ((args: {address: Scalars['String']}) => buyerPromiseChain & {get: <R extends buyerRequest>(request: R, defaultValue?: (FieldsSelection<buyer, R> | undefined)) => Promise<(FieldsSelection<buyer, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdupContract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdupContractByPk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdupContractMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdupContractMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdupHead: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdupHeadByPk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdupHeadStatus: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdupIndex: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdupIndexByPk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdupSchema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdupSchemaByPk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdupTokenMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdupTokenMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "from" */
from: ((args?: {
/** distinct select on columns */
distinct_on?: (from_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (from_order_by[] | null),
/** filter the rows returned */
where?: (from_bool_exp | null)}) => {get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>[]) => Promise<FieldsSelection<from, R>[]>})&({get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>[]) => Promise<FieldsSelection<from, R>[]>}),
    
/** fetch data from the table: "from" using primary key columns */
fromByPk: ((args: {address: Scalars['String']}) => fromPromiseChain & {get: <R extends fromRequest>(request: R, defaultValue?: (FieldsSelection<from, R> | undefined)) => Promise<(FieldsSelection<from, R> | undefined)>}),
    
/** fetch data from the table: "highest_bidder" */
highestBidder: ((args?: {
/** distinct select on columns */
distinct_on?: (highest_bidder_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (highest_bidder_order_by[] | null),
/** filter the rows returned */
where?: (highest_bidder_bool_exp | null)}) => {get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>[]) => Promise<FieldsSelection<highest_bidder, R>[]>})&({get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>[]) => Promise<FieldsSelection<highest_bidder, R>[]>}),
    
/** fetch data from the table: "highest_bidder" using primary key columns */
highestBidderByPk: ((args: {address: Scalars['String']}) => highest_bidderPromiseChain & {get: <R extends highest_bidderRequest>(request: R, defaultValue?: (FieldsSelection<highest_bidder, R> | undefined)) => Promise<(FieldsSelection<highest_bidder, R> | undefined)>}),
    
/** fetch data from the table: "last_sale" */
lastSale: ((args?: {
/** distinct select on columns */
distinct_on?: (last_sale_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (last_sale_order_by[] | null),
/** filter the rows returned */
where?: (last_sale_bool_exp | null)}) => {get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Promise<FieldsSelection<last_sale, R>[]>})&({get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Promise<FieldsSelection<last_sale, R>[]>}),
    
/** fetch data from the table: "last_sale" using primary key columns */
lastSaleByPk: ((args: {id: Scalars['bigint']}) => last_salePromiseChain & {get: <R extends last_saleRequest>(request: R, defaultValue?: (FieldsSelection<last_sale, R> | undefined)) => Promise<(FieldsSelection<last_sale, R> | undefined)>}),
    
/** fetch data from the table: "sell" */
sell: ((args?: {
/** distinct select on columns */
distinct_on?: (sell_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (sell_order_by[] | null),
/** filter the rows returned */
where?: (sell_bool_exp | null)}) => {get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Promise<FieldsSelection<sell, R>[]>})&({get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Promise<FieldsSelection<sell, R>[]>}),
    
/** fetch data from the table: "sell" using primary key columns */
sellByPk: ((args: {id: Scalars['bigint']}) => sellPromiseChain & {get: <R extends sellRequest>(request: R, defaultValue?: (FieldsSelection<sell, R> | undefined)) => Promise<(FieldsSelection<sell, R> | undefined)>}),
    
/** fetch data from the table: "seller" */
seller: ((args?: {
/** distinct select on columns */
distinct_on?: (seller_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (seller_order_by[] | null),
/** filter the rows returned */
where?: (seller_bool_exp | null)}) => {get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>[]) => Promise<FieldsSelection<seller, R>[]>})&({get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>[]) => Promise<FieldsSelection<seller, R>[]>}),
    
/** fetch data from the table: "seller" using primary key columns */
sellerByPk: ((args: {address: Scalars['String']}) => sellerPromiseChain & {get: <R extends sellerRequest>(request: R, defaultValue?: (FieldsSelection<seller, R> | undefined)) => Promise<(FieldsSelection<seller, R> | undefined)>}),
    
/** fetch data from the table: "to" */
to: ((args?: {
/** distinct select on columns */
distinct_on?: (to_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (to_order_by[] | null),
/** filter the rows returned */
where?: (to_bool_exp | null)}) => {get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>[]) => Promise<FieldsSelection<to, R>[]>})&({get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>[]) => Promise<FieldsSelection<to, R>[]>}),
    
/** fetch data from the table: "to" using primary key columns */
toByPk: ((args: {address: Scalars['String']}) => toPromiseChain & {get: <R extends toRequest>(request: R, defaultValue?: (FieldsSelection<to, R> | undefined)) => Promise<(FieldsSelection<to, R> | undefined)>})
}

export interface subscription_rootObservableChain{
    
/** fetch data from the table: "ask" */
ask: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_order_by[] | null),
/** filter the rows returned */
where?: (ask_bool_exp | null)}) => {get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Observable<FieldsSelection<ask, R>[]>})&({get: <R extends askRequest>(request: R, defaultValue?: FieldsSelection<ask, R>[]) => Observable<FieldsSelection<ask, R>[]>}),
    
/** fetch data from the table: "ask_auction" */
askAuction: ((args?: {
/** distinct select on columns */
distinct_on?: (ask_auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ask_auction_order_by[] | null),
/** filter the rows returned */
where?: (ask_auction_bool_exp | null)}) => {get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Observable<FieldsSelection<ask_auction, R>[]>})&({get: <R extends ask_auctionRequest>(request: R, defaultValue?: FieldsSelection<ask_auction, R>[]) => Observable<FieldsSelection<ask_auction, R>[]>}),
    
/** fetch data from the table: "ask_auction" using primary key columns */
askAuctionByPk: ((args: {id: Scalars['bigint']}) => ask_auctionObservableChain & {get: <R extends ask_auctionRequest>(request: R, defaultValue?: (FieldsSelection<ask_auction, R> | undefined)) => Observable<(FieldsSelection<ask_auction, R> | undefined)>}),
    
/** fetch data from the table: "ask" using primary key columns */
askByPk: ((args: {id: Scalars['bigint']}) => askObservableChain & {get: <R extends askRequest>(request: R, defaultValue?: (FieldsSelection<ask, R> | undefined)) => Observable<(FieldsSelection<ask, R> | undefined)>}),
    
/** fetch data from the table: "asker" */
asker: ((args?: {
/** distinct select on columns */
distinct_on?: (asker_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (asker_order_by[] | null),
/** filter the rows returned */
where?: (asker_bool_exp | null)}) => {get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>[]) => Observable<FieldsSelection<asker, R>[]>})&({get: <R extends askerRequest>(request: R, defaultValue?: FieldsSelection<asker, R>[]) => Observable<FieldsSelection<asker, R>[]>}),
    
/** fetch data from the table: "asker" using primary key columns */
askerByPk: ((args: {address: Scalars['String']}) => askerObservableChain & {get: <R extends askerRequest>(request: R, defaultValue?: (FieldsSelection<asker, R> | undefined)) => Observable<(FieldsSelection<asker, R> | undefined)>}),
    
/** fetch data from the table: "auction_creator" */
auctionCreator: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_creator_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_creator_order_by[] | null),
/** filter the rows returned */
where?: (auction_creator_bool_exp | null)}) => {get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>[]) => Observable<FieldsSelection<auction_creator, R>[]>})&({get: <R extends auction_creatorRequest>(request: R, defaultValue?: FieldsSelection<auction_creator, R>[]) => Observable<FieldsSelection<auction_creator, R>[]>}),
    
/** fetch data from the table: "auction_creator" using primary key columns */
auctionCreatorByPk: ((args: {address: Scalars['String']}) => auction_creatorObservableChain & {get: <R extends auction_creatorRequest>(request: R, defaultValue?: (FieldsSelection<auction_creator, R> | undefined)) => Observable<(FieldsSelection<auction_creator, R> | undefined)>}),
    
/** fetch data from the table: "bid" */
bid: ((args?: {
/** distinct select on columns */
distinct_on?: (bid_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bid_order_by[] | null),
/** filter the rows returned */
where?: (bid_bool_exp | null)}) => {get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Observable<FieldsSelection<bid, R>[]>})&({get: <R extends bidRequest>(request: R, defaultValue?: FieldsSelection<bid, R>[]) => Observable<FieldsSelection<bid, R>[]>}),
    
/** fetch data from the table: "bid" using primary key columns */
bidByPk: ((args: {id: Scalars['bigint']}) => bidObservableChain & {get: <R extends bidRequest>(request: R, defaultValue?: (FieldsSelection<bid, R> | undefined)) => Observable<(FieldsSelection<bid, R> | undefined)>}),
    
/** fetch data from the table: "bidder" */
bidder: ((args?: {
/** distinct select on columns */
distinct_on?: (bidder_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (bidder_order_by[] | null),
/** filter the rows returned */
where?: (bidder_bool_exp | null)}) => {get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>[]) => Observable<FieldsSelection<bidder, R>[]>})&({get: <R extends bidderRequest>(request: R, defaultValue?: FieldsSelection<bidder, R>[]) => Observable<FieldsSelection<bidder, R>[]>}),
    
/** fetch data from the table: "bidder" using primary key columns */
bidderByPk: ((args: {address: Scalars['String']}) => bidderObservableChain & {get: <R extends bidderRequest>(request: R, defaultValue?: (FieldsSelection<bidder, R> | undefined)) => Observable<(FieldsSelection<bidder, R> | undefined)>}),
    
/** fetch data from the table: "buy" */
buy: ((args?: {
/** distinct select on columns */
distinct_on?: (buy_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buy_order_by[] | null),
/** filter the rows returned */
where?: (buy_bool_exp | null)}) => {get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Observable<FieldsSelection<buy, R>[]>})&({get: <R extends buyRequest>(request: R, defaultValue?: FieldsSelection<buy, R>[]) => Observable<FieldsSelection<buy, R>[]>}),
    
/** fetch data from the table: "buy" using primary key columns */
buyByPk: ((args: {id: Scalars['bigint']}) => buyObservableChain & {get: <R extends buyRequest>(request: R, defaultValue?: (FieldsSelection<buy, R> | undefined)) => Observable<(FieldsSelection<buy, R> | undefined)>}),
    
/** fetch data from the table: "buyer" */
buyer: ((args?: {
/** distinct select on columns */
distinct_on?: (buyer_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (buyer_order_by[] | null),
/** filter the rows returned */
where?: (buyer_bool_exp | null)}) => {get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>[]) => Observable<FieldsSelection<buyer, R>[]>})&({get: <R extends buyerRequest>(request: R, defaultValue?: FieldsSelection<buyer, R>[]) => Observable<FieldsSelection<buyer, R>[]>}),
    
/** fetch data from the table: "buyer" using primary key columns */
buyerByPk: ((args: {address: Scalars['String']}) => buyerObservableChain & {get: <R extends buyerRequest>(request: R, defaultValue?: (FieldsSelection<buyer, R> | undefined)) => Observable<(FieldsSelection<buyer, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdupContract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdupContractByPk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdupContractMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdupContractMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdupHead: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdupHeadByPk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdupHeadStatus: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdupIndex: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdupIndexByPk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdupSchema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdupSchemaByPk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdupTokenMetadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdupTokenMetadataByPk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "from" */
from: ((args?: {
/** distinct select on columns */
distinct_on?: (from_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (from_order_by[] | null),
/** filter the rows returned */
where?: (from_bool_exp | null)}) => {get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>[]) => Observable<FieldsSelection<from, R>[]>})&({get: <R extends fromRequest>(request: R, defaultValue?: FieldsSelection<from, R>[]) => Observable<FieldsSelection<from, R>[]>}),
    
/** fetch data from the table: "from" using primary key columns */
fromByPk: ((args: {address: Scalars['String']}) => fromObservableChain & {get: <R extends fromRequest>(request: R, defaultValue?: (FieldsSelection<from, R> | undefined)) => Observable<(FieldsSelection<from, R> | undefined)>}),
    
/** fetch data from the table: "highest_bidder" */
highestBidder: ((args?: {
/** distinct select on columns */
distinct_on?: (highest_bidder_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (highest_bidder_order_by[] | null),
/** filter the rows returned */
where?: (highest_bidder_bool_exp | null)}) => {get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>[]) => Observable<FieldsSelection<highest_bidder, R>[]>})&({get: <R extends highest_bidderRequest>(request: R, defaultValue?: FieldsSelection<highest_bidder, R>[]) => Observable<FieldsSelection<highest_bidder, R>[]>}),
    
/** fetch data from the table: "highest_bidder" using primary key columns */
highestBidderByPk: ((args: {address: Scalars['String']}) => highest_bidderObservableChain & {get: <R extends highest_bidderRequest>(request: R, defaultValue?: (FieldsSelection<highest_bidder, R> | undefined)) => Observable<(FieldsSelection<highest_bidder, R> | undefined)>}),
    
/** fetch data from the table: "last_sale" */
lastSale: ((args?: {
/** distinct select on columns */
distinct_on?: (last_sale_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (last_sale_order_by[] | null),
/** filter the rows returned */
where?: (last_sale_bool_exp | null)}) => {get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Observable<FieldsSelection<last_sale, R>[]>})&({get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Observable<FieldsSelection<last_sale, R>[]>}),
    
/** fetch data from the table: "last_sale" using primary key columns */
lastSaleByPk: ((args: {id: Scalars['bigint']}) => last_saleObservableChain & {get: <R extends last_saleRequest>(request: R, defaultValue?: (FieldsSelection<last_sale, R> | undefined)) => Observable<(FieldsSelection<last_sale, R> | undefined)>}),
    
/** fetch data from the table: "sell" */
sell: ((args?: {
/** distinct select on columns */
distinct_on?: (sell_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (sell_order_by[] | null),
/** filter the rows returned */
where?: (sell_bool_exp | null)}) => {get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Observable<FieldsSelection<sell, R>[]>})&({get: <R extends sellRequest>(request: R, defaultValue?: FieldsSelection<sell, R>[]) => Observable<FieldsSelection<sell, R>[]>}),
    
/** fetch data from the table: "sell" using primary key columns */
sellByPk: ((args: {id: Scalars['bigint']}) => sellObservableChain & {get: <R extends sellRequest>(request: R, defaultValue?: (FieldsSelection<sell, R> | undefined)) => Observable<(FieldsSelection<sell, R> | undefined)>}),
    
/** fetch data from the table: "seller" */
seller: ((args?: {
/** distinct select on columns */
distinct_on?: (seller_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (seller_order_by[] | null),
/** filter the rows returned */
where?: (seller_bool_exp | null)}) => {get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>[]) => Observable<FieldsSelection<seller, R>[]>})&({get: <R extends sellerRequest>(request: R, defaultValue?: FieldsSelection<seller, R>[]) => Observable<FieldsSelection<seller, R>[]>}),
    
/** fetch data from the table: "seller" using primary key columns */
sellerByPk: ((args: {address: Scalars['String']}) => sellerObservableChain & {get: <R extends sellerRequest>(request: R, defaultValue?: (FieldsSelection<seller, R> | undefined)) => Observable<(FieldsSelection<seller, R> | undefined)>}),
    
/** fetch data from the table: "to" */
to: ((args?: {
/** distinct select on columns */
distinct_on?: (to_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (to_order_by[] | null),
/** filter the rows returned */
where?: (to_bool_exp | null)}) => {get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>[]) => Observable<FieldsSelection<to, R>[]>})&({get: <R extends toRequest>(request: R, defaultValue?: FieldsSelection<to, R>[]) => Observable<FieldsSelection<to, R>[]>}),
    
/** fetch data from the table: "to" using primary key columns */
toByPk: ((args: {address: Scalars['String']}) => toObservableChain & {get: <R extends toRequest>(request: R, defaultValue?: (FieldsSelection<to, R> | undefined)) => Observable<(FieldsSelection<to, R> | undefined)>})
}


/** columns and relationships of "to" */
export interface toPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
lastSales: ((args?: {
/** distinct select on columns */
distinct_on?: (last_sale_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (last_sale_order_by[] | null),
/** filter the rows returned */
where?: (last_sale_bool_exp | null)}) => {get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Promise<FieldsSelection<last_sale, R>[]>})&({get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Promise<FieldsSelection<last_sale, R>[]>})
}


/** columns and relationships of "to" */
export interface toObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
lastSales: ((args?: {
/** distinct select on columns */
distinct_on?: (last_sale_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (last_sale_order_by[] | null),
/** filter the rows returned */
where?: (last_sale_bool_exp | null)}) => {get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Observable<FieldsSelection<last_sale, R>[]>})&({get: <R extends last_saleRequest>(request: R, defaultValue?: FieldsSelection<last_sale, R>[]) => Observable<FieldsSelection<last_sale, R>[]>})
}