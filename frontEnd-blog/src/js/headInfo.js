export const HeadInfo = {
	"FilesInfo": {
		"工号": "jobNumber",
		"姓名": "name",
		"部门": "department",
		"标识": "logo",
		"身份证号": "IDcard",
		"工作时间": "workTime",
		"出生年月": "birthDate",
		"学历": "education",
		"政治面貌": "politicalStatus",
		"存放情况": "storageConditions",
		"档案已到/未到": "filesState",
	},
	"newFiles": {
		"工号": "jobNumber",
		"姓名": "name",
		"学校": "school",
		"学历": "education",
		"专业": "profession",
		"档案已到/未到": "filesState",
		"档案新进时间": "filesTimes",
		"备注": "remark",

	},
	"FilesSend": {
		"被借阅人工号": "be_jobNumber",
		"被借阅人姓名": "be_name",
		"被借阅人职务": "be_position",
		"借阅人工号": "jobNumber",
		"借阅人姓名": "name",
		"借阅人职务": "position",
		"借阅时间": "lendDate",
		"归还时间": "returnDate",
		"借阅理由": "lendReason",
		"备注": "remark",
	},
	"FilesTurn": {
		"工号": "jobNumber",
		"姓名": "name",
		"转递记录所在": "turnRecordWhere",
		"转递原因": "turnReason",
		"档案接收单位": "fileReceivingUnit",
		"转递反馈": "turnFeedback",
		"人员明细": "personnelDetails",
	},

}

export const transHead = function(strName, language) {
	var obj = HeadInfo[strName];
	var arr = [];
	if(language === 1) {
		for(var key of Object.keys(obj)) {
			//使用Object.keys()方法获取对象key的数组
			arr.push(key)
		}
	}
	if(language === 2) {
		for(var key of Object.keys(obj)) {
			//使用Object.keys()方法获取对象key的数组
			arr.push(obj[key])
		}
	}
	return arr;
}

export const exportExcel = function(strName,dataList,excelName) {
	require.ensure([], () => {　　　　　　　　
		const {
			export_json_to_excel
		} = require('../vendor/Export2Excel');　　 //引入文件　　　　　　
		const tHeader = transHead(strName, 1); //将对应的属性名转换成中文
		　　　　　　　　
		const filterVal =  transHead(strName, 2); //table表格中对应的属性名　　　　　 　　　　　　　　　
		const data = formatJson(filterVal, dataList);　　　　　　　　
		export_json_to_excel(tHeader, data, excelName);　　　　　　
	})

}


export const formatJson=function(filterVal, jsonData) {　　　　
				　　 return jsonData.map(v => filterVal.map(j => v[j]))　　　
			　 }


export const importfxx=function(eleEvent,strName,callback) {
				console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx1");
				// 通过DOM取文件数据

				var f  = eleEvent.currentTarget.files[0];
				var rABS = false; //是否将文件读取为二进制字符串

				var reader = new FileReader();
				//if (!FileReader.prototype.readAsBinaryString) {
				FileReader.prototype.readAsBinaryString = function(f) {
					console.log(f)
					var binary = "";
					var rABS = false; //是否将文件读取为二进制字符串
					var pt = this;
					var wb; //读取完成的数据
					var outdata;
					var reader = new FileReader();
					reader.onload = function(e) {
						var bytes = new Uint8Array(reader.result);
						var length = bytes.byteLength;
						for(var i = 0; i < length; i++) {
							binary += String.fromCharCode(bytes[i]);
						}
						var XLSX = require('xlsx');

						if(rABS) {
							wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
								type: 'base64'
							});
						} else {
							wb = XLSX.read(binary, {
								type: 'binary'
							});
						}
						outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
						console.log("格式化前数据", outdata);
						console.log("格式化后数据",dateTransition(outdata,strName));
						callback(dateTransition(outdata,strName));
					}
					reader.readAsArrayBuffer(f);
				}
				//}
				if(rABS) {
					reader.readAsArrayBuffer(f);
				} else {
					reader.readAsBinaryString(f);
				}
					
			}




		export const 	dateTransition=function(outdata,strName) {
				let dataList = [];
				var item = {};
				let head = HeadInfo[strName];
				console.log(head);
				for(var i = 0; i < outdata.length; i++) {
					item = {};
					for(var key in head) {
						if(key in outdata[i]) {
							item[head[key]] = outdata[i][key];
						} else {
							item[head[key]] = "";
						}
					}
					dataList.push(item);
				}
				return dataList;
			}