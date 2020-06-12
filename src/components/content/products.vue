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
    </tbody> -->
    <tbody>
        <tr v-for="product in products" v-bind:key="product.productId">
            <th scope="row"><a onclick="#" href="javascript:void(0)">{{ product.productId }}</a></th>
            <td>{{ product.productName }}</td>
        </tr>

    </tbody>


</table>
</template>

<script>
export default {
    name: "products",
    data: function(){
        return {
            categoryName: "dog",
            products: [
                {
                    productId: 1001,
                    productName: "Golden Retriever"
                },
                {
                    productId: 1002,
                    productName: "Labrador Retriever"
                },
                {
                    productId: 1003,
                    productName: "Chihuahua"
                }
            ]
        }
    }
}
</script>