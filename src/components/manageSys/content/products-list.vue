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
              placeholder="输入商品名称"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-input-inline">
            <select name="provid" id="provid" lay-filter="provid">
              <option value>一级分类</option>
            </select>
          </div>
          <div class="layui-input-inline">
            <select name="cityid" id="cityid" lay-filter="cityid">
              <option value>二级分类</option>
            </select>
          </div>
          <button class="layui-btn" lay-submit lay-filter="formDemo">检索</button>
          <a class="layui-btn">导入商品</a>
        </div>
      </form>
    </div>

    <table class="layui-table">
      <thead>
        <tr>
          <th>商品编号</th>
          <th>所属类别</th>
          <th>商品名称</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.productId">
          <td>
            <router-link :to="'/management/items/' + product.productName">{{ product.productId }}</router-link>
          </td>
          <td>{{ product.categoryId }}</td>
          <td>{{ product.productName }}</td>
          <td>
            <button
              class="layui-btn layui-btn-xs"
              @click="updating(product)"
              data-toggle="modal"
              data-target="#updateModal"
            >修改</button>
          </td>
        </tr>
        <tr>
          <button
            @click="newing()"
            class="layui-btn"
            data-toggle="modal"
            data-target="#updateModal"
          >新增</button>
        </tr>
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
            <h5 class="modal-title" id="updateModalLabel">修改信息</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="province" class="col-form-label">所属类别</label>
                <input
                  type="text"
                  id="province"
                  class="form-control"
                  v-model="curProduct.categoryId"
                />
                <label for="city" class="col-form-label">商品名称</label>
                <input type="text" id="city" class="form-control" v-model="curProduct.productName" />
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
// import "../../../assets/css/iconfont.css";
// import "../../../assets/layui/css/layui.css";
// import "../../../assets/css/base.css";

import layui from "../../../assets/layui/layui";

import "jquery";
import "jqueryui";
import "bootstrap";

import util from "../../../util";

export default {
  name: "productsManage",
  data: function() {
    return {
      products: [
        { productId: 1001, categoryId: 101, productName: "Golden Retriever" },
        { productId: 1002, categoryId: 101, productName: "Labrador Retriever" },
        { productId: 1003, categoryId: 101, productName: "Chihuahua" }
      ],
      new: false,
      curProduct: {
        productId: null,
        categoryId: "",
        productName: ""
      }
    };
  },
  methods: {
    fetchData: function() {
      // 获取数据（items）
      util.myaxios
        .get(
          "http://localhost:8080/goods/categories/" +
            this.$route.params.categoryName +
            "/products"
        )
        .then(res => {
          this.products = res.data.data;
        });
    },
    updating: function(product) {
      this.new = false;
      this.curProduct.productId = product.productId;
      this.curProduct.productName = product.productName;
      this.curProduct.categoryId = product.categoryId;
    },
    newing: function() {
      this.new = true;
      this.curProduct = {
        productId: null,
        categoryId: "",
        productName: ""
      };
    },
    updateSubmit: function() {
      console.log(this.curProduct);
      util.myaxios
        // .post("http://localhost:8080/goods/product", {
        //   product: this.curProduct
        // })
        .post("http://localhost:8080/goods/product", this.curProduct)
        .then(res => {
          this.fetchData();
          console.log(res.status);
        });
    }
  },
  mounted() {
    this.fetchData();
    layui.use("laypage", function() {
      var laypage = layui.laypage;

      //总页数大于页码总数
      laypage.render({
        elem: "pages",
        count: 100,
        layout: ["count", "prev", "page", "next", "limit", "skip"],
        jump: function(obj) {
          console.log(obj);
        }
      });
    });
    //修改按钮
    function updateBut() {
      layui.use("layer", function() {
        var layer = layui.layer;

        //iframe层-父子操作
        layer.open({
          type: 2,
          area: ["70%", "60%"],
          fixed: false, //不固定
          maxmin: true,
          content: "goods_update.html"
        });
      });
    }
    //解决框架的问题"overflow","hidden"
    var setCBodyOverflowINDEX = 0;
    function setCBodyOverflow(layero, index, layer) {
      console.log(index);
    }
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