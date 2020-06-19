<template>
  <!-- <div
    class="modal fade"
    id="addressModal"
    ref="thisModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addressModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addressModalLabel">修改地址</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <label for="name" class="col-form-label">收货人姓名</label>
            <input type="text" class="form-control" id="name" :value="address.name" />
          <label for="province">省</label>
          <input type="text" id="province" :value="address.province" />
          <label for="city">市</label>
          <input type="text" id="city" :value="address.city" />
          <label for="county">区</label>
          <input type="text" id="county" :value="address.county" />
          <label for="village">街道</label>
          <input type="text" id="village" :value="address.village" />
          <label for="detailAdd">详细地址</label>
          <textarea id="detailAdd" cols="30" rows="10" :v-text="address.detailedAddress"></textarea>
          <label for="phoneNum">电话</label>
          <input type="text" id="phoneNum" :value="address.phoneNumber" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>-->

  <div
    class="modal fade"
    id="addressModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addressModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addressModalLabel">修改信息</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name" class="col-form-label">收货人姓名</label>
              <input type="text" class="form-control" id="name" :value="address.name" />
              <label for="province" class="col-form-label">省</label>
              <input type="text" id="province" class="form-control" :value="address.province" />
              <label for="city" class="col-form-label">市</label>
              <input type="text" id="city" class="form-control" :value="address.city" />
              <label for="county" class="col-form-label">区</label>
              <input type="text" id="county" class="form-control" :value="address.county" />
              <p>{{address.county}}</p>
              <label for="village" class="col-form-label">街道</label>
              <input type="text" id="village" class="form-control" :value="address.village" />
              <label for="detailAdd" class="col-form-label">详细地址</label>
              <textarea
                id="detailAdd"
                cols="30"
                rows="3"
                class="form-control"
                :v-model="address.detailedAddress"
              ></textarea>
              <p>{{address.detailedAddress}}</p>
              <label for="phoneNum" class="col-form-label">电话</label>
              <input type="text" id="phoneNum" class="form-control" :value="address.phoneNumber" />
            </div>
            <!-- <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
            </div>-->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import $ from "jquery";

export default {
  name: "addMsgbox",
  props: ["sAddress"],
  data: function() {
    return {
      address: {
        name: "",
        phoneNumber: "",
        province: "",
        city: "",
        county: "",
        village: "",
        detailedAddress: ""
      }
    };
  },
  methods: {
    showUp: function() {
      //   this.$refs.thisModal.modal("toggle");
      // FIXME:这里似乎无法使用refs获取子组件的DOM元素，也可能是我的问题，总之还是使用了jQuery，不太好
      $("#addressModal").modal("show");
    }
  },
  mounted() {
    this.address.name = this.sAddress.name;
    this.address.phoneNumber = this.sAddress.phoneNumber;
    this.address.province = this.sAddress.province;
    this.address.city = this.sAddress.city;
    this.address.county = this.sAddress.county;
    this.address.village = this.sAddress.village;
    this.address.detailedAddress = this.sAddress.detailedAddress;
  }
};
</script>

<style>
</style>