<template>
<div>
    <topBar/>
    <router-view/>
    <bottomBar/>
</div>
</template>

<script>
import topBar from './util/top-bar'
import bottomBar from './util/bottom-bar'

export default {
    name: 'home',
    components:{
        topBar,
        bottomBar
    },
}
</script>