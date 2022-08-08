<template>
  <div>
    <h1>Last sale</h1>
    <ul>
      <li v-for="item in lastSale" :key="item.id">     
          Ask Id: {{ item.askId }}
          Amount: {{ item.amount }}
          From Id: {{ item.fromId }}
          To Id: {{ item.toId }}
          Token id: {{ item.tokenId }}
          Token quantity:{{ item.tokenQty }}
      </li>
    </ul>
    <h1>Lowest ask</h1>
    <ul>
      <li v-for="item in ask" :key="item.id">     
          Asker Id: {{ item.askerId }}
          Amount: {{ item.amount }}
          Editions: {{ item.editions }}
          timestamp: {{ item.timestamp }}
          Token id: {{ item.tokenId }}
      </li>
    </ul>
    <h1>Highest Bid</h1>
    <ul>
      <li v-for="item in bid" :key="item.id">     
          Bidder Id: {{ item.bidderId }}
          Amount: {{ item.price }}
          Editions: {{ item.editions }}
          timestamp: {{ item.timestamp }}
          Token id: {{ item.tokenId }}
          HighestBidderId: {{ item.highestBidderId }}
      </li>
    </ul>
  </div>

</template>

<script>
import lastSale from '~/apollo/queries/fetchLastSale'
import ask from '~/apollo/queries/fetchAsk'
import bid from '~/apollo/queries/fetchBid'
export default {
  apollo: {
    lastSale: {
      prefetch: true,
      query: lastSale
    },
    ask: {
      prefetch: true,
      query: ask
    },
    bid: {
      prefetch: true,
      query: bid
    }
  },
  head: {
    title: 'lastSales of Blog'
  }
}
</script>
