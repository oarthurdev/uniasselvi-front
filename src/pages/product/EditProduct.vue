<template>
    <div>
  <section class="content-header">
    <h1>
      Edit Product
      <small>Enter the data below</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Edit Product</li>
    </ol>
  </section>
  <section class="content">
  <div class="box box-primary" data-widget="box-widget">
      <div class="box-body">
        <form id="form-edit-product" name="form-edit-product">
        <div class="form-group">
          <label for="searchCode">Code</label>
          <input type="text" class="form-control" id="searchCode" v-model="searchCode" placeholder="Enter the code of product to search." required style="width: 40%;">
          <button type="submit" class="btn btn-primary" id="button" v-on:click="searchInfosOfProduct " style="margin-top: -34px; margin-left: 656px; float: left;">Search</button>
        </div>
        <div class="form-group">
          <label for="nameProduct">Name</label>
          <input type="text" class="form-control" id="nameProduct" v-model="nome" required style="width: 45%;" disabled>
        </div>
        <div class="form-group">
          <label for="unitaryValue">Unitary Value</label>
          <input type="text" class="form-control" id="unitaryValue" v-model="valorUnitario" required style="width: 45%;" disabled>
        </div>
        <div class="form-group">
          <label for="barCode">Barcode</label>
          <input type="text" class="form-control" id="barCode" v-model="codBarras" required style="width: 45%;" disabled>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="editProduct">Update</button>
        <button type="submit" class="btn btn-danger" v-on:click="clearFields">Clear fields</button>
      </form>
    </div>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
  <p class="color-black">We couldn't find the product, try with another barcode.</p>
  </div>
  <div class="callout callout-danger uspass-wrong mgtp-5px" name="alert-wrong-edit" id="alert-wrong-edit" role="alert">
  <p class="color-black">Please enter the details to change the product infos.</p>
  </div>
  <div class="callout callout-success alert-logando mgtp-5px" name="alert-success" id="alert-success" role="alert">
  <p class="color-black">Product successfully updated.</p>
  </div>
  <div class="callout callout-warning alert-carregando mgtp-5px" name="alert-carregando" id="alert-carregando" role="alert">
  <p class="color-black">Loading, wait a minute...</p>
  </div>
  </section>
  </div>
</template>
<script>
export default {
  name: 'edit-product',
  data () {
    return {
      searchCode: '',
      nome,
      valorUnitario,
      codBarras
    }
  },
  methods: {
    searchInfosOfProduct (e) {
      e.preventDefault()
      this.$http
        .post('/product/search', { searchCode: this.searchCode })
        .then(function (result) {
          if (result.data && result.data.barCode != null) {
            $('#searchCode').attr('disabled', true)
            $('#nameProduct').removeAttr('disabled')
            $('#unitaryValue').removeAttr('disabled')
            $('#barCode').removeAttr('disabled')
            $('#nameProduct').attr('placeholder', result.data.productName)
            $('#unitaryValue').attr('placeholder', 'R$ ' + result.data.unitaryValue)
            $('#barCode').attr('placeholder', result.data.barCode)
          } else {
            $('#nameProduct').removeAttr('placeholder')
            $('#unitaryValue').removeAttr('placeholder')
            $('#barCode').removeAttr('placeholder')
            $('#nameProduct').attr('disabled', true)
            $('#unitaryValue').attr('disabled', true)
            $('#barCode').attr('disabled', true)
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 5000)
          }
        })
    },
    editProduct (e) {
      e.preventDefault()
      this.$http
          .post('/product/edit', {searchCode: this.searchCode, nome: this.nome, valorUnitario: this.valorUnitario, codBarras: this.codBarras})
          .then(function (result) {
            if (result.data) {
              $('#searchCode').val('')
              $('#searchCode').removeAttr('disabled')
              $('#nameProduct').removeAttr('placeholder')
              $('#nameProduct').val('')
              $('#unitaryValue').removeAttr('placeholder')
              $('#unitaryValue').val('')
              $('#barCode').removeAttr('placeholder')
              $('#barCode').val('')
              $('#nameProduct').attr('disabled', true)
              $('#unitaryValue').attr('disabled', true)
              $('#barCode').attr('disabled', true)
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
