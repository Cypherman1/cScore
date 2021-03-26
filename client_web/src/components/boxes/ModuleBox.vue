<template>
    <component :is="component" :data="item" v-if="module" />
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        module: {
            type: Object
        }
    },
    data() {
        return {
            component: this.module
        }
    }
}
</script>