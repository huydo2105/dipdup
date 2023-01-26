import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.10.0'
assertSameVersion(version)

export var createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'http://127.0.0.1:8080/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumaskAuctionSelectColumn = {
  auctionCreatorId: 'auctionCreatorId',
  endTime: 'endTime',
  id: 'id',
  level: 'level',
  priceIncrement: 'priceIncrement',
  reserve: 'reserve',
  startTime: 'startTime',
  timestamp: 'timestamp',
  tokenAddress: 'tokenAddress',
  tokenId: 'tokenId',
}

export const enumaskSelectColumn = {
  amount: 'amount',
  askerId: 'askerId',
  editions: 'editions',
  id: 'id',
  level: 'level',
  timestamp: 'timestamp',
  tokenAddress: 'tokenAddress',
  tokenId: 'tokenId',
}

export const enumaskerSelectColumn = {
  address: 'address',
}

export const enumauctionCreatorSelectColumn = {
  address: 'address',
}

export const enumbidSelectColumn = {
  bidderId: 'bidderId',
  endTime: 'endTime',
  highestBidderId: 'highestBidderId',
  id: 'id',
  level: 'level',
  price: 'price',
  startTime: 'startTime',
  timestamp: 'timestamp',
  tokenAddress: 'tokenAddress',
  tokenId: 'tokenId',
}

export const enumbidderSelectColumn = {
  address: 'address',
}

export const enumbuySelectColumn = {
  buyAmount: 'buyAmount',
  buyFrom: 'buyFrom',
  buyerId: 'buyerId',
  id: 'id',
  level: 'level',
  timestamp: 'timestamp',
  tokenAddress: 'tokenAddress',
  tokenId: 'tokenId',
}

export const enumbuyerSelectColumn = {
  address: 'address',
}

export const enumdipdupContractMetadataSelectColumn = {
  contract: 'contract',
  createdAt: 'createdAt',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  updateId: 'updateId',
  updatedAt: 'updatedAt',
}

export const enumdipdupContractSelectColumn = {
  address: 'address',
  createdAt: 'createdAt',
  name: 'name',
  typename: 'typename',
  updatedAt: 'updatedAt',
}

export const enumdipdupHeadSelectColumn = {
  createdAt: 'createdAt',
  hash: 'hash',
  level: 'level',
  name: 'name',
  timestamp: 'timestamp',
  updatedAt: 'updatedAt',
}

export const enumdipdupHeadStatusSelectColumn = {
  name: 'name',
  status: 'status',
}

export const enumdipdupIndexSelectColumn = {
  configHash: 'configHash',
  createdAt: 'createdAt',
  level: 'level',
  name: 'name',
  status: 'status',
  template: 'template',
  templateValues: 'templateValues',
  type: 'type',
  updatedAt: 'updatedAt',
}

export const enumdipdupSchemaSelectColumn = {
  createdAt: 'createdAt',
  hash: 'hash',
  name: 'name',
  reindex: 'reindex',
  updatedAt: 'updatedAt',
}

export const enumdipdupTokenMetadataSelectColumn = {
  contract: 'contract',
  createdAt: 'createdAt',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  tokenId: 'tokenId',
  updateId: 'updateId',
  updatedAt: 'updatedAt',
}

export const enumfromSelectColumn = {
  address: 'address',
}

export const enumhighestBidderSelectColumn = {
  address: 'address',
}

export const enumlastSaleSelectColumn = {
  amount: 'amount',
  askId: 'askId',
  fromId: 'fromId',
  id: 'id',
  level: 'level',
  timestamp: 'timestamp',
  toId: 'toId',
  tokenId: 'tokenId',
  tokenQty: 'tokenQty',
}

export const enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

export const enumsellSelectColumn = {
  id: 'id',
  level: 'level',
  saleAmount: 'saleAmount',
  sellerId: 'sellerId',
  timestamp: 'timestamp',
  tokenAddress: 'tokenAddress',
  tokenId: 'tokenId',
}

export const enumsellerSelectColumn = {
  address: 'address',
}

export const enumtoSelectColumn = {
  address: 'address',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
