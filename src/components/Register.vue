<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/icon.png" alt="" class="mx-auto d-block">
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
                            <label for="email">邮箱</label>
                            <input 
                            type="email"
                            class="form-control"
                            v-model="email"
                            >
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input 
                            type="password"
                            class="form-control"
                            v-model="password"
                            >
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input 
                            type="password"
                            class="form-control"
                            v-model="confirmPassword"
                            >
                        </div>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
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
      password: "",
      confirmPassword: "",
      email: ""
    };
  },
  methods: {
    onSubmit() {
      //先判断密码是否相等
      if (this.password === this.confirmPassword) {
        //如果相等进行传值
        const formData = {
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword,
          email: this.email
        };
        // 用post方法，第一个是请求地址，第二是传送数据，返回res
        this.$http
          .post("users", formData)
          .then(res => this.$router.push({ name: "loginLink" }));
      } else {
        alert("两次密码输入不一致！");
      }
    }
  }
};
</script>

<style scoped>
</style>