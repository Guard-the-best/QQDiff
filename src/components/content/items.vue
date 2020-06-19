<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Item ID</th>
          <th scope="col">Product ID</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Purchase</th>
          <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.itemId" class="card0" :id="item.itemId">
          <th scope="row">
            <br />
            {{ item.itemId }}
          </th>
          <td>
            <br />
            {{ item.productId }}
          </td>
          <td>
            <br />
            {{ item.attributes }}
          </td>
          <td>
            <br />
            ${{ item.listPrice }}
          </td>
          <td>
            <button
              type="button"
              class="btn btn-info btn-sm"
              v-on:click="addToCart(item.itemId)"
              href="javascript:void(0)"
            >Buy</button>
          </td>
          <td>
            <button
              v-on:click="addToCart(item.itemId)"
              type="button"
              class="btn btn-success btn-sm"
              href="javascript:void(0)"
            >Cart</button>
          </td>
        </tr>
      </tbody>
    </table>
    <msgbox :msg="message" ref="msgbox" />
  </div>
</template>

<script>
import msgbox from "../util/msgbox-normal";
import util from "../../util";
import "../util/top-bar"
// TODO:设置函数 1.加入购物车 2.直接下单
//
export default {
  name: "items",
  data: function() {
    return {
      items: [],
      message: "正在添加至购物车，请稍后。"
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    fetchData: function() {
      // 获取数据（items）
      util.myaxios
        .get(
          "http://localhost:8080/goods/products/" +
            this.$route.params.productName +
            "/items"
        )
        .then(res => {
          this.items = res.data.data;
        });
    },

    addToCart: function(itemId) {
      // this.$refs.msgbox.showUp();
      util.myaxios
        .patch("http://localhost:8080/cart/" + itemId, {
          delta: 1,
          username: localStorage.getItem("username")
        })
        .then(res => {
          // this.$refs.msgbox.showUp();
          if (res == undefined) {
            this.message = "连接失败，请检查连接并重试";
          } else if (res.status == 200) {
            this.message = "添加成功";
            this.$refs.msgbox.showUp();
          } else {
            this.message = "添加失败，错误:" + res.status;
            this.$refs.msgbox.showUp();
          }
        });
    }
  },

  components: {
    msgbox
  },
  beforeMount() {
    this.fetchData();
  }
};
</script>