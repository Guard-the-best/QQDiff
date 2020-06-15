<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style="background-color:#24292e;">
    <a class="navbar-brand js-scroll-trigger" onclick="searchPage('/toCarousel')" href="javascript:void(0)">首页</a>
    <button class="navbar-toggler navbar-toggler-right"
            type="button" data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
        菜单
        <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto" id="navbarList">
            <li class="nav-item dropdown">
                <a class="nav-link js-scroll-trigger dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">宠物<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li v-for="pet in pets"  v-bind:key="pet"><a class="dropdown-item" v-on:click="getProductsByCategory(pet)" href="javascript:void(0)">{{pet}}</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link js-scroll-trigger dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">个人中心<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" onclick="searchPage('/toCart')" href="javascript:void(0)">购物车 &nbsp;<span id="cartLen" class="badge badge-secondary" v-on:click="updateLength()">{{cartLength}}</span></a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/toModifyInfoServlet')" href="javascript:void(0)">个人信息</a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/toOrderPage')" href="javascript:void(0)">我的订单</a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/toChangePassword')" href="javascript:void(0)">修改密码</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" onclick="searchPage('/toChangePassword')" href="#">销售情况</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link js-scroll-trigger"  href="/logout">退出登录</a>
                !--退出登录直接跳转到欢迎界面
            </li> -->
        </ul>
        <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search.." aria-label="Search" onblur="checkSearchInfo()" style="border-radius: 0.25rem 0 0 0.25rem !important;margin-right:0 !important;">
            <button class="btn btn-sm btn-secondary my-2 my-sm-0" type="submit" style="border-radius: 0 0.25rem 0.25rem 0 !important;padding:0.5875rem 2rem;background-color:#50616d"><i class="fa fa-search" aria-hidden="true"></i></button>
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
                    </c:if> -->
                    <!-- TODO: 搜索框自动补齐 -->
                    <!-- </label> -->
                <!-- </div> -->
            <!-- </li> -->
    </div>
</nav> 
</template>

<script>
//Bootstrap core CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Custom fonts for this template
import "@fortawesome/fontawesome-free/css/all.min.css"
//Custom styles for this template
// import "startbootstrap-grayscale/css/grayscale.css";

// Bootstrap core JavaScript
// import "jquery/dist/jquery.min.js";
// import "jqueryui/jquery-ui.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Plugin JavaScript
// import "jquery.easing/jquery.easing.min.js";
//Custom scripts for this template
// import "startbootstrap-grayscale/js/grayscale.js";
import util from '../../util.js'

export default {
    name: 'topBar',
    data(){
        return{
            pets:null,
            cartLength:0,
            getProductsByCategory(category){
                console.log(category);
                util.myaxios.get("http://localhost:8080/goods/categories/"+category+"/products")
                .then(res =>{
                    console.log(res.data.data)
                    //route
                });
            },
            updateLength(){
                util.myaxios.get("http://localhost:8080/cart?username="+localStorage.getItem("username"))
                .then(res =>{
                    this.cartLength=res.data.data.length
                });
            }
        }
    },
    mounted(){
        util.myaxios.get("http://localhost:8080/goods/categories")
        .then(res =>{
            this.pets=res.data.data
        });
        localStorage.setItem("token","eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU5MjA1NTM1OCwiZXhwIjoxNTkyMTQxNzU4fQ.M_vbg8pq0WzI4KCIFMv-iEK2W8yh2hwFpgMNx7yw1vg")
        localStorage.setItem("username","admin")
    }
}




</script>

<style>
</style>