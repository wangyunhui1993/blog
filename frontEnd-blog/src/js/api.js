import axios from 'axios'
// axios.defaults.withCredentials=true;
let base = window.g.base;


export const newUser = params => { return axios.post(`${base}/user/newUser`, params).then(res => res.data).catch(error=>error); };

//获取文章详情
export const detailArticle = params => { return axios.post(`${base}/blog/article/detail`, params).then(res => res.data).catch(error=>error); };
//新增/修改文章
export const submitArticle = params => { return axios.post(`${base}/blog/article/submit`, params).then(res => res.data).catch(error=>error); };
//获取文章列表
export const getArticleList = params => { return axios.post(`${base}/blog/article/query`, params).then(res => res.data).catch(error=>error); };
//删除文章
export const delArticle = params => { return axios.post(`${base}/blog/article/del`, params).then(res => res.data).catch(error=>error); };




//新增/修改文章
export const submitSort = params => { return axios.post(`${base}/blog/sort/submit`, params).then(res => res.data).catch(error=>error); };
//获取文章列表
export const getSortList = params => { return axios.post(`${base}/blog/sort/query`, params).then(res => res.data).catch(error=>error); };
//删除文章
export const delSort = params => { return axios.post(`${base}/blog/sort/del`, params).then(res => res.data).catch(error=>error); };
