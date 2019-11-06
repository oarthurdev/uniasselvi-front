<template>
    <div>
  <section class="content-header">
    <h1>
      Edit User
      <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Edit User</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-edit-user" name="form-edit-user">
        <div class="form-group">
          <label for="searchCode">Code</label>
          <input type="text" class="form-control" id="searchCode" v-model="searchCode" placeholder="Enter the code of user to search." required style="width: 40%;">
          <button type="submit" class="btn btn-primary" id="button" v-on:click="searchInfosOfUser " style="margin-top: -34px; margin-left: 656px; float: left;">Search</button>
        </div>
        <div class="form-group">
          <label for="usernameUpdate">Username</label>
          <input type="text" class="form-control" id="usernameUpdate" v-model="username" required style="width: 45%;" disabled>
        </div>
        <div class="form-group">
          <label for="passwordUpdate">Password</label>
          <input type="password" class="form-control" id="passwordUpdate" v-model="password" required style="width: 45%;" disabled>
        </div>
        <div class="form-group">
          <label for="nameUpdate">Name</label>
          <input type="text" class="form-control" id="nameUpdate" v-model="name" required style="width: 45%;" disabled>
        </div>
        <div class="form-group">
          <label for="emailUpdate">E-mail</label>
          <input type="email" class="form-control" id="emailUpdate" v-model="email" required style="width: 45%;" disabled>
        </div>
        <div class="form-group">
          <label for="cpfUpdate">CPF</label>
          <input type="text" class="form-control" id="cpfUpdate" v-model="cpf" required style="width: 45%;" disabled>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="editUser">Update</button>
        <button type="submit" class="btn btn-danger" v-on:click="clearFields">Clear fields</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">We couldn't find the user {{username}}, try with another username.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black">Registration successfully updated.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  </section>
  </div>
</template>
<script>
export default {
  name: 'edit-user',
  data () {
    return {
      searchCode: '',
      username,
      password,
      name,
      email,
      cpf
    }
  },
  methods: {
    searchInfosOfUser (e) {
      e.preventDefault()
      this.$http
        .post('/user/search', { searchCode: this.searchCode })
        .then(function (result) {
          if (result.data && result.data.username != null) {
            $('#searchCode').attr('disabled', true)
            $('#usernameUpdate').removeAttr('disabled')
            $('#passwordUpdate').removeAttr('disabled')
            $('#nameUpdate').removeAttr('disabled')
            $('#emailUpdate').removeAttr('disabled')
            $('#cpfUpdate').removeAttr('disabled')
            $('#usernameUpdate').val(result.data.username)
            $('#passwordUpdate').val(result.data.password)
            $('#nameUpdate').val(result.data.name)
            $('#emailUpdate').val(result.data.email)
            $('#cpfUpdate').val(result.data.cpf)
          } else {
            $('#usernameUpdate').val('')
            $('#passwordUpdate').val('')
            $('#nameUpdate').val('')
            $('#emailUpdate').val('')
            $('#cpfUpdate').val('')
            $('#usernameUpdate').attr('disabled', true)
            $('#passwordUpdate').attr('disabled', true)
            $('#nameUpdate').attr('disabled', true)
            $('#emailUpdate').attr('disabled', true)
            $('#cpfUpdate').attr('disabled', true)
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
          }
        })
    },
    editUser (e) {
      e.preventDefault()
      this.$http
        .post('/user/edit', {searchCode: this.searchCode, username: this.username, password: this.password, name: this.name, email: this.email, cpf: this.cpf})
        .then(function (result) {
          if (result.data) {
            $('#searchCode').val('')
            $('#searchCode').removeAttr('disabled')
            $('#usernameUpdate').val('')
            $('#passwordUpdate').val('')
            $('#nameUpdate').val('')
            $('#emailUpdate').val('')
            $('#cpfUpdate').val('')
            $('#usernameUpdate').attr('disabled', true)
            $('#passwordUpdate').attr('disabled', true)
            $('#nameUpdate').attr('disabled', true)
            $('#emailUpdate').attr('disabled', true)
            $('#cpfUpdate').attr('disabled', true)
            $('#alert-success').show()
            setTimeout(function () {
              $('#alert-success').hide()
            }, 5000)
          }
        })
    },
    clearFields (e) {
      $('#searchCode').removeAttr('disabled')
      $('#usernameUpdate').val('')
      $('#passwordUpdate').val('')
      $('#nameUpdate').val('')
      $('#emailUpdate').val('')
      $('#cpfUpdate').val('')
      $('#searchCode').val('')
    }
  }
}
</script>
