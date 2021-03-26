<template>
  <div>
    <span componentid="span_common_text_001">Lorem Ipsum *</span><span componentid="span_common_text_003">Lorem Ipsum</span><span componentid="span_common_text_004">Lorem</span><span componentid="span_common_text_002">* Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
    <ur-dropdown componentid="ur_dropdown_001" :items="ur_dropdown_001__items" v-model="ur_dropdown_001__value" />
    <ur-radio-wrapper componentid="ur_radio_001" v-model="ur_radio_001__value" :items="ur_radio_001__items" size="medium" />
    <ur-text-field componentid="ur_text_field_001" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-text-field componentid="ur_text_field_002" v-model="ur_text_field_002__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-button componentid="ur_button_001" @click="ur_button_001__click" shape="solid" color="primary" size="medium">Lorem</ur-button>
    <ur-tree componentid="ur_tree_001" v-model="ur_tree_001__tree_data" checkbox />
    <ur-card componentid="ur_card_001" class="ur-card--top-media">
      <div style="margin: 8px;">
        <div class="ur-card__contents-image" style="position: relative;">
          <img class="ur-card__media" src="/images/thumb_92x52.png" />
          <span class="ur-card__tag" componentid="ur_card_001__tag">Retail</span>
        </div>
        <div class="ur-card__contents-text">
          <div class="ur-card__header">
            Lorem ipsum
          </div>
          <div class="ur-card__body">
            Lorem Ipsum is simply now on
          </div>
        </div>
      </div>
    </ur-card>
    <ur-card componentid="ur_card_004" class="ur-card--top-media">
      <div style="margin: 8px;">
        <div class="ur-card__contents-image" style="position: relative;">
          <img class="ur-card__media" src="/images/thumb_92x52.png" />
          <span class="ur-card__tag" componentid="ur_card_004__tag">Retail</span>
        </div>
        <div class="ur-card__contents-text">
          <div class="ur-card__header">
            Lorem ipsum
          </div>
          <div class="ur-card__body">
            Lorem Ipsum is simply now on
          </div>
        </div>
      </div>
    </ur-card>
    <ur-card componentid="ur_card_002" class="ur-card--top-media">
      <div style="margin: 8px;">
        <div class="ur-card__contents-image" style="position: relative;">
          <img class="ur-card__media" src="/images/thumb_92x52.png" />
          <span class="ur-card__tag" componentid="ur_card_002__tag">Retail</span>
        </div>
        <div class="ur-card__contents-text">
          <div class="ur-card__header">
            Lorem ipsum
          </div>
          <div class="ur-card__body">
            Lorem Ipsum is simply now on
          </div>
        </div>
      </div>
    </ur-card>
    <ur-card componentid="ur_card_005" class="ur-card--top-media">
      <div style="margin: 8px;">
        <div class="ur-card__contents-image" style="position: relative;">
          <img class="ur-card__media" src="/images/thumb_92x52.png" />
          <span class="ur-card__tag" componentid="ur_card_005__tag">Retail</span>
        </div>
        <div class="ur-card__contents-text">
          <div class="ur-card__header">
            Lorem ipsum
          </div>
          <div class="ur-card__body">
            Lorem Ipsum is simply now on
          </div>
        </div>
      </div>
    </ur-card>
    <ur-card componentid="ur_card_003" class="ur-card--top-media">
      <div style="margin: 8px;">
        <div class="ur-card__contents-image" style="position: relative;">
          <img class="ur-card__media" src="/images/thumb_92x52.png" />
          <span class="ur-card__tag" componentid="ur_card_003__tag">Retail</span>
        </div>
        <div class="ur-card__contents-text">
          <div class="ur-card__header">
            Lorem ipsum
          </div>
          <div class="ur-card__body">
            Lorem Ipsum is simply now on
          </div>
        </div>
      </div>
    </ur-card>
    <ur-card componentid="ur_card_006" class="ur-card--top-media">
      <div style="margin: 8px;">
        <div class="ur-card__contents-image" style="position: relative;">
          <img class="ur-card__media" src="/images/thumb_92x52.png" />
          <span class="ur-card__tag" componentid="ur_card_006__tag">Retail</span>
        </div>
        <div class="ur-card__contents-text">
          <div class="ur-card__header">
            Lorem ipsum
          </div>
          <div class="ur-card__body">
            Lorem Ipsum is simply now on
          </div>
        </div>
      </div>
    </ur-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ur_dropdown_001__items: ['Lorem Ipsum', 'Lorem', 'Ipsum', '1', '2'],
        ur_dropdown_001__value: 'Lorem Ipsum',
        ur_radio_001__value: '1',
        ur_radio_001__items: [{
          text: 'Lorem',
          value: '1'
        }, {
          text: 'Lorem',
          value: '2'
        }, {
          text: 'Lorem',
          value: '3'
        }, {
          text: 'Lorem Ipsum',
          value: '4'
        }],
        ur_text_field_001__value: '',
        ur_text_field_002__value: '',
        ur_tree_001__tree_data: [{
          "treeInfo": {
            "key": "node",
            "parentKey": "",
            "name": "Parent",
            "depth": 0,
            "seq": 1,
            "searched": false,
            "selected": false,
            "checked": false,
            "hasChild": true,
            "expanded": true,
            "inlineEdit": false
          },
          "contents": {},
          "children": [{
            "treeInfo": {
              "key": "node.child1",
              "parentKey": "node",
              "name": "Child 1",
              "depth": 1,
              "seq": 1,
              "searched": false,
              "selected": false,
              "checked": false,
              "hasChild": false,
              "expanded": false,
              "inlineEdit": false
            },
            "contents": {},
            "children": []
          }, {
            "treeInfo": {
              "key": "node.child2",
              "parentKey": "node",
              "name": "Child 2",
              "depth": 1,
              "seq": 2,
              "searched": false,
              "selected": false,
              "checked": false,
              "hasChild": false,
              "expanded": false,
              "inlineEdit": false
            },
            "contents": {},
            "children": []
          }]
        }]
      };
    },
    methods: {
      ur_button_001__click() {
        console.log('button solid click');
      }
    }
  };
