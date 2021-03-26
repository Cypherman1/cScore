<template>
  <div class="ui-footer">
      <div class="ui-footer-links">
          <div class="ui-footer-links__item">
              Terms of Service
          </div>
          <div class="ui-footer-links__item">
              <b>Privacy Policy</b>
          </div>
          <div class="ui-footer-links__item">
              Personal information Consignment
          </div>
          <div class="ui-footer-links__item">
              Copyright 2020 SAMSUNG SDS. All rights reserved.
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ui-footer,
.ui-footer-links {
    display: flex;
    flex-flow: row nowrap;
}
.ui-footer {
    padding-left: 48px;
    border-top: 1px solid #EAEAEA;
}
.ui-footer-links__item {
    margin: 8px 0px;
    padding: 0px 16px;
    font-size: 12px;
    color: #666666;
}
.ui-footer-links__item + .ui-footer-links__item {
    border-left: 1px solid #EAEAEA;
}
</style>