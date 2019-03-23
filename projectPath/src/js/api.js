import axios from 'axios'
let base = window.g.base;







export const playerQuery = params => { return axios.post(`${base}/player_query`, params).then(res => res.data).catch(error=>error); };
// 获取导航
export const queryPlayerNav = params => { return axios.post(`${base}/query_playerNav`, params).then(res => res.data).catch(error=>error); };
// 获取播放列表
export const queryMovie = params => { return axios.post(`${base}/query_movie`, params).then(res => res.data).catch(error=>error); };

// 获取每一集列表
export const queryAllItem = params => { return axios.post(`${base}/query_allItem`, params).then(res => res.data).catch(error=>error); };