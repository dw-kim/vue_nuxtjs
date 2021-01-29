<template>
    <div class="main ">
        <div class="top-link ">
        </div>

        <div class="menu">
            <div class="align">
                <div class="category "
                    ref="category"
                    @mouseover="categoryMenuShowHandler($event, true)"
                    @mouseout="categoryMenuShowHandler($event, false)"
                >
                    <svg width="110" height="115">
                        <line x1="35" y1="50" x2="70" y2="50" style="stroke:#FFF;stroke-width:8" />
                        <line x1="35" y1="60" x2="70" y2="60" style="stroke:#FFF;stroke-width:8" />
                        <line x1="35" y1="70" x2="70" y2="70" style="stroke:#FFF;stroke-width:8" />
                    </svg>

                    <div class="category-menu"
                        ref="cmenu"
                        v-show="mainInfo.category.showFlag"
                    >
                        <ul class="dot">
                            <li class="lbl"
                                v-for="menu in mainInfo.category.menuList"
                                v-bind:key="menu.id">
                                {{menu.name}}
                            </li>
                        </ul>
                    </div>
                </div>
                <Search-Bar/>
                <div class="link">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from './comp/SearchBar.vue';
import Component from "vue-class-component";

@Component({
components: {
    SearchBar
    }
})

export default class Top extends Vue {
    get mainInfo() {
        return this.$store.getters["mainStore/getMain"];
    }

    categoryMenuShowHandler(event:any, show:boolean){
        this.$store.commit("mainStore/SET_MAIN_CATEGORY_SHOW", show)

        if(show) {
            const dom:any = {
                category: this.$refs.category,
                cmenu: this.$refs.cmenu
            }

            if(dom.cmenu){
                dom.cmenu.style['top'] = dom.category.offsetTop + dom.category.offsetHeight + "px";
                dom.cmenu.style['left'] = dom.category.offsetLeft + "px";
            }
        }
    }
    

    beforeDestroy() {
        console.log("Zdcasdsa")
    }
}

</script>

<style scoped>
.area { border: 1px solid red;}
.area2 { border: 1px solid blue;}

.main{ width:100%; height: 148px;}
.main .top-link { width:100%; height: 32px; align-items: center; background:#F0F0F0}
.main .menu { width: 100%; height: 116px; display: inline-block; text-align: center; }
.main .menu .align { height: 116px; display: inline-flex; align-items: center;}
.main .menu .category { width:110px; height:115px; background-color: deepskyblue;}
.main .menu .category-menu { width: 150px; height:400px; position: absolute; background-color:#FFF; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 10px 0 0 0; z-index:99999;}
.main .menu .category-menu .dot {  list-style: none; padding: 0 0 0 0; }
.main .menu .category-menu .lbl { padding: 0 0 0 10px; text-align: left; }
.main .menu .category-menu .lbl:hover { color:dodgerblue; cursor: pointer; }
</style>