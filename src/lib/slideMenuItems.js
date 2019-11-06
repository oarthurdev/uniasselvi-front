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
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Edit user',
        router: {
          name: 'EditUser'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'User List',
        router: {
          name: 'UserList'
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
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Edit products',
        router: {
          name: 'EditProduct'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-usd',
    name: 'Purchase Requests',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Submit a order',
        router: {
          name: 'CreatePurchaseRequest'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Edit order',
        router: {
          name: 'EditPurchaseRequest'
        }
      }
    ]
  }
]
