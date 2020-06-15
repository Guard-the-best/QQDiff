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
            {{ item.descp }}
          </td>
          <td>
            <br />
            {{ item.price }}
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
    <msgbox :msg="message" ref="msgbox"/>
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
      items: [
        {
          itemId: 10001,
          productId: 1001,
          descp: "good boy, happy, short tail",
          price: "20.00"
        },
        {
          itemId: 10002,
          productId: 1001,
          descp: "bad boy, angry, long tail",
          price: "20.00"
        },
        {
          itemId: 10003,
          productId: 1001,
          descp: "king, lonely, bold",
          price: "30.00"
        }
      ],
      message: "正在添加至购物车，请稍后。"
    };
  },

  methods: {
        addToCart: function(itemId) {
          this.$refs.msgbox.showUp();
          util.myaxios
            .patch("http://localhost:8080/cart/" + itemId)
            .then(res => {
              this.$refs.msgbox.showUp();
              if (res == undefined) {
                this.message = "连接失败，请检查连接并重试";
              }
              else if (res.status == 200) {
                this.message = "添加成功";
              } else {
                this.message = "添加失败，Error:" + res.status;
              }
            });
        }
      },

  components: {
    msgbox
  }
};
</script>