<template>
    <div>
  <section class="content-header">
    <h1>
      Edit Order
      <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Edit Order</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-edit-product" name="form-edit-product">
        <div class="form-group">
          <label for="searchCode">Order ID</label>
          <input type="text" class="form-control" id="searchCode" v-model="searchCode" placeholder="Enter the order id to search." required style="width: 40%;">
          <button type="submit" class="btn btn-primary" id="button" v-on:click="searchInfosOfPurchaseRequest " style="margin-top: -34px; margin-left: 656px; float: left;">Search</button>
        </div>
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
        <button type="submit" class="btn btn-primary" v-on:click="editPurchaseProduct">Update</button>
        <button type="submit" class="btn btn-danger" v-on:click="clearFields">Clear fields</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">We couldn't find the order, try with another order id.</p>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong-edit" id="alert-wrong-edit" role="alert">
  <p class="color-black">Please enter the details to change the order infos.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black">Order successfully updated.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  </section>
  </div>
</template>
<script>
export default {
  name: 'edit-purchase-request',
  data () {
    return {
      searchCode: '',
      clientName: '',
      cpfClient: '',
      emailClient: '',
      productName: '',
      unitaryValue: '',
      barCode: '',
      quantidade: ''
    }
  },
  methods: {
    searchInfosOfPurchaseRequest (e) {
      e.preventDefault()
      this.$http
        .post('/product/purchase/search', { searchCode: this.searchCode })
        .then(function (result) {
          if (result.data) {
            $('#searchCode').attr('disabled', true)
            $('#nameProduct').val(result.data.productName)
            $('#clientName').val(result.data.clientName)
            $('#cpfClient').val(result.data.cpfClient)
            $('#emailClient').val(result.data.cpfClient)
            $('#quantidade').val(result.data.quantity)
            $('#unitaryValue').val('R$ ' + result.data.unitaryValue)
            $('#barCode').val(result.data.barCode)
          } else {
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
          }
        })
    },
    editPurchaseProduct (e) {
      e.preventDefault()
      this.$http
          .post('/product/purchase/edit', {
            searchCode: this.searchCode,
            nome: this.nome,
            cpfCliente: this.cpfClient,
            emailCliente: this.emailClient,
            nomeProduto: this.productName,
            codBarras: this.barCode,
            valorUnitario: this.unitaryValue,
            quantidade: this.quantidade})
          .then(function (result) {
            if (result.data) {
              $('#searchCode').val('')
              $('#searchCode').removeAttr('disabled')
              $('#nomeCliente').removeAttr('placeholder')
              $('#nomeCliente').val('')
              $('#cpfCliente').removeAttr('placeholder')
              $('#cpfCliente').val('')
              $('#emailCliente').removeAttr('placeholder')
              $('#emailCliente').val('')
              $('#productName').removeAttr('placeholder')
              $('#productName').val('')
              $('#barCode').removeAttr('placeholder')
              $('#barCode').val('')
              $('#unitaryValue').removeAttr('placeholder')
              $('#unitaryValue').val('')
              $('#quantidade').removeAttr('placeholder')
              $('#quantidade').val('')
              $('#alert-success').show()
              setTimeout(function () {
                $('#alert-success').hide()
              }, 5000)
            }
          })
    },
    clearFields (e) {
      $('#nameProduct').attr('disabled', true)
      $('#unitaryValue').attr('disabled', true)
      $('#barCode').attr('disabled', true)
      $('#searchCode').removeAttr('disabled')
      $('#nameProduct').removeAttr('placeholder')
      $('#unitaryValue').removeAttr('placeholder')
      $('#barCode').removeAttr('placeholder')
      $('#nameProduct').val('')
      $('#unitaryValue').val('')
      $('#barCode').val('')
      $('#searchCode').val('')
    }
  }
}
</script>
