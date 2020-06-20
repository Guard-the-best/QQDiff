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
          <th>物品编号</th>
          <th>所属商品</th>
          <th>单价</th>
          <th>库存</th>
          <th>详细介绍</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.itemId">
          <td>{{ item.itemId }}</td>
          <td>{{ item.productId }}</td>
          <td>{{ item.listPrice }}</td>
          <td>{{ item.inventory }}</td>
          <td>{{ item.attributes }}</td>
          <td>
            <button
              class="layui-btn layui-btn-xs"
              @click="updating(item)"
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
                <label for="province" class="col-form-label">所属商品</label>
                <input type="text" id="province" class="form-control" v-model="curItem.productId" />
                <label for="city" class="col-form-label">单价</label>
                <input type="text" id="city" class="form-control" v-model="curItem.listPrice" />
                <label for="a" class="col-form-label">库存</label>
                <input type="number" id="a" class="form-control" v-model="curItem.inventory" />
                <label for="b" class="col-form-label">详细介绍</label>
                <input type="text" id="b" class="form-control" v-model="curItem.attributes" />
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

import util from "../../../util";

export default {
  name: "productsManage",
  data: function() {
    return {
      items: [
        {
          itemId: 10001,
          productId: 1001,
          listPrice: 20.0,
          inventory: 1,
          attirbutes: "good boy-happy-short tail"
        },
        {
          itemId: 10002,
          productId: 1001,
          listPrice: 20.0,
          inventory: 1,
          attirbutes: "bad boy-angry-long tail"
        },
        {
          itemId: 10003,
          productId: 1001,
          listPrice: 30.0,
          inventory: 1,
          attirbutes: "king-lonely-bold"
        }
      ],
      new: false,
      curItem: {
        itemId: null,
        productId: "",
        listPrice: "",
        inventory: "",
        attirbutes: ""
      }
    };
  },
  methods: {
    fetchData: function() {
      // 获取数据（items）
      util.myaxios
        .get(
          "http://localhost:8080/goods/products/" +
            this.$route.params.productName +
            "/items"
        )
        .then(res => {
          this.items = res.data.data;
        });
    },
    updateSubmit: function() {
      util.myaxios
        .post("http://localhost:8080/goods/items", this.curItem)
        .then(res => {
          console.log(res.status);
          this.fetchData();
        });
    },
    updating: function(item) {
      this.curItem = item;
    },
    newing: function() {
      this.curItem = {
        itemId: null,
        productId: "",
        listPrice: "",
        inventory: "",
        attirbutes: ""
      };
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