module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'item',
    icon: 'fa fa-dashboard',
    name: 'Dashboard',
    router: {
      name: 'Dashboard'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-user',
    name: 'Manage Users',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Create user',
        router: {
          name: 'CreateUser'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-usd',
    name: 'Manage Products',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Create products',
        router: {
          name: 'CreateProduct'
        }
      }
    ]
  }
]
