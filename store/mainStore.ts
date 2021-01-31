
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
            },
            search : {
                selector: [
                    {id:"ALL", name: "전체", url: "/"},
                    {id:"A0101", name: "여성패션", url: "/sales/sales"},
                    {id:"A0102", name: "남성패션", url: "/sales/test"},
                    {id:"A0103", name: "유아동패션", url: ""},
                    {id:"A0104", name: "뷰티", url: ""},
                    {id:"A0105", name: "출산/유아동", url: ""},
                    {id:"A0106", name: "식품", url: ""},
                    {id:"A0107", name: "주방용품", url: ""}
                ]
            }
        }
    },
    getters: {
        getMain(state:any) {
            return state.main;
        },
    },
    mutations: {
        SET_MAIN_CATEGORY_SHOW(state:any, flag:boolean) {
            state.main.category.showFlag = flag;
        },
        SET_SEARCH_SELECTOR_CLEAR(state:any, value:any) {
            state.main.search.selector = value;
        }
    },
    actions: {
        pageChange: (
            {
              commit,
              dispatch,
              getters,
              rootGetters
            }: {
              commit: Function;
              dispatch: Function;
              getters: { [key: string]: Function };
              rootGetters: { [key: string]: Function };
            },
            data : {
                router:any,
                url:string
            }
        ) => {
            data.router.push({path: data.url})
        }
    }
};
export default mainStore;