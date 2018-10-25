<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/icon.png" alt="" class="mx-auto d-block">
                    <!-- prevent是阻止默认事件 -->
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">用户名</label>
                            <input 
                            type="text"
                            class="form-control"
                            v-model="username"
                            >
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">密码</label>
                            <input 
                            type="password"
                            class="form-control"
                            v-model="password"
                            >
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    creaed() {
      this.$http.get("login").then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
</style>