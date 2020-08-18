<template>
    <section class=' mt-5'>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="associate">
              <h1>Associar bengala</h1>
              <div class="form-group">
                <label class='col-form-label'>Número serial</label>
                <input class='form-control' required v-model="serial" type="text" placeholder="Número serial"/>
              </div>
              <button class='btn bg-blue text-white border-0 rounded-0 w-50 py-2 mt-2' type="submit">Associar</button>
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
        serial: this.$session.get('serial')
      }
    },
    methods: {
      associate: function () {
        this.axios
        .post('https://blind-helper.herokuapp.com/helper/' + this.$session.get('id'), {"serial":this.serial})
        .then(()=>{
          this.$session.set('serial', this.serial)
          this.$router.push("/contatos")
        })
        .catch(err=>{
          this.error = err
        })
      }
    }
  }
</script>