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
          <th>类别名称</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category">
          <td><router-link :to="'/management/products/' + category">{{ category }}</router-link></td>
          <td>
            <button class="layui-btn layui-btn-xs" onclick="updateBut()">修改</button>
          </td>
        </tr>
        <tr>
          <button @click="addUserSubmit()" class="layui-btn">新增</button>
        </tr>
      </tbody>
    </table>

    <!-- layUI 分页模块 -->
    <div id="pages"></div>
  </div>
</template>

<script>
// import "../../../assets/css/iconfont.css";
// import "../../../assets/layui/css/layui.css";
// import "../../../assets/css/base.css";

import layui from "../../../assets/layui/layui";

import "jquery";
import "jqueryui";

import util from "../../../util";

export default {
  name: "categoriesManage",
  data: function() {
    return {
      categories: [],
      new: false
    };
  },
  methods: {
    fetchData: function() {
      // 获取数据（categoires）
      util.myaxios
        .get(
          "http://localhost:8080/goods/categories/"
        )
        .then(res => {
          this.categories = res.data.data;
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