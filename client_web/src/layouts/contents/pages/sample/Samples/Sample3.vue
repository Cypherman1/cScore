<template>
  <div>
    <div componentid="div001" data-group-container data-div-container placeholder="Hint text">
      <span componentid="span_common_text_002">Mode</span>
      <ur-dropdown componentid="ur_dropdown_002" :items="ur_dropdown_002__items" v-model="ur_dropdown_002__value" tabindex="2" />
      <span componentid="span_common_text_003">Birth Date</span>
      <span componentid="span_common_text_004">Gender</span><span componentid="span_common_text_007">Name *</span>
      <ur-text-field componentid="ur_text_field_003" v-model="ur_text_field_003__value" placeholder="Name is required" shape="border" type="none" size="medium" tabindex="8" />
      <ur-button componentid="ur_button_001" @click="ur_button_001__click" shape="solid" color="primary" size="large" tabindex="9">Search</ur-button>
      <ur-date-picker class="ur-date-picker-ide" componentid="SNIPPET_3392001" v-model="SNIPPET_3392001__value" init="today" inputType="YYYY-MM-DD" modelType="YYYY-MM-DD" size="medium" />
      <ur-radio-wrapper componentid="SNIPPET_3468001" v-model="SNIPPET_3468001__value" :items="SNIPPET_3468001__items" size="medium" />
    </div>
    <div componentid="div_common_container_001"></div>
    <div componentid="div_common_container_002"></div>
    <ur-grid componentid="ur_table_001" :headers="ur_table_001__headers" :items="ur_table_001__items" v-model="ur_table_001__value" />
    <ur-pagination componentid="ur_pagination_001" :pagination="ur_pagination_001__page" @move="ur_pagination_001__move" simple />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ur_dropdown_002__items: ['Lorem Ipsum', 'Lorem'],
        ur_dropdown_002__value: 'Lorem Ipsum',
        ur_text_field_003__value: '',
        ur_table_001__value: [],
        ur_table_001__headers: [{
          text: 'No',
          value: 'no',
          width: 40,
          key: true,
          align: 'center',
          type: 'number',
          max: 0,
          freeze: true
        }, {
          text: 'Name',
          value: 'name',
          width: 200,
          align: 'left',
          type: 'string',
          freeze: true
        }, {
          text: 'E-mail',
          value: 'email',
          width: 300,
          align: 'left',
          type: 'string',
          freeze: true
        }, {
          text: 'Gender',
          value: 'gender',
          width: 100,
          align: 'center',
          type: 'string',
          freeze: true
        }, {
          text: 'Salary',
          value: 'salary',
          width: 200,
          align: 'right',
          type: 'number'
        }, {
          text: 'Birth Date',
          value: 'birthdate',
          width: 200,
          align: 'center',
          type: 'date'
        }, {
          text: 'ETC',
          value: 'etc',
          align: 'left',
          type: 'string',
          width: 500
        }],
        ur_table_001__items: [{
          name: 'Andere Cummings',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 10,
          etc: '-',
          no: '1',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Luis Saunders',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 11,
          etc: '-',
          no: '2',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Marc Shaw',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 7,
          etc: '-',
          no: '3',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Cynthia Terry',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 1,
          etc: '-',
          no: '4',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Adelaide Hammondv',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 1,
          etc: '-',
          no: '5',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Adelaide Munoz',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 5,
          etc: '-',
          no: '6',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Adelaide Munoz',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 5,
          etc: '-',
          no: '7',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Adelaide Munoz',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 5,
          etc: '-',
          no: '8',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Adelaide Munoz',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 5,
          etc: '-',
          no: '9',
          birthdate: '20010102',
          salary: '560000'
        }, {
          name: 'Adelaide Munoz',
          email: 'miller.kling@samsung.com',
          gender: 'Male',
          product: 5,
          etc: '-',
          no: '10',
          birthdate: '20010102',
          salary: '560000'
        }],
        ur_pagination_001__page: {
          rowsPerPage: 10,
          currentPage: 5,
          totalPages: 9999,
          totalItems: 99990
        },
        SNIPPET_3392001__value: '',
        SNIPPET_3468001__value: 'M',
        SNIPPET_3468001__items: [{
          text: 'Male',
          value: 'M'
        }, {
          text: 'Female',
          value: 'F'
        }]
      };
    },
    methods: {
      ur_button_001__click() {
        console.log("Search Button is clicked!!");
      },
      ur_pagination_001__move(page) {
        this.ur_pagination_001__page.currentPage = page; // need logic for table or others
      }
    }
  };
</script>
<style scoped>
  [componentid="ur_dropdown_002"] {
    position: absolute;
    left: 243px;
    top: 29px;
    width: 224px;
    height: 32px;
  }
  [componentid="ur_text_field_003"] {
    position: absolute;
    left: 0px;
    top: 29px;
    width: 223px;
    height: 32px;
  }
  [componentid="span_common_text_002"] {
    position: absolute;
    left: 243px;
    top: 0px;
    width: 36px;
    height: 21px;
  }
  [componentid="span_common_text_003"] {
    position: absolute;
    left: 487px;
    top: 0px;
    width: 87px;
    height: 21px;
  }
  [componentid="span_common_text_004"] {
    position: absolute;
    left: 713px;
    top: 0px;
    width: 87px;
    height: 21px;
  }
  [componentid="span_common_text_007"] {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 87px;
    height: 21px;
  }
  [componentid="ur_button_001"] {
    position: absolute;
    top: 7px;
    right: 0px;
    left: 1126px;
    width: 160px;
    height: 48px;
  }
  [componentid="div001"] {
    position: absolute;
    left: 40px;
    top: 20px;
    height: 62px;
    right: 40px;
    width: 1287px;
  }
  [componentid="div_common_container_001"] {
    position: absolute;
    left: 4px;
    top: 0px;
    width: 1360px;
    height: 1px;
    background-color: #EAEAEA;
  }
  [componentid="div_common_container_002"] {
    position: absolute;
    left: 4px;
    top: 100px;
    width: 1360px;
    height: 1px;
    background-color: #EAEAEA;
  }
  [componentid="ur_table_001"] {
    position: absolute;
    left: 40px;
    top: 121px;
    right: 40px;
  }
  [componentid="ur_pagination_001"] {
    position: absolute;
    left: 600px;
    top: 710px;
  }
  [componentid="SNIPPET_3392001"] {
    position: absolute;
    left: 487px;
    top: 29px;
    width: 206px;
    height: 32px
  }
  [componentid="SNIPPET_3468001"] {
    position: absolute;
    left: 713px;
    top: 32px;
    width: 277px;
    height: 25px
  }
</style>