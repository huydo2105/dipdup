import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumaskAuctionSelectColumn: {
  readonly auctionCreatorId: 'auctionCreatorId'
  readonly endTime: 'endTime'
  readonly id: 'id'
  readonly level: 'level'
  readonly priceIncrement: 'priceIncrement'
  readonly reserve: 'reserve'
  readonly startTime: 'startTime'
  readonly timestamp: 'timestamp'
  readonly tokenAddress: 'tokenAddress'
  readonly tokenId: 'tokenId'
}

export declare const enumaskSelectColumn: {
  readonly amount: 'amount'
  readonly askerId: 'askerId'
  readonly editions: 'editions'
  readonly id: 'id'
  readonly level: 'level'
  readonly timestamp: 'timestamp'
  readonly tokenAddress: 'tokenAddress'
  readonly tokenId: 'tokenId'
}

export declare const enumaskerSelectColumn: {
  readonly address: 'address'
}

export declare const enumauctionCreatorSelectColumn: {
  readonly address: 'address'
}

export declare const enumbidSelectColumn: {
  readonly bidderId: 'bidderId'
  readonly endTime: 'endTime'
  readonly highestBidderId: 'highestBidderId'
  readonly id: 'id'
  readonly level: 'level'
  readonly price: 'price'
  readonly startTime: 'startTime'
  readonly timestamp: 'timestamp'
  readonly tokenAddress: 'tokenAddress'
  readonly tokenId: 'tokenId'
}

export declare const enumbidderSelectColumn: {
  readonly address: 'address'
}

export declare const enumbuySelectColumn: {
  readonly buyAmount: 'buyAmount'
  readonly buyFrom: 'buyFrom'
  readonly buyerId: 'buyerId'
  readonly id: 'id'
  readonly level: 'level'
  readonly timestamp: 'timestamp'
  readonly tokenAddress: 'tokenAddress'
  readonly tokenId: 'tokenId'
}

export declare const enumbuyerSelectColumn: {
  readonly address: 'address'
}

export declare const enumdipdupContractMetadataSelectColumn: {
  readonly contract: 'contract'
  readonly createdAt: 'createdAt'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly updateId: 'updateId'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupContractSelectColumn: {
  readonly address: 'address'
  readonly createdAt: 'createdAt'
  readonly name: 'name'
  readonly typename: 'typename'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupHeadSelectColumn: {
  readonly createdAt: 'createdAt'
  readonly hash: 'hash'
  readonly level: 'level'
  readonly name: 'name'
  readonly timestamp: 'timestamp'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupHeadStatusSelectColumn: {
  readonly name: 'name'
  readonly status: 'status'
}

export declare const enumdipdupIndexSelectColumn: {
  readonly configHash: 'configHash'
  readonly createdAt: 'createdAt'
  readonly level: 'level'
  readonly name: 'name'
  readonly status: 'status'
  readonly template: 'template'
  readonly templateValues: 'templateValues'
  readonly type: 'type'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupSchemaSelectColumn: {
  readonly createdAt: 'createdAt'
  readonly hash: 'hash'
  readonly name: 'name'
  readonly reindex: 'reindex'
  readonly updatedAt: 'updatedAt'
}

export declare const enumdipdupTokenMetadataSelectColumn: {
  readonly contract: 'contract'
  readonly createdAt: 'createdAt'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly tokenId: 'tokenId'
  readonly updateId: 'updateId'
  readonly updatedAt: 'updatedAt'
}

export declare const enumfromSelectColumn: {
  readonly address: 'address'
}

export declare const enumhighestBidderSelectColumn: {
  readonly address: 'address'
}

export declare const enumlastSaleSelectColumn: {
  readonly amount: 'amount'
  readonly askId: 'askId'
  readonly fromId: 'fromId'
  readonly id: 'id'
  readonly level: 'level'
  readonly timestamp: 'timestamp'
  readonly toId: 'toId'
  readonly tokenId: 'tokenId'
  readonly tokenQty: 'tokenQty'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumsellSelectColumn: {
  readonly id: 'id'
  readonly level: 'level'
  readonly saleAmount: 'saleAmount'
  readonly sellerId: 'sellerId'
  readonly timestamp: 'timestamp'
  readonly tokenAddress: 'tokenAddress'
  readonly tokenId: 'tokenId'
}

export declare const enumsellerSelectColumn: {
  readonly address: 'address'
}

export declare const enumtoSelectColumn: {
  readonly address: 'address'
}
