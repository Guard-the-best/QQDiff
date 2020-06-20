<template>
  <div>
      <div class="menu">
        <div class="user">
          <img style src="../../../assets/HTimg/system.png" />
          <div>
            <h1>admin</h1>
            <span>
              <i class="yd"></i>在线
              <a href>
                <i class="iconfont icon-zhuxiaologout11"></i>
                <font>注销</font>
              </a>
            </span>
          </div>
        </div>
        <div class="menuList">
          <ul class="menu1">
            <li class="menuli1">
              <a class="menua1" href="javascript:menu_ajax('tgls/index.html', '后台数据总览')">
                <i class="iconfont icon-shouye left"></i>
                <p>后台数据总览</p>
              </a>
            </li>
            <li class="menuli1">
              <a class="menua1" href="javascript:void(0)">
                <i class="iconfont icon-wodeyewuyuan left"></i>
                <p>用户管理</p>
                <i class="iconfont icon-jiantou_zuo right"></i>
              </a>
              <ul class="menu2">
                <li class="menuli2">
                  <a
                    class="menua2"
                    href="javascript:menu_ajax('tgls/agent/agent_list.html', '代理商管理,代理商列表')"
                  >
                    <i class="menua2_ico">
                      <span></span>
                    </i>用户列表
                  </a>
                </li>
                <li class="menuli2">
                  <a
                    class="menua2"
                    href="javascript:menu_ajax('tgls/agent/agent_add.html', '代理商管理,添加代理商')"
                  >
                    <i class="menua2_ico">
                      <span></span>
                    </i>添加用户
                  </a>
                </li>
              </ul>
            </li>
            <li class="menuli1">
              <a class="menua1" href="javascript:void(0)">
                <i class="iconfont icon-shangpin left"></i>
                <p>商品管理</p>
                <i class="iconfont icon-jiantou_zuo right"></i>
              </a>
              <ul class="menu2">
                <li class="menuli2">
                  <a
                    class="menua2"
                    href="javascript:menu_ajax('tgls/agent/agent_list.html', '商品管理,基本商品库')"
                  >
                    <i class="menua2_ico">
                      <span></span>
                    </i>基本商品库
                  </a>
                </li>
                <li class="menuli2">
                  <a
                    class="menua2"
                    href="javascript:menu_ajax('tgls/agent/agent_add.html', '商品管理,添加商品')"
                  >
                    <i class="menua2_ico">
                      <span></span>
                    </i>添加商品
                  </a>
                </li>
              </ul>
            </li>
            <li class="menuli1">
              <a
                class="menua1"
                href="javascript:menu_ajax('tgls/reportForm/reportForm1.html', '统计报表')"
              >
                <i class="iconfont icon-icon left"></i>
                <p>统计报表</p>
              </a>
            </li>
            <li class="menuli1">
              <a class="menua1" href="javascript:menu_ajax('tgls/customer_card.html', '用户和权限管理')">
                <i class="iconfont icon-yingyongzhongxin left"></i>
                <p>用户和权限管理</p>
              </a>
            </li>
            <li class="menuli1">
              <a class="menua1" href="javascript:menu_ajax('tgls/customer_card.html', '知识管理')">
                <i class="iconfont icon-zhishi left"></i>
                <p>知识管理</p>
              </a>
            </li>
          </ul>
      </div>

      <!-- <div class="main_body">
        <div class="main_body_title"><font>后台数据总览</font></div>
        <div class="main_body_con">
            <iframe scrolling="yes" style="height: 1000px;" id="mainIframe" src="tgls/index.html"></iframe>
        </div>
        <div class="copyright">
            Copyright©2020 org.csu-jpetstore
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import "../../../assets/css/base.css";
import "../../../assets/css/frame_sys.css";
import "../../../assets/css/iconfont.css";
import "../../../assets/js/frame.js";

import "jquery";
import "jqueryui";

// import "../../../assets/css/jquery.mCustomScrollbar.css"
export default {};
</script>

<style>
</style>