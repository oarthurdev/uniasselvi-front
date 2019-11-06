<template>
<div>
  <section class="content-header">
    <h1>
      Product List
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Product List</li>
    </ol>
  </section>
  <section class="content">
    <div class="box box-warning" data-widget="box-widget">
        <div class="box-body">
          <div class="table-responsive">
            <table id="productsTable" class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Unitary Value</th>
                    <th>Barcode</th>
                    <th class="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="item in products" :key="item.code">
                    <th style="text-align: center">{{item.id}}</th>
                    <td>{{item.nome}}</td>
                    <td>{{'R$ ' + item.valorUnitario}}</td>
                    <td>{{item.codBarras}}</td>
                    <td class="delete text-center"><button type="submit" v-on:click="deleteProduct(item.id)" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger">Delete</button></td>
                  </tr>
              </tbody>
            </table>
            <center>
            </center>
            <delete-product v-bind:code="code"></delete-product>
          </div>
        </div>
      </div>
      <div class="callout callout-danger alert-success mgtp-5px" name="alert-success" id="alert-success" role="alert">
        <p class="color-black">Product successfully deleted.</p>
      </div>
    </section>
</div>
</template>
<script>
import axios from 'axios'
import DeleteComponent from '../../components/DeleteComponent.vue'

export default {
  name: 'product-list',
  data () {
    return {
      products: [],
      code: ''
    }
  },
  mounted () {
    let vm = this
    vm.listProducts()
  },
  methods: {
    deleteProduct (codeParam) {
      let vm = this
      vm.code = codeParam
      $('#confirm').on('click', function () {
        event.preventDefault()
        axios.post('/product/delete', {code: codeParam}
        ).then(function (result) {
          $('#exampleModal').modal('hide')
          if (result.data) {
            $('#alert-success').show()
            vm.listProducts()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 5000)
          } else {
            $('#alert-success').hide()
          }
        })
      })
    },
    listProducts () {
      let vm = this
      this.$http.get('/product/list')
        .then(function (result) {
          if (result.data) {
            vm.products = result.data
          } else {
            return false
          }
        })
    }
  },
  components: {
    'delete-product': DeleteComponent
  }
}
</script>
<style>
.alert-edit-success{
  display: none;
}
</style>
