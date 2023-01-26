
var ask_possibleTypes = ['ask']
export var isask = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isask"')
  return ask_possibleTypes.includes(obj.__typename)
}



var ask_auction_possibleTypes = ['ask_auction']
export var isask_auction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isask_auction"')
  return ask_auction_possibleTypes.includes(obj.__typename)
}



var asker_possibleTypes = ['asker']
export var isasker = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isasker"')
  return asker_possibleTypes.includes(obj.__typename)
}



var auction_creator_possibleTypes = ['auction_creator']
export var isauction_creator = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_creator"')
  return auction_creator_possibleTypes.includes(obj.__typename)
}



var bid_possibleTypes = ['bid']
export var isbid = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbid"')
  return bid_possibleTypes.includes(obj.__typename)
}



var bidder_possibleTypes = ['bidder']
export var isbidder = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbidder"')
  return bidder_possibleTypes.includes(obj.__typename)
}



var buy_possibleTypes = ['buy']
export var isbuy = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuy"')
  return buy_possibleTypes.includes(obj.__typename)
}



var buyer_possibleTypes = ['buyer']
export var isbuyer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuyer"')
  return buyer_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_possibleTypes = ['dipdup_contract']
export var isdipdup_contract = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_metadata_possibleTypes = ['dipdup_contract_metadata']
export var isdipdup_contract_metadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata"')
  return dipdup_contract_metadata_possibleTypes.includes(obj.__typename)
}



var dipdup_head_possibleTypes = ['dipdup_head']
export var isdipdup_head = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



var dipdup_head_status_possibleTypes = ['dipdup_head_status']
export var isdipdup_head_status = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_status"')
  return dipdup_head_status_possibleTypes.includes(obj.__typename)
}



var dipdup_index_possibleTypes = ['dipdup_index']
export var isdipdup_index = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



var dipdup_schema_possibleTypes = ['dipdup_schema']
export var isdipdup_schema = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



var dipdup_token_metadata_possibleTypes = ['dipdup_token_metadata']
export var isdipdup_token_metadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata"')
  return dipdup_token_metadata_possibleTypes.includes(obj.__typename)
}



var from_possibleTypes = ['from']
export var isfrom = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfrom"')
  return from_possibleTypes.includes(obj.__typename)
}



var highest_bidder_possibleTypes = ['highest_bidder']
export var ishighest_bidder = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ishighest_bidder"')
  return highest_bidder_possibleTypes.includes(obj.__typename)
}



var last_sale_possibleTypes = ['last_sale']
export var islast_sale = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "islast_sale"')
  return last_sale_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
export var isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var sell_possibleTypes = ['sell']
export var issell = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issell"')
  return sell_possibleTypes.includes(obj.__typename)
}



var seller_possibleTypes = ['seller']
export var isseller = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isseller"')
  return seller_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
export var issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



var to_possibleTypes = ['to']
export var isto = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isto"')
  return to_possibleTypes.includes(obj.__typename)
}
