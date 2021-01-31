<template>
    <div class="container" >
        <div @click="clickHandler($event)">
            SALES PAGE
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
    props: {
      self: Object  
    },
    data: {
        state: {
        }
    },
    // lift cycle mounted
    mounted: function() {
        // typescript 이 븅딱이 this를 바로 사용하면 에러남
        const self:any = this;
        self.clickHandler("created");
    },
    // lift cycle created
    created: function() {
        const self:any = this;
        self.clickHandler("created");
    },
    beforeDestroy: function() {
        console.log('beforeDestroy')
    },
    // lift cycle destroyed
    destroyed: function () {
        console.log('destroyed')
    },
    // METHOD
    methods: {
        clickHandler : function (event:String) {
            console.log(">>" + event);
            // self.$store.commit("mainStore/SET_SEARCH_SELECTOR_CLEAR", []);
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