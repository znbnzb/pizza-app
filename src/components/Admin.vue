<template>
    <div class="row">
      <!-- 新的pizza -->
        <div class="col-sm-12 col-md-8">
            <newPizza/>
        </div>
      <!-- 右侧品种展示 -->
        <div class="col-sm-12 col-md-4">
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems">
                    <tr>
                        <td>{{item.name}}</td>
                        <td >
                            <button  class="btn btn-outline-danger btn-sm">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import newPizza from "../components/NewPizza";
export default {
  name: "NewPizza",
  data() {
    return {
      getMenuItems: []
    };
  },
  components: {
    newPizza
  }
  // created() {
  //   fetch("https://wd4660344307vacuxd.wilddogio.com/menu.json")
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       // console.log(data)
  //       let menuArray = [];
  //       for (let key in data) {
  //         // console.log(key)
  //         // console.log(data[key])
  //         data[key].id = key;
  //         menuArray.push(data[key]);
  //       }
  //       this.getMenuItems = menuArray;
  //     });
  // }
};
</script>

<style scoped>
</style>