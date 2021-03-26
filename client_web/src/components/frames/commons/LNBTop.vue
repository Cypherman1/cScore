<template>
    <div class="ui-lnb">
        <div class="ui-lnb-menu" v-show="selectedGnbMenu">
            <div class="ui-lnb-menu__group"
                v-for="menu in lnbMenus" :key="menu.id"
            >
                <div class="ui-lnb-menu__group-name">{{ menu.label }}</div>
                <div class="ui-lnb-menu__item" :class="[{'selected': subMenu === activeMenu}]"
                    v-for="subMenu in menu.menus" :key="subMenu.id"
                    @click="moveToMenu(subMenu)"
                >
                    {{ subMenu.label }}
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'ui-lnb-menus',
    computed: {
        ...mapState('menu',[
            'selectedGnbMenu'
        ]),
        ...mapGetters('menu',[
            'lnbMenus',
            'activeMenu',
        ])
        
    },
    methods: {
        moveToMenu(menu) {
            if(menu && menu.route && menu.route !== '_'){
                const routePath = menu.route
                if(!menu.menus && routePath !== this.$route.path) this.$router.push(routePath)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.ui-lnb {
    position: relative;
}
.ui-lnb-menu {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;

    padding-left: 308px;
    z-index: 9900;

    background-color: #FFFFFF;
    width: 100%;

    border-bottom: 1px solid #EAEAEA;
}
.ui-lnb-menu__group {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 16px;
    margin-bottom: 16px;

    border-left: 1px solid #EAEAEA;
}
.ui-lnb-menu__group:last-child {
    border-right: 1px solid #EAEAEA;
}
.ui-lnb-menu__group-name {
    font-weight: 500;
    padding: 8px 12px;
    margin: 4px;

    min-width: 180px;
}
.ui-lnb-menu__item {
    padding: 8px 12px 8px 20px;
    margin: 4px 4px 0px;
    border-radius: 4px;

    min-width: 180px;
}
.ui-lnb-menu__item:hover {
    background: #F7F7F7;
    cursor: pointer;
}
.ui-lnb-menu__item.selected {
    background: $color--primary--tint-01;
    font-weight: bold;
    color: $color--primary;
}
.ui-lnb-menu__item:last-child {
    margin-bottom: 16px;
}
</style>