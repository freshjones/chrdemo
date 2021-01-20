let timer;
export default {
    namespaced: true,
    state: {
        showMenu: false,
        primary: '#363967',
        secondary: '#abb4cf',
        accent: 'blue',
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
        },
        setColor(state, {key,value}) {
            state[key] = value;
        },
    },
    actions: {
        setMenu (context,value) {
            context.commit('setMenu',value);
        },
        clearMenu (context) {
            context.commit('clearMenu');
        },
        setColor (context, data) {
            console.log(data);
            context.commit('setColor', data);
        }
    },
    getters: {
        showMenu(state) {
            return state.showMenu;
        },
        getPrimary (state) {
            return state.primary;
        },
        getSecondary (state) {
            return state.secondary;
        },
        getAccent (state) {
            return state.accent;
        }
    }
};
