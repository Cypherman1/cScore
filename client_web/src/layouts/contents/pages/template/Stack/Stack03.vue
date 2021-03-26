<template>
  <div>
    <ur-step-box componentid="step_validation001" :steps="step_validation001__steps">
      <ur-step-item>
      </ur-step-item>
      <ur-step-item>
      </ur-step-item>
      <ur-step-item>
      </ur-step-item>
      <ur-step-item>
      </ur-step-item>
    </ur-step-box>
    <ur-button componentid="ur_button_001" @click="ur_button_001__click" color="primary" shape="border" size="large">Delete</ur-button>
    <ur-button componentid="ur_button_002" @click="ur_button_002__click" shape="solid" color="primary" size="large">Save</ur-button>
    <div componentid="div008" data-group-container data-div-container>
      <div componentid="div001" data-group-container data-div-container><span componentid="span_common_text_001">Lorem Ipsum *</span><span componentid="span_common_text_005">Lorem Ipsum</span></div>
      <div componentid="div002" data-group-container data-div-container><span componentid="span_common_text_002">Lorem Ipsum *</span><span componentid="span_common_text_006">Lorem Ipsum</span></div>
      <div componentid="div003" data-group-container data-div-container><span componentid="span_common_text_003">Lorem Ipsum *</span>
        <ur-text-field componentid="ur_text_field_001" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
      </div>
      <div componentid="div004" data-group-container data-div-container><span componentid="span_common_text_007">Lorem Ipsum *</span>
        <ur-text-field componentid="ur_text_field_003" v-model="ur_text_field_003__value" placeholder="Hint text" shape="border" type="none" size="medium" />
      </div>
      <div componentid="div005" data-group-container data-div-container><span componentid="span_common_text_008">Lorem Ipsum *</span>
        <ur-text-area componentid="ur_text_field_004" v-model="ur_text_field_004__value" placeholder="Hint text" shape="border" type="none" size="medium" rows="4" />
      </div>
      <div componentid="div006" data-group-container data-div-container>
        <ur-text-area componentid="ur_text_field_002" v-model="ur_text_field_002__value" placeholder="Hint text" shape="border" type="none" size="medium" rows="4" /><span componentid="span_common_text_004">Lorem Ipsum *</span></div>
      <div componentid="div007" data-group-container data-div-container><span componentid="span_common_text_009">Lorem Ipsum *</span>
        <ur-radio-wrapper componentid="ur_radio_001" v-model="ur_radio_001__value" :items="ur_radio_001__items" size="medium" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        step_validation001__steps: ['Basic Information', 'Select Connection', 'Column Settings', 'Additional Information'],
        ur_text_field_001__value: '',
        ur_text_field_002__value: '',
        ur_text_field_003__value: '',
        ur_text_field_004__value: '',
        ur_radio_001__value: '1',
        ur_radio_001__items: [{
          text: 'Lorem Ipsum',
          value: '1'
        }, {
          text: 'Lorem Ipsum',
          value: '2'
        }]
      };
    },
    methods: {
      ur_button_001__click() {
        console.log('button border click');
      },
      ur_button_002__click() {
        console.log('button solid click');
      }
    }
  };
</script>
<style scoped>
  [componentid="step_validation001"] {
    position: absolute;
    left: 8px;
    top: 4px;
    width: 1355px;
    height: 79px;
    overflow-y: hidden;
  }
  [componentid="span_common_text_001"] {
    position: absolute;
    left: 0px;
    top: 0px;
    font-weight: 600;
  }
  [componentid="span_common_text_002"] {
    position: absolute;
    left: 0px;
    top: 0px;
    font-weight: 600;
  }
  [componentid="span_common_text_003"] {
    position: absolute;
    left: 0px;
    top: 5.5px;
    font-weight: 600;
  }
  [componentid="span_common_text_004"] {
    position: absolute;
    left: 0px;
    top: 0px;
    font-weight: 600;
  }
  [componentid="span_common_text_005"] {
    position: absolute;
    left: 148px;
    top: 0px;
  }
  [componentid="span_common_text_006"] {
    position: absolute;
    left: 148px;
    top: 0px;
  }
  [componentid="ur_text_field_001"] {
    position: absolute;
    left: 148px;
    top: 0px;
    width: 1160px;
  }
  [componentid="ur_text_field_002"] {
    position: absolute;
    left: 148px;
    top: 0px;
    width: 1160px;
  }
  [componentid="ur_text_field_003"] {
    position: absolute;
    left: 148px;
    top: 0px;
    width: 1160px;
  }
  [componentid="span_common_text_007"] {
    position: absolute;
    left: 0px;
    top: 6px;
    font-weight: 600;
  }
  [componentid="span_common_text_008"] {
    position: absolute;
    left: 0px;
    top: 0px;
    font-weight: 600;
  }
  [componentid="ur_text_field_004"] {
    position: absolute;
    left: 148px;
    top: 0px;
    width: 1160px;
  }
  [componentid="span_common_text_009"] {
    position: absolute;
    left: 0px;
    top: 2px;
    font-weight: 600;
  }
  [componentid="ur_radio_001"] {
    position: absolute;
    left: 148px;
    top: 0px;
    width: 500px;
  }
  [componentid="div001"] {
    position: absolute;
    left: 26px;
    top: 24px;
    height: 22px;
    width: 341px;
  }
  [componentid="div002"] {
    position: absolute;
    left: 26px;
    top: 70px;
    width: 341px;
    height: 22px;
  }
  [componentid="div003"] {
    position: absolute;
    left: 26px;
    top: 116px;
    width: 1310px;
    height: 33px;
  }
  [componentid="div004"] {
    position: absolute;
    left: 26px;
    top: 302px;
    width: 1310px;
    height: 33px;
  }
  [componentid="div005"] {
    position: absolute;
    left: 26px;
    top: 359px;
    width: 1310px;
    height: 105px;
  }
  [componentid="div006"] {
    position: absolute;
    left: 26px;
    top: 173px;
    width: 1310px;
    height: 105px;
  }
  [componentid="div007"] {
    position: absolute;
    left: 26px;
    top: 488px;
    width: 713px;
    height: 26px;
  }
  [componentid="ur_button_001"] {
    position: absolute;
    left: 1036px;
    top: 642px;
  }
  [componentid="ur_button_002"] {
    position: absolute;
    left: 1204px;
    top: 642px;
  }
  [componentid="div008"] {
    position: absolute;
    left: 8px;
    top: 96px;
    width: 1356px;
    height: 533px;
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
  }
</style>