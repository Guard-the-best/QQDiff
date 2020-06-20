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
          <th>用户ID</th>
          <th>用户名</th>
          <th>密码</th>
          <th>手机号</th>
          <th>昵称</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" v-bind:key="user.userId">
          <td>{{user.userId}}</td>
          <td>{{user.username}}</td>
          <td>{{user.password}}</td>
          <td>{{user.phoneNumber}}</td>
          <td>{{user.nickname}}</td>
          <td>
            <button class="layui-btn layui-btn-danger" @click="toDelete(index)">删除用户</button>
            <a class="layui-btn layui-btn-primary" href="agent_add.html">添加用户</a>
          </td>
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
export default {
  name: "userManagement",
  data: function() {
    return {
      users: [
        {
          userId: "1",
          username: "admin",
          password: "123456",
          phoneNumber: "10086",
          nickname: "dyp"
        },
        {
          userId: "2",
          username: "linbei",
          password: "asdfg",
          phoneNumber: "10010",
          nickname: "ooo"
        }
      ]
    };
  },
  methods: {
    toDelete: function(index) {}
  },
  mounted() {
    layui.use(["laypage", "layer"], function() {
      var laypage = layui.laypage,
        layer = layui.layer;

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
  }
};

// layui.use("form", function() {
//   var form = layui.form;

//   //监听提交
//   form.on("submit(formDemo)", function(data) {
//     layer.msg(JSON.stringify(data.field));
//     return false;
//   });
// });

// var vm = new Vue({
//   el: "#userTable",
//   data: {
//     users: []
//   },
//   methods: {
//     delete: function(index) {
//       delete this.users[index];
//     }
//   },
//   watch: {
//     users: function() {
//       //把结果返回后端
//     }
//   }
// });
</script>

<style src="../../../assets/css/base.css" scoped>
</style>
<style src="../../../assets/layui/css/layui.css" scoped>
</style>
<style src="bootstrap/dist/css/bootstrap.min.css" scoped>
</style>
<style src="startbootstrap-grayscale/dist/css/styles.css" scoped>
</style>