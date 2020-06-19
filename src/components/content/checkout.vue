<template>
  <div>
    <msgbox ref="msgbox" :msg="message" />
    <div class="pb-5">
      <div class="container">
        <div class="alert alert-info alert-dismissible">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>注意：</strong>请检查您的信息。
        </div>
        <div class="row">
          <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <table class="table">
              <thead>
                <h3>地址信息</h3>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">收货人</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">所在地区</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">详细地址</div>
                  </th>
                  <!-- <th scope="col" class="border-0 bg-light">
                <div class="py-2 text-uppercase">邮编</div>
                  </th>-->
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">电话/手机</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">操作</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-middle">{{ address.name }}</td>
                  <td
                    class="align-middle"
                  >{{ address.province + ' ' + address.city + ' ' + address.county + ' ' + address.village }}</td>
                  <td class="align-middle">{{ address.detailedAddress }}</td>
                  <td lass="align-middle">{{ address.phoneNumber }}</td>
                  <td lass="align-middle">
                    <a href="javascript:void(0)">修改</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <!-- Shopping cart table -->
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <h3>订单详情</h3>
                  <tr>
                    <th scope="col" class="border-0 bg-light">
                      <div class="p-2 px-3 text-uppercase">商品</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">单价</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">数量</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">小计</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.itemId">
                    <th scope="row">
                      <div class="p-2">
                        <img
                          src="static/img/carousel3.jpg"
                          alt
                          width="70"
                          class="img-fluid rounded shadow-sm"
                        />
                        <div class="ml-3 d-inline-block align-middle">
                          <h5 class="mb-0">
                            <a
                              onclick="checkAnimal(${itemCart.itemId})"
                              href="javascript:void(0)"
                              class="text-dark d-inline-block"
                            >{{ item.productName }}</a>
                          </h5>
                          <span
                            class="text-muted font-weight-normal font-italic"
                          >{{ item.attributes }}</span>
                        </div>
                      </div>
                    </th>

                    <td class="align-middle">
                      <strong>${{ item.listPrice }}</strong>
                    </td>
                    <td class="align-middle">
                      <strong>{{ item.quantity }}</strong>
                    </td>
                    <td class="align-middle">
                      <strong>${{ item.quantity * item.listPrice }}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- End -->
          </div>
        </div>

        <div class="row py-5 p-4 bg-white rounded shadow-sm">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">订单小结</div>
            <div class="p-4">
              <p class="font-italic mb-4">在您检查信息无误后即可提交订单</p>
              <ul class="list-unstyled mb-4">
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <strong class="text-muted">总价</strong>
                  <strong id="totalPrice1" name="totalPrice1">${{ totalPrice }}</strong>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <strong class="text-muted">运费</strong>
                  <strong>$0.00</strong>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <strong class="text-muted">合计</strong>
                  <h5 class="font-weight-bold" id="totalPrice2" name="totalPrice2">${{ totalPrice }}</h5>
                </li>
              </ul>
              <a
                @click="submitOrder()"
                href="javascript:void(0)"
                class="btn btn-dark rounded-pill py-2 btn-block"
              >
                <strong>提交订单</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "startbootstrap-grayscale/dist/css/styles.css";
import router from "../../router";
import util from "../../util";
import msgbox from "../util/msgbox-normal";

export default {
  data: function() {
    return {
      address: {
        name: "nameless",
        phoneNumber: "10080",
        province: "广Door",
        city: "广州",
        county: "天河",
        village: "五山街道",
        detailedAddress: "五山路0号广州市第四十七中学"
      },
      items: [
        {
          itemId: 10001,
          productName: "Golden Retriever",
          listPrice: 20.0,
          attributes: "good boy, happy, short tail",
          quantity: 2
        },
        {
          itemId: 10011,
          productName: "Labrador Retriever",
          listPrice: 50.0,
          attributes: "funk, angry, crazy",
          quantity: 1
        },
        {
          itemId: 10003,
          productName: "Golden Retriever",
          listPrice: 20.0,
          attributes: "king, lonely, bold",
          quantity: 1
        }
      ],
      message: "正在添加"
    };
  },
  methods: {
    submitOrder: function() {
      var orderItems = [];
      for (var i in this.items) {
        orderItems.push({
          itemId: this.items[i].itemId,
          quantity: this.items[i].quantity
        });
        console.log(this.items);
      }
      console.log({
        username: localStorage.getItem("username"),
        cart: orderItems
      });
      util.myaxios
        .post("http://localhost:8080/order", {
          username: localStorage.getItem("username"),
          cart: orderItems
        })
        .then(res => {
          if (res.data.status == 200) {
            this.message = "订单提交成功";
            this.$refs.msgbox.showUp();
          } else {
            this.message = "提交失败，Error: " + res.data.status;
            this.$refs.msgbox.showUp();
          }
        });
    }
  },
  components: {
    msgbox
  },
  beforeMount() {
    this.items = this.$route.params.items;
    if (this.items == null) {
      alert("没货你下你妈的单呢");
      router.push("/home");
    }
  },
  computed: {
    totalPrice: function() {
      // 计算属性
      var total = 0;
      for (var item of this.items) {
        total += item.quantity * item.listPrice;
      }
      return total;
    }
  },
  mounted() {
    require("startbootstrap-grayscale/dist/js/scripts");
  }
};
</script>

<style>
</style>