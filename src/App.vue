<template>
  <div id="app" style="    background-image: url(/images/background.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <header class='fixed-top shadow bg-white border-bottom'> 
      <div class="accordion" id="accordionMenuOpts">
        <nav class="navbar navbar-expand-lg p-0 border-top">
          <div class="collapse navbar-collapse justify-content-md-center" id="navbarMenuOpts" data-parent="#accordionMenuOpts">
            <ul class="navbar-nav d-none d-md-flex font-weight-bold">
              <li v-if='!user.email' class="nav-item">
                <router-link to="/" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Login</router-link>
              </li>
              <li v-if='user.email' class="nav-item pr-5">
                <router-link to="/contatos" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Contatos</router-link>
              </li>
              <li v-if='user.email' class="nav-item pr-5">
                <router-link to="/associar" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Associar bengala</router-link>
              </li>
              <li v-if='user.email' class="nav-item">
                <a v-on:click="logout" href='' class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Sair</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      user: {
        email: this.$session.get('email'),
      },
    }
  }, 
  updated () {
    this.user.email = this.$session.get('email')
  },
  methods:{
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>

<style>
  section{
    min-height: 887px;
  }

  .bg-blue{
    background-color: #053c60
  }

  .text-blue{
    color: #053c60
  }

  a:hover{
    color: #694869 !important;      
  }
</style>
