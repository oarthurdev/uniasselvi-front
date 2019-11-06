<template>
<div>
  <section class="content-header">
    <h1>
      Create Product
      <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Create Product</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-create-product" name="form-create-product" v-on:submit="clickBtn">
        <div class="form-group">
          <label for="nomeProduto">Product Name</label>
          <input type="text" class="form-control" id="nomeProduto" v-model="nomeProduto" placeholder="Enter a product name" required>
        </div>
        <div class="form-group">
          <label for="barCode">Bar Code</label>
          <input type="text" class="form-control" v-model="barCode" id="barCode" placeholder="Enter a bar code" required>
        </div>
        <div class="form-group">
          <label for="unitaryValue">Unitary Value</label>
          <input type="text" class="form-control" v-model="unitaryValue" id="unitaryValue" placeholder="Enter a unitary value" required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Oops, something went wrong, try again later.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black"><b>{{nomeProduto}}</b> successfully registered.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'create-product',
  data () {
    return {
      nomeProduto: '',
      barCode: '',
      unitaryValue: ''
    }
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      console.log('submit')
      this.$http
        .post('/product/create', { nomeProduto: this.nomeProduto, barCode: this.barCode, unitaryValue: this.unitaryValue })
        .then(function (result) {
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
<style>
.callout{
  display: none;
}
</style>

