<template>
  <div>
    <span componentid="span_common_text_001">Lorem Ipsum *</span><span componentid="span_common_text_005">Lorem Ipsum *</span><span componentid="span_common_text_008">Lorem Ipsum *</span><span componentid="span_common_text_002">Lorem *</span><span componentid="span_common_text_003">Lorem *</span><span componentid="span_common_text_006">Lorem Ipsum *</span><span componentid="span_common_text_007">Lorem Ipsum *</span><span componentid="span_common_text_011">Lorem *</span><span componentid="span_common_text_004">Lorem Ipsum *</span><span componentid="span_common_text_009">Lorem Ipsum *</span><span componentid="span_common_text_010">Lorem *</span>
    <ur-dropdown componentid="ur_dropdown_001" :items="ur_dropdown_001__items" v-model="ur_dropdown_001__value" />
    <ur-dropdown componentid="ur_dropdown_002" :items="ur_dropdown_002__items" v-model="ur_dropdown_002__value" />
    <ur-dropdown componentid="ur_dropdown_003" :items="ur_dropdown_003__items" v-model="ur_dropdown_003__value" />
    <ur-radio-wrapper componentid="ur_radio_001" v-model="ur_radio_001__value" :items="ur_radio_001__items" size="medium" />
    <ur-text-field componentid="ur_text_field_001" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-text-field componentid="ur_text_field_003" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-text-field componentid="ur_text_field_004" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-text-field componentid="ur_text_field_002" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-text-field componentid="ur_text_field_005" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-text-field componentid="ur_text_field_006" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-checkbox componentid="ur_checkbox_001" v-model="ur_checkbox_001__value" size="medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ur-checkbox>
    <ur-text-area componentid="ur_text_field_007" v-model="ur_text_field_001__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <ur-button componentid="ur_button_001" @click="ur_button_001__click" color="primary" shape="border" size="large">Cancel</ur-button>
    <ur-button componentid="ur_button_002" @click="ur_button_002__click" shape="solid" color="primary" size="large">Confirm</ur-button>
    <ur-checkbox componentid="ur_checkbox_002" v-model="ur_checkbox_002__value" size="medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ur-checkbox>
    <div componentid="div_common_container_001"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ur_dropdown_001__items: ['Lorem Ipsum', 'Lorem'],
        ur_dropdown_002__items: ['Lorem Ipsum', 'Lorem'],
        ur_dropdown_003__items: ['Lorem Ipsum', 'Lorem'],
        ur_dropdown_001__value: 'Lorem Ipsum',
        ur_dropdown_002__value: 'Lorem Ipsum',
        ur_dropdown_003__value: 'Lorem Ipsum',
        ur_radio_001__value: '1',
        ur_radio_001__items: [{
          text: 'Lorem Ipsum',
          value: '1'
        }, {
          text: 'Lorem Ipsum',
          value: '2'
        }],
        ur_text_field_001__value: '',
        ur_checkbox_001__value: false,
        ur_checkbox_002__value: false
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
  [componentid="span_common_text_001"] {
    position: absolute;
    left: 6px;
    top: 11.5px;
  }
  [componentid="ur_dropdown_001"] {
    position: absolute;
    left: 122px;
    top: 6px;
    width: 464px;
  }
  [componentid="ur_radio_001"] {
    position: absolute;
    left: 122px;
    top: 72px;
    width: 464px;
  }
  [componentid="span_common_text_002"] {
    position: absolute;
    left: 6px;
    top: 74px;
  }
  [componentid="span_common_text_003"] {
    position: absolute;
    left: 6px;
    top: 138.5px;
  }
  [componentid="span_common_text_004"] {
    position: absolute;
    left: 6px;
    top: 203.5px;
    height: 21px;
  }
  [componentid="ur_text_field_001"] {
    position: absolute;
    left: 122px;
    top: 133px;
    width: 464px;
  }
  [componentid="ur_text_field_002"] {
    position: absolute;
    left: 122px;
    top: 198px;
    width: 464px;
  }
  [componentid="ur_checkbox_001"] {
    position: absolute;
    left: 122px;
    top: 241px;
  }
  [componentid="span_common_text_005"] {
    position: absolute;
    left: 6px;
    top: 327px;
  }
  [componentid="ur_dropdown_002"] {
    position: absolute;
    left: 122px;
    top: 324px;
    width: 464px;
  }
  [componentid="span_common_text_006"] {
    position: absolute;
    left: 6px;
    top: 394.5px;
  }
  [componentid="ur_text_field_003"] {
    position: absolute;
    left: 122px;
    top: 389px;
    width: 464px;
  }
  [componentid="span_common_text_007"] {
    position: absolute;
    left: 6px;
    top: 459.5px;
  }
  [componentid="ur_text_field_004"] {
    position: absolute;
    left: 122px;
    top: 454px;
    width: 1232px;
  }
  [componentid="span_common_text_008"] {
    position: absolute;
    left: 774px;
    top: 329.5px;
  }
  [componentid="ur_dropdown_003"] {
    position: absolute;
    left: 890px;
    top: 324px;
    width: 464px;
  }
  [componentid="span_common_text_009"] {
    position: absolute;
    left: 774px;
    top: 202.5px;
    height: 21px;
  }
  [componentid="ur_text_field_005"] {
    position: absolute;
    left: 890px;
    top: 197px;
    width: 464px;
  }
  [componentid="ur_text_field_006"] {
    position: absolute;
    left: 890px;
    top: 133px;
    width: 464px;
  }
  [componentid="span_common_text_010"] {
    position: absolute;
    left: 774px;
    top: 138.5px;
    height: 21px;
  }
  [componentid="ur_text_field_007"] {
    position: absolute;
    left: 122px;
    top: 556px;
    width: 1232px;
  }
  [componentid="span_common_text_011"] {
    position: absolute;
    left: 6px;
    top: 556px;
  }
  [componentid="ur_button_001"] {
    position: absolute;
    left: 1026px;
    top: 672px;
  }
  [componentid="ur_button_002"] {
    position: absolute;
    left: 1194px;
    top: 672px;
  }
  [componentid="ur_checkbox_002"] {
    position: absolute;
    left: 122px;
    top: 272px;
  }
  [componentid="div_common_container_001"] {
    position: absolute;
    left: 6px;
    top: 519px;
    height: 1px;
    background-color: #EAEAEA;
    width: 1348px;
  }
</style>