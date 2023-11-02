<template>
    <div>
        <AppHeader/>
        <h1> Trang chủ home</h1>
        <router-view></router-view>
        <AppFooter/>
    </div>
</template>



<script>
import AppFooter from "../components/App.header.vue";
import AppHeader from "../components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>