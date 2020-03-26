const ls = window.localStorage
const ss = window.sessionStorage
// https://github.com/tsironis/lockr




export const  LStorage= {
 getItem(key) {
  try {
   return JSON.parse(ls.getItem(key))
  } catch (err) {
   return null
  }
 },
 setItem(key, val) {
  ls.setItem(key, JSON.stringify(val))
 },
 clear() {
  ls.clear()
 },
 keys() {
  return ls.keys()
 },
 removeItem(key) {
  ls.removeItem(key)
 }
};



export const  SStorage= {
 getItem(key) {
  try {
   return JSON.parse(ss.getItem(key))
  } catch (err) {
   return null
  }
 },
 setItem(key, val) {
  ss.setItem(key, JSON.stringify(val))
 },
 clear() {
  ss.clear()
 },
 keys() {
  return ss.keys()
 },
 removeItem(key) {
  ss.removeItem(key)
 }
};