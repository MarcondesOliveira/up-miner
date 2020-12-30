<template>
  <div class="container">
    <div class="line"></div>
    <div class="container__background">
      <div class="row">
        <div class="col">
          <img class="container__img" src="../assets/head-image2.png" alt="upMiner Background">
        </div>
      </div>
    </div>
    <div class="row">
        <div class="container__logo">
          <img src="../assets/upMiner2.png" alt="Logo upMiner">
          <p class="container__title">| Financeiro</p>
        </div>
    </div>
    <div class="row">
      <p class="container__description">O aplicativo Financeiro permite ao usuário ter acesso a todos <br>
      os fatos e acontecimentos relevantes de uma empresa desde o seu ano <br>
      de fundação </p>
    </div>
    <div class="know">
        <div class="know__price">
          <p class="know__price-moeda">R$</p> 
          <p class="know__price-valor">40,00</p>

          <button class="know__price-button" href="#">Saiba mais</button>
        </div>
    </div>

    <div class="component-body">
      <router-link to="/">
        <div class="voltar">
          <img class="voltar__arrow" src="../assets/arrow_back.svg" alt="">
          <a href="#">Início</a>   
        </div>         
      </router-link>
      <div class="linha-do-tempo">
        <hooper :settings="hooperSettings" style="height: 320px">
          <slide >
            <div class="linha-do-tempo__item">
              <div><img src="../assets/linha-do-tempo.jpg" alt=""> </div>
              <div><p class="linha-do-tempo__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit perspiciatis modi ad rem amet.</p></div>
            </div>
          </slide>
          <slide >
            <div class="linha-do-tempo__item">
              <div><img src="../assets/linha-do-tempo.jpg" alt=""> </div>
              <div><p class="linha-do-tempo__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit perspiciatis modi ad rem amet.</p></div>
            </div>
          </slide>
          <slide >
            <div class="linha-do-tempo__item">
              <div><img src="../assets/linha-do-tempo.jpg" alt=""> </div>
              <div><p class="linha-do-tempo__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit perspiciatis modi ad rem amet.</p></div>       
            </div>
          </slide>
          <slide >
            <div class="linha-do-tempo__item">
              <div><img src="../assets/linha-do-tempo.jpg" alt=""> </div>
              <div><p class="linha-do-tempo__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit perspiciatis modi ad rem amet.</p></div>        
            </div>
          </slide>
          <slide >
            <div class="linha-do-tempo__item">
              <div><img src="../assets/linha-do-tempo.jpg" alt=""> </div>
              <div><p class="linha-do-tempo__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit perspiciatis modi ad rem amet.</p></div>         
            </div>
          </slide>
          <slide >
            <div class="linha-do-tempo__item">
              <div><img src="../assets/linha-do-tempo.jpg" alt=""> </div>
              <div><p class="linha-do-tempo__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo suscipit perspiciatis modi ad rem amet.</p></div>
            </div>
          </slide>
          

          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
      <div class="full_description">
        <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação. Tenha acesso aos principais eventos corporativos de uma empresa, como: marcos jurídicos, mudança no quadro societário, aumento de capital reportagens e muito mais.</p>
        <p>Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF.</p>
      </div>

      <div class="enable">
        <div class="enable__price">
          <p class="enable__price-moeda">R$</p> 
          <p class="enable__price-valor">40,00</p>
          <button class="enable__price-button" href="#">Habilitar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';
import 'hooper/dist/hooper.css';


export default {
  name: 'Financeiro',
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  props: {
    msg: String
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        breakpoints: {
          510: {
            centerMode: true,
            itemsToShow: 1,
          },
          1200: {
            itemsToShow: 2,
            centerMode: false,
          }
        }
      }
    };
  },
  mounted () {
    window.scrollTo(0, 0)
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
/* 455 */

.component-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 330px;
  /* border: 2px solid rgb(0, 68, 255); */
  /* padding: 0 65px; */
}

.voltar {  
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 0;
}

.linha-do-tempo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 60px;
  border: 2 solid red;
}

.linha-do-tempo__arrow {
  height: 35px;
}

.linha-do-tempo__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
} 

.linha-do-tempo__description {
  color: $button-color2;
  font-family: "Roboto", sans-serif;
  font-size: 14.55px;
  font-weight: 400;
  text-align: justify;
  width: 455px;
  margin-top: 20px;
}

.full_description {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  width: auto;
  padding: 40px 40px 20px;
  text-align: justify;
}

a {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: $button-color2;
    margin-left: 5px;
}

.enable {
  display: flex;
  margin-bottom: 50;
  padding: 20px 40px;

  .enable__price {
    display: flex;
    align-items: center;
    width: 100%;
    left: 20px;
    top: 232px;
    padding: 0;
  }
    

  .enable__price-moeda {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: rgb(2, 0, 0);
    left: 92px;
    margin: 0;
  }

  .enable__price-valor {
    font-family: 'Roboto', sans-serif;
    font-size: 37px;
    font-weight: 400;
    color: rgb(0, 0, 0);
    left: 92px;
    margin: 0 0 0 5px
  }

  .enable__price-button {
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

  .enable__price-button:hover {
    opacity: 0.9;
  }

  .enable__price-button:active {
    color: #fff;
    background-image: linear-gradient(to right, $button-color1, $button-color2);
    border: 0;
    border-radius: 5px;
    box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
  }
}

.container {
  /* border: 2px solid rgb(255, 0, 0); */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 65px;
}

/* .col {
  padding: 0;
} */

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
  float: right;
}

.container__img {
  width: 100%;
  height: 312px;
  float: right;
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
  color: #000000;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 32px;
  margin: 0 0 0 5px;
}

.container__description {
  position: absolute;
  color: #000000;
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
    color: #000000;
    left: 92px;
    margin: 0;
  }

  .know__price-valor {
    /* position: relative; */
    font-family: 'Roboto', sans-serif;
    font-size: 37px;
    font-weight: 400;
    color: #000000;
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
    color: #fff;
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
    /* color: rgb(255, 255, 255); */
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    text-align: justify;
    font-weight: 300;
    top: 80px;
    left: 30px;

  }
}

@media (max-width: 575.98px) {

  .component-body {
    width: 350px;
  }

  /* .container__img  {
    float: right;
    opacity: 0.8;    
  } */

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
    /* color: #000000; */
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
    /* color: rgb(255, 255, 255); */
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    text-align: justify;
    font-weight: 300;
    top: 90px;
    left: 10px;

  }


}

@media (max-width: 780px) {
  .linha-do-tempo__description {
    width: auto;
    padding: 0 20px;
  }
}

/* 
@media (max-width: 1200px) {
  .container  {
    width: 100%;
  }
} */

</style>

