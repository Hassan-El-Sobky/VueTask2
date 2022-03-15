<template>
  <div>
    <form @submit.prevent="addUser">
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
          v-model="userData.description"
        ></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
 import  axios  from 'axios';

export default {
  name: "addUserComp",
  data(){
      return{
          userData:{
              name:'',
              avatar:'',
              age:'',
              description:''
          }
      }
  },
    methods: {
          addUser(){
            axios.post("https://6230659cf113bfceed5003d5.mockapi.io/users",this.userData).then(
                (res)=>{
                    console.log(res);
                }
            ).catch(
                (err)=>{
                    console.log(err);
                }
            )
            console.log(this.userData);
          }
      },
};
</script>

<style scoped></style>
