
const mainStore = {
    namespaced: true,
    state: {
        main : {
            category : {
                showFlag: false,
                menuList: [
                    {id:"A0001", name:"패션의류/잡화"},
                    {id:"A0002", name:"뷰티"},
                    {id:"A0003", name:"출산/유아동"},
                    {id:"A0004", name:"식품"},
                    {id:"A0005", name:"주방용품"},
                    {id:"A0006", name:"생활용품"},
                    {id:"A0007", name:"홈인테리어"},
                    {id:"A0008", name:"가전디지털"},
                    {id:"A0009", name:"스포츠/레져"},
                    {id:"A0010", name:"자동차 용품"}
                ]
            }
        }
    },
    getters: {
        getMain(state:any) {
            return state.main;
        }
    },
    mutations: {
        SET_MAIN_CATEGORY_SHOW(state:any, flag:boolean) {
            state.main.category.showFlag = flag;
        }
    },
    actions: {

    }
};
export default mainStore;