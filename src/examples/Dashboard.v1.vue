<template>
  <div class="dashboard">
    <row>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <va-small-box
          color="yellow"
          icon="ion-person-add"
          title="44"
          description="Contas Registradas"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <va-small-box
          color="green"
          icon="ion-person-add"
          title="44"
          description="GMs Cadastrados"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <va-small-box
          color="red"
          icon="ion-person"
          title="44"
          description="Usuários Banidos"
          moreText="More info">
        </va-small-box>
      </div>
    </row>

    <row>
      <div class="col-md-12 col-sm-6 col-xs-12">
        <section class="connectedSortable ui-sortable">
          <usuarios-registrados></usuarios-registrados>
        </section>
      </div>
    </row>
  </div>
</template>

<script>
import VASmallBox from '../widgets/VASmallBox.vue'
import VAChatBox from '../widgets/VAChatBox.vue'
import VATodoList from '../widgets/VATodoList.vue'
import VAQuickMail from '../widgets/VAQuickMail.vue'
import VACalendar from '../widgets/VACalendar.vue'
import UsuariosRegistrados from '../widgets/UsuariosRegistrados.vue'

export default {
  name: 'dashboard',
  data () {
    return {

    }
  },
  methods: {
    clickToSmallBox () {
      alert('click!!!: clickToSmallBox')
    }
  },
  components: {
    'va-small-box': VASmallBox,
    'va-chat-box': VAChatBox,
    'va-todo-list': VATodoList,
    'va-quick-mail': VAQuickMail,
    'va-calendar': VACalendar,
    'usuarios-registrados': UsuariosRegistrados
  }
}

</script>
