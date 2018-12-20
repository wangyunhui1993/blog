<template>
  <section>
    <mt-header title="聊天" style="background: #58b7ff;height: 45px;font-size: 18px;" fixed>
      <router-link to="/find" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="contenter_chart">
      <div class="chartList">
        <!--聊天内容-->
        <div class="windows_body" id="chatbox">
          <ul class="content_chart">
            <li v-for="(item,index) in msgList" :key="index" :class="item.type">
              <img :src="item.type=='me'?me_img:robot_img">
              <span>{{item.value}}</span>
            </li>
          </ul>
        </div>
        <div id="chatContentFootDiv" style="height: 120px;"></div>
      </div>



    </div>
    <div class="chartInput">
      <div class="footer">
        <!-- <img src="../assets/images/hua.png" alt="" />
<img src="../assets/images/xiaolian.png" alt="" /> -->
        <input type="text" v-model="msg" @keyup.enter="submit" />
        <p @click="sendBtn" :class="msg.trim()==''?'disColor':'submitColor'">发送</p>
      </div>
    </div>
  </section>
</template>

<script>
  import { robot } from "../js/api";
  import Tabbar from "@/pages/Tabbar";
  export default {
    name: "Find",
    components: {
      "tabbar-select": Tabbar
    },
    data() {
      return {
        msg: "",
        msgList: [{ value: "hello！", type: 'other' }],
        userId: "",
        me_img: require('../assets/images/me.png'),
        robot_img: require('../assets/images/robot.png'),

      };
    },
    methods: {
      sendBtn() {
        if (this.msg.trim() == '') return;
        this.msgList.push({ value: this.msg, type: 'me' });
        document.getElementById('chatContentFootDiv').scrollIntoView();//将指定元素定位到浏览器顶部，底部，中间
        this.sendMsg(this.msg);
        this.msg = '';
      },
      sendMsg(msg) {
        let info = {
          params: {
            message: msg,
            userId: this.userId,
          }
        }
        robot(info).then(data => {
          console.log(data);


          let {
        err_code,
            err_msg,
            message,
      } = data;
          if (err_code !== 0) {
            this.msgList.push({ value: err_msg, type: 'other' });
          } else {
            this.msgList.push({ value: message, type: 'other' });
          }
          document.getElementById('chatContentFootDiv').scrollIntoView();//将指定元素定位到浏览器顶部，底部，中间
        });
      },
      // 键盘enter事件
      submit() {
        this.sendBtn();
      },
    },
    watch: {
    },
    mounted() {
      this.userId = localStorage.getItem("userId");
      if (this.userId == null || this.userId.length <= 0) {
        this.userId = new Date().getTime();
        localStorage.setItem("userId", this.userId);
      }
    }
  };
</script>

