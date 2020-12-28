<template>
  <div class="container">
    <div class="line"></div>
    <div class="container__background">
      <div class="row">
        <div class="col">
          <img class="container__img" src="../assets/head-image.png" alt="upMiner Background">
        </div>
      </div>
    </div>
    <div class="row">
        <div class="container__logo">
          <img src="../assets/upMiner.png" alt="Logo upMiner">
          <h3 class="container__title">| Histórico Empresarial</h3>
        </div>
    </div>
    <div class="row">
      <p class="container__description">O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos <br>
      os fatos e acontecimentos relevantes de uma empresa desde o seu ano <br>
      de fundação </p>
    </div>
    <div class="row">
        <div class="price">
        <p class="price__moeda">R$</p> 
        <p class="price__valor">40,00</p>

        <button class="price__button" href="#">Saiba mais</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
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
  justify-content: center;
}

.line {
  position: absolute;
  width: 1366px;
  border-bottom: 5px solid $button-color2;
  margin-top: 307px;
  z-index: 1;
}

.container__background {
  position: absolute;
  width: 1366px;
  height: 312px;
}

.container__img {
  width: 1366px;
  height: 312px;
}

.container__logo {
  position: absolute;
  display: flex; 
  align-items: center;
  /* margin-left: 92px; */
  left: 96px;
  top: 48px;
  width: auto;
  height: auto;
}

.container__title {
  color: #fff;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 32px;
  margin: 0 0 0 5px;
}

.container__description {
  position: absolute;
  color: #fff;
  /* margin-left: 92px; */
  width: auto;
  left: 96px;
  top: 117px;
  font-family: 'Roboto', sans-serif;
  font-size: 19px;
  text-align: justify;
  font-weight: 300;
}

.price {
  position: absolute;
  display: flex;
  align-items: center;
  width: auto;
  left: 20px;
  top: 232px;
  padding: 0;
}
  

.price__moeda {
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #fff;
  left: 92px;
  margin: 0;
}

.price__valor {
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 37px;
  font-weight: bold;
  color: #fff;
  left: 92px;
  margin: 0 0 0 5px
}

.price__button {
  width: 111px;
  height: 33px;
  position: relative;
  left: 92px;
  margin-left: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(to right, $button-color1, $button-color2);
  border-radius: 5px;
  border: 0;
  outline: none;
  padding: 0;
}

*:focus {
    outline: 0 !important;
}

.price__button:hover {
  opacity: 0.9;
}

@media (max-width: 575.98px) {
  .container__img  {
    margin-left:-995px;
    opacity: 0.5;
  }

  .line {
  margin-left:-995px;
}

  .container__description {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    text-align: justify;
    font-weight: bold;

  }
}

@media (max-width: 1200px) {
  .container  {
    width: 100%;
  }
}

</style>

