<template>
    <div class="item-container">
        <div class="tab-box" v-show="type != 'none'">
            <div v-for="(item, index) in items" :key="index"
                class="tab-item p-2 pl-3 pr-3" :class="{'selected': selectedIndex === index}"
                @click="selectedIndex = index"
            >
                {{item.label}}
            </div>
        </div>
        <component class="item-box" v-if="selectedItem"
            :is="selectedItem.module" :item="selectedItem.data" :event="selectedItem.event"
        />
    </div>
</template>

<script>
export default {
    props: {
        tabIndex: {
            type: String
        },
        items: {
            type: Array,
            default: () => []
        },
        type: {
            type: String,
            default: 'tab'
        }
    },
    data() {
        return {
            component: this.module,
            selectedIndex: null
        }
    },
    computed: {
        selectedItem() {
            if (this.items.length > 0 && this.selectedIndex >= 0) {
                return this.items[this.selectedIndex]
            } else {
                return null
            }
        }
    },
    mounted () {
        if (this.tabIndex) {
            this.selectedIndex = parseInt(this.tabIndex);
        } else {
            this.selectedIndex = -1
        }
    },
}
</script>

<style lang="scss" scoped>
.item-container {
    align-content: flex-start;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
}
.item-box {
    position: relative;
    flex: 1 0 auto;
    overflow: auto;
    height: calc(100% - 40px);
}

.tab-box {
  border-bottom: 1px solid #DBDBDB;
  padding: 0;
  flex: 0 0 40px;
  display: flex;
  flex-flow: row nowrap;
}
.tab-item {
  border: 1px solid #DBDBDB;
  color: #999999;
  text-align: center;
  margin-bottom: -1px;
  min-width: 80px;
}
.tab-item + .tab-item {
  margin-left: -1px;
}
.tab-item:hover {
  cursor: pointer;
  background-color: #EEEEEE;
  border-color: #BBBBBB;
}
.tab-item:hover + .tab-item {
  border-left: 1px solid #BBBBBB;
}
.tab-item.selected {
  border: 1px solid $color--primary;
  background-color: rgba(30, 95, 203, 0.2);
  color: $color--primary;
  font-weight: 500;
}
.tab-item.selected + .tab-item {
  border-left: 1px solid $color--primary;
}
.tab-item:hover + .tab-item.selected {
  border-left: 1px solid $color--primary;
}
</style>