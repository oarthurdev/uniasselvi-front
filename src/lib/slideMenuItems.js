module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'item',
    icon: 'fa fa-home',
    name: 'Home',
    router: {
      name: 'Home'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-user',
    name: 'Gerenciar Usuários',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Procurar Jogador',
        router: {
          name: 'ProcurarJogador'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Descobrir ID',
        router: {
          name: 'DescobrirID'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Enviar Itens',
        router: {
          name: 'EnviarItens'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Punir Jogador',
        router: {
          name: 'PunirJogador'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Jogadores Punidos',
        router: {
          name: 'JogadoresPunidos'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Usuários Online',
        router: {
          name: 'UsersOnline'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-user',
    name: 'Gerenciar GMs',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Cadastrar Game Master',
        router: {
          name: 'CadastrarGameMaster'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'GMs Cadastrados',
        router: {
          name: 'GMsCadastrados'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-circle',
    name: 'Diversos',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Send message to users',
        router: {
          name: 'EnviarMensagem'
        }
      }
    ]
  },
  {
    type: 'item',
    icon: 'fa fa-book',
    name: 'Logs',
    router: {
      name: 'Logs'
    }
  },
  {
    type: 'item',
    icon: 'fa fa-wrench',
    name: 'Manutenção',
    router: {
      name: 'Maintenance'
    }
  }
]
