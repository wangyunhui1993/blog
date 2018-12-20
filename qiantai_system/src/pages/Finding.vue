<template>
	<section>
<mt-header title="发现" style="background: #58b7ff;height: 45px;font-size: 18px;" fixed>
  <router-link to="/home" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
<div class="contenter">
	<mt-cell title="机器人" href="#/robot" is-link value="可以陪你聊天的哦"></mt-cell>
</div>

		<tabbar-select></tabbar-select>
	</section>
</template>

<script>
import {} from "../js/api";
import Tabbar from "@/pages/Tabbar";
export default {
  name: "Find",
  components: {
    "tabbar-select": Tabbar
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style>
.contenter {
  position: absolute;
  height: calc(100vh - 105px);
  top: 45px;
  left: 0;
  width: 100%;
}
</style>