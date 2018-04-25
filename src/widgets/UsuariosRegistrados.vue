<template>
  <div class="box box-primary" data-widget="box-widget">
    <div class="box-header">
      <h3 class="box-title">Ultimos usuários</h3>
        <div class="box-tools pull-right">
          <span class="label label-danger">{{usuariosNovos}} {{usuariosNovos == 1 ? 'Novo Usuário' : 'Novos Usuários'}}</span>
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
        </div>
    </div>
    <div class="box-body">
    <div class="table-responsive">
      <table id="players" class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Data de Cadastro</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in listaIds" :key="item.uid">
            <th style="font-weight: normal;">
              {{item.uid}}
            </th>
            <th style="font-weight: normal;">
              {{moment(item.rday).format('DD/MM/YYYY')}}
            </th>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'usuariosRegistrados',
  props: [
    'usuariosNovos',
    'listaIds'
  ],
  methods: {
    moment (...args) {
      return moment(...args)
    }
  }
}
</script>
