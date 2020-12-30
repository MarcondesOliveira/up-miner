import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header.vue'
import HistoricoEmpresarial from './components/HistoricoEmpresarial.vue'
import Profissional from './components/Profissional.vue'
import Reguladores from './components/Reguladores.vue'
import SocioAmbiental from './components/SocioAmbiental.vue'
import Juridico from './components/Juridico.vue'
import ListasRestritivas from './components/ListasRestritivas.vue'
import MidiaInternet from './components/MidiaInternet.vue'
import BensImoveis from './components/BensImoveis.vue'
import Cadastro from './components/Cadastro.vue'
import Financeiro from './components/Financeiro.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header
    },
    {
      path: '/historicoEmpresarial',
      name: 'historicoEmpresarial',
      component: HistoricoEmpresarial
    },
    {
      path: '/Profissional',
      name: 'profissional',
      component: Profissional
    },
    {
      path: '/Reguladores',
      name: 'reguladores',
      component: Reguladores
    },
    {
      path: '/SocioAmbiental',
      name: 'socioAmbiental',
      component: SocioAmbiental
    },
    {
      path: '/Juridico',
      name: 'juridico',
      component: Juridico
    },
    {
      path: '/ListasRestritivas',
      name: 'ListasRestritivas',
      component: ListasRestritivas
    },
    {
      path: '/MidiaInternet',
      name: 'MidiaInternet',
      component: MidiaInternet
    },
    {
      path: '/BenseImoveis',
      name: 'BenseImoveis',
      component: BensImoveis
    },
    {
      path: '/Cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/Financeiro',
      name: 'Financeiro',
      component: Financeiro
    }
  ]  
})