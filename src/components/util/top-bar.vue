<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <!-- <a
        class="navbar-brand js-scroll-trigger"
        onclick="searchPage('/toCarousel')"
        href="javascript:void(0)"
      >首页</a>-->
      <router-link class="navbar-brand js-scroll-trigger" to="/home">首页</router-link>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        菜单
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto" id="navbarList">
          <li class="nav-item dropdown">
            <a
              class="nav-link js-scroll-trigger dropdown-toggle"
              data-toggle="dropdown"
              href="javascript:void(0)"
            >
              宠物
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li v-for="pet in pets" v-bind:key="pet">
                <router-link
                  class="dropdown-item"
                  :to="'/goods/categories/'+pet+'/products'"
                >{{pet}}</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link js-scroll-trigger dropdown-toggle"
              data-toggle="dropdown"
              v-on:click="updateLength()"
              href="javascript:void(0)"
            >
              个人中心
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/cart">
                  购物车 &nbsp;
                  <span
                    id="cartLen"
                    class="badge badge-secondary"
                    v-on:click="updateLength()"
                  >{{cartLength}}</span>
                </router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/user/info"
                  href="javascript:void(0)"
                >个人信息</router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/order"
                  href="javascript:void(0)"
                >我的订单</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link js-scroll-trigger"
              to="/management"
              href="#"
            >销售情况</router-link>
          </li>
          <!-- <li class="nav-item">
                <a class="nav-link js-scroll-trigger"  href="/logout">退出登录</a>
                !--退出登录直接跳转到欢迎界面
          </li>-->
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search.."
            aria-label="Search"
            onblur="checkSearchInfo()"
            style="border-radius: 0.25rem 0 0 0.25rem !important;margin-right:0 !important;"
          />
          <button
            class="btn btn-sm btn-secondary my-2 my-sm-0"
            type="submit"
            style="border-radius: 0 0.25rem 0.25rem 0 !important;padding:0.5875rem 2rem;background-color:#50616d"
          >
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
        <!-- <li class="nav-item"> -->
        <!-- 搜索 -->

        <!-- <div> -->
        <!-- <label> -->
        <!-- <c:if test="${productLength!=0}">
                        <c:forEach items="${prodcut}" var="productSearch">
                    <span><a onclick="searchPage('animalItemServlet')" href="javascript:void(0)" id="${productSearch.itemId}">
                            ${productSearch.productName}
                    </a></span>
                        </c:forEach>
        </c:if>-->
        <!-- TODO: 搜索框自动补齐 -->
        <!-- </label> -->
        <!-- </div> -->
        <!-- </li> -->
      </div>
    </nav>
    <table class="table table-dark" border style="margin:0">
      <tr>
        <td scope="col" height="88px" />
      </tr>
    </table>
  </div>
</template>

<script>
//Bootstrap core css
import "bootstrap/dist/css/bootstrap.min.css";
//Custom fonts for this template
import "@fortawesome/fontawesome-free/css/all.min.css";
//Custom styles for this template
// import "startbootstrap-grayscale/css/grayscale.css";

// Bootstrap core JavaScript
// import "jquery/dist/jquery.min.js";
// import "jqueryui/jquery-ui.min.js";
import "bootstrap";
// Plugin JavaScript
import "jquery-easing/jquery.easing.1.3.js";
//Custom scripts for this template
// import "startbootstrap-grayscale/js/grayscale.js";
import util from "../../util.js";

export default {
  name: "topBar",
  data() {
    return {
      pets: null,
      cartLength: 0
    };
  },
  methods: {
    getProductsByCategory: function(category) {
      console.log(category);
      util.myaxios
        .get("http://localhost:8080/goods/categories/" + category + "/products")
        .then(res => {
          console.log(res.data.data);
          //route
        });
    },
    updateLength: function() {
      util.myaxios
        .get(
          "http://localhost:8080/cart?username=" +
            localStorage.getItem("username")
        )
        .then(res => {
          this.cartLength = res.data.data.length;
        });
    }
  },
  mounted() {
    require("startbootstrap-grayscale/dist/js/scripts");
    util.myaxios.get("http://localhost:8080/goods/categories").then(res => {
      this.pets = res.data.data;
    });
    // this.updateLength();
  }
};
</script>

<style>
</style>