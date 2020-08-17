<template>
  <div class="hello mt-5">
    <section class=''>
      <div class="container pt-4 bg-white">
        <div class="row justify-content-center">
          <div v-if='user.email' class="col-10 px-0 pb-2">
            <router-link to='/criar-contato' class='btn border-0 rounded-0 px-3 py-2 bg-blue text-white'>Criar contato</router-link>
          </div>
            <table class="col-10">
                <tr class="border-bottom">
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th></th>
                </tr>
                <tr v-for="contact in contacts" class="col-md-12 pb-5 border-bottom" :key="contact._id">
                    <th>{{contact.name}}</th>
                    <th>{{contact.email}}</th>
                    <th>{{contact.phone}}</th>
                    <th class="d-flex justify-content-center">
                        <!-- <router-link :to="'/user/'+contact._id"  class='button border-0 bg-info px-3 py-2 text-white mr-2'>Edit</router-link> -->
                        <a v-on:click="deleteContact(contact._id)" href="#" class='button border-0 px-3 py-2 bg-danger text-white'>Deletar</a>
                    </th>
                </tr>
            </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [],
      user: {
        email: this.$session.get('email'),
      }
    }
  },
  mounted () {
    this.axios
    .get('https://blind-helper.herokuapp.com/contact-by-user/' + this.$session.get('id'))
    .then(response => {this.contacts = response.data})
    .catch(err=>console.log(err))
  },
   methods: {
    deleteContact: function (_id){
      this.axios
      .delete('https://blind-helper.herokuapp.com/contact/' + _id)
      .catch(err=>console.log(err))
    }
  }
}
</script>