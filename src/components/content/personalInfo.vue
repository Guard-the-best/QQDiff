<template>
  <div>
    <msgbox ref="msgbox" :msg="message" />
    <addMsgbox ref="addMsgbox" :sAddress="address" />
    <div class="pb-5">
      <div class="container">
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
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">电话/手机</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">操作</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-show="!emptyAdd">
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
                <tr>
                  <td class="align-middle">
                    <button
                      type="button"
                      class="btn btn-info btn-sm"
                      v-on:click="toShowAdd()"
                      href="javascript:void(0)"
                      v-show="emptyAdd"
                    >添加一个新的地址</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <table class="table">
              <thead>
                <h3>其他信息</h3>
                <a href="javascript:void(0)">修改密码</a>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "startbootstrap-grayscale/dist/css/styles.css";

// import msgbox from "../util/msgbox-normal"
import addMsgbox from "../util/addMsgbox"

import util from "../../util";
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
      message: "正在添加",
      emptyAdd: false
    };
  },
  methods: {
    fetchAdd: function() {
      util.myaxios
        .get(
          "http://localhost:8080/user/address?username=" +
            localStorage.getItem("username")
        )
        .then(res => {
          console.log(res);
          if (res.data.data == null) {
            this.emptyAdd = true;
            this.address = {};
          } else {
            this.address = res.data.data.address;
            this.emptyAdd = false;
          }
        });
    },
    toShowAdd: function() {
        this.$refs.addMsgbox.showUp();
    }
  },
  components: {
      addMsgbox,
    //   msgbox
  },
  mounted() {
    this.fetchAdd();
  }
};
</script>
