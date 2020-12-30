<template>
  <div class="container">
    <div class="apps">
      <div class="apps__bar">
        <button
          v-for="(entry, index) in filterList"
          :item="entry"
          :key="index"
          @click="filter = entry"
          class="apps__button"
        >        
          <div class="apps__button--flex">            
            <!-- <img class="apps__buttonIcons" :src="entry.icon" alt="Icone" /> -->
            <p class="apps__name">{{ entry }}</p>
          </div>
        </button>
      </div>
      <div class="apps__group">
        <div v-for="(entry, index) in apps" :key="index" class="apps__cards">
          <div class="apps__content">
            <img class="apps__groupIcons" :src="entry.icon" alt="Todos" />
            <h2 class="apps__title">{{ entry.mainApps }}</h2>
            <p class="apps__description">
              {{ entry.info }} 
            </p>
          </div>
          <div class="apps__price">
            <p class="apps__value">R$ {{ entry.price }}</p>
            <router-link :to="`${entry.mainApps.replace(' ', '').normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')}`">
              Saiba mais          
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: String,
  },
  data: function () {
    return {
      fkey: "mainApps",
      filterList: [
        "Todos",
        "Profissional",
        "Reguladores",
        "Sócio Ambiental",
        "Jurídico",
        "Listas Restritivas",
        "Mídia / Internet",
        "Bens e Imóveis",
        "Cadastro",
        "Financeiro",
      ],
      filter: "Todos",
      apps: [],
      fetchedApps: [],      
    };
  },
  created() {
    var apiURL = "http://localhost:3000/apps";
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => (this.fetchedApps = res))
      .catch((error) => console.log(error));
  },
  watch: {
    fetchedApps: function () {
      this.apps = this.fetchedApps;
    },
    filter: function (val) {
      this.apps =
        val !== "Todos"
          ? this.fetchedApps.filter((f) => f.mainApps === val)
          : this.fetchedApps;
    },
  },
  methods: {
    readValue() {
      this.apps.forEach(function(icon) {
        console.log(icon)
        return icon
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

$button-color1: #ff924e;
$button-color2: #f0690a;

.container {
  width: 100%;
  margin-top: 312px;
}

button {
  width: 123.5px;
  height: 85px;
  left: 92px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #696969;
  background-color: #fff;
  border-style: none;
  outline: none;
}

button:hover {
  opacity: 0.9;
}

button:active {
  color: #fff;
  background-image: linear-gradient(to right, $button-color1, $button-color2);
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
}

*:focus {
  outline: 0 !important;
  background-image: linear-gradient(to right, $button-color1, $button-color2);
  border-radius: 5px;
  color: #fff;
}

.apps__bar {
  padding-top: 15px;
}

.apps__button {
  border: 0.5px solid #e9e9e9;
}

.apps__name {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
}

.apps__button--flex {
  display: flex;
  flex-direction: column;
}

.apps__buttonIcons {
  height: 24px;
  margin-bottom: 10px;
}

.apps__groupIcons {
  height: 32px;
  margin-bottom: 10px;
}

.apps__group {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
}

.apps__cards {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 17.5px;
  height: 315px;
  width: 305px;
  border-radius: 5px;
  box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
}

.apps__content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  height: 253px;
  padding: 21px;
  border-radius: 5px 5px 0 0;

  .apps__title {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
  }

  .apps__description {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
  }
}

.apps__price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(to right, $button-color1, $button-color2);
  height: 51px;
  padding: 0 21px;
  border-radius: 0 0 5px 5px;
  color: #fff;

  .apps__value {
    font-family: "Roboto", sans-serif;
    font-size: 22px;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>