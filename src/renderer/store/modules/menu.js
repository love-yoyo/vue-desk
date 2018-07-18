const sideBarsDef = [{
    name: '1-1',
    iconName: 'ios-navigate',
    label: 'banner制作',
    route: '/banner'
}, {
    name: '1-2',
    iconName: 'search',
    label: '搜索',
    route: '/search'
}];
const defSideBar = (sideBarsDef[0] || {}).name;

const state = {
    sideBars: sideBarsDef,
    currentSideBar: defSideBar
}

const mutations = {
    SET_CURRENT_SIDEBAR_NAME(state, payload) {
        state.currentSideBar = payload.name;
    }
}

const actions = {
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
