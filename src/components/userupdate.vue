<template>
  <div>
    <form @submit.prevent="updateUser">
      <div class="mb-3">
        <label for="username" class="form-label"
          >User Name</label
        >
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Hassan El-Sobky"
          v-model.trim="userData.name"
        />
      </div>
       <div class="mb-3">
        <label for="userage" class="form-label"
          >Age</label
        >
        <input
          type="number"
          class="form-control"
          id="username"
          v-model.number="userData.age"
        />
      </div>
       <div class="mb-3">
        <label for="userImage" class="form-label"
          >User ImageUrl</label
        >
        <input
          type="text"
          class="form-control"
          id="userImage"
          placeholder="Hassan@gmail.com"
          v-model.trim="userData.avatar"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Description</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model.trim="userData.description"
        ></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'userupdateComp',
        created(){
         this.getuserById();
        },
        methods:{
         async getuserById(){
          console.log(this.$route.params.id);
              const res=axios.get(`https://6230659cf113bfceed5003d5.mockapi.io/users/${this.$route.params.id}`);
               
                let User= (await res).data
               console.log(User);
            this.userData.avatar=User.avatar;
            this.userData.name=User.name;
            this.userData.age=User.age
            this.userData.description=User.description
          }  ,
          updateUser() {
               axios.put(`https://6230659cf113bfceed5003d5.mockapi.io/users/${this.$route.params.id}`,this.userData).then(
                   (res)=>{
                       console.log(res);
                       if(res.status===200)
                       {
                           alert('Success')
                           this.$router.back();
                       }
                   }
               ).catch(
                 (err)=>{
                     console.log(err);
                 }
               );
          },
        },
        data(){
            return{

              userData:{  avatar:'',
                name:'',
                age:'',
                description:''}
            }
        }

    }
</script>

<style scoped>

</style>