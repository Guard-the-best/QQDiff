<template>
  <div
    class="modal fade"
    id="exampleModal"
    ref="thisModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">消息</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <strong>{{ msg }}</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import $ from "jquery"

export default {
  name: "msgboxNormal",
  props: ["msg"],
  methods: {
    showUp: function() {
    //   this.$refs.thisModal.modal("toggle");
    // FIXME:这里似乎无法使用refs获取子组件的DOM元素，也可能是我的问题，总之还是使用了jQuery，不太好
    $("#exampleModal").modal("show")
    }
  },
  data: function() {
    return {};
  }
};
</script>