<template>
  <div class="">
    <section class=' mt-5'>
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="associate">
              <h1>Associar bengala</h1>
              <div class="form-group">
                <label class='col-form-label'>Número serial</label>
                <input class='form-control' required v-model="serial" type="text" placeholder="Número serial"/>
              </div>
              <button data-toggle="modal" v-on:click="modalShow()" class='btn bg-blue text-white border-0 rounded-0 w-50 py-2 mt-2' type="submit">Associar</button>
              <p v-if="error" class='text-danger pt-2 mb-0'>
                {{ error }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div id="sucessModal" style="top: 147px;" class="modal fade" v-bind:class="{ 'show d-block' : show}" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h3>Sucesso.</h3>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-primary" v-on:click="modalClose()">Ok</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        error: '',
        serial: this.$session.get('serial'),
        show: false

      }
    },
    methods: {
      associate: function () {
        this.axios
        .post('https://blind-helper.herokuapp.com/helper/' + this.$session.get('_id'), {"serial":this.serial})
        .then(()=>{
          this.$session.set('serial', this.serial)
        })
        .catch(err=>{
          this.error = err
        })
      },
      modalShow: function(){
        this.show = true;
      },
      modalClose: function(){
        this.show = false;
        this.$router.push("/contatos")
      }
    }
  }
</script>