<style scoped>
  .contenter_chart {
    /* position: fixed; */
    height: calc(100vh - 105px);
    /* padding-bottom: 60px; */
    padding-top: 45px;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-size: cover;
    background-image: url(../assets/images/robotbg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }

  .chartList {}

  .chartInput {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
  }


  .windows_body {
    height: 100%;
    width: 100%;
    /* overflow-y: auto; */
    /* -webkit-overflow-scrolling: touch; */
  }

  .office_text {
    width: 100%;
    height: 100%;
  }

  .submitColor {
    background: #3C7;
  }

  .disColor {
    background: #ddd;
  }




  /*区分聊天*/

  .content_chart {
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
  }

  .me img {
    float: right;
    width: 34px;
    height: 34px;
    border-radius: 2px;
  }

  .me span {
    float: right;
    background: #9eea6a;
  }

  .me {
    margin-top: 10px;
    padding-left: 10px;
    display: block;
    clear: both;
    overflow: hidden;
    float: right;
    margin-bottom: 5px;
  }

  .me span {
    background: #9eea6a;
    padding: 7px;
    border-radius: 4px;
    margin: 0 10px;
    max-width: calc(100% - 70px);
    border: 1px solid #9eea6a;
    position: relative;
    word-wrap: break-word;
  }

  .me span:before {
    content: " ";
    position: absolute;
    top: 9px;
    right: 100%;
    border: 6px solid transparent;
    border-left-color: #9eea6a;
    right: inherit;
    left: 100%;
  }

  /*other*/

  .other img {
    float: right;
    width: 34px;
    height: 34px;
    border-radius: 2px;
  }

  .other span {
    float: right;
    background: #9eea6a;
  }

  .other {
    margin-top: 10px;
    padding-left: 10px;
    width: 80%;
    display: block;
    clear: both;
    overflow: hidden;
    float: left;
    margin-bottom: 5px;
  }

  .other img {
    float: left;
  }

  .other span {
    background: #fff;
    padding: 7px;
    border-radius: 4px;
    float: left;
    margin: 0 10px;
    max-width: calc(100% - 70px);
    border: 1px solid #ededed;
    position: relative;
    word-wrap: break-word;
  }

  .other span:before {
    content: "";
    position: absolute;
    top: 9px;
    right: 100%;
    border: 6px solid transparent;
    border-right-color: #fff;
    right: inherit;
    right: 100%;
  }













  .footer {
    position: fixed;
    bottom: 0;
    height: 3rem;
    background-color: #fff;
    line-height: 3rem;
    width: 100%;
    border-top: 1px solid #ddd;

  }

  .footer img {
    margin-left: 0.6rem;
    width: 1.5rem;
  }

  .footer input {
    margin-left: 0.6rem;
    width: calc(100% - 7rem);
    height: 1.92rem;
    border-radius: 0.3rem;
    border: 0.03rem solid #ddd;
    padding: 0 0.45rem;
    font-size: 0.8rem;


  }

  .footer p {
    width: 4rem;
    height: 1.92rem;
    font-size: 0.9rem;
    color: #fff;
    line-height: 2.04rem;
    text-align: center;
    border-radius: 0.3rem;
    float: right;
    margin-top: 0.6rem;
    margin-right: 0.6rem;
  }

  .send:after,
  .show:after,
  .msg:after,
  .content_chart:after {
    content: "";
    clear: both;
    display: table;
  }

  .msg>img {
    width: 2.4rem;
    float: left;
  }

  .msg>p {
    float: left;
    margin: 0 1.2rem;
    padding: 0.75rem;
    background: #fff;
    font-size: 0.9rem;
    position: relative;
    border-radius: 0.6rem;
    max-width: 15rem;
    box-sizing: border-box;
  }

  .msg_input {
    position: absolute;
    background: url(../assets/images/msg-input.png) no-repeat;
    background-size: 0.93rem auto;
    width: 0.93rem;
    height: 1.53rem;
    left: -0.93rem;
    top: 0.75rem;
  }

  .show .msg img,
  .show .msg p,
  .show .msg {
    float: right;
  }


  .show .msg_input {
    left: auto;
    right: -0.33rem;
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    /* IE 9 */
    -moz-transform: rotate(180deg);
    /* Firefox */
    -webkit-transform: rotate(180deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(180deg);
    /* Opera */
  }

  .send,
  .show {
    padding-bottom: 0.9rem;
  }

  .alert_novip,
  .flower_num,
  .give_flower {
    display: none;
    padding: 0.9rem 1.5rem;
    font-size: 0.84rem;
  }

  .alert_novip p,
  .flower_num p {
    margin-bottom: 1.35rem;
  }

  .layui-layer-wrap button {
    font-size: 0.84rem;
    padding: 0.6rem 0.9rem;
    margin-top: 0.3rem;
    background: #f8f8f8;
    border-radius: 10px;
  }

  .flower_num button {
    padding: 0.6rem 1.5rem;
    border-radius: 10px;
  }

  .layui-layer-wrap button:first-child {
    float: left;
  }

  .layui-layer-wrap button:last-child {
    float: right;
    background: #FF7171;
    color: #fff;
  }

  .alert_novip button {
    padding: 0.6rem 0.9rem;
    border-radius: 10px
  }

  .flower {
    width: 2.4rem;
    margin: 0 auto;
  }

  .give_flower {
    text-align: center;
  }

  .give_flower p {
    text-align: center;
    line-height: 1.5;
  }

  .give_flower input {
    width: 3rem;
    margin-right: 0.3rem;
    margin-top: 0.6rem;
  }

  .give_flower button {
    display: block;
    width: 9rem;
    font-size: 0.84rem;
    margin: 0 auto;
    margin-top: 1.8rem;
    float: none!important;
    line-height: 1.35rem;
    border-radius: 10px;
  }
</style>