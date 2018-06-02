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
                    <td class="delete text-center"><button type="submit" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger">Excluir</button></td>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel"><b>Confirmação para excluir Game Master</b></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                          </div>
                          <div class="modal-body">
                          Deseja realmente excluir o usuário <b>{{item.username}}</b> ?
                          </div>
                          <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Não</button>
                          <button type="button" v-on:click="clickBtn(item.username)" class="btn btn-danger">Sim</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
              </tbody>
            </table>
            <center>
            </center>
          </div>
          <div class="box-tools pull-right">
            <ul class="pagination pagination-sm inline"><li><a href="#">«</a></li> <li><a href="#">1</a></li> <li><a href="#">2</a></li> <li><a href="#">3</a></li> <li><a href="#">»</a></li></ul>
          </div>
        </div>
      </div>
      <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
        <p class="color-black">Game-Master excluido com sucesso...</p>
      </div>
      <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
        <p class="color-black">Ooops, algo deu errado, tente novamente.</p>
      </div>
    </section>
</div>
</template>
<script>
import moment from 'moment'

export default {
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      gmscadastrados: []
    }
  },
  mounted () {
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
  methods: {
    clickBtn (usernameExcluir) {
      event.preventDefault()
      $('#exampleModal').modal('hide')
      this.$http.post('/delete-game-master', {username: usernameExcluir}
        ).then(function (result) {
          if (result.data) {
            $('#alert-carregando').show()
            setTimeout(function () {
              $('#alert-carregando').hide()
              location.reload()
            }, 5000)
          } else {
            $('#alert-carregando').hide()
            $('#alert-success').hide()
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
            return false
          }
        })
    },
    moment (...args) {
      return moment(...args)
    }
  }
}
</script>
