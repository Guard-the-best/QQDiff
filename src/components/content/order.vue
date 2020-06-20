<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="pb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <!-- Shopping cart table -->
                <div class="table-responsive">
                  <form>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col" class="border-0 bg-light">
                            <div class="p-2 px-3 text-uppercase">订单号</div>
                          </th>
                          <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">下单日期</div>
                          </th>
                          <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">价格</div>
                          </th>
                          <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">送货地址</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- <c:forEach items="${orderList}" var="orderLine">
                                    <tr>
                                        <td class="border-0 align-middle"><strong>
                                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${orderLine.orderId}
                                        </strong></td>
                                        <th scope="row" class="border-0">
                                            <div class="p-2">
                                                <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" class="img-fluid rounded shadow-sm">
                                                <div class="ml-3 d-inline-block align-middle">
                                                    <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">${orderLine.name}</a></h5><span class="text-muted font-weight-normal font-italic d-block"></span>
                                                </div>
                                            </div>
                                        </th>
                                        <td class="border-0 align-middle"><strong>
                                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ${orderLine.quantity}
                                        </strong></td>
                                        <td class="border-0 align-middle"><strong>
                                            ${orderLine.date}
                                        </strong></td>
                                        <td class="border-0 align-middle"><strong>
                                            $ ${orderLine.price}
                                        </strong></td>
                                        <td class="border-0 align-middle"><strong>
                                                ${orderLine.address}
                                        </strong></td>

                                    </tr>
                        </c:forEach>-->
                        <tr v-for="(order, index) in orders" :key="order.orderId">
                          <td class="border-0 align-middle">
                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{order.orderId}}</strong>
                          </td>
                          <td class="border-0 align-middle">
                            <strong>{{ order.orderDate }}</strong>
                          </td>
                          <td class="border-0 align-middle">
                            <strong>$ {{price[index]}}</strong>
                          </td>
                          <td class="border-0 align-middle">
                            <strong>{{order.shipAddress}}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <!-- End -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../../util";

export default {
  data: function() {
    return {
      orders: [],
      price: []
    };
  },
  methods: {
    fetchData: function() {
      util.myaxios
        .get(
          "http://localhost:8080/order?username=" +
            localStorage.getItem("username")
        )
        .then(res => {
          this.orders = res.data.data;
          this.calPrice();
        });
    },
    calPrice: function() {
      for (var i in this.orders) {
        var curP = 0;
        for (var j in this.orders[i].items) {
          curP +=
            this.orders[i].items[j].listPrice *
            this.orders[i].items[j].number;
        }
        this.price.push(curP);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
</style>