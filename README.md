# jpetstore

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 技术方法

### Vue.js文档

+ [基础部分](https://cn.vuejs.org/v2/guide)

+ [组件](https://cn.vuejs.org/v2/guide/components.html)

+ [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)
    + [~~在JavaScript使用单文件组建的props~~](https://www.cnblogs.com/FarmanKKK/p/9040252.html)
        + [~~watch~~](https://cn.vuejs.org/v2/api/#watch)
    + [改进的方案：使用$props对象](https://blog.csdn.net/viewyu12345/article/details/84031295)

+ [路由](https://router.vuejs.org/zh/guide/)
    +  **动态路由** 和 **嵌套路由** 可以帮助构建商品展示、用户信息方面的内容

+ [$props对象](https://cn.vuejs.org/v2/api/#vm-props)
    + 能够用于改进父组件对子组件的传值

+ [$refs对象](https://cn.vuejs.org/v2/api/#vm-refs)
    + 用于定位子组件以及DOM元素的位置，但获取的结果似乎并不是真正的DOM元素，有待研究

### 其他

+ [动态搜索](https://www.lodashjs.com/docs/lodash.debounce)

+ [HTML5 History模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html) <small>要好看!</small>

+ 考虑最基本的head、content、foot等body布局使用单文件组件(template+script+style),并导出、注册、使用。

+ 建议安装一个vue.js的chrome扩展用于debug