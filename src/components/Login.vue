<template>
<!-- <div class="modal fade" id="bsModal" tabindex="-1" role="dialog" aria-labelledby="bsModalLabel" data-toggle="modal" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body"> -->
                <!-- <div class="login">
                    <form action="" v-on:submit="clickBtn" method="POST" name="form-login" id="form-login" class="form-login-class">
                        <img src="../assets/imgs/logo.png" class="logoLogin"/>
                        <div class="input-group input-group-lg">
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-user"></span>
                        </span>
                            <input type="text" v-model="username" name="username" id="username" class="user-class form-control" placeholder="Usuário" required />
                        </div>
                        <div class="input-group input-group-lg">
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-lock"></span>
                        </span>
                        <input type="password" v-model="password" name="password" id="password" class="password-class form-control" placeholder="Senha" required />
                        </div>
                        <input type="hidden" name="sessao" id="sessao" value=""/>
                        <input type="submit" name="btn-logar" id="btn-logar" class="btn-logar-class form-control btn-success mgtp-5px" value="Logar"/>
                        <div class="alert alert-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
                            <p class="color-black">Usuário ou senha incorretos.</p>
                        </div>
                        <div class="alert alert-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
                        <p class="color-black">Dados corretos, você está sendo logado.</p>
                        </div>
                        <div class="alert alert-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
                        <p class="color-black">Carregando, espere um pouco....</p>
                        </div>
                    </form>
                </div> -->
                <div class="login-box">
  <div class="login-logo">
    <a href="/login"><b>Gothic</b>PT</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to start your session</p>

    <form v-on:submit="clickBtn" method="POST" name="form-login" id="form-login">
      <div class="form-group has-feedback">
        <input type="text" v-model="username" name="username" id="username" required class="form-control" placeholder="Account Name">
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" v-model="password" name="password" id="password" required class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        
        <!-- /.col -->
        <div class="col-xs-12">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
        <!-- /.col -->
      </div>
      <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
        <p class="color-black">Usuário ou senha incorretos.</p>
      </div>
      <div class="alert callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
        <p class="color-black">Dados corretos, você está sendo logado.</p>
      </div>
      <div class="callout callout-warning mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
        <p class="color-black">Carregando, espere um pouco....</p>
      </div>
      <div class="callout callout-danger mgtp-5px" name="alert-desativado" id="alert-desativado" role="alert">
        <p class="color-black">Conta desativada.</p>
      </div>
    </form>

    <!-- /.social-auth-links -->

    

  </div>
  <!-- /.login-box-body -->
</div>
            <!-- </div>            
        </div>
    </div>
</div>   -->
</template>
<script>

import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      'dados': [],
      'activated': 0
    }
  },
  mounted () {
    // this.$bus.$on('modal-open', (args) => {
    //   // TODO: args가 올바른지 확인해야함
    //   this.type = args.type
    //   this.title = args.title
    //   this.description = args.description
    //   this.confirmText = args.confirmText || '저장 후 닫기'
    //   this.cancelText = args.cancelText || '닫기'
    //   this.confirmBeforeHook = args.confirmBefore
    //   this.confirmAfterHook = args.confirmAfter
    //   this.cancelBeforeHook = args.cancelBefore
    //   this.cancelAfterHook = args.cancelAfter
    // })
    // $('#bsModal').modal('show')
    // $('#bsModal').on('show.bs.modal', (e) => {
    // })

    // $('#bsModal').on('hidden.bs.modal', (e) => {
    //   this.confirmAfterHook()
    //   this.cancelAfterHook()
    //   this.resetProperties()
    // })
  },
  methods: {
    clickBtn (e) {
      $('#alert-carregando').show()
      e.preventDefault()
      console.log('submit')
      axios.post('login', {username: this.username, password: this.password})
      .then(function (result) {
        if (result.data.activated === '0') {
          $('#alert-desativado').show()
          $('#alert-wrong').hide()
          $('#alert-carregando').hide()
          setTimeout(function () {
            $('#alert-desativado').hide()
          }, 5000)
          return false
        }
        if (result.data.dados.username) {
          console.log(result.dados)
          localStorage.setItem('username', result.data.dados.username)
          localStorage.setItem('cargo', result.data.dados.cargo)
          localStorage.setItem('nick', result.data.dados.nick)
          localStorage.setItem('permissao', result.data.dados.permissao)
          localStorage.setItem('token', result.data.dados.token)
          window.location.href = '/home'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  background-color: #ecf0f5 !important;
}
</style>
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#alert-wrong{
  display: none;
}

#alert-existe{
  display: none;
}

#alert-desativado{
  display: none;
}


#alert-success{
  display: none;
}

#alert-carregando{
  display: none;
}

.logoLogin{
  margin-left: 100px;
}

.mgtp-5px{
  margin-top: 5px;
}

.form-login-class{
  width: 510px;
  margin: 0 auto;
  margin-top: 130px;
}

</style>
