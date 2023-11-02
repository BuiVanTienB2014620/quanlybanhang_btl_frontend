<template>
    <div>
        <AHeader />



        <h1> Trang chủ Admin</h1>


        <router-view></router-view>




        <AFooter />




    </div>
</template>



<script>
import AFooter from "../components/AFooter.vue";
import AHeader from "../components/AHeader.vue";

export default {
    components: {
        AHeader,
        AFooter,
    },
};
</script>