<template v-on:onload="onLoadGetData">
  <div class="dashboard">
    <row>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <b>HOME - UNIASSELVI</b>
      </div>
    </row>
  </div>
</template>

<script>
import VASmallBox from '../widgets/VASmallBox.vue'

export default {
  name: 'dashboard',
  mounted () {
    this.$http.get('home',
      {
        headers: {'Authorization': localStorage.getItem('token')}}
      )
      .then(function (result) {
        if (result.data) {
        } else {
          return false
        }
      })
  },
  components: {
    'va-small-box': VASmallBox
  }
}

</script>
