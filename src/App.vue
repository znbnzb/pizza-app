<template>
    <div id="app">
        <div class="container">
            <appHeader/>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import appHeader from "./components/Header";
export default {
  components: {
    appHeader
  }
};
</script>

<style scoped>
</style>