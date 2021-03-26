<template>
    <div class="item-container d-flex flex-wrap align-items-start justify-content-start">
        <component v-for="(item, index) in items" :key="index"
            class="item-box" :style="itemBoxStyle" 
            :is="component" :item="item" :event="event"
        />
    </div>
</template>

<script>
export default {
    props: {
        module: {
            type: Object
        },
        items: {
            type: Array,
            default: () => []
        },
        event: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            component: this.module
        }
    },
    computed: {
        itemBoxStyle() {
            return [
                {'width': '300px'}
            ]
        }
    },
}
</script>

<style scoped>
.item-container {
    overflow-y: auto;
    align-content: flex-start;
}
.item-box {
    position: relative;
    flex: 0 0 auto;
}
</style>