module.exports = function (param, paramNeedObj) {
  console.log (param);
  console.log (paramNeedObj);
  let sqlParams = {};
  for (var item in paramNeedObj) {
    if (paramNeedObj[item].require && !(item in param)) {
      break;
      return false;
    } else {
      sqlParams[item] = param[item] ? param[item] : '';
      if (paramNeedObj[item].require && sqlParams[item] === '') {
        break;
        return false;
      }
    }
  }
  return sqlParams;
};
