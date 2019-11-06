<template>
<div>
  <section class="content-header">
    <h1>
      Order List
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Order List</li>
    </ol>
  </section>
  <section class="content">
    <div class="box box-warning" data-widget="box-widget">
        <div class="box-body">
          <div class="table-responsive">
            <table id="orderListTable" class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Client Name</th>
                    <th>Product Name</th>
                    <th>Barcode</th>
                    <th>Unitary Value</th>
                    <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="item in requests" :key="item.code">
                    <th style="text-align: center">{{item.numeroPedido}}</th>
                    <td>{{item.nomeCliente}}</td>
                    <td>{{item.nomeProduto}}</td>
                    <td>{{item.codBarras}}</td>
                    <td>{{'R$ ' + item.valorUnitario}}</td>
                    <td>{{item.quantidade}}</td>
                  </tr>
              </tbody>
            </table>
            <center>
            </center>
          </div>
        </div>
      </div>
      <div class="callout callout-danger alert-success mgtp-5px" name="alert-success" id="alert-success" role="alert">
        <p class="color-black">Request successfully deleted.</p>
      </div>
    </section>
</div>
</template>
<script>
export default {
  name: 'dashboard',
  data () {
    return {
      requests: [],
      code: ''
    }
  },
  mounted () {
    this.$http.get('home',
      {
        headers: {'Authorization': localStorage.getItem('token')}}
      )
    .then(function (result) {
      if (result.data) {
      } else {
        return false
      }
    })
    let vm = this
    vm.listRequests()
  },
  methods: {
    listRequests () {
      let vm = this
      this.$http.get('/product/purchase/list')
        .then(function (result) {
          if (result.data) {
            vm.requests = result.data
          } else {
            return false
          }
        })
    }
  }
}
</script>
<style>
.alert-edit-success{
  display: none;
}
</style>
