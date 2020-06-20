<template>
  <div>
    <div class="row">
      <div class="col-md-2">
        <div class="module">
          <div class="title">
            <span></span>
            <font>订单数据统计</font>
          </div>
          <div class="content">
            <div class="today_data">
              <ul>
                <li class="new_bt">
                  <div class="state">
                    <i class="iconfont icon-xiangxiajiantoucuxiao"></i>
                  </div>
                  <div class="data1">
                    <p>订单总数</p>
                    <h1>{{number_of_orders}}}</h1>
                  </div>
                  <div class="data2">
                    <p>与上月数量比</p>
                    <h1>{{computed_}}</h1>
                  </div>
                </li>
                <li>
                  <div class="state">
                    <i class="iconfont icon-xiangshangjiantoucuxiao"></i>
                  </div>
                  <div class="data1">
                    <p>订单总金额</p>
                    <h1>{{Total_money_of_orders}}</h1>
                  </div>
                  <div class="data2">
                    <p>与昨日金额比</p>
                    <h1>{{asd}}</h1>
                  </div>
                </li>
                <li>
                  <div class="state">
                    <i class="iconfont icon-xiangshangjiantoucuxiao"></i>
                  </div>

                  <div class="data1">
                    <p>今日下单用户数</p>
                    <h1>{{number_of_}}</h1>
                  </div>
                  <div class="data2">
                    <p>与昨日数量相比</p>
                    <h1>{{asd}}</h1>
                  </div>
                </li>
                <li>
                  <div class="state">
                    <i class="iconfont icon-xiangshangjiantoucuxiao"></i>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div class="data1">
                    <p>用户总数</p>
                    <h1>{{number_of_user}}</h1>
                  </div>
                  <!--									<div class="data2">-->
                  <!--										<p>昨日总商户数</p>-->
                  <!--										<h1>2500</h1>-->
                  <!--									</div>-->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md_5">
        <div class="module">
          <div class="title">
            <span></span>
            <font>全国开通城市分布图</font>
          </div>
          <div class="content">
            <div id="echartsMap" style="width: 100%;height:325px;"></div>
          </div>
        </div>
      </div>
      <div class="col-md-2 no_mr">
        <div class="module">
          <div class="title">
            <span></span>
            <font>出单时段统计</font>
          </div>
          <div class="content">
            <div class="service_data">
              <ul v-for="order in orders" v-bind:key="order.orderId">
                <li>
                  <font>{{order.orderDate}}</font>
                  <div class="data">
                    <div class="num" style="width: 85%;"></div>
                  </div>
                  <span>{{oorder.userId}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <div class="module">
          <div class="title">
            <span></span>
            <font>订单总量统计</font>
          </div>
          <div class="content">
            <div id="echartsOrderNum" style="width: 100%;height:325px;"></div>
          </div>
        </div>
      </div>
      <div class="col-md-5 no_mr">
        <div class="module">
          <div class="title">
            <span></span>
            <font>交易金额总量统计</font>
          </div>
          <div class="content">
            <div class="today_data">
              <div id="echartsMoney" style="width: 100%;height:325px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import "../../../assets/css/base.css";
import "../../../assets/css/frame_sys.css";
import "../../../assets/css/iconfont.css";
import "../../../assets/js/frame.js";

import "jquery";
import "jqueryui";

import "../../../assets/layui/css/layui.css";
import "../../../assets/css/backHome.css";
import painter from "../../../assets/js/backHome.js";
import "../../../assets/js/china.js";
import "../../../assets/js/cframe.js";

export default {
  data: function() {
    return {
      BJData: [
        [{ name: "成都" }, { name: "上海", value: 95 }],
        [{ name: "成都" }, { name: "广州", value: 90 }],
        [{ name: "成都" }, { name: "大连", value: 80 }],
        [{ name: "成都" }, { name: "南宁", value: 70 }],
        [{ name: "成都" }, { name: "南昌", value: 60 }],
        [{ name: "成都" }, { name: "拉萨", value: 50 }],
        [{ name: "成都" }, { name: "长春", value: 40 }],
        [{ name: "成都" }, { name: "包头", value: 30 }],
        [{ name: "成都" }, { name: "重庆", value: 20 }],
        [{ name: "成都" }, { name: "常州", value: 10 }],
        [{ name: "成都" }, { name: "北京", value: 9 }],
        [{ name: "成都" }, { name: "乌鲁木齐", value: 10 }],
        [{ name: "成都" }, { name: "杭州", value: 10 }]
      ],
      data0: [820, 932, 901, 934, 1290, 1330, 1320],
      title0: [
        "今天",
        "昨天",
        "1月15日",
        "1月16日",
        "1月17日",
        "1月18日",
        "1月19日"
      ],
      data1: [1120000, 15268423, 8729600, 1012500, 13220000, 1012500, 11320000],
      title1: [
        "今天",
        "昨天",
        "1月15日",
        "1月16日",
        "1月17日",
        "1月18日",
        "1月19日"
      ]
    };
  },
  mounted() {
    painter.echartsMap("echartsMap", this.BJData);
    painter.echartsOrderNum("echartsOrderNum", this.data0, this.title0);
    painter.echartsMoney("echartsMoney", this.data1, this.title1);
  }
};
</script>

<style>
</style>