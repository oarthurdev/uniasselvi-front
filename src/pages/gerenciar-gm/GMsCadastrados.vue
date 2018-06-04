<template>
<div>
  <section class="content-header">
    <h1>
      Game Master's Cadastrados
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="active">GMs Cadastrados</li>
    </ol>
  </section>
  <section class="content">
    <div class="box box-warning" data-widget="box-widget">
        <div class="box-header">
          <h3 class="box-title"></h3>
          <div class="box-tools">
            <div class="input-group input-group-sm" style="width: 150px;">
              <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="box-body">
          <div class="table-responsive">
            <table id="players" class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                    <th>Account Name</th>
                    <th>Nick</th>
                    <th>Cargo</th>
                    <th>Permissao</th>
                    <th>Data de Cadastro</th>
                    <th>Cadastrado por</th>
                    <th>Conta ativada?</th>
                    <th class="text-center">Editar</th>
                    <th class="text-center">Deletar</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="item in gmscadastrados" :key="item.username">
                    <th class="accountname">{{item.username}}</th>
                    <td class="nick">{{item.nick}}</td>
                    <td class="cargo">{{item.cargo}}</td>
                    <td class="permissao">{{item.permissao}}</td>
                    <td class="data">{{moment(item.data).format('DD/MM/YYYY')}}</td>
                    <td class="cadPor">{{item.cadPor}}</td>
                    <td class="activated">{{parseInt(item.activated) ? 'Sim' : 'Não'}}</td>
                    <td class="edit text-center"><button type="submit" v-on:click="editGm(item.username)" data-toggle="modal" data-target="#editGm" class="btn btn-default">Editar</button></td>
                    <td class="delete text-center"><button type="submit" v-on:click="excluirGm(item.username)" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger">Excluir</button></td>
                  </tr>
              </tbody>
            </table>
            <center>
            </center>
            <excluir-gm></excluir-gm>
            <edit-gm></edit-gm>
          </div>
          <div class="box-tools pull-right">
            <ul class="pagination pagination-sm inline"><li><a href="#">«</a></li> <li><a href="#">1</a></li> <li><a href="#">2</a></li> <li><a href="#">3</a></li> <li><a href="#">»</a></li></ul>
          </div>
        </div>
      </div>
      <div class="callout callout-danger alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
        <p class="color-black">Game-Master excluido com sucesso.</p>
      </div>
      <div class="callout callout-success alert-edit-success mgtp-5px" name="alert-edit-success" id="alert-edit-success" role="alert">
        <p class="color-black">Cadastro atualizado com sucesso.</p>
      </div>
    </section>
</div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import EditGm from '../../components/EditGm.vue'
import ExcluirGm from '../../components/ExcluirGm.vue'

export default {
  name: 'gms-cadastrados',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      gmscadastrados: [],
      excluidoPor: ''
    }
  },
  mounted () {
    let vm = this
    vm.excluidoPor = localStorage.getItem('username')
    vm.carregarGm()
  },
  methods: {
    excluirGm (usernameExcluir) {
      let vm = this
      $('#confirm').on('click', function () {
        event.preventDefault()
        axios.post('/delete-game-master', {username: usernameExcluir, excluidoPor: vm.excluidoPor}
        ).then(function (result) {
          $('#exampleModal').modal('hide')
          if (result.data) {
            $('#alert-carregando').show()
            vm.carregarGm()
            setTimeout(function () {
              $('#alert-carregando').hide()
            }, 5000)
          } else {
            $('#alert-carregando').hide()
            $('#alert-success').hide()
          }
        })
      })
    },
    carregarGm () {
      let vm = this
      this.$http.get('gms-cadastrados')
        .then(function (result) {
          if (result.data) {
            vm.gmscadastrados = result.data
            console.log(result.data)
          } else {
            return false
          }
        })
    },
    editGm (usernameExcluir) {
      $('#confirm2').on('click', function () {
        event.preventDefault()
        axios.post('/edit-gm', {username: usernameExcluir}
          ).then(function (result) {
            $('#editGm').modal('hide')
            $('#alert-edit-success').show()
            setTimeout(function () {
              $('#alert-carregando').hide()
                // location.reload()
            }, 5000)
            if (result.data) {
              console.log(result.data)
              $('#alert-edit-success').show()
              setTimeout(function () {
                $('#alert-carregando').hide()
                // location.reload()
              }, 5000)
            } else {
              $('#alert-carregando').hide()
              $('#alert-success').hide()
            }
          })
      })
    },
    moment (...args) {
      return moment(...args)
    }
  },
  components: {
    'edit-gm': EditGm,
    'excluir-gm': ExcluirGm
  }
}
</script>
<style>
.alert-edit-success{
  display: none;
}
</style>
