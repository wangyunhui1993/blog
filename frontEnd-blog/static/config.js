const addr=window.location.hostname;

window.g = {
	netName : '后台管理系统',            /*项目名字*/
  base_files :"http://"+addr+":3000/uploadFiles",    /*文件为上传路径*/
	base :"http://"+addr+":3000",    /*外网接口前缀*/
}
