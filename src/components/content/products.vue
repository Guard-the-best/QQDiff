<template>
  <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">Product ID</th>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <!-- <tbody>
    <%--    要用foreach循环--%>
        <c:forEach items="${productList}" var="productCategory">
            <tr>
                <th scope="row"><a onclick="searchPage4(${productCategory.productId})" href="javascript:void(0)">${productCategory.productId}</a></th>
                <td>${productCategory.productName}</td>
            </tr>
        </c:forEach>
    </tbody>-->
    <tbody>
      <tr v-for="product in products" v-bind:key="product.productId">
        <th scope="row">
          <!-- <a onclick="#" href="javascript:void(0)">{{ product.productId }}</a> -->
          <router-link :to="'/goods/products/'+product.productName+'/items'">{{ product.productId }}</router-link>
        </th>
        <td>{{ product.productName }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import util from "../../util";

export default {
  name: "products",
  data: function() {
    return {
      categoryName: "dog",
      products: [
        
      ]
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
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
    }
  },
  beforeMount() {
    this.fetchData();
  }
};
</script>