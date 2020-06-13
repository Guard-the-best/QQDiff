<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
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
                <a class="nav-link js-scroll-trigger dropdown-toggle" data-toggle="dropdown" href="#about">宠物<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" onclick="searchPage('/viewCategory?categoryId=')" href="javascript:void(0)">鹦鹉</a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/viewCategory?categoryId=')" href="javascript:void(0)">猫猫</a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/viewCategory?categoryId=101')" href="javascript:void(0)">狗狗</a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/viewCategory?categoryId=')" href="javascript:void(0)">鱼儿</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link js-scroll-trigger dropdown-toggle" data-toggle="dropdown" href="#about">个人中心<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" onclick="searchPage('/toCart')" href="javascript:void(0)">购物车 &nbsp;<span id="cartLen" class="badge badge-secondary" onclick="updateLength()">${cartLength}</span></a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/toModifyInfoServlet')" href="javascript:void(0)">个人信息</a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/toOrderPage')" href="javascript:void(0)">我的订单</a></li>
                    <li><a class="dropdown-item" onclick="searchPage('/toChangePassword')" href="javascript:void(0)">修改密码</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#">销售情况</a>
            </li>
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
            <!-- <li class="nav-item">
                <a class="nav-link js-scroll-trigger"  href="/logout">退出登录</a>
                !--退出登录直接跳转到欢迎界面
            </li> -->
        </ul>
        <form class="form-inline navbar-right" role="search">
            <input onblur="checkSearchInfo()" id="searchInfo" name="searchInfo" type="text" class="form-control" placeholder="Search...">
            <button class="btn btn-secondary" onclick="searchPage7()" href="javascript:void(0)"/>
        </form>
    </div>
</nav> 
</template>

<script>
//Bootstrap core CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Custom fonts for this template
import "@fortawesome/fontawesome-free/css/all.min.css";

//Custom styles for this template
import "startbootstrap-grayscale/css/grayscale.css";

export default {
    name: 'topBar'
}
</script>

<style>
</style>