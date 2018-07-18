const browserList = [{
    name: 'iPhone4',
    width: 320,
    height: 480,
    disabled: true
}, {
    name: 'Galaxy S5',
    width: 360,
    height: 640,
    disabled: true
}, {
    name: 'iPhone 5/SE',
    width: 320,
    height: 563,
    disabled: true
}, {
    name: 'iPhone 6/7/8',
    width: 375,
    height: 667,
    disabled: true
}, {
    name: 'iPhone 6/7/8 Plus',
    width: 414,
    height: 736,
    disabled: true
}, {
    name: 'iPhone X',
    width: 376,
    height: 812,
    disabled: true
}];

const scaleList = [{
    value: '0.5',
    label: '50%'
}, {
    value: '0.75',
    label: '75%'
}, {
    value: '1',
    label: '100%'
}, {
    value: '1.25',
    label: '125%'
}, {
    value: '1.5',
    label: '150%'
}];

const bannerBgTypeList = [{
    value: 'cover',
    label: '覆盖'
}, {
    value: 'normal',
    label: '无损'
}];

const state = {
    bannerBgTypeList,
    bannerBg: '',
    theme: {
        cover: {
            width: '100%',
            height: '100%'
        }
    },

    browserList,
    scaleList,

    formatBrowserList: undefined
}

const getters = {
    getFormatBrowserList: (state) => {
        return {}
    }
}

const mutations = {
    SET_BANNER_BG(state, payload) {
        console.log(`[ banner ] ${JSON.stringify(payload)}`);
        state.bannerBg = payload.value;
    }
}

const actions = {
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
