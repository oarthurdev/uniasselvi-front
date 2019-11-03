<template>
  <header class="main-header">
    <!-- Logo -->
    <router-link to="dashboard">
      <a class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>G</b>PT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Uniasselvi</b></span>
      </a>
    </router-link>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="/static/img/perfil.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ currentUser.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="/static/img/perfil.jpg" class="img-circle" alt="User Image">

                <p>
                  {{ currentUser.name }}<br>
                </p>
              </li>
              <!-- Menu Body -->
              
              <!-- Menu Footer-->
              <li class="user-footer">
                <!-- <div class="pull-left">
                  <a href="/profile" class="btn btn-default btn-flat">Profile</a>
                </div> -->
                <div class="pull-right">
                  <a v-on:click="clickBtn" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'va-navibar',
  data () {
    return {
      token: '0',
      username: ''
    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
    this.username = localStorage.getItem('username')
  },
  methods: {
    clickBtn (e) {
      e.preventDefault()
      console.log('submit')
      this.$http
        .post('remove-token', {token: this.token})
        .then(function (result) {
          console.log(result)
          if (result.data) {
            console.log(result.data)
            localStorage.clear()
            window.location.href = '/login'
          } else {
            console.log('Error')
          }
        })
    }
  },
  computed: {
    ...mapGetters([
      'unreadMessagesCount',
      'unreadNotificationsCount',
      'remainTasksCount',
      'currentUser'
    ])
  }
}

</script>
