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
    moment (...args) {
      return moment(...args)
    }
  }
}
</script>