</script>
<style scoped>
  [componentid="span_common_text_001"] {
    position: absolute;
    left: 28px;
    top: 10.5px;
  }
  [componentid="ur_dropdown_001"] {
    position: absolute;
    left: 168px;
    top: 5px;
    width: 326px;
  }
  [componentid="span_common_text_002"] {
    position: absolute;
    left: 525px;
    top: 10.5px;
    color: #959595;
  }
  [componentid="span_common_text_003"] {
    position: absolute;
    left: 28px;
    top: 65.5px;
  }
  [componentid="ur_radio_001"] {
    position: absolute;
    left: 168px;
    top: 63.5px;
  }
  [componentid="span_common_text_004"] {
    position: absolute;
    left: 638px;
    top: 65.5px;
  }
  [componentid="ur_text_field_001"] {
    position: absolute;
    left: 706px;
    top: 60px;
    width: 150px;
  }
  [componentid="ur_text_field_002"] {
    position: absolute;
    left: 864px;
    top: 60px;
    width: 150px;
  }
  [componentid="ur_button_001"] {
    position: absolute;
    left: 1270px;
    top: 60px;
  }
  [componentid="ur_tree_001"] {
    position: absolute;
    left: 28px;
    top: 129px;
    width: 337px;
    height: 561px;
    background-color: #F7F7F7;
  }
  [componentid="ur_card_001"] {
    position: absolute;
    left: 393px;
    top: 129px;
    width: 306px;
  }
  [componentid="ur_card_001__tag"] {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  [componentid="ur_card_002"] {
    position: absolute;
    left: 716px;
    top: 129px;
    width: 306px;
  }
  [componentid="ur_card_002__tag"] {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  [componentid="ur_card_003"] {
    position: absolute;
    left: 1039px;
    top: 129px;
    width: 306px;
  }
  [componentid="ur_card_003__tag"] {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  [componentid="ur_card_004"] {
    position: absolute;
    left: 393px;
    top: 425px;
    width: 306px;
  }
  [componentid="ur_card_004__tag"] {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  [componentid="ur_card_005"] {
    position: absolute;
    left: 716px;
    top: 425px;
    width: 306px;
  }
  [componentid="ur_card_005__tag"] {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  [componentid="ur_card_006"] {
    position: absolute;
    left: 1039px;
    top: 425px;
    width: 306px;
  }
  [componentid="ur_card_006__tag"] {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
</style>