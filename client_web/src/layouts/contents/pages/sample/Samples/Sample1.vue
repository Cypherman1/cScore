<template>
  <div>
    <div componentid="ur_form_basic_001">
      <div componentid="ur_form_basic_001__wrapper">
        <span componentid="ur_form_basic_001__span_common_text_001">Label</span>
        <span componentid="ur_form_basic_001__span_common_text_002">Simple Text</span>
        <span componentid="ur_form_basic_001__span_common_text_003">TextField</span>
        <span componentid="ur_form_basic_001__span_common_text_004">Dropdown</span>
        <span componentid="ur_form_basic_001__span_common_text_005">Date</span>
        <span componentid="ur_form_basic_001__span_common_text_006">Radio</span>
        <ur-dropdown componentid="ur_form_basic_001__dropdown" :items="ur_form_basic_001__dropdown__items" v-model="ur_form_basic_001__dropdown__value" size="medium" />
        <ur-checkbox componentid="ur_form_basic_001__checkbox" v-model="ur_form_basic_001__checkbox__value" size="medium">Option</ur-checkbox>
        <ur-radio-wrapper componentid="ur_form_basic_001__radio" v-model="ur_form_basic_001__radio__value" :items="ur_form_basic_001__radio__items" size="medium" />
        <ur-text-field componentid="ur_form_basic_001__text_field" v-model="ur_form_basic_001__text_field__value" placeholder="Hint text" shape="border" type="none" />
        <ur-button componentid="ur_form_basic_001__button" @click="ur_form_basic_001__button__click" shape="solid" color="primary" size="medium">Button</ur-button>
        <ur-date-picker class="ur-date-picker-ide" componentid="ur_form_basic_001__date_picker" v-model="ur_form_basic_001__date_picker__value" size="medium" init="none" inputType="YYYY-MM-DD" modelType="YYYY-MM-DD" />
      </div>
    </div>
    <ur-table componentid="ur_table_001" :headers="ur_table_001__headers" :items="ur_table_001__items" v-model="ur_table_001__value" noControl />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ur_form_basic_001__dropdown__items: ['ace', 'boss', 'crew', 'duck', 'eagle'],
        ur_form_basic_001__dropdown__value: 'ace',
        ur_form_basic_001__text_field__value: '',
        ur_form_basic_001__date_picker__value: '',
        ur_form_basic_001__checkbox__value: false,
        ur_form_basic_001__radio__value: '1',
        ur_form_basic_001__radio__items: [{
          text: '01',
          value: '1'
        }, {
          text: '02',
          value: '2'
        }, {
          text: '03',
          value: '3'
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
        }, {
          no: 5,
          name: 'Red',
          phone: '010-3333-3333',
          grade: 'A+',
          level: 'CL0'
        }, {
          no: 6,
          name: 'Red',
          phone: '010-3333-3333',
          grade: 'A+',
          level: 'CL0'
        }, {
          no: 7,
          name: 'Red',
          phone: '010-3333-3333',
          grade: 'A+',
          level: 'CL0'
        }, {
          no: 8,
          name: 'Red',
          phone: '010-3333-3333',
          grade: 'A+',
          level: 'CL0'
        }]
      };
    },
    methods: {
      ur_form_basic_001__button__click() {
        console.log('button solid click');
      }
    }
  };
</script>
<style scoped>
  [componentid="ur_form_basic_001"] {
    position: absolute;
    left: 20px;
    top: 20px;
    height: 155px;
    right: 20px;
  }
  [componentid="ur_form_basic_001__span_common_text_001"] {
    position: absolute;
    left: 1px;
    top: 30px;
  }
  [componentid="ur_form_basic_001__span_common_text_002"] {
    position: absolute;
    left: 124px;
    top: 30px;
  }
  [componentid="ur_form_basic_001__span_common_text_003"] {
    position: absolute;
    left: 332px;
    top: 30px;
  }
  [componentid="ur_form_basic_001__span_common_text_004"] {
    position: absolute;
    left: 666px;
    top: 30px;
  }
  [componentid="ur_form_basic_001__dropdown"] {
    position: absolute;
    left: 789px;
    top: 24px;
    width: 165px;
  }
  [componentid="ur_form_basic_001__text_field"] {
    position: absolute;
    left: 425px;
    top: 24px;
    width: 180px;
  }
  [componentid="ur_form_basic_001__date_picker"] {
    position: absolute;
    left: 425px;
    top: 82.5px;
    width: 180px;
    height: 32px;
  }
  [componentid="ur_form_basic_001__span_common_text_005"] {
    position: absolute;
    left: 332px;
    top: 88.5px;
  }
  [componentid="ur_form_basic_001__span_common_text_006"] {
    position: absolute;
    left: 1px;
    top: 88.5px;
  }
  [componentid="ur_form_basic_001__checkbox"] {
    position: absolute;
    left: 666px;
    top: 88.5px;
  }
  [componentid="ur_form_basic_001__radio"] {
    position: absolute;
    left: 124px;
    top: 88.5px;
    width: 178px;
    height: 20px;
  }
  [componentid="ur_form_basic_001__button"] {
    position: absolute;
    top: 83px;
    right: 0px;
  }
  [componentid="ur_form_basic_001__wrapper"] {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 144px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    right: 0px;
  }
  [componentid="ur_table_001"] {
    position: absolute;
    left: 20px;
    top: 190px;
    right: 20px;
  }
</style>