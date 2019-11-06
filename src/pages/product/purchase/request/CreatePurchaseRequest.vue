<template>
<div>
  <section class="content-header">
    <h1>
      Submit a order
      <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Submit a order</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-create-product" name="form-create-product" v-on:submit="clickBtn">
        <div class="form-group">
          <label for="nomeCliente">Client name</label>
          <input type="text" class="form-control" v-model="clientName" id="nomeCliente" required>
        </div>
        <div class="form-group">
          <label for="cpfCliente">CPF</label>
          <input type="text" class="form-control" v-model="cpfClient" id="cpfCliente" required>
        </div>
        <div class="form-group">
          <label for="emailCliente">Client email</label>
          <input type="email" class="form-control" v-model="emailClient" id="emailCliente" required>
        </div>
        <div class="form-group">
          <label for="productName">Product Name</label>
          <input type="text" class="form-control" v-model="productName" id="productName" required>
        </div>
        <div class="form-group">
          <label for="barCode">Barcode</label>
          <input type="text" class="form-control" v-model="barCode" id="barCode" required>
        </div>
        <div class="form-group">
          <label for="unitaryValue">Unitary Value</label>
          <input type="text" class="form-control" v-model="unitaryValue" id="unitaryValue" required>
        </div>
        <div class="form-group">
          <label for="quantidade">Amount</label>
          <input type="text" class="form-control" v-model="quantidade" id="quantidade" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit request</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">Oops, something went wrong, try again later.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black">Order sent successfully.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'create-purchase-request',
  data () {
    return {
      productName: '',
      barCode: '',
      unitaryValue: '',
      clientName: '',
      cpfClient: '',
      emailClient: '',
      numeroPedido: '',
      quantidade: ''
    }
  },
  mounted () {
    this.numeroPedido += 1
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      console.log('submit')
      this.$http
        .post('/product/purchase/request', {
          numeroPedido: this.numeroPedido,
          clientName: this.clientName,
          cpfClient: this.cpfClient,
          emailClient: this.emailClient,
          productName: this.productName,
          unitaryValue: this.unitaryValue,
          quantity: this.quantidade,
          barCode: this.barCode })
        .then(function (result) {
          if (result.data) {
            $('#nomeCliente').val('')
            $('#cpfCliente').val('')
            $('#emailCliente').val('')
            $('#productName').val('')
            $('#barCode').val('')
            $('#unitaryValue').val('')
            $('#quantidade').val('')
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

