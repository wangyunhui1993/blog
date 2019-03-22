import axios from 'axios'
let base = window.g.base;







export const playerQuery = params => { return axios.post(`${base}/player_query`, params).then(res => res.data).catch(error=>error); };

export const queryPlayerNav = params => { return axios.post(`${base}/query_playerNav`, params).then(res => res.data).catch(error=>error); };