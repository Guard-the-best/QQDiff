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
        <!-- <c:forEach items="${itemList}" var="itemResult">
        <tr class="card0" id="${itemResult.itemId}">
          <th scope="row">
            <br />
            ${itemResult.itemId}
          </th>
          <td>
            <br />
            ${itemResult.productId}
          </td>
          <td>
            <br />
            <c:forEach items="${itemResult.attributes}" var="attribute" varStatus="status">
              <c:if test="${attribute != null && status.index != 0}">,</c:if>
              ${attribute}
            </c:forEach>
          </td>
          <td>
            <br />
            $ ${itemResult.listPrice}
          </td>
          <td>
            <button
              type="button"
              class="btn btn-info btn-sm"
              onclick="searchPage2(${itemResult.itemId})"
              href="javascript:void(0)"
            >Buy</button>
          </td>
          <td>
            <button
              onclick="checkAnimal2(${itemResult.itemId})"
              type="button"
              class="btn btn-success btn-sm"
              data-toggle="modal"
              data-target="#exampleModal"
            >Cart</button>
          </td>
        </tr>
        </c:forEach>-->
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
              data-toggle="modal"
              data-target="#exampleModal"
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
          } else {
            this.message = "添加失败，Error:" + res.status;
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