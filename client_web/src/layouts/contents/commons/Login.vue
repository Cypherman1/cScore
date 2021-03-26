<template>
  <div>
    <div componentid="div002">
      <span componentid="span_common_text_001">SDS Quantum</span
      ><img
        componentid="img_common_image_001"
        src="/images/login/background.png"
      />
      <div componentid="div001">
        <span componentid="span_common_text_002">Sign-in</span>
        <ur-text-field
          componentid="ur_text_field_001"
          v-model="loginInfo.userId"
          placeholder="ID"
          shape="border"
          type="none"
          size="medium"
        />
        <ur-text-field
          componentid="ur_text_field_002"
          v-model="loginInfo.authCode"
          placeholder="Password"
          @keyup.enter="doLogin"
          type="password"
          shape="border"
          size="medium"
        />
        <ur-button
          componentid="ur_button_001"
          @click="doLogin"
          color="primary"
          shape="solid"
          size="large"
          >Sign-in</ur-button
        >
        <ur-checkbox
          componentid="ur_checkbox_001"
          v-model="rememberId"
          size="medium"
          >Remeber ID</ur-checkbox
        >
        <ur-button
          componentid="ur_button_002"
          @click="doKnoxSSO"
          color="primary"
          size="large"
          shape="border"
          >Login with Knox Portal ID</ur-button
        >
        <ur-button
          componentid="ur_button_003"
          @click="gotoRegistPage"
          color="primary"
          size="large"
          shape="border"
          >Sign-up</ur-button
        >
        <span componentid="span_common_text_003">{{ errorMsg }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login-page",
  data() {
    return {
      loginInfo: {
        userId: "",
        authCode: "",
      },
      rememberId: false,
      errorMsg: "",
      loadingFlag: false,
    };
  },
  created() {
    let errorMessage = this.$route.query.errorMessage;
    if (null !== errorMessage && undefined !== errorMessage) {
      this.errorMsg = JSON.parse(decodeURI(errorMessage)).message;
    }
  },
  mounted() {
    if (!!this.$cookies.get("uidevId")) {
      this.loginInfo.userId = this.$cookies.get("uidevId");
      this.rememberId = true;
    }
    setTimeout(() => {
      if (this.rememberId === true) {
        if (this.$refs["loginPW"]) {
          this.$refs["loginPW"].focus();
        }
      } else {
        if (this.$refs["loginID"]) {
          this.$refs["loginID"].focus();
        }
      }
    }, 500);
  },
  methods: {
    doLogin() {
      this.errorMsg = "";
      if (this.loadingFlag === true) {
        return;
      }
      if (this.loginInfo.userId.trim().length === 0) {
        this.errorMsg = "ID is empty.";
        return;
      }
      if (this.loginInfo.authCode.trim().length === 0) {
        this.errorMsg = "Password is empty.";
        return;
      } // 1. remember me.
      if (this.rememberId) {
        this.$cookies.set("uidevId", this.loginInfo.userId);
      } else {
        this.$cookies.remove("uidevId");
      } // 2. do login
      this.$store
        .dispatch("login", this.loginInfo)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
    doKnoxSSO() {
      console.log("Not implemented... Knox SSO");
    },
    gotoRegistPage() {
      console.log("Not implemented... Register Page");
    },
    gotoFindPasswordPage() {
      console.log("Not implemented... Find Password");
    },
  },
};
</script>
<style scoped>
[componentid="img_common_image_001"] {
  position: absolute;
  left: 0px;
  top: 0px;
}
[componentid="span_common_text_002"] {
  position: absolute;
  left: 62px;
  top: 50px;
  font-size: 20px;
}
[componentid="ur_text_field_001"] {
  position: absolute;
  left: 62px;
  top: 91px;
  width: 307px;
}
[componentid="ur_text_field_002"] {
  position: absolute;
  left: 62px;
  top: 136px;
  width: 307px;
}
[componentid="ur_button_001"] {
  position: absolute;
  left: 62px;
  top: 194px;
  width: 311px;
}
[componentid="ur_checkbox_001"] {
  position: absolute;
  left: 62px;
  top: 248px;
}
[componentid="ur_button_002"] {
  position: absolute;
  left: 62px;
  top: 297px;
  width: 311px;
}
[componentid="ur_button_003"] {
  position: absolute;
  left: 62px;
  top: 357px;
  width: 311px;
}
[componentid="div001"] {
  position: absolute;
  left: 460px;
  top: 0px;
  width: 445px;
  height: 472px;
  border: 1px solid #305ebb;
}
[componentid="span_common_text_001"] {
  position: absolute;
  left: 127px;
  top: 215px;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  z-index: 1;
}
[componentid="span_common_text_003"] {
  position: absolute;
  left: 62px;
  top: 168px;
  width: 307px;
  text-align: left;
  color: #ff0000;
}
[componentid="div002"] {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 906px;
  height: 473px;
  transform: translate(-50%, -50%);
}
</style>
