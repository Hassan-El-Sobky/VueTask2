<template>
<div>
   <button class="btn btn-danger float-end mx-2"  @click="deleteAllusers()" >Delete All users</button>
   <button class="btn btn-primary float-end" @click="addUser">add new user</button>
</div>
<div class="clear-both"></div>
    <div class="row">
      
  <!-- <div class=" col-md-3" v-for="user of allUsers" :key="user.id" style="width: 18rem;">
  <img :src=user.avatar class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{user.name}}</h5>
    <p class="card-text">{{user.age}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> -->
<div class="col-md-4 my-3" v-for="user of allUsers" :key="user.id" >
   <img :src=user.avatar class="card-img-top" alt="...">
   <div>
  <h5>{{user.name}}</h5>
  <p>age :{{user.age}}</p>
  <router-link class="btn btn-primary" :to="{name:'user',params:{id:user.id}}">Details</router-link>
  <router-link class="btn btn-warning mx-2 " :to="{name:'userupdate',params:{id:user.id}}">update</router-link>
   <button class="btn btn-danger" @click="deleteUser(user.id)">Delete </button>
   </div>
</div>
</div>
  
</template>

<script>
   import axios from 'axios';

    export default {
        name:'homeComp',
        data(){
        return{
            allUsers:[],
        }
        },
        created(){
          this.getAllusers()
        },
        methods: {
          async getAllusers(){
               const res=axios.get("https://6230659cf113bfceed5003d5.mockapi.io/users");
               
                   this.allUsers= (await res).data
               console.log(((await res).data));
               
           },
           addUser(){
             this.$router.push('/addUser')
           },
           deleteUser(id)
           {
             axios.delete(`https://6230659cf113bfceed5003d5.mockapi.io/users/${id}`).then(
               (res)=>{
                 console.log(res);
                 this.getAllusers()
                 
               }
             ).catch(
               (err)=>{
                 console.log(err);
               }
             )
           },
           deleteAllusers(){
             for(let i=0;i<this.allUsers.length;i++)
             {
                axios.delete(`https://6230659cf113bfceed5003d5.mockapi.io/users/${this.allUsers[i].id}`).then(
               (res)=>{
                 console.log(res);
                 this.getAllusers()
                 
               }
             ).catch(
               (err)=>{
                 console.log(err);
               }
             )
             }
           }
        }
    }
</script>

<style scoped>

</style>