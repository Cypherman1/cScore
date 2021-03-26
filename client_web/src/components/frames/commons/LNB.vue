<template>
    <div class="ui-lnb-container">
        <div class="ui-lnb">

            <div class="ui-lnb-menu__container">
                <slot />
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'ui-lnb'
}
</script>

<style lang="scss" scoped>
.ui-lnb-container {
    display: flex;
    flex-direction: column;
    height: inherit;
    background-color: white;
    width: 272px;
    flex-shrink: 0;
}
.ui-lnb {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 32px 0;
    color: #333333;
}

.ui-lnb-item + .ui-lnb-menu {
    margin-top: 24px;
}
.ui-lnb-search + .ui-lnb-menu__container {
    margin-top: 12px;
}
</style>