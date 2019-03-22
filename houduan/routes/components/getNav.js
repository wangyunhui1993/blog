var https = require("https");
module.exports = {
  firstNav: function(baseUrl,callback) {
    // var baseUrl = "https://v.qq.com/";
    var req = https.get(baseUrl, function(res) {
      res.setEncoding("utf8");
      var html = "";
      res.on("data", function(chunk) {
        html += chunk.toString();
      });
      res.on("end", function() {
        var reg = /\<a(.*?channel_nav.*?)\>/g;
        var nav = html.match(reg);
        callback(nav);
        // for (var item of nav) {
        //   console.log(item);
        //   var arr = item.split('"');
        //   console.log(arr[1], arr[3]);
        // }
      });
    });
  }
};
