<template>
  <div class="container">
    <Header
      styleHeader="color : #fff"
      link="/historicoEmpresarial"
    />
    <Card />
  </div>
</template>

<script>
import Header from './Header'
import Card from './Card'
export default {
  name: 'Principal',
  components: {
    Header,
    Card,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import 'bootstrap';
$button-color1: #ff924e;
$button-color2: #f0690a;
.container {
  display: flex;
  
  flex-direction: column;
  align-items: center;
  width: 100%;
}

</style>