<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
<template>
  <div>
    <section class="content-header">
      <h1>
        Punir Jogador
        <small>Informe os dados abaixo</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Punir Jogador</li>
      </ol>
    </section>
    <section class="content">
   <div class="box box-primary" data-widget="box-widget">
       
    <div class="box-body">
      <form id="form-banir-jogador" name="form-banir-jogador" v-on:submit="clickBtn">
      <div class="form-group">
        <label for="idPlayer">ID</label>
        <input type="text" class="form-control" id="idPlayer" v-model="idPlayer" aria-describedby="idPlayerHelp" placeholder="Digite um username para banir" required>
      </div>
      <div class="form-group">
        <label for="motivoBanimento">Motivo da Punição</label>
        <input type="text" class="form-control" v-model="motivo" id="motivoBanimento" placeholder="Digite um motivo" required>
      </div>
      <div class="form-group">
        <label for="tipoPunicao">Tipo de punição</label>
        <select class="form-control" v-model="tipoPunicao" id="tipoPunicao" required>
          <option value="0">Alerta</option>
          <option value="1">Banir</option>
          <option value="2">Desbanir</option>
          </select>
      </div>
      <div class="form-group">
        <label for="dataBanimento">Data de desban</label>
        <input type="date" class="form-control" v-model="dataDesban" id="dataBanimento" required>
      </div>
      <div class="form-group">
        <label for="banidoPor">Banido por</label>
        <input type="text" class="form-control" id="banidoPor" name="banido" v-model="banidoPor" disabled>
      </div>
      <button type="submit" class="btn btn-primary">Banir jogador</button>
    </form>
    </div>
    </div>
    <row>
      <div class="col-md-12">
        <div class="alert alert-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
            <p class="color-black">Carregando, espere um pouco....</p>
        </div>
        <div class="alert alert-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
            <p class="color-black">ID inválida, preencha o username corretamene e tente novamente.</p>
          </div>
          <div class="alert alert-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
          <p class="color-black">Player punido com sucesso</p>
        </div>
      </div>
    </row>
  </section>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
export default {
  name: 'login',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      banidoPor: '',
      tipoPunicao: 0
    }
  },
  mounted () {
    this.banidoPor = localStorage.getItem('username')
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log('submit')
      this.$http
        .post('banir-jogador-success', { idPlayer: this.idPlayer, motivo: this.motivo, tipoPunicao: this.tipoPunicao, dataDesban: this.dataDesban, banidoPor: this.banidoPor })
        .then(function (result) {
          console.log(result)
          if (result.data) {
            $('#alert-success').show()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 5000)
          } else {
            $('#alert-carregando').hide()
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
            return false
          }
        })
    }
  }
}
</script>
