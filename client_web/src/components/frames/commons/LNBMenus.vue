<template>
    <div class="ui-lnb-menu">
        <template v-for="menu in menus" >

            <div :key="menu.key" :class="menuItemClass(menu)">

                <div class="ui-lnb-menu__item-box" @click="selectMenu(menu)">
                    <slot :menu="menu">
                        <a>{{menu.label}}</a>
                        <ur-badge v-if="menu.badgeLabel" :value="menu.badgeLabel" style="margin-left: 12px;"/>
                    </slot>
                    <div v-if="!noExpand"
                        :class="[
                            { 'ui-lnb-menu__item-icon' : true },
                            { 'ui-lnb-menu__item-icon--selected' : menu === expandedMenu || (menu.menus && menu.menus.includes(selectedMenu))}
                        ]"
                    >
                        <template v-if="menu.menus">
                            <ur-icon v-if="menu === expandedMenu || menu.menus.includes(selectedMenu)" small spacing>collapse_menu</ur-icon>
                            <ur-icon v-else small spacing>expand_menu</ur-icon>
                        </template>
                    </div>
                </div>

                <template v-if="menu.menus && (menu === expandedMenu || menu.menus.includes(selectedMenu))">

                    <ui-lnb-menus :activeMenu="selectedMenu" :menus="menu.menus" :depth="(depth+1)" @changeActiveMenu="selectMenu">
                        <template v-slot="{ menu }" >
                            <slot :menu="menu">
                                <a>{{menu.label}}</a>
                                <ur-badge v-if="menu.badgeLabel" :value="menu.badgeLabel" style="margin-left: 12px;"/>
                            </slot>
                        </template>
                    </ui-lnb-menus>

                </template>

            </div>

        </template>
    </div>
</template>

<script>
export default {
    name: 'ui-lnb-menus',
    props: {
        menus: { type : Array, default : () => [] },
        noExpand: { type : Boolean, default : false },
        depth: { type : Number, default : 1 },
        activeMenu: { type : Object, default: () => {} }
    },
    data() {
        return {
            expandedMenu: null,
            selectedMenu: null
        }
    },
    watch: {
        menus() {
            this.expandedMenu = null
            this.selectedMenu = null
        },
        activeMenu(menu) {
            this.selectedMenu = menu
        },
        selectedMenu(menu) {
            if(menu && menu.route){
                const routePath = menu.route
                if(!menu.menus && routePath !== this.$route.path) this.$router.push(routePath)
            }
        }
    },
    mounted() {
        this.selectedMenu = this.activeMenu
    },
    methods: {
        menuItemClass(menu) {
            return [
                {
                    'ui-lnb-menu__item' : true,
                    'ui-lnb-menu__item--selected' : menu === this.selectedMenu,
                    'ui-lnb-menu__item--opened' : menu.menus && (menu === this.expandedMenu || menu.menus.includes(this.selectedMenu)),
                    'ui-lnb-menu__item-depth2' : this.depth === 2,
                    'ui-lnb-menu__item-depth3' : this.depth === 3,
                }
            ]
        },
        selectMenu(menu) {
            if(this.depth > 1) this.$emit('changeActiveMenu', menu)
            else if(menu === this.expandedMenu) this.expandedMenu = null
            else if(menu.menus) this.expandedMenu = menu
            else {
                if(menu && menu.route && menu.route !== '_'){
                    const routePath = menu.route
                    if(!menu.menus && routePath !== this.$route.path) this.$router.push(routePath)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.ui-lnb-menu {
    display: flex;
    flex-flow: column nowrap;
    padding: 0 16px;
}
.ui-lnb-menu + .ui-lnb-menu {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #EAEAEA;
}
.ui-lnb-menu__item > .ui-lnb-menu {
    padding: 0;
}
.ui-lnb-menu__item-box {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    padding: 10px 8px 10px 16px;
    border-radius: 4px;

    flex-shrink: 1;
    overflow: hidden;
}
.ui-lnb-menu__item-box:hover {
    background: #F7F7F7;
    cursor: pointer;
}
.ui-lnb-menu__item--selected > .ui-lnb-menu__item-box {
    background: $color--primary--tint-01;
    font-weight: bold;
    color: $color--primary;
}
.ui-lnb-menu__item--opened > .ui-lnb-menu__item-box {
    font-weight: bold;
}
.ui-lnb-menu__item .ui-lnb-menu__item-depth2 {
    margin-top: 4px;
    padding-left: 16px;
    font-size: 12px;
}
.ui-lnb-menu__item .ui-lnb-menu__item-depth3 {
    margin-top: 4px;
    padding-left: 8px;
    font-size: 12px;
}
.ui-lnb-menu__item-icon {
    display: block;
    flex: 0 0 24px;
    height: 24px;
    margin-left: auto;
    color: #CCCCCC;
}
.ui-lnb-menu__item-icon--selected {
    color: #777777 !important;
}

.ui-lnb-menu__item + .ui-lnb-menu__item {
    margin-top: 4px;
}
</style>