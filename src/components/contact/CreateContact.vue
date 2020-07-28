<template>
    <section class='bg-purple mt-5'>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="create">
              <h1>Create contact</h1>
              <div class="form-group">
                <label class='col-form-label'>Name</label>
                <input class='form-control' required v-model="contact.name" type="text" placeholder="Name"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>E-mail</label>
                <input class='form-control' required v-model="contact.email" type="text" placeholder="E-mail"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Phone</label>
                <input class='form-control' required v-model="contact.phone" type="text" placeholder="Phone"/>
              </div>
              <button class='btn bg-purple text-white border-0 rounded-0 w-50 py-2 mt-2' type="submit">Create contact</button>
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
          user: {
            _id :this.$session.get('_id'),
            name:this.$session.get('email')
          }
        }
      }
    },
    methods: {
      create: function () {
        this.axios
        .post('http://localhost:3001/contact',this.contact)
        .then(()=>{
          this.$router.push("/contacts")
        })
        .catch(err=>{
          this.error = err
        })
      }
    }
  }
</script>