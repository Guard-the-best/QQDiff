<template>
  <div class="cBody" style="width: 1000px;height: 1000px;">
    <form id="addForm" class="layui-form" action>
      <div class="layui-form-item">
        <label class="layui-form-label">用户ID</label>
        <div class="layui-input-inline">
          <input
            v-model="addUser.userId"
            type="text"
            name="userId"
            placeholder="输入用户ID…"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-inline">
          <input
            v-model="addUser.username"
            type="text"
            name="username"
            placeholder="输入用户名…"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-inline">
          <input
            v-model="addUser.password"
            type="text"
            name="password"
            placeholder="输入密码…"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">确认密码</label>
        <div class="layui-input-inline shortInput">
          <input
            v-model="addUser.password2"
            type="password"
            name="password2"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">电话</label>
        <div class="layui-input-inline shortInput">
          <input
            v-model="addUser.phoneNumber"
            type="text"
            name="phoneNumber"
            required
            lay-verify="required|phone"
            placeholder="例：13000000000"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">昵称</label>
        <div class="layui-input-inline shortInput">
          <input
            v-model="addUser.nickname"
            type="text"
            name="title"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>

      <div class="layui-form-item">
        <div class="layui-input-block">
          <button @click="addUserSubmit()" class="layui-btn">立即提交</button>
          <button @click="clear()" type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      addUser: {
        userId: "",
        username: "",
        password: "",
        password2: "",
        phoneNumber: "",
        nickname: ""
      }
    };
  },
  methods: {
    addUserSubmit: function() {
      var newUser = {};
      for (var key in this.addUser) {
        if (key !== "password2") {
          newUser[key] = this.addUser[key];
        }
      }
      //再将结果返回后端
    },
    clear: function() {
      for (var key in this.addUser) {
        this.addUser[key] = "";
      }
    }
  }
};

// var app = new Vue({
//   el: "#addForm"
// });
</script>

<style>
.layui-form {
  margin-right: 30%;
}
</style>