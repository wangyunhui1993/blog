import axios from 'axios'
let base = window.g.base;
console.log(base);


//本地
//export const hostName='http://192.168.1.112:8888'




//服务器
//export const hostName='http://47.93.6.54:8888'





export const setIssueArticle = params => { return axios.post(`${base}/issueArticle`, params).then(res => res.data).catch(error=>error); };
export const getArticleList = params => { return axios.post(`${base}/blog_query`, params).then(res => res.data).catch(error=>error); };
export const getArticleDetail = params => { return axios.post(`${base}/blog_detail`, params).then(res => res.data).catch(error=>error); };

export const robot = params => { return axios.get(`${base}/robot`, params).then(res => res.data).catch(error=>error); };