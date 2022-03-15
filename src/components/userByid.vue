<template>
    <div>
 <div class="row">
  <div class="col-md-6">
      <img :src=imgUrl alt="">
  </div>
 <div class="col-md-6">
     <h3> <span>Name :</span> {{name}}</h3>
     <p><span>age :</span>{{age}}</p>
     <p>{{desc}}</p>
     

 </div>
    </div>
    </div>
</template>

<script>
   import axios from 'axios';

// /users/:id
    export default {
        name:'speficuserComp',
        created(){
         this.getuserById();
        },
        methods:{
         async getuserById(){
          console.log(this.$route.params.id);
              const res=axios.get(`https://6230659cf113bfceed5003d5.mockapi.io/users/${this.$route.params.id}`);
               
                let User= (await res).data
               console.log(User);
            this.imgUrl=User.avatar;
            this.name=User.name;
            this.age=User.age
            this.desc=User.description
          }  
        },
        data(){
            return{
                imgUrl:'',
                name:'',
                age:'',
                desc:''
            }
        }
    }
</script>

<style scoped>

</style>