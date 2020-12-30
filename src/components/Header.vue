<template>
  <div class="container">
    <div class="line"></div>
    <div class="container__background">
      <hooper :progress="true" :autoPlay="true" :playSpeed="3000" style="height: 312px">
        <slide>
          <div class="row">
            <div class="col">
              <img class="container__img" src="../assets/head-image.png" alt="upMiner Background">
            </div>
          </div>
        </slide>
        <slide>
          <div class="row">
            <div class="col">
              <img class="container__img" src="../assets/head-image2.png" alt="upMiner Background">
            </div>
          </div>
        </slide>
        <slide>
          <div class="row">
            <div class="col">
              <img class="container__img" src="../assets/head-image.png" alt="upMiner Background">
            </div>
          </div>
        </slide>
        <slide>
          <div class="row">
            <div class="col">
              <img class="container__img" src="../assets/head-image2.png" alt="upMiner Background">
            </div>
          </div>
        </slide>
      </hooper>
    </div>
    <div class="row">
        <div class="container__logo">
          <img src="../assets/upMiner.png" alt="Logo upMiner">
          <p class="container__title">| Histórico Empresarial</p>
        </div>
    </div>
    <div class="row">
      <p class="container__description">O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos <br>
      os fatos e acontecimentos relevantes de uma empresa desde o seu ano <br>
      de fundação </p>
    </div>
    <div class="know">
        <div class="know__price">
          <p class="know__price-moeda">R$</p> 
          <p class="know__price-valor">40,00</p>

          <router-link to="/historicoEmpresarial">
            <button class="know__price-button" href="#">Saiba mais</button>            
          </router-link>
        </div>
    </div>

    <Card />
  </div>
</template>

<script>
import Card from './Card'
import { Hooper, Slide } from 'hooper';

import 'hooper/dist/hooper.css';

export default {
  name: 'Header',
  components: {
    Card,
    Hooper,
    Slide,
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

.col {
  padding: 0;
}

.line {
  position: absolute;
  width: 100%;
  border-bottom: 5px solid $button-color2;
  margin-top: 307px;
  z-index: 1;
  /* float: right; */
}

.container__background {
  position: absolute;
  width: 100%;
  height: 312px;
  /* float: right; */
}

.container__img {
  width: 100%;
  height: 312px;
  /* float: right; */
}

.container__logo {
  position: absolute;
  display: flex; 
  align-items: center;
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
  width: 630px;
  left: 96px;
  top: 117px;
  font-family: 'Roboto', sans-serif;
  font-size: 19px;
  text-align: justify;
  font-weight: 300;
}

.know {
  position: absolute;
  display: flex;
  align-items: center;
  width: auto;
  left: 96px;
  top: 200px;
  padding: 20px;
  z-index: 1;

  .know__price {
    display: flex;
    align-items: center;
    width: 100%;
    left: 20px;
    top: 232px;
    padding: 0;
  }
    

  .know__price-moeda {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    left: 92px;
    margin: 0;
  }

  .know__price-valor {
    /* position: relative; */
    font-family: 'Roboto', sans-serif;
    font-size: 37px;
    font-weight: 400;
    color: #ffffff;
    left: 92px;
    margin: 0 0 0 5px
  }

  .know__price-button {
    width: 111px;
    height: 33px;
    left: 92px;
    margin-left: 20px;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #ffffff;
    background-image: linear-gradient(to right, $button-color1, $button-color2);
    border-radius: 5px;
    border: 0;
    outline: none;
    padding: 0;
  }

  .know__price-button:hover {
    opacity: 0.9;
  }

  .know__price-button:active {
    color: #fff;
    background-image: linear-gradient(to right, $button-color1, $button-color2);
    border: 0;
    border-radius: 5px;
    box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
  }
}

*:focus {
    outline: 0 !important;
}

@media (max-width: 830px) {
  .container__logo {
    top: 30px;
    left: 30px;
  }

  .container__description {
    width: 400px;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    text-align: justify;
    font-weight: 300;
    top: 80px;
    left: 30px;

  }
}

@media (max-width: 575.98px) {
  .container__title {
    margin-right: 150px;
    width: auto;
    font-size: 25px;
  }

  .line {
    position: absolute;
    width: 100%;
    /* margin-left:-995px; */
    float: right;
  }

  .container__logo {
    top: 10px;
    left: 10px;
  }

  .container__description {
    width: 400px;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    text-align: justify;
    font-weight: 300;
    top: 90px;
    left: 10px;

  }

  .know {
    margin: 10px 50px 0 0;
    left: 5px;
  }

  .container__description {
    padding-right: 30px;
    width: 400px;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    text-align: justify;
    font-weight: 300;
    top: 90px;
    left: 10px;

  }

}

</style>

