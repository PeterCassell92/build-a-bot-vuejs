<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{currency(robot.cost,'£')}}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="sale-items">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            <!-- old filter (Vue v1, v2 not vue3) {{robot.cost | currency}} -->
            {{currency(robot.cost, '£')}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
import currencyFilter from '../shared/currencyFilter';

export default {
  name: 'Cart',
  // vue v.1 v.2 only
  // filters: {
  //   currency: currencyFilter,
  // },
  methods: {
    currency: currencyFilter,
  },
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters.cartSaleItems;
    },
  },
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }

  .sale-items{
    margin-top: 50px;
    font-size: 18px;
    color: red;
  }
</style>
