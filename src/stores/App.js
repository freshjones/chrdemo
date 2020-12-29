let timer;
export default {
    namespaced: true,
    state: {
        showMenu: false
    },
    mutations: {
        setMenu(state, value) {
            clearTimeout(timer);
            state.showMenu = value
        },
        clearMenu(state) {
            timer = setTimeout(() => {
                state.showMenu = false
            }, 200);
        }
    },
    actions: {
        setMenu (context,value) {
            context.commit('setMenu',value);
        },
        clearMenu (context) {
            context.commit('clearMenu');
        }
    },
    getters: {
        showMenu(state) {
            return state.showMenu;
        }
    }
};
