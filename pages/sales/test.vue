<template>
    <div class="container" >
        <div @click="clickHandler($event)">
            TEST PAGE
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {

    methods: {
        clickHandler : function (event:Event) {
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    border: 1px solid #35495e;

}

</style>