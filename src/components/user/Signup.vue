<template>
    <section class='mt-5 py-5'>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-2">
            <img class="img-fluid" src="/images/logo.png">
          </div>
        </div>
      </div>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="signup">
              <h1>Signup</h1>
              <div class="form-group">
                <label class='col-form-label'>Name</label>
                <input class='form-control' required v-model="user.name" type="text" placeholder="Name"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>E-mail</label>
                <input class='form-control' required v-model="user.email" type="email" placeholder="E-mail"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>CPF</label>
                <input class='form-control' required v-model="user.cpf" type="text" placeholder="CPF"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Password</label>
                <input class='form-control' required v-model="user.password" type="password" placeholder="Password"/>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-2">
                <button class='btn bg-blue text-white border-0 rounded-0 w-50 py-2 ' type="submit">Signup</button>
              </div>

              <p v-if="error" class='text-danger pt-2 mb-0'>
                {{ error }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
  export default {
    data() {
      return {
        error: '',
        user:{
          email: '',
          password: '',
          cpf: '',
          name: ''
        }
      }
    },
    methods: {
      signup: function () {
        this.axios.post('http://localhost:3001/user',this.user)
        .then(response=>{
          if(response.data){
            this.$session.start()
            this.$session.set('email', this.user.email)
            this.$session.set('id', this.user._id)
            this.$router.push("/contacts")
          }
          else{
            this.error = 'E-mail or password incorrect'            
          }
        })
      }
    }
  }
</script>