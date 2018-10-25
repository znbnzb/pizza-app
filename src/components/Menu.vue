<template>
    <div class="row">
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button
                        @click="addToBasket(item,option)"
                        class="btn btn-sm btn-outline-success">添加</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4" v-if="baskets.length>0">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody v-for="item in baskets" :key="item.name">
                    <tr>
                        <td>
                            <button @click="decraseQuantity(item)" class="btn btn-sm">-</button>
                            <span>{{item.quantity}}</span>
                            <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                        </td>
                        <td>{{item.name}}{{item.size}}</td>
                        <td>{{item.price * item.quantity}}</td>
                    </tr>
                </tbody>
            </table>
            <p>总价：{{total +'RMB'}}</p>
            <button class="btn btn-success btn-block">提交</button>
        </div>
        <div v-else>
            {{basketText}}
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      baskets: [],
      basketText: "您购物车里面没有商品"
      //   getMenuItems: {}
    };
  },
  computed: {
    getMenuItems() {
      //在vuex中获取数据
      // return this.$store.state.menuItems;
      // 通过getters获取数据
      return this.$store.getters.getMenuItems;
    },
    total() {
      let totalCost = 0;
      //循环 菜单
      for (let index in this.baskets) {
        // 获得每一个对象
        let indivdualItme = this.baskets[index];
        totalCost += indivdualItme.quantity * indivdualItme.price;
      }

      return totalCost;
    }
  },
  //页面加载前执行函数，拿到数据
  created() {
    this.fectDate();
  },
  methods: {
    fectDate() {
      // this.$http.get("/menu").then(request => {
      // this.getMenuItems = request.data.results;
      //将请求下来的数据存储到Vuex中
      this.$http
        .get("classes/menu")
        .then(request =>
          this.$store.commit("setMenuItems", request.data.results)
        );
    },
    addToBasket(item, option) {
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      //总体思路就是，如果你购物车里面if (this.baskets.length > 0)没有商品，
      //   那我就直接push,如果有的话，就将两边的数据进行匹配，如果匹配上数量就加1

      //如果购物车里面有东西执行if里面的函数去匹配，如果没有就添加进去
      if (this.baskets.length > 0) {
        let result = this.baskets.filter(basket => {
          return basket.name === item.name && basket.price === option.price;
        });

        //再做一个判断，找到购物车里面的每一个对象，进行匹配之后，如果存在匹配上了，就将数量进行加1
        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    decraseQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    removeFromBasket(item) {
      this.baskets.splice(this.baskets.indexOf(item), 1);
    }
  }
};
</script>

<style scoped>
</style>