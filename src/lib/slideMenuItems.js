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
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Editar Cadastro',
        router: {
          name: 'EditarCadastroGM'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Excluir Cadastro',
        router: {
          name: 'ExcluirCadastroGM'
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
  }
]
