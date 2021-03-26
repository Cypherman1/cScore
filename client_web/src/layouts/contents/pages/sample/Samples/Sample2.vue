<template>
  <div>
    <ur-list-item componentid="ur_list_item_001" mode="check">
      <img class="list-item__thumb" src="/images/thumb_52x52.png" />
      <div class="list-item__contents">
        <div class="list-item__contents__title">
          Lorem ipsum dolor sit amet
        </div>
        <div class="list-item__contents__text">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </div>
      </div>
    </ur-list-item>
    <ur-list-item componentid="ur_list_item_002" mode="check">
      <img class="list-item__thumb" src="/images/thumb_52x52.png" />
      <div class="list-item__contents">
        <div class="list-item__contents__title">
          Lorem ipsum dolor sit amet
        </div>
        <div class="list-item__contents__text">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </div>
      </div>
    </ur-list-item>
    <ur-list-item componentid="ur_list_item_003" mode="check">
      <img class="list-item__thumb" src="/images/thumb_52x52.png" />
      <div class="list-item__contents">
        <div class="list-item__contents__title">
          Lorem ipsum dolor sit amet
        </div>
        <div class="list-item__contents__text">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </div>
      </div>
    </ur-list-item>
    <ur-list-item componentid="ur_list_item_004" mode="check">
      <img class="list-item__thumb" src="/images/thumb_52x52.png" />
      <div class="list-item__contents">
        <div class="list-item__contents__title">
          Lorem ipsum dolor sit amet
        </div>
        <div class="list-item__contents__text">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </div>
      </div>
    </ur-list-item>
    <ur-list-item componentid="ur_list_item_005" mode="check">
      <img class="list-item__thumb" src="/images/thumb_52x52.png" />
      <div class="list-item__contents">
        <div class="list-item__contents__title">
          Lorem ipsum dolor sit amet
        </div>
        <div class="list-item__contents__text">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </div>
      </div>
    </ur-list-item>
    <ur-list-item componentid="ur_list_item_006" mode="check">
      <img class="list-item__thumb" src="/images/thumb_52x52.png" />
      <div class="list-item__contents">
        <div class="list-item__contents__title">
          Lorem ipsum dolor sit amet
        </div>
        <div class="list-item__contents__text">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </div>
      </div>
    </ur-list-item>
    <ur-text-field componentid="ur_text_field_001" v-model="ur_text_field_001__value" placeholder="Search" shape="border" type="searchable" size="medium" />
    <ur-card componentid="ur_card_001">
      <div class="ur-card__contents">
        <div class="ur-card__header">
          Lorem Ipsum is dummy text of the
          printing and typesetting industry.
        </div>
        <div class="ur-card__body body1">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
        <div class="ur-card__body body2" style="margin-bottom: 0px;">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown...
        </div>
      </div>
    </ur-card><span componentid="span_common_text_001">Lorem Ipsum</span>
    <ur-text-field componentid="ur_text_field_002" v-model="ur_text_field_002__value" placeholder="Hint text" shape="border" type="none" size="medium" />
    <span componentid="span_common_text_002">Lorem Ipsum</span><span componentid="span_common_text_003">Lorem Ipsum</span><span componentid="span_common_text_004">Lorem Ipsum</span><span componentid="span_common_text_005">Lorem Ipsum</span>
    <ur-range-picker class="ur-date-picker-ide" componentid="ur_range_picker_001" v-model="ur_range_picker_001__value" init="none" inputType="YYYY-MM-DD" modelType="YYYY-MM-DD" size="medium" />
    <div componentid="ur_slider_vni_001__wrapper">
      <ur-slider componentid="ur_slider_vni_001" v-model="ur_slider_vni_001__value" :domain="[0,100]" tick tickMarkStyle="bar" type="single" :tickMark="10" :tickLabel="5" />
      <ur-stepper componentid="ur_slider_vni_001__input" v-model="ur_slider_vni_001__value" controlType="updown" size="small" alignment="center" />
    </div>
    <ur-switch componentid="ur_switch_lb_001" class="ur-switch-ide" v-model="ur_switch_lb_001__value" labeled />
    <ur-switch componentid="ur_switch_lb_002" class="ur-switch-ide" v-model="ur_switch_lb_002__value" labeled />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ur_list_item_001__value: false,
        ur_text_field_001__value: '',
        ur_text_field_002__value: '',
        ur_range_picker_001__value: ['', ''],
        ur_slider_vni_001__value: 50,
        ur_switch_lb_001__value: true,
        ur_switch_lb_002__value: true
      };
    },
    methods: {}
  };
</script>
<style scoped>
  [componentid="ur_list_item_001"] {
    position: absolute;
    left: 25px;
    top: 72px;
    width: 750px;
  }
  [componentid="ur_list_item_002"] {
    position: absolute;
    left: 25px;
    top: 168px;
    width: 750px;
  }
  [componentid="ur_list_item_003"] {
    position: absolute;
    left: 25px;
    top: 264px;
    width: 750px;
  }
  [componentid="ur_list_item_004"] {
    position: absolute;
    left: 25px;
    top: 360px;
    width: 750px;
  }
  [componentid="ur_list_item_005"] {
    position: absolute;
    left: 25px;
    top: 456px;
    width: 750px;
  }
  [componentid="ur_list_item_006"] {
    position: absolute;
    left: 25px;
    top: 552px;
    width: 750px;
  }
  [componentid="ur_text_field_001"] {
    position: absolute;
    left: 25px;
    top: 33px;
    width: 418px;
  }
  [componentid="ur_card_001"] {
    position: absolute;
    left: 802px;
    top: 72px;
    width: 484px;
  }
  [componentid="span_common_text_001"] {
    position: absolute;
    left: 802px;
    top: 447px;
  }
  [componentid="ur_text_field_002"] {
    position: absolute;
    left: 802px;
    top: 466px;
    width: 377px;
  }
  [componentid="ur_slider_vni_001__wrapper"] {
    position: absolute;
    left: 803px;
    top: 542px;
    display: flex;
    align-items: center;
    width: 376px;
    height: 30px;
  }
  [componentid="ur_slider_vni_001__input"] {
    width: 60px;
    margin-left: 12px;
  }
  [componentid="ur_switch_lb_001"] {
    position: absolute;
    left: 919.5px;
    top: 615px;
  }
  [componentid="ur_switch_lb_002"] {
    position: absolute;
    left: 1158px;
    top: 614px;
  }
  [componentid="span_common_text_004"] {
    position: absolute;
    left: 803px;
    top: 614px;
  }
  [componentid="span_common_text_005"] {
    position: absolute;
    left: 1042.5px;
    top: 614px;
  }
  [componentid="span_common_text_002"] {
    position: absolute;
    left: 803px;
    top: 381px;
  }
  [componentid="ur_range_picker_001"] {
    position: absolute;
    left: 803px;
    top: 400px;
    width: 376px;
  }
  [componentid="span_common_text_003"] {
    position: absolute;
    left: 802px;
    top: 523px;
  }
</style>