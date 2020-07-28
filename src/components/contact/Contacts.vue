<template>
  <div class="hello mt-5">
    <section class='bg-purple'>
      <div class="container pt-4 bg-white">
        <div v-if='user.email' class="row">
          <div class="col-12 mb-2">
            <router-link to='/create_contact' class='btn border-0 rounded-0 px-3 py-2 bg-purple text-white'>Create contact</router-link>
          </div>
        </div>
        <div class="row justify-content-center">
            <table class="col-10">
                <tr class="border-bottom">
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
                <tr v-for="contact in contacts" class="col-md-12 pb-5 border-bottom" :key="contact._id">
                    <th>{{contact.name}}</th>
                    <th>{{contact.email}}</th>
                    <th>{{contact.phone}}</th>
                    <th class="d-flex justify-content-center">
                        <router-link :to="'/user/'+contact._id"  class='button border-0 bg-info px-3 py-2 text-white'>Edit</router-link>
                        <a v-on:click="deleteContact(contact._id)" href="#" class='button border-0 px-3 py-2 bg-danger text-white'>Delete</a>
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
    .get('http://localhost:3001/contact')
    .then(response => {this.contacts = response.data})
    .catch(err=>console.log(err))
  },
   methods: {
    deleteContact: function (_id){
      this.axios
      .delete('http://localhost:3001/contact/' + _id)
      .catch(err=>console.log(err))
    }
  }
}
</script>