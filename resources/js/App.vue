<template>
    <div class="p-relative view-root full-height">
        <header-home></header-home>
        <router-view></router-view>
        <footer-home></footer-home>
    </div>
</template>

<script>
import HeaderHome from "./components/Home/Header.vue";
import FooterHome from "./components/Home/Footer.vue";
import apiServices from "./apiService";
export default {
    components: {
        HeaderHome,
        FooterHome
    },
    created() {
        // console.log("Running");
        // apiServices
        //     .getPost()
        //     .then((res) => {
        //         console.log("rs", res.data);
        //     })
        //     .catch();
    },
};
</script>

<style scoped>
    .full-height{
        height: 100vh;
    }
    .p-relative{
        position: relative;
    }
</style>
