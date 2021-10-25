<template>
   <div class="container-fluid">
       <header-home></header-home>
    </div>
</template>

<script>
import HeaderHome from "./components/Home/Header.vue";
import apiServices from "./apiService";
export default {
    components:{
        HeaderHome
    },
    created(){
        console.log("Running");
        apiServices.getPost().then(res=>{
            console.log("rs",res.data);
        }).catch();
    }
    
};
</script>

<style></style>
