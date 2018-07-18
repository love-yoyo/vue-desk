<style>
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 100px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>

<template>
    <Menu :active-name="currentSideBar" theme="dark" width="auto" :class="menuitemClasses" @on-select="onSelect">
        <MenuItem :name="item.name" v-for="item in sideBars">
            <Icon :type="item.iconName"></Icon>
            <span>{{ item.label }}</span>
        </MenuItem>
    </Menu>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        props: {
            menuitemClasses: {
                type: [String, Object, Array]
            }
        },
        computed: {
            ...mapState('menu', {
                sideBars: state => state.sideBars,
                currentSideBar: state => state.currentSideBar
            })
        },
        methods: {
            onSelect(name) {
                console.log(`[ side bar ] onselect: ${name}`);
                const nameMap = {
                    '1-1': '/banner',
                    '1-2': '/search'
                };
                this.$store.commit('menu/SET_CURRENT_SIDEBAR_NAME', { name });

                this.$router.push(nameMap[name]);
            }
        }
    }
</script>