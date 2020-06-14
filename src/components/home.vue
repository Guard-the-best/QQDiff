<template>
<div>
    <topBar/>
    <router-view/>
</div>
</template>

<script>
import topBar from './util/top-bar'

export default {
    name: 'home',
    components:{
        topBar,
    },
}
</script>