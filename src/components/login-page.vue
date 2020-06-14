<template>
<div>
    <topBar/>
    <loginAndRegister/>
</div>
</template>

<script>
import loginAndRegister from './content/login-and-register'
import topBar from './util/top-bar'

export default {
    name:'loginPage',
    components:{
        loginAndRegister,
        topBar,
    },
}
</script>