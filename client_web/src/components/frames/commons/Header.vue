<template>
    <div class="ui-gnb">
        <div class="ui-gnb-main">
            <div class="ui-gnb-lead">

                <div class="ui-gnb-title" @click="() => { this.$emit('goToHome')}">
                    <div class="ui-gnb-title__main">
                        {{ title }}
                    </div>
                    <div class="ui-gnb-label__sub">
                        {{ subTitle }}
                    </div>
                </div>

                <div class="ui-gnb-menu">
                    
                </div>

            </div>
            <div class="ui-gnb-tail">
                <ur-text-field placeholder="Search" searchable />

                <img src="../../../../public/images/avatar_68x68.png" class="ui-gnb-action__profile-thumb ml-4"/>
                <div class="ui-gnb-action__profile-name">
                    Gildong Hong
                </div>

                <ur-button class="ui-gnb-action__logout" @click="logout" >Logout</ur-button>

            </div>
        </div>
        
        
        <div>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ui-gnb',
    props: {
        title: { type: String, default: 'UI Dev Project' },
        subTitle: { type: String, default: 'SDS Development Platform' }
    },
    computed: {
        isLoggedIn() { return this.$store.getters.isLoggedIn }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login')
                })
        }
    },
}
</script>

<style lang="scss" scoped>
.ui-gnb {
    background: white;
    display: flex;
    flex-flow: column nowrap;
    
}
.ui-gnb-main {
    display: flex;
    flex-flow: row nowrap;
    height: 72px;
    padding: 0 16px;
    position: relative;

    border-bottom: 1px solid #707070;
}
.ui-gnb-main + .ui-gnb-main {
    border-top: 1px solid #CCCCCC;
}
.ui-gnb-lead {
    display: flex;
    flex-flow: row nowrap;
    flex-shrink: 0;
    margin-right: 20px;
}
.ui-gnb-tail {
    display: flex;
    margin-left: auto;
    flex-flow: row nowrap;
    align-items: center;
    flex-shrink: 0;
}

.ui-gnb-title {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 0 16px;
    width: 304px;
}
.ui-gnb-title:hover {
    cursor: pointer;
}
.ui-gnb-title__center {
    align-items: center;
}
.ui-gnb-title__main {
    font-size: 24px;
    font-weight: bold;
}
.ui-gnb-title__sub {
    font-size: 12px;
    color: #767676;
}

.ui-gnb-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.ui-gnb-menu > a {
    line-height: 72px;
    font-size: 16px;
    padding: 0 4px;
}

.ui-gnb-menu > a:hover {
    cursor: pointer;
}

.ui-gnb-menu > a + a {
    margin-left: 48px;
}

.ui-gnb-menu > a.active {
    font-weight: bold;
    border-bottom: 3px solid $color--primary;
}

.ui-gnb-action__profile-thumb {
    width: 32px;
    height: 32px;
}
.ui-gnb-action__profile-name {
    margin-left: 8px;
    color: #767676;
}
.ui-gnb-action__logout {
    margin-left: 12px;
}
</style>