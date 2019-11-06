<template>
<div>
  <section class="content-header">
    <h1>
      User List
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">User List</li>
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
                    <th>Username</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>CPF</th>
                    <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="item in users" :key="item.code">
                    <th style="text-align: center">{{item.id}}</th>
                    <td>{{item.username}}</td>
                    <td>{{item.nome}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.cpf}}</td>
                    <td class="delete text-center"><button type="submit" v-on:click="deleteUser(item.id)" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger">Delete</button></td>
                  </tr>
              </tbody>
            </table>
            <center>
            </center>
            <delete-user v-bind:code="code"></delete-user>
          </div>
        </div>
      </div>
      <div class="callout callout-danger alert-success mgtp-5px" name="alert-success" id="alert-success" role="alert">
        <p class="color-black">User successfully deleted.</p>
      </div>
    </section>
</div>
</template>
<script>
import axios from 'axios'
import DeleteComponent from '../../components/DeleteComponent.vue'

export default {
  name: 'user-list',
  data () {
    return {
      users: [],
      code: ''
    }
  },
  mounted () {
    let vm = this
    vm.listUser()
  },
  methods: {
    deleteUser (codeParam) {
      let vm = this
      vm.code = codeParam
      $('#confirm').on('click', function () {
        event.preventDefault()
        axios.post('/user/delete', {code: codeParam}
        ).then(function (result) {
          $('#exampleModal').modal('hide')
          if (result.data) {
            $('#alert-success').show()
            vm.listUser()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 5000)
          } else {
            $('#alert-success').hide()
          }
        })
      })
    },
    listUser () {
      let vm = this
      this.$http.get('/user/list')
        .then(function (result) {
          if (result.data) {
            vm.users = result.data
          } else {
            return false
          }
        })
    }
  },
  components: {
    'delete-user': DeleteComponent
  }
}
</script>
<style>
.alert-edit-success{
  display: none;
}
</style>
