<template>
  <div>
    <span componentid="span_common_text_001">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
    <ur-text-field componentid="ur_text_field_001" v-model="ur_text_field_001__value" placeholder="Search" shape="border" type="searchable" size="medium" />
    <div componentid="div_common_container_001"><span componentid="span_common_text_002">Total 33</span>
      <ur-dropdown componentid="ur_dropdown_001" :items="ur_dropdown_001__items" v-model="ur_dropdown_001__value" small />
      <ur-card componentid="ur_card_001">
        <div class="ur-card__contents">
          <div class="ur-card__header"> Lorem Ipsum is dummy text</div>
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
      </ur-card>
      <ur-card componentid="ur_card_006">
        <div class="ur-card__contents">
          <div class="ur-card__header"> Lorem Ipsum is dummy text</div>
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
      </ur-card>
      <ur-card componentid="ur_card_002">
        <div class="ur-card__contents">
          <div class="ur-card__header"> Lorem Ipsum is dummy text</div>
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
      </ur-card>
      <ur-card componentid="ur_card_004">
        <div class="ur-card__contents">
          <div class="ur-card__header"> Lorem Ipsum is dummy text</div>
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
      </ur-card>
      <ur-card componentid="ur_card_003">
        <div class="ur-card__contents">
          <div class="ur-card__header"> Lorem Ipsum is dummy text</div>
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
      </ur-card>
      <ur-card componentid="ur_card_005">
        <div class="ur-card__contents">
          <div class="ur-card__header"> Lorem Ipsum is dummy text</div>
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
      </ur-card>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ur_text_field_001__value: '',
        ur_dropdown_001__items: ['All', 'Sample'],
        ur_dropdown_001__value: 'All'
      };
    }
  };
</script>
<style scoped>
  [componentid="span_common_text_001"] {
    position: absolute;
    left: 31px;
    top: 10.5px;
  }
  [componentid="ur_text_field_001"] {
    position: absolute;
    left: 1094px;
    top: 11px;
    width: 246px;
  }
  [componentid="div_common_container_001"] {
    position: absolute;
    left: 31px;
    top: 59px;
    width: 1309px;
    height: 643px;
    border-top: 1px solid #EAEAEA;
  }
  [componentid="span_common_text_002"] {
    position: absolute;
    left: 0px;
    top: 25.5px;
    font-weight: 500;
  }
  [componentid="ur_dropdown_001"] {
    position: absolute;
    left: 74px;
    top: 25px;
    width: 98px;
  }
  [componentid="ur_card_001"] {
    position: absolute;
    left: 0px;
    top: 65px;
    width: 428px;
  }
  [componentid="ur_card_002"] {
    position: absolute;
    left: 441px;
    top: 65px;
    width: 428px;
  }
  [componentid="ur_card_003"] {
    position: absolute;
    left: 882px;
    top: 65px;
    width: 428px;
  }
  [componentid="ur_card_004"] {
    position: absolute;
    left: 441px;
    top: 353px;
    width: 428px;
  }
  [componentid="ur_card_005"] {
    position: absolute;
    left: 882px;
    top: 353px;
    width: 428px;
  }
  [componentid="ur_card_006"] {
    position: absolute;
    left: 0px;
    top: 353px;
    width: 428px;
  }
</style>