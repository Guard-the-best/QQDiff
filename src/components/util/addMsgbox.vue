<template>
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
              <input type="text" class="form-control" id="name" :value="address.name" ref="name" />
              <label for="province" class="col-form-label">省</label>
              <input type="text" id="province" class="form-control" :value="address.province" ref="province" />
              <label for="city" class="col-form-label">市</label>
              <input type="text" id="city" class="form-control" :value="address.city" ref="city" />
              <label for="county" class="col-form-label">区</label>
              <input type="text" id="county" class="form-control" :value="address.county" ref="county" />
              <label for="village" class="col-form-label">街道</label>
              <input type="text" id="village" class="form-control" :value="address.village" ref="village" />
              <label for="detailAdd" class="col-form-label">详细地址</label>
              <input type="text" id="village" class="form-control" :value="address.detailedAddress" ref="detailedAddress" />
              <p>{{address.detailedAddress}}</p>
              <label for="phoneNum" class="col-form-label">电话</label>
              <input type="text" id="phoneNum" class="form-control" :value="address.phoneNumber" ref="phoneNumber" />
            </div>
            <!-- <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
            </div>-->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addSubmit">保存修改</button>
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
  props: ["address"],
  data: function() {
    return {
      // address: {
      //   name: "",
      //   phoneNumber: "",
      //   province: "",
      //   city: "",
      //   county: "",
      //   village: "",
      //   detailedAddress: ""
      // }
    };
  },
  methods: {
    showUp: function() {
      //   this.$refs.thisModal.modal("toggle");
      // FIXME:这里似乎无法使用refs获取子组件的DOM元素，也可能是我的问题，总之还是使用了jQuery，不太好
      $("#addressModal").modal("show");
    },
    close: function() {
      $("#exampleModal").modal("hide");
    },
    addSubmit: function() {
      var postAdd = {
        name: this.$refs.name.value,
        phoneNumber: this.$refs.phoneNumber.value,
        province: this.$refs.province.value,
        city: this.$refs.city.value,
        county: this.$refs.county.value,
        village: this.$refs.village.value,
        detailedAddress: this.$refs.detailedAddress.value
      }
      console.log(postAdd)
      this.$emit("submitAdd", postAdd);
    }
  },
  mounted() {
    
  }
};
</script>

<style>
</style>