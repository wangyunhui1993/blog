<template>
  <section>
    <!--<div class="search">搜索</div>-->
    <!--<mt-search class="searchDown" v-model="value"></mt-search>-->
    <div class="searchUp" @click="search">
      <div style="height: 35px;margin-top: 8.5px;line-height: 35px;padding:0 20px;border: 1px solid #fff;">
        <icon name="search" scale="1.4" style="margin-top: 5px;color:#fff;float: left;"></icon>
        <span style="float: left;margin-left: 10px;color: #fff;font-size: 14px;">搜索</span>
      </div>
    </div>
    <div class="container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/images/u=2112343379,3952123369&fm=27&gp=0.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="../assets/images/u=2112343379,3952123369&fm=27&gp=0.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="../assets/images/u=2112343379,3952123369&fm=27&gp=0.jpg" alt="" /></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="contentList">
        <div>
          <div class="title">
            <div class="title-line">
              <div class="title-fonts">最新文章</div>
            </div>
          </div>
          <div class="items">
            <router-link class="item" v-for="o in article" :to="'/articleDetail?id='+o.article_id">
              <h2 class="item-title">{{o.article_name}}</h2>
              <p class="item-time">{{formatTime(o.article_time)}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <tabbar-select></tabbar-select>
  </section>
</template>
<script>
import { getArticleList } from "../js/api"
import { formatTime } from "@/js/publicFun"
import Tabbar from '@/pages/Tabbar'
import { Toast } from 'mint-ui';
export default {
  name: 'Mine',
  components: {
    'tabbar-select': Tabbar
  },
  data() {
    return {
      formatTime: formatTime,
      value: '',
      article: {},
      page: {
        pageSize: 20,
        pageNum: 1
      }
    }
  },
  methods: {
    search: function() {
      console.log(1111111);
      this.$router.push({
        path: '/search'
      });
    }
  },
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true
    })
    console.log(123);
    //获取文章列表
    let info = this.page;
    getArticleList(info).then(data => {
      console.log('传回来的响应信息', data);
      let {
        err_code,
        err_msg,
        list
      } = data;
      if (err_code !== 0) {
        Toast({
          message: err_msg,
          position: 'bottom',
          duration: 2000
        });
      } else {
        this.article = list;
        console.log(list);
      }
    });
  }
}

</script>
<style>
.search {
  height: 45px;
}

.mint-search {
  height: auto;
}

.container {
  margin-top: 52px;
}

.swiper {
  /*height: 200px;*/
}

.swiper img {
  width: 100%;
  /*min-height: 200px;*/
}

.mint-searchbar {
  /*margin-top: 2px;*/
  padding: 0;
}

.mint-swipe-items-wrap>div {
  width: auto;
  height: auto;
}

.mint-swipe-item {
  /*height: 200px;*/
}

.contentList {
  padding-bottom: 59px;
  background: #fff;
}

.items {
  padding: 0 3%;
}

.items:after {
  content: '.';
  height: 0;
  clear: both;
  visibility: hidden;
}

.title {
  height: 42px;
  text-align: center;
  background-color: #fff;
}

.title-line {
  height: 20px;
  width: 172px;
  margin: 0 auto;
  vertical-align: baseline;
  display: inline-block;
  font-size: 18px;
  line-height: 40px;
  border-bottom: 1px solid #333;
}

.title-fonts {
  height: 40px;
  padding: 0 10px;
  background-color: #fff;
  display: inline-block;
}

.item {
  height: 3rem;
  display: block;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  color: #333;
}

.item-title {
  font-size: 1rem;
  font-weight: 100;
  margin-bottom: 0.5rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.item-time {
  color: #999;
  font-size: 0.8rem;
  line-height: 1.6rem;
  font-weight: 100;
}


.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
}

.searchDown,
.searchUp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.searchDown {
  z-index: 100;
}

.searchUp {
  z-index: 101;
  height: 52px;
  background-color: #58b7ff;
}

</style>
