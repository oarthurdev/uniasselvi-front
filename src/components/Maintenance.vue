<template>
<div>
<section class="content-header">
    <h1>
    Maintenance
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="active">Manutenção</li>
    </ol>
</section>
<section class="content">
<div class="row">
    <div class="col-sm-4">
        <div class="box box-primary" data-widget="box-widget">
            <div class="box-header">
            <h3 class="box-title">Menu</h3>
                <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                </div>
            </div>
            <div class="box-body">
                <ul data-widget="tree" class="sidebar-menu tree">
                    <li class="router-link-exact-active active" data="[object Object]"><a href="/maintenance"><i class="fa fa-wrench"></i> <span>Manutenção</span> <span class="pull-right-container"><small class="label pull-right label-primary"></small></span></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-8">
        <div class="box box-primary" data-widget="box-widget">
            <div class="box box-body">
            </div>
        </div>
    </div>
</div>
</section>
</div>
</template>
<script>
export default {
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      searchFor: 0,
      players: [],
      logType: 'LogAdmin',
      logTypeSub: 'LogAging'
    }
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      $('#alert-carregando').show()
      let vm = this
      console.log(vm.logType)
      console.log('submit')
      this.$http
        .post('logs', { searchFor: this.searchFor, textSearchFor: this.textSearchFor })
        .then(function (result) {
          console.log(result)
          if (result.data && result.data.length > 0) {
            $('#alert-carregando').hide()
            vm.players = result.data
          } else {
            $('#alert-carregando').hide()
            vm.players = []
            $('#alert-wrong').show()
            setTimeout(function () {
              $('#alert-wrong').hide()
            }, 3000)
            return false
          }
        })
    }
  }
}
</script>
