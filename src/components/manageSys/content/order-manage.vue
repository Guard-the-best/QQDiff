<template>
  <div class="cBody">
    <div class="console">
      <form class="layui-form" action>
        <div class="layui-form-item">
          <div class="layui-input-inline">
            <input
              type="text"
              name="name"
              required
              lay-verify="required"
              placeholder="搜索…"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <button class="layui-btn" lay-submit lay-filter="formDemo">搜索</button>
        </div>
      </form>
    </div>

    <table class="layui-table" id="userTable">
      <thead>
        <tr>
          <th>订单号</th>
          <th>用户Id</th>
          <th>下单日期</th>
          <th>价格</th>
          <th>送货地址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" v-bind:key="order.userId">
          <td>{{order.orderId}}</td>
          <td>{{order.userId}}</td>
          <td>{{order.orderDate}}</td>
          <td>$ {{price[index]}}</td>
          <td>{{order.shipAddress}}</td>
          <td>
            <button
              class="layui-btn layui-btn-xs"
              @click="updating(order)"
              data-toggle="modal"
              data-target="#updateModal"
            >修改订单</button>
          </td>
          <td>
            <button class="layui-btn layui-btn-danger" @click="toDelete(index)">删除订单</button>
          </td>
        </tr>
        <!-- <br />
          <table>
            <thead></thead>
            <tbody>
              <tr v-for="item in order.items" :key="item.itemId">
                <td>{{item.itemId}}</td>
                <td>${{item.listPrice}}</td>
                <td>{{item.attributes}}</td>
                <td>{{item.number}}</td>
              </tr>
            </tbody>
        </table>-->
      </tbody>
    </table>

    <!-- layUI 分页模块 -->
    <div id="pages"></div>

    <div
      class="modal fade"
      id="updateModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="updateModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateModalLabel">修改地址</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="province" class="col-form-label">地址</label>
                <input type="text" id="province" class="form-control" v-model="curOrder.shipAddress" />
              </div>
              <!-- <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
              </div>-->
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="updateSubmit"
            >保存修改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../../../util";

export default {
  data: function() {
    return {
      price: [],
      orders: [],
      curOrder: {
        orderId: "",
        userId: "",
        orderDate: "",
        shipAddress: "",
        billAddress: "",
        status: "",
        items: ""
      }
    };
  },

  methods: {
    fetchData: function() {
      util.myaxios.get("http://localhost:8080/order/all").then(res => {
        this.orders = res.data.data;
        this.calPrice();
      });
    },
    calPrice: function() {
      for (var i in this.orders) {
        var curP = 0;
        for (var j in this.orders[i].items) {
          curP +=
            this.orders[i].items[j].listPrice * this.orders[i].items[j].number;
        }
        this.price.push(curP);
      }
    },
    updating: function(order) {
      this.curOrder = order;
    },
    updateSubmit: function() {
      util.myaxios
        .patch("http://localhost:8080/order", this.curOrder)
        .then(res => {
          console.log(res.status);
          this.fetchData();
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style src="../../../assets/css/base.css" scoped>
</style>
<style src="../../../assets/layui/css/layui.css" scoped>
</style>
<style src="bootstrap/dist/css/bootstrap.min.css" scoped>
</style>
<style src="startbootstrap-grayscale/dist/css/styles.css" scoped>
</style>