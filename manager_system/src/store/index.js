import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
	adminUserInfo:{
		
	},
	generalInfo:{adminId:""},
}



const mutations={
	keepAdminUserInfo(state,adminUserInfo){
		state.adminUserInfo=adminUserInfo;
	},
//	setGeneralInfo(state,info){
//		state.generalInfo=info;
//	}
}

const action={
	
}





export default new Vuex.Store({
	state,
	mutations,
	action
});