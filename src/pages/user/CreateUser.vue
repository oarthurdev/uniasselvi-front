<template>
<div>
  <section class="content-header">
    <h1>
      Create User
      <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Create User</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-create-user" name="form-create-user" v-on:submit="clickBtn">
        <div class="form-group">
          <label for="username">Account</label>
          <input type="text" class="form-control" id="username" v-model="username" placeholder="Enter a username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="password" id="password" placeholder="Enter a password" required>
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" v-model="name" id="name" placeholder="Enter a name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" v-model="email" id="email" placeholder="Enter a email" required>
        </div>
        <div class="form-group">
          <label for="cpf">CPF</label>
          <input type="text" class="form-control" id="cpf" v-model="cpf" placeholder="000.000.000-00" required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Oops, something went wrong, try again later.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black"><b>{{username}}</b> successfully registered.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  <div class="callout callout-danger alert-existe mgtp-5px" name="alert-existe" id="alert-existe" role="alert">
  <p class="color-black"><b>{{username}}</b> is already registered, please inform another.</p>
  </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'create-user',
  data () {
    return {
      username: '',
      password: '',
      name: '',
      cpf: '',
      email: '',
      jaExiste: ''
    }
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      console.log('submit')
      this.$http
        .post('/user/create', { username: this.username, password: this.password, name: this.name, cpf: this.cpf, email: this.email })
        .then(function (result) {
          if (result.data.jaExiste !== false) {
            $('#alert-existe').show()
            $('#alert-wrong').hide()
            $('#alert-carregando').hide()
            setTimeout(function () {
              $('#alert-existe').hide()
            }, 5000)
            return false
          }
          if (result.data) {
            $('#alert-success').show()
            $('#alert-carregando').hide()
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
<style scoped>
.callout{
  display: none;
}
</style>

