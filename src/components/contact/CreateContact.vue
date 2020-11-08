<template>
    <section class=' mt-5'>
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="create">
              <h1>Criar contato</h1>
              <div class="form-group">
                <label class='col-form-label'>Nome</label>
                <input class='form-control' required v-model="contact.name" type="text" placeholder="Nome"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>E-mail</label>
                <input class='form-control' required v-model="contact.email" type="text" placeholder="E-mail"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Telefone</label>
                <input class='form-control' v-mask="'(##) #####-####'" required v-model="contact.phone" type="text" placeholder="Telefone"/>
              </div>
              <button class='btn bg-blue text-white border-0 rounded-0 w-50 py-2 mt-2' type="submit">Criar contato</button>
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
        contact:{
          name: '',
          email: '',
          phone: '',
          user: this.$session.get('_id')
        }
      }
    },
    methods: {
      create: function () {
        this.axios
        .post('https://blind-helper.herokuapp.com/contact',this.contact)
        .then(()=>{
          this.$router.push("/contatos")
        })
        .catch(err=>{
          this.error = err
        })
      }
    }
  }
</script>