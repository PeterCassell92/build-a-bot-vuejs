<template>
  <div class="page-container">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png"/>
              Build a Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Build' }" exact >
              Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact >
              Cart
            </router-link>
            <div class="cart-items">{{cart.length}}</div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

:root{
  --screen-small: 520px;
  --screen-medium: 768px;
  --screen-large: 992px;
  --screen-xl: 1200px;
  --screen-xxl: 1400px;
}
</style>

<style lang="scss" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main{
  flex-grow: 1;
  position: relative;
  padding: 30px;
  background-color: white;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 100%;

}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.nav-item.cart{
  position: relative;
  margin-left: auto;
  border-right: none;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

.page-container{
  margin: 0 auto;
  width: 340px;
}

@media screen and (min-width:520px) {
  .page-container{
    width: 420px;
  }
}

@media screen and (min-width:768px) {
  .page-container{
    width: 690px;
  }
}

@media screen and (min-width:992px) {
  .page-container{
    width: 900px;
  }
}

@media screen and (min-width:1200px) {
  .page-container{
    width: 1110px;
  }
}

@media screen and (min-width:1400px) {
  .page-container{
    width: 1320px;
  }
}
.nav-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  color:white;
}

.container{
  display:flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside{
  padding:30px;
  background-color: grey;
  width: 100px;
  min-height: 300px;
}

</style>
