<template>
    <div class="center">
        <div class="search">
            <select
                id="selector"
                class="selector"
                ref="selector"
                @change="selectorChangeHandler($event)"
            >
                <option
                    v-for="item in mainInfo.search.selector"
                    :key="item.id"
                    :label="item.name"
                    :value="item.url"
                >
                </option>
            </select>
            <input class="input" />
        </div>
        <div class="under">
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { isNull } from '../../../utils/common'
export default class SearchBar extends Vue {
    state = {
        vm_search_input: "",
        vm_selector_name: ""
    }
    
    mounted() {
        $("#selector option:eq(0)").prop("selected", true);
    }

    get mainInfo() {
        return this.$store.getters["mainStore/getMain"];
    }

    selectorChangeHandler(selectedItem) {
        let url = selectedItem.currentTarget.selectedOptions[0].value;
        if(isNull(url)) {
            // this.$router.push({path: url})
            let data = {
                router: this.$router,
                url: url
            }
            this.$store.dispatch("mainStore/pageChange", data)
        }
        // $router.push()  //  현재 라우트를 변경
        // $router.replace()  //  history 객체에 남기지 않고 라우트를 변경
        // $router.go()  //  앞 또는 뒤 위치로 이동할 수 있음
    }
}
</script>

<style scoped>
.search {
    display: flex;
    flex-wrap: wrap;
    border:2px solid #4285f4;
}

.search .selector { width: 150px; height: 30px; }
.search .input { width: 400px; height: 30px; }
</style>