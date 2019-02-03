import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login.vue'
import ProcurarJogador from 'pages/gerenciar-player/ProcurarJogador.vue'
import DescobrirID from 'pages/gerenciar-player/DescobrirID.vue'
import JogadoresPunidos from 'pages/gerenciar-player/JogadoresPunidos.vue'
import PunirJogador from 'pages/gerenciar-player/PunirJogador.vue'
import EnviarItens from 'pages/gerenciar-player/EnviarItens.vue'
import UsersOnline from 'pages/gerenciar-player/UsersOnline.vue'
import CadastrarGameMaster from 'pages/gerenciar-gm/CadastrarGm.vue'
import GMsCadastrados from 'pages/gerenciar-gm/GMsCadastrados.vue'
import ProfileGM from 'components/Profile.vue'
import Logs from 'components/Logs.vue'
import Maintenance from 'components/Maintenance.vue'
import EnviarMensagem from 'pages/diversos/EnviarMensagem.vue'
import Home from 'components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/procurar-jogador',
      name: 'ProcurarJogador',
      component: ProcurarJogador
    },
    {
      path: '/descobrir-id',
      name: 'DescobrirID',
      component: DescobrirID
    },
    {
      path: '/jogadores-punidos',
      name: 'JogadoresPunidos',
      component: JogadoresPunidos
    },
    {
      path: '/enviar-itens',
      name: 'EnviarItens',
      component: EnviarItens
    },
    {
      path: '/usuarios-online',
      name: 'UsersOnline',
      component: UsersOnline
    },
    {
      path: '/send-message',
      name: newFunction(),
      component: EnviarMensagem
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Logs
    },
    {
      path: '/maintenance',
      name: 'Maintenance',
      component: Maintenance
    },
    {
      path: '/punir-jogador',
      name: 'PunirJogador',
      component: PunirJogador
    },
    {
      path: '/profile',
      name: 'ProfileGM',
      component: ProfileGM
    },
    {
      path: '/cadastrar-game-master',
      name: 'CadastrarGameMaster',
      component: CadastrarGameMaster
    },
    {
      path: '/gms-cadastrados',
      name: 'GMsCadastrados',
      component: GMsCadastrados
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ],
  linkActiveClass: 'active'
})
function newFunction () {
  return 'EnviarMensagem'
}

