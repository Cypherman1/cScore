<template>
  <div>
    <div componentid="div001"><span componentid="span_common_text_001">Lorem Ipsum</span>
      <ur-dropdown componentid="ur_dropdown_001" :items="ur_dropdown_001__items" v-model="ur_dropdown_001__value" />
      <ur-button componentid="ur_button_001" @click="ur_button_001__click" color="primary" shape="border" size="medium">Lorem</ur-button>
    </div>
    <div componentid="div002" data-group-container data-div-container>
      <ur-table componentid="ur_table_001" :headers="ur_table_001__headers" :items="ur_table_001__items" v-model="ur_table_001__value" noControl title="Role" />
      <span componentid="span_common_text_009">Menu Order</span><span componentid="span_common_text_011">Contact</span><span componentid="span_common_text_008">50MB</span><span componentid="span_common_text_010">samsungsds_design@samsung.com</span><span componentid="span_common_text_005">Menu Type</span><span componentid="span_common_text_007">Page Name</span><span componentid="span_common_text_004">Node</span><span componentid="span_common_text_006">50MB</span><span componentid="span_common_text_002">Menu Name</span><span componentid="span_common_text_003">Product List</span>
      <ur-tree componentid="ur_tree_001" v-model="ur_tree_001__tree_data" />
    </div>
    <ur-button componentid="ur_button_002" @click="ur_button_002__click" color="primary" shape="border" size="large">Delete</ur-button>
    <ur-button componentid="ur_button_003" @click="ur_button_003__click" shape="solid" color="primary" size="large">Save</ur-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ur_dropdown_001__items: ['Lorem Ipsum', 'Lorem'],
        ur_dropdown_001__value: 'Lorem Ipsum',
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
        ur_table_001__value: [],
        ur_table_001__headers: [{
          text: 'No',
          value: 'no',
          width: '150px'
        }, {
          text: 'Name',
          value: 'name'
        }, {
          text: 'Phone',
          value: 'phone',
          width: "200px"
        }, {
          text: 'Grade',
          value: 'grade',
          width: "100px"
        }, {
          text: 'Rank',
          value: 'level',
          width: "100px"
        }],
        ur_table_001__items: [{
          no: 1,
          name: 'Grey',
          phone: '010-1234-5678',
          grade: 'B',
          level: 'CL2'
        }, {
          no: 2,
          name: 'Blue',
          phone: '010-1111-1111',
          grade: 'A',
          level: 'CL1'
        }, {
          no: 3,
          name: 'White',
          phone: '010-2222-2222',
          grade: 'C',
          level: 'CL3'
        }, {
          no: 4,
          name: 'Red',
          phone: '010-3333-3333',
          grade: 'A+',
          level: 'CL0'
        }]
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
    left: 2px;
    top: 32px;
    width: 126px;
    height: 21px;
  }
  [componentid="ur_dropdown_001"] {
    position: absolute;
    left: 127px;
    top: 27px;
    width: 305px;
    height: 32px;
  }
  [componentid="ur_button_001"] {
    position: absolute;
    top: 26.5px;
    right: 0px;
    width: 79px;
    height: 32px;
  }
  [componentid="div001"] {
    position: absolute;
    left: 4px;
    top: 8px;
    width: 1352px;
    height: 88px;
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
  }
  [componentid="ur_tree_001"] {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 300px;
    height: 579px;
    background-color: #F7F7F7;
  }
  [componentid="span_common_text_002"] {
    position: absolute;
    left: 329px;
    top: 19px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="span_common_text_003"] {
    position: absolute;
    left: 519px;
    top: 19px;
    width: 300px;
    height: 21px;
  }
  [componentid="span_common_text_004"] {
    position: absolute;
    left: 519px;
    top: 72px;
    width: 300px;
    height: 21px;
  }
  [componentid="span_common_text_005"] {
    position: absolute;
    left: 329px;
    top: 72px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="span_common_text_006"] {
    position: absolute;
    left: 519px;
    top: 125px;
    width: 300px;
    height: 21px;
  }
  [componentid="span_common_text_007"] {
    position: absolute;
    left: 329px;
    top: 125px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="span_common_text_008"] {
    position: absolute;
    left: 519px;
    top: 178px;
    width: 300px;
    height: 21px;
  }
  [componentid="span_common_text_009"] {
    position: absolute;
    left: 329px;
    top: 178px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="span_common_text_010"] {
    position: absolute;
    left: 519px;
    top: 231px;
    width: 300px;
    height: 21px;
  }
  [componentid="span_common_text_011"] {
    position: absolute;
    left: 329px;
    top: 231px;
    font-weight: 600;
    height: 21px;
    width: 120px;
  }
  [componentid="ur_table_001"] {
    position: absolute;
    left: 329px;
    top: 264px;
    width: 1022px;
    height: 298px;
  }
  [componentid="div002"] {
    position: absolute;
    left: 4px;
    top: 95px;
    width: 1352px;
    height: 580px;
    border-bottom: 1px solid #EAEAEA;
  }
  [componentid="ur_button_002"] {
    position: absolute;
    left: 1028px;
    top: 687px;
  }
  [componentid="ur_button_003"] {
    position: absolute;
    left: 1196px;
    top: 687px;
  }
</style>