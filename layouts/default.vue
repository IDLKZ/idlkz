<template>
  <section class="section">
    <nav-bar></nav-bar>
    <nuxt/>
    <footer-bar></footer-bar>


  </section>
</template>


<script>
  import NavBar from '../components/NavBar'
  import FooterBar from '../components/FooterBar'
  import 'hooper/dist/hooper.css';
  export default {
    components:{
      NavBar,FooterBar
    }
  }

</script>

<style lang="scss">
body{
  background-color: #050510;
  font-family: 'Ledger', serif;
}

</style>

