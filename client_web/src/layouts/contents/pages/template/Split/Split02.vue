<template>
  <div>
    <div componentid="div001" data-group-container>
      <ur-text-field componentid="ur_text_field_001" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" /><span componentid="span_common_text_001">Lorem Ipsum</span>
      <span componentid="span_common_text_012">Lorem Ipsum</span>
      <ur-button componentid="ur_button_001" @click="ur_button_001__click" color="primary" shape="border" size="medium">Lorem</ur-button>
      <ur-date-picker class="ur-date-picker-ide" componentid="ur_date_picker_001" v-model="ur_date_picker_001__value" init="none" inputType="YYYY-MM-DD" modelType="YYYY-MM-DD" size="medium" />
    </div>
    <div componentid="div002" data-group-container>
      <span componentid="span_common_text_009">Lorem Ipsum</span><span componentid="span_common_text_011">Lorem Ipsum</span><span componentid="span_common_text_013">Lorem Ipsum</span><span componentid="span_common_text_005">Lorem *</span><span componentid="span_common_text_007">Lorem Ipsum *</span><span componentid="span_common_text_002">Lorem Ipsum</span>
      <ur-tree componentid="ur_tree_001" v-model="ur_tree_001__tree_data" />
      <ur-text-field componentid="ur_text_field_002" v-model="ur_text_field_002__value" placeholder="Hint text" shape="border" type="none" size="medium" readonly />
      <ur-radio-wrapper componentid="ur_radio_001" v-model="ur_radio_001__value" :items="ur_radio_001__items" size="medium" />
      <ur-range-picker class="ur-date-picker-ide" componentid="ur_range_picker_001" v-model="ur_range_picker_001__value" init="none" inputType="YYYY-MM-DD" modelType="YYYY-MM-DD" size="medium" />
      <ur-text-field componentid="ur_text_field_003" v-model="ur_text_field_003__value" placeholder="Hint text" shape="border" type="none" size="medium" />
      <ur-text-area componentid="ur_text_field_004" v-model="ur_text_field_004__value" placeholder="Hint text" shape="border" type="none" size="medium" rows="7" />
      <div componentid="div003" data-group-container data-div-container>
        <ur-checkbox componentid="ur_checkbox_002" v-model="ur_checkbox_002__value" size="medium">Lorem Ipsum</ur-checkbox>
        <ur-checkbox componentid="ur_checkbox_003" v-model="ur_checkbox_003__value" size="medium">Lorem Ipsum</ur-checkbox>
        <ur-checkbox componentid="ur_checkbox_001" v-model="ur_checkbox_001__value" size="medium">Lorem Ipsum</ur-checkbox>
      </div>
    </div>
    <ur-button componentid="ur_button_002" @click="ur_button_002__click" color="primary" shape="border" size="large">Delete</ur-button>
    <ur-button componentid="ur_button_003" @click="ur_button_003__click" shape="solid" color="primary" size="large">Save</ur-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
        }],
        ur_text_field_001__value: '',
        ur_date_picker_001__value: '',
        ur_text_field_002__value: '',
        ur_radio_001__value: '1',
        ur_radio_001__items: [{
          text: 'Lorem Ipsum',
          value: '1'
        }, {
          text: 'Lorem',
          value: '2'
        }, {
          text: 'Ipsum',
          value: '3'
        }],
        ur_range_picker_001__value: ['', ''],
        ur_text_field_003__value: '',
        ur_text_field_004__value: '',
        ur_checkbox_001__value: false,
        ur_checkbox_002__value: false,
        ur_checkbox_003__value: false
      };
    },
    methods: {
      ur_button_001__click() {
        console.log('button border click');
      },
      ur_button_002__click() {
        console.log('button border click');
      },
      ur_button_003__click() {
        console.log('button solid click');
      }
    }
  };
</script>
<style scoped>
  [componentid="span_common_text_001"] {
    position: absolute;
    left: 0px;
    top: 33.5px;
    width: 126px;
    height: 21px;
  }
  [componentid="ur_button_001"] {
    position: absolute;
    top: 28px;
    right: 0px;
    width: 79px;
    height: 32px;
  }
  [componentid="div001"] {
    position: absolute;
    left: 13px;
    top: 15px;
    width: 1339px;
    height: 88px;
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
  }
  [componentid="ur_tree_001"] {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 324px;
    height: 546px;
    background-color: #F7F7F7;
  }
  [componentid="span_common_text_002"] {
    position: absolute;
    left: 393px;
    top: 39.5px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="span_common_text_005"] {
    position: absolute;
    left: 393px;
    top: 100px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="span_common_text_007"] {
    position: absolute;
    left: 393px;
    top: 160.5px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="span_common_text_009"] {
    position: absolute;
    left: 393px;
    top: 224.5px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="span_common_text_011"] {
    position: absolute;
    left: 393px;
    top: 283px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="div002"] {
    position: absolute;
    left: 13px;
    top: 102px;
    width: 1339px;
    height: 548px;
    border-bottom: 1px solid #EAEAEA;
  }
  [componentid="ur_button_002"] {
    position: absolute;
    left: 1024px;
    top: 662px;
  }
  [componentid="ur_button_003"] {
    position: absolute;
    left: 1192px;
    top: 662px;
  }
  [componentid="ur_text_field_001"] {
    position: absolute;
    left: 125px;
    top: 28px;
    width: 200px;
  }
  [componentid="span_common_text_012"] {
    position: absolute;
    left: 427px;
    top: 33px;
    width: 126px;
    height: 21px;
  }
  [componentid="ur_date_picker_001"] {
    position: absolute;
    left: 552px;
    top: 28px;
  }
  [componentid="ur_text_field_002"] {
    position: absolute;
    left: 569px;
    top: 34px;
    width: 308px;
  }
  [componentid="ur_radio_001"] {
    position: absolute;
    left: 569px;
    top: 98px;
    width: 355px;
  }
  [componentid="ur_range_picker_001"] {
    position: absolute;
    left: 569px;
    top: 155px;
  }
  [componentid="ur_text_field_003"] {
    position: absolute;
    left: 569px;
    top: 219px;
    width: 737px;
  }
  [componentid="ur_text_field_004"] {
    position: absolute;
    left: 569px;
    top: 283px;
    width: 737px;
  }
  [componentid="span_common_text_013"] {
    position: absolute;
    left: 393px;
    top: 491px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="ur_checkbox_001"] {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  [componentid="ur_checkbox_002"] {
    position: absolute;
    left: 166px;
    top: 0px;
  }
  [componentid="ur_checkbox_003"] {
    position: absolute;
    left: 319px;
    top: 0px;
  }
  [componentid="div003"] {
    position: absolute;
    left: 569px;
    top: 491px;
    width: 447px;
    height: 21px;
  }
</style>