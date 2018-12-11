import axios from 'axios'
// axios.defaults.withCredentials=true;
let base = window.g.base;


export const newUser = params => { return axios.post(`${base}/user/newUser`, params).then(res => res.data).catch(error=>error); };
//发表文章
export const blogCreate = params => { return axios.post(`${base}/blog_create`, params).then(res => res.data).catch(error=>error); };
//获取文章列表
export const getArticleList = params => { return axios.post(`${base}/blog_query`, params).then(res => res.data).catch(error=>error); };

//测试
export const test = params => { return axios.post(`${base}/user_create`, params).then(res => res.data).catch(error=>error); };

