
// 通用标准
export const project_common_data = {
	"理论考试":{
		"模块化教学":{
			index:1,
			"当月模块化考试成绩":0,
			"未完成月度学习任务":-3,
			
		},
		"安全培训":{
			index:2,
			"劳动安全考试成绩(上半年)":0,
			"电气化安全考试成绩(下半年)":0
		}
	},
	"实作考核":{
		"实作能力":{
			index:3,
			"专项实作考试成绩":0
		}
	},
	"工作业绩":{
		"出勤率":{
			index:4,
			"无故迟到、早退小于4小时":-1,
			"无故迟到、早退大于于4小时":-2,
			"当月出勤率未满30%":-5,
			"当月出勤率未满50%":-4,
			"当月出勤率未满70%":-3
		},
		"安全新机制":{
			index:5,
			"被考核A类问题":-2,
			"被考核B类问题":-1,
			"被考核C类问题":-0.5
		},
		"劳动纪律":{
			index:6,
			"未按要求穿戴劳防用品":-1,
			"未工完料尽场地清":-1,
			"未按时完成上级布置的任务":-2,
			"当班期间擅离岗位":-2
		},
		"个人表现":{
			index:7,
			"个人被车间通报批评":-0.5,
			"个人被段通报批评":-1,
			"个人被路局通报批评":-2,
			"个人被总公司通报批评":-4
		}
	}
};

// 班组长专用标准
export const project_spe_banzuzhang = {
	"实作考核":{
		"业务技能":{
			index:8,
			"不熟悉本岗位作业流程及标准":-5,
			"当月带班作业任务未完成或完成质量差":-5
		},
		"生产组织":{
			index:9,
			"未能完成当日生产计划或任务分配":-2,
			"重点故障未盯控到位":-2,
			"各部门协调合作出现问题":-2,
			"未进行成本核算分析":-2,
			"班组职工未按标准作业":-2,
			"未规范职工日常考勤":-2,
			"未合理落实奖惩制度":-2,
			"重要信息上报不及时":-2
		}
	},
	"工作业绩":{
		"班组建设":{
			index:10,
			"班组八项管理制度落实不到位":-2,
			"班组长抽考不及格":-5,
			"综合管理台账填写不规范，填写不及时或漏填":-1,
			"未督促工人管理员参与班组自评":-1,
			"班组自评检查不全面":-1,
			"个人未完成自评检查量化指标":-2,
			"未按时上报班组自评":-3,
			"检查问题未及时整改或整改不到位的":-2,
			"职工培训考试作弊":-2,
			"职工培训考试不及格":-1,
			"被评为不达标班组":-5
		},
		"精益生产":{
			index:11,
			"现场检查涉及班组6S问题":-1,
			"6S检查问题未及时整改的":-1,
			"创新提案上报不积极":-1
		}
	}	
};

//各动车所（值班所长）专用标准
export const project_spe_zhibansuozhang = {

	"实作考核":{
		"业务技能":{
			index:8,
			"不熟悉本岗位作业流程及工作职责":-5,
			"当月带班作业任务未完成或完成质量差":-5
		},
		"生产组织":{
			index:9,
			"重点事项或工作未及时传达或布置给工长落实":-3,
			"重点任务，重点故障未到现场指挥":-3,
			"各部门协调合作出现问题":-2,
			"值班期间未对班组职工人身安全和劳动安全加强检查":-2,
			"值班期间未对动车组作业过程，出库质量及交接情况加强检查":-2,
			"未将值班期间发现的问题进行汇报":-2,
			"无理由缺席当晚生产任务布置会，故障对接会，次日生产交班会":-3,
			"对于突发事件或状况处置不当不力":-5,
			"未及时组织做好早上出库送车工作":-2,
			"值班期间未下现场检查指挥指导":-2,
			"对当晚检修计划及次日上线计划不掌握":-1,
			"未有效督促协调检修班组，调度，售后厂家及一体化部门按照作业计划控制作业时间节点，延误车组出库":-5
		}
	},
	"工作业绩":{
		"精益生产":{
			index:10,
			"检查发现问题未及时督促班组工长落实整改的":-2,
			"创新提案上报不积极":-1
		}
	}
};

//各动车所（调度员）专用标准
export const project_spe_diaoduyuan = {
	"实作考核":{
		"现场作业":{
			index:8,
			"月度二级修兑现率未达标准":-5,
			"月平均洗车率未达标准":-5,
			"信息汇报不及时或错误造成影响":-5,
			"生产组织或调度安排不合理":-2,
			"供断电作业未监控确认":-3,
			"未完成本职范围内的任务":-2,
			"未及时交办及交班不清楚":-2,
			"重点工作落实不到位":-2
		}
	},
	"工作业绩":{
		"台账管理":{
			index:9,
			"轮对踏面受电弓故障单未填报":-2,
			"钥匙管理登记簿未签字":-2,
			"轨边登记本登消记未签字":-2,
			"随车机械师出乘乘务日志未签字":-1,
			"止轮器登记本未消记":-1,
			"调度日志填写不规范":-1,
			"作业计划任务总单编制有误":-1
		},
		"信息系统":{
			index:10,
			"信息系统交路未维护":-3,
			"信息系统扣修单修竣单未及时维护":-2,
			"信息系统高级修及借出转入车组接送车未维护":-2
		}
	}
};
//各动车所（质检员）专用标准
export const project_spe_zhijianyuan = {
	"实作考核":{
		"现场作业":{
			index:8,
			"质量问题单每缺一张":-5,
			"日常工作量未满足要求每少1个环节":-2,
			"A、B、C类关键作业项目或重点故障漏盯控":-5,
			"盯控方式未按要求进行或关键点未盯控到位":-3,
			"盯控作业记录漏签字":-2,
			"扭力扳手校验未盯控":-2,
			"盯控视频未存储":-2
		}
	},
	"工作业绩":{
		"台账管理":{
			index:9,
			"一二级修质检员实际记录表，不及时回填及错填":-1,
			"检查返修单处理情况，处理情况未跟踪":-2,
			"检查出库联检，配合作业单，检修记录，乘务故障交接簿签字，轮对镟修首末件，漏签一处":-0.5,
			"质检相关电子台账错填、漏填或填写不规范":-1
		},
		"作业视频":{
			index:10,
			"视频评级成绩60-75分":-1,
			"视频评级成绩20-60分":-3,
			"视频评级成绩低于20分":-5
		}
	}
}
//各动车所（检修人员）专用标准
export const project_spe_jianxiurenyuan = {
	"实作考核":{
		"现场作业":{
			index:8,
			"防松标记漏打或缺失":-1,
			"接触网工作业前未确认绝缘用品状态和有效期，未进行简单测试":-2,
			"隔离开关操作未严格执行隔离开关共断电作业操作流程":-2,
			"未执行动车组进出库清道接送或执行不到位":-2,
			"防寒打温工作未落实到位":-2,
			"早上出库送车未执行到位":-2,
			"故障信息未回填":-2,
			"作业不规范被开返修单":-2,
			"厂方作业时，未及时盯控":-2,
			"未互相复检":-2,
			"离开司机室未在操作台上设置禁动标识及关闭司机室门":-2,
			"重点故障盯控不到位":-2,
			"违反或简化作业流程":-2,
			"未按运规执行检修限度标准":-2,
			"未按标记法执行":-0.5,
			"作业开始防护信号和小红牌未设置":-2,
			"安全措施整改不到位":-2,
			"发现重大故障未按流程上报":-2,
			"一般漏检漏修":-2,
			"故障未及时处理":-2
		},
		"对规检查":{
			index:9,
			"对规前准备工作未做充足":-1,
			"每发现一处错误":-1,
		}
	},
	"工作业绩":{
		"台账管理":{
			index:10,
			"检修台账漏填写或填写不完整":-1,
			"乘务日志故障未回填":-1,
			"电子作业单填写不完整":-1,
			"拆换件单未回填":-1,
			"计分制系统工作量漏填写":-1
		},
		"作业视频":{
			index:11,
			"视频评级成绩60-75分":-1,
			"视频评级成绩20-60分":-3,
			"视频评级成绩低于20分":-5
		},
		"设备维护":{
			index:12,
			"完工后设备保养不到位":-1,
			"完工后设备未保养":-2,
			"人为损坏工具、量具，遗失工具":-3,
			"工具、量具使用、借还不规范":-1
		}
	}
}
//各动车所（随车机械师）专用标准
export const project_spe_suichejixieshi = {
	"实作考核":{
		"作业标准":{
			index:8,
			"出乘未按规定着装":-1,
			"出库作业未插设或未撤除防护信号":-3,
			"出乘一次往返作业不按标准执行":-2,
			"被上级部门通报批评（包括一般性路风问题）":-2,
			"动车组上工具未清点、遗失，高压备品有效期过期未上报":-5,
			"乘务台账填写不规范":-1,
			"信息上报不及时":-3,
			"未按规定对乘务APP中的故障信息进行确认":-2,
			"途中应急处置不到位，评价差":-3
		},
		"途中巡检":{
			index:9,
			"每月平均打点率低于90%":-2,
			"每月平均打点率低于75%":-5,
			"每月平均打点率低于60%":-10
		}
	},
	"工作业绩":{
		"视频评价":{
			index:10,
			"视频评级成绩60-75分":-1,
			"视频评级成绩20-60分":-3,
			"视频评级成绩低于20分":-5
		},
		"教育培训":{
			index:11,
			"每班一题漏做":-2,
			"应急手册抽考分数低于80分":-2,
			"应急演练分数未达到80分":-2,
			"应急演练无故缺席":-3
		}
	}
}
//各动车所（温州异地存车点）专用标准
export const project_spe_wenzhouyidicunchedian = {
	"实作考核":{
		"作业标准":{
			index:8,
			"值班员未按规定着装":-1,
			"地勤机械师洗车作业前未确认受电弓":-3,
			"和机械师交接钥匙未按标准清点":-2,
			"当班期间违章违纪":-5,
			"被上级部门通报批评（包括一般性路风问题）":-2,
			"应急救援工具借出归还时未清点、遗失，备用蓄电池有效期过期未充电":-5,
			"钥匙交接记录本填写不规范":-1,
			"信息上报不及时":-3,
			"未按规定对晚点车信息进行确认":-2,
			"应急处置能力差":-3,
			"检查组在存车场发现问题":-2
		},
		"消防巡检":{
			index:9,
			"每天消防巡查漏一处":-2,
			"每月消防视频质量缺损达%10":-10
		}
	},
	"工作业绩":{
		"视频评价":{
			index:10,
			"视频评级成绩低于90分":-1,
			"视频评级成绩低于80分":-3,
			"视频评级成绩低于70分":-5
		},
		"音频评价":{
			index:11,
			"每班一次遗漏":-2,
			"月查分数低于80分":-2,
			"当天音频未做记录":-5
		}
	}
}
//各动车所（轮轴班组）专用标准
export const project_spe_lunzhoubanzu = {
	"实作考核":{
		"现场作业":{
			index:8,
			"辅助小车工具摆放混乱":-1,
			"探伤藕合液清理不彻底":-1,
			"完工后辅助小车未清洁":-1,
			"配件安装前未清洁、检查":-1,
			"轴端防尘措施未到位":-1,
			"防松标记漏打":-2,
			"清洁杆损坏":-1,
			"轴端盖垫片安装错误":-2,
			"不按规定拆装轴端盖":-1,
			"扭力未施加":-3,
			"未互相复检":-2,
			"关门车阀复位不到位":-2,
			"违反规定插拔电线":-2,
			"作业未完成先撤除止轮器":-3,
			"未按规定设置或撤除安全防护号志、止轮器":-5,
			"镟轮作业未清除反光标签":-1,
			"镟修作业未实时盯控":-1,
			"首末件测量不规范":-2,

			"镟轮作业未进行安全防护":-2,
		},
		"对规检查":{
			index:9,
			"对规前准备工作未做充足":-1,
			"受伤流血，对规失格":-10
		}
	},
	"工作业绩":{
		"台账管理":{
			index:10,
			"探伤作业台账填写不完整":-1,
			"镟轮作业台账填写不完整":-1,
			"计分制系统工作量漏填写":-1,
			"设备故障未开临修单":-1
		},
		"设备维护":{
			index:11,
			"完工后设备保养不到位":-1,
			"完工后设备未保养":-2,
			"公铁两用车未及时充电":-1,
			"人为损坏设备、工具、量具，遗失工具":-3,
			"工具、量具使用完毕未及时清洁":-1
		}
	}
}
//各动车所（设备班组）专用标准
export const project_spe_shebeibanzu = {
	"实作考核":{
		"现场作业":{
			index:8,
			"设备点巡检作业未落实，点检流于形式":-2,
			"临修故障未及时处理，影响正常作业":-3,
			"未定期对特种设备运转状态进行检查":-4,
			"未定期对机械动力设备进行润滑保养":-2,
			"未定期对吊索具探伤，造成定检超期":-4,
			"轨边登记制度未落实，私自上道作业":-4,
			"天窗驻站、现场防护人员未按标作业":-3,
			"未按时检查消防柜":-2,
			"现场配合作业不到位":-3,
			"设备日常维护不到位":-3,
			"防汛防寒等后勤保障不力":-3
		}
	},
	"工作业绩":{
		"台账管理":{
			index:9,
			"扭力校验台账未留存":-1,
			"工具故障未记录":-1,
			"未通过工具管理系统登记借还信息":-1,
			"点巡检台账填写错误，未及时填记":-1,
			"临修记录单填写错误":-1,
			"检修记录单填写错误":-1,
			"特种设备月度检查记录填写错误":-1,
			"空压机房日常运转记录填写错误":-1,
			"机械动力设备定期润滑记录填写错误":-1,
			"吊索具定期探伤记录未完成":-1,
			"轨边设备登销记记录填写错误":-1,
			"天窗作业现场防控表填写错误":-1,
		},
		"工具管理":{
			index:10,
			"未落实月度计量器具送检计划":-1,
			"未按要求对扭力扳手进行校验":-1,
			"未登记工具故障，送修记录不清晰":-1,
			"高压备品未及时送检":-1,
			"新工具未通过工具管理系统制作条码":-1,
			"工具归还状态未确认或错收工具":-1
		}
	}
};
//各动车所（接触网工）专用标准
export const project_spe_jiechuwanggong = {
	"实作考核":{
		"现场作业":{
			index:8,
			"每日开工前，未对隔离开关、操作箱、接地装置、隔离开关所分断的接触网段等进行目视检查并确认外观状态良好":-2,
			"接触网工作业前未确认防护用品状态和有效期，未进行简便测试":-2,
			"隔离开关操作未严格执行隔离开关供断电作业操作流程":-2,
			"未执行动车组进出库清道接送或执行不到位":-2,
			"未按规定穿戴好安全帽、绝缘手套、绝缘靴":-2,
			"接触网断电后作业人员未坚守岗位，擅自离岗":-2,
			"遇雷电、暴雨雪等特殊天气下，违反原则未经请示擅自手动操作隔离开关":-5,
			"作业不规范被开返修单":-2,
			"作业时未执行呼唤应答制度":-1,

			"违反或简化作业流程":-2,
			"发现供断电设备设施故障未及时上报":-3
		},
		"对规检查":{
			index:9,
			"对规前准备工作未做充足":-1,
			"每发现一处错":-1,

		}
	},
	"工作业绩":{
		"台账管理":{
			index:10,
			"台账漏填写或填写不完整":-1,
			"电子作业单填写不完整":-1
		},
		"作业视频":{
			index:11,
			"视频评级成绩60-75分":-1,
			"视频评级成绩20-60分":-3,
			"视频评级成绩低于20分":-5
		},
		"设备维护":{
			index:12,
			"完工后设备设施保养不到位":-1,
			"完工后设备设施未保养":-2,
			"人为损坏或遗失工具，防护用品":-3
		}
	}
};
//检修、调试、转向架车间（检修人员）专用标准
export const project_spe_jtzjianxiurenyuan = {
	"实作考核":{
		"检修质量":{
			index:8,
			"被开具A类缺陷单":-4,
			"被开具B类缺陷单":-2,
			"被开具C类缺陷单":-1
		},
		"作业流程":{
			index:9,
			"作业过程中存在简化作业或野蛮作业的":-1,
			"未落实自互检要求的":-1,
			"信息化系统中当日作业回填未完成":-1,
			"电子检修记录单未按时填写":-1,
			"检修记录单（纸质或电子）填写错误":-0.5
		},
		"兼岗兼职":{
			index:10,
			"当月仅从事本岗位作业的":-5,
			"当月从事兼容岗位不满3个工作日的":-2,
			"当月从事兼容岗位不满7个工作日的":-1,
			"未掌握1项兼容岗位技能且连续1年及以上未掌握新兼容岗位技能的":-8,
			"未掌握2项兼容岗位技能且连续1年及以上未掌握新兼容岗位技能的":-2,
			"未掌握3项兼容岗位技能且连续1年及以上未掌握新兼容岗位技能的":-0.5
		}
	},
	"工作业绩":{
		"设备工具管理":{
			index:11,
			"工具、工装、设备使用完毕未及时清洁、保养的":-0.5,
			"工具、工装、设备使用完毕未放回定置位置的":-4,
			"工具遗失或人为损坏的，工装、设备操作不当损坏的":-2,
			"点检卡等设备台帐填记不及时":-1,
			"点检卡等设备台帐填记不规范":-1
		},
		"岗位风险":{
			index:12,
			"从事辅助工序作业":-3.5,
			"从事一般工序作业":-2,
			"未担任作业组长":-1
		},
		"工作量积分":{

		}
	}
};
//检修、调试、转向架车间（质检员）专用标准
export const project_spe_jtzzhijianyuan = {
	"实作考核":{
		"检修质量":{
			index:8,
			"当月开具缺陷单数量不满4张":-2,
			"当月未开具A类缺陷单":-4,
			"当月开具B类缺陷单不满2张":-2
		},
		"质量卡控":{
			index:9,
			"被验收员开具交验故障返工单(车统-93)":-5,
			"后道工序发现前道工序或交验时发现A类故障":-4,
			"后道工序发现前道工序或交验时发现B类故障":-2,
			"后道工序发现前道工序或交验时发现C类故障":-1
		},
		"作业视频":{
			index:10,
			"视频评级成绩60-75分":-1,
			"视频评级成绩20-60分":-3,
			"视频评级成绩低于20分":-5
		}
	},
	"工作业绩":{
		"台帐填写":{
			index:11,
			"台帐填写不及时":-0.5,
			"漏填、错填台帐":-1
		},
		"作业盯控":{
			index:12,
			"未对扭矩扳手校验进行盯控的":-1,
			"未对关键作业进行盯控的":-1,
			"未对入库配件进行复验抽查的":-1
		},
		"工作量积分":{

		}
	}
};
//物流车间(班组长)专用标准
export const project_spe_wlcjbanzuzhang = {
	"实作考核":{
		"业务技能":{
			index:8,
			"不熟悉本岗位作业流程及标准":-5,
			"带班作业完成质量差":-5
		},
		"生产组织":{
			index:9,
			"未能完成当日生产计划或任务分配":-2,
			"重点缺料未盯控到位":-2,
			"各部门协调合作出现问题":-2,
			"库存成本超出年度指标":-2,
			"班组职工出现漏报计划":-2,
			"未规范职工日常考勤":-2,
			"未合理落实奖惩制度":-2,
			"重要信息上报不及时":-2
		}
	},
	"工作业绩":{
		"班组建设":{
			index:10,
			"上季度班组长抽考不及格":-5,
			"综合管理台账填写不规范，填写不及时或漏填":-1,
			"未督促工人管理员参与班组自评":-1,
			"班组自评检查不全面":-1,
			"个人未完成自评检查量化指标":-2,
			"未按时上报班组自评":-3,
			"检查问题未及时整改或整改不到位的":-2,
			"职工培训考试作弊":-2,
			"职工培训考试不及格":-1,
			"上季度被评为不达标班组":-3
		},
		"精益生产":{
			index:11,
			"车间6S检查排名，第一名不扣分，之后每递增1位，在上一名的基础上额外扣0.5分":-0.5,
			"6S检查问题未及时整改的":-1,
			"段领导现场检查涉及班组6S问题":-1,
			"车间6S进行检查时，精益组抽调班组精益员共同检查缺席":-1,
			"车间月度改善提案评比时，需班组精益员共同参与评比缺席":-1,
			"对于车间组织精益生产会需要班组长参与缺席":-1,
			"车间精益组日常布置的任务，班组工班长或精益员未按规定时间完成":-1,
			"涉及精益生产组织各班组比赛（比如一手精项目），最后2名":-1
		}
	}
};
//物流车间（管库员）专用标准
export const project_spe_wlcjguankuyuan = {
	"实作考核":{
		"计划提报":{
			index:8,
			"需求计划填报不规范信息不全，未按照段发格式，断号":-1,
			"未做好材料申请汇总表，未做好申请未到料统计":-2
		},
		"入库管理":{
			index:9,
			"按要求填写《物资入库验收登记簿》，相应的“技证编号”和“收料单号”必须填写，每发现1条不符合要求的":-1,
			"规范填写《入库检验记录单（一）、（二）、（三）》，注意入库检验的先后时间及编号连续性，并做好相对应的目录，每发现1处不符合要求的":-1,
			"入库检验中发现问题的，未及时上报处理的":-2
		}
	},
	"工作业绩":{
		"日常管理":{
			index:10,
			"日常物资管理：1.物资存放按分类编号有序排列。2.各类物资均应划区分开，不得混存。3.物资保管环境必须保持整洁美观，库内物资及设施无积尘、无油污。4.物资存储做到安全、合理、苫垫、查点方便、料签齐全、标志明显":-1,
			"高价互换配件管理：1.做好高价互换配件库存表（动态统计表）。2.做到新品与旧件账目数量和实际数量相符。3.保管好相应合格证明。4.高价互换配件做好明显的标识，与一般材料区分，并严格分存新品与旧件":-1,
			"危险品库管理：做好每天上午、下午各一次的温湿度观测记录和巡检记录。按甲乙丙丁戊建筑设计防火规范，将危化品分类存放，并张贴物资清单。做好防爆柜的定置管理，并张贴存放明细":-1,
			"修旧利废管理：做好“两进两出”台账登记，做好每月库存动态统计表。严格将修复品及待修品分料架、分层存放，并张贴明显标识":-1,
			"完成车间领导、专职及工长交办的各项任务":-5
		},
		"信息管理":{
			index:11,
			"按要求制作二维码料签及质量追踪单品二维码，做好手持终端机数据更新、人员权限管理、库存压力预警及自助微库运行维护等工作":-1,
			"物资管理信息系统的入库单、出库单、调拨单等，须在3个工作日之内登卡及签收":-1,
			"根据库存实际情况选取盘点项数，每月循环自点率不少于30%，每季度对库存物资全覆盖，形成《物资自点（抽查）统计表》及《自查记录清单》，发现缺失":-10
		},
		"工作量积分":{
			index:12,
			"当月工作积分×1%÷当月在修及修竣车组数":0
		}
	}
};

//物流车间车间（材料工）专用标准
export const project_spe_wlcjcailiaogong = {
	"仓储管理":{
		"入库管理":{
			index:8,
			"按要求接收物料，核对交接单与实物数量是否准确，每发现1条不符合要求的":-1,
			"未按规定时间完成入段检验工作，每发现1次未完成的":-3
		},
		"日常管理":{
			index:9,
			"配送管理：做好必换件及探伤料的预配工作，检查预配物料有无数量、质量、材质等差错，每发现1处错误":-5,
			"严格将配件分料架、分层存放，并张贴明显标识。每发现1处不符合要求的":-1,
			"完成工长交办的各项任务，每一项未完成":-5
		},
		"库存管理":{
			index:10,
			"按要求制作二维码料签及质量追踪单品二维码，做好手持终端机数据更新、人员权限管理、库存压力预警及自助微库运行维护等工作，每发现1处不符合要求的":-1,
			"根据管库员计划进行库存实际盘点，每发现一项盘点不准确":-2
		},
		"出库管理":{
			index:11,
			"规范填写发料单，按照格式要求填写物资编码、名称、规格、单位、数量、使用车号等信息，请领人（有权领料人）、收料人、发料人确认并签字。发料单按照车型车号分开保管，单张发料单上开具的物资应为同一组车使用。每发现1处不符合要求的":-1,
			"发料人员应在当班结束前将单据交管库员，管库员应在3个工作日内将单据转化为电子台账。每发现1张未及时录入的单据":-1,
		},
		"工作量积分":{
			index:12,
			"当月工作积分×1%÷当月在修及修竣车组数":0		
		}
	}
};
//维修、电力班组
export const project_spe_weixiudianli = {
	"实作考核":{
		"检修质量":{
			index:8,
			"设备小修质量不达标或小修过程中人为原因造成设备损坏的":-3,
			"设备小修存在漏检漏修的":-3,
			"设备小修后在一个月内发生临修的":-1,
			"设备巡检质量不高或未按巡检周期执行的":-2,
			"设备临修由于主观原因被开具《上海动车段高级修生产异常处理单》的":-3,
			"未完成班组长交办的各项任务":-3,
			"设备日常维护保养不到位":-2,
		},
		"作业流程":{
			index:9,
			"作业中不积极主动、怠慢作业的":-2,
			"未严格按照作业指导书要求进行作业的":-3,
			"未严格按照生产计划完成生产任务的":-5,
			"无故不听从工长任务安排又不能说明理由的":2,
			"发现设备事故隐患未及时上报的":-2,
			"台帐记录不规范、不及时或漏填":2
		}
	},
	"工作业绩":{
		"设备工具管理":{
			index:10,
			"携带工具不能满足生产需要":-1,
			"工具、工装、设备使用完毕未及时清洁、保养、定置管理的":-1,
			"工具室借用工具超期归还或长期不还的":-1,
			"工具遗失或人为损坏的；工装、设备操作不当损坏的":-2,
		},
		"工作量积分":{}
	}
};
//动车专用设备专修组
export const project_zhuanyongshebei = {
	"实作考核":{
		"质量盯控":{
			index:8,
			"售后人员存在简化作业且影响设备正常使用的，跟班人员未及时指出，或指出后售后人员未整改且未将信息反馈车间的":-5,
			"设备检修质量盯控不到位，存在漏检漏修或售后检修质量有不良反应的":-3,
			"售后厂家未严格按照作业指导书要求进行作业，跟班职工未及时提出意见的":-3,
			"对检修质量抽查或对规中发现的问题未及时督促售后人员进行整改的":-2,
			"跟班人员作业中不积极主动参与检修作业的":-3
		},
		"作业流程":{
			index:9,
			"发现设备事故隐患未及时上报的":-5,
			"台帐记录不规范、每日跟班写实不按时上传的":-2,
			"未确认配件更换情况的":-2
		}
	},
	"工作业绩":{
		"现场管理":{
			index:10,
			"班前、班后未清点工具的":-1,
			"作业现场工具材料未定置摆放，作业完毕未做到“工完料尽，场地清”的":-1,
			"未完成班组长交办的各项任务":-3
		},
		"工作量积分":{

		}
	}
};
//计量组专用标准
export const project_jiliangzu = {
	"实作考核":{
		"作业质量":{
			index:8,
			"使用失准、失修的计量标准器进行量值传递的":-3,
			"填写台账记录不规范的":-2,
			"对确认不合格的计量器具未及时送检、送修的":-1,
			"作业质量出现问题且造成不良反映的":-1,
			"作业记录缺少检定、核验人员签字的":-2,
			"作业人员未持证作业或进行不符合持证项目的检定作业":-5
		},
		"作业过程":{
			index:9,
			"未严格按照作业指导书要求进行作业的":-5,
			"未严格按照生产计划完成生产任务的":-3,
			"作业中不积极主动、怠慢作业的":-2,
			"在计量检定或化验作业过程中，保管不当，丢失或损坏被检计量器具的":-2,
			"使用、维护、保养不当，造成设备损坏的":-1,
			"未按操作程序作业，出具错误结果，造成损失的":-2,
			"发现设备事故隐患未及时上报的":-1,
			"每月检定、化验数据统计错误的":-1,
			"油样化验不及时影响生产的":-2,
			"化验报告未在规定时间传输的":-2,
			"未完成班组长交办的各项任务":-3
		}
	},
	"工作业绩":{
		"工具管理":{
			index:10,
			"工具、工装使用完毕未及时清洁、保养的或未放回定置位置的":-1,
			"作业人员在工作前未对计量标准或化验仪器、设备进行全面检查的，每发现1处不符合要求的":-1,
			"工具遗失或人为损坏的，工装、设备操作不当损坏的":-1
		},
		"工作量积分":{}
	}
};
//TEDS设备保养组专用标准
export const project_shebeiguanlizu = {
	"实作考核":{
		"检修质量":{
			index:8,
			"设备小修质量不达标":-5,
			"检修质量反应不良，存在漏检漏修的":-3,
			"设备巡检质量不高的":-3,
			"设备整修质量不高的":-3,
			"未完成班组长交办的各项任务":-3
		},
		"作业流程":{
			index:9,
			"作业过程中存在野蛮作业的":-1,
			"未严格按照作业指导书要求进行作业的":-3,
			"未在天窗计划时间内完成检修任务":-5,
			"作业中不积极主动、怠慢作业的":-2,
			"发现设备事故隐患未及时上报的":-5
		}
	},
	"工作业绩":{
		"设备工具管理":{
			index:10,
			"工具、工装、设备使用完毕未及时清洁、保养的":-0.5,
			"工具、工装、设备使用完毕未放回定置位置的":-1,
			"工具遗失或人为损坏的，工装、设备操作不当损坏的":-2
		},
		"作业盯控":{
			index:11,
			"未按照要求履行作业负责人、现场主防护员、现场防护员及检修人员相关岗位职责的":-5,
			"未对巡检作业过程进行摄像的":-5,
			"巡检作业过程摄像不完整的":-1,
			"摄像视频文件未按照要求格式进行编辑重命名的":-1
		},
		"工作量积分":{}
	}
};
//TEDS监控班组专用标准
export const project_jiankongbanzu = {
	"实作考核":{
		"监控质量":{
			index:8,
			"故障漏看":-5,
			"故障漏看且造成不良反映的":-15,
			"未完成班组长交办的各项任务":-3
		},
		"作业流程":{
			index:9,
			"作业过程中存在简化作业的":-5,
			"未严格按照作业指导书要求进行作业的":-3,
			"发现故障未按规范流程或未在有效时间内上报":-5,
			"作业中不积极主动、怠慢作业的":-2,
			"发现脱、断等大故障隐瞒不报的":-20
		}
	},
	"工作业绩":{
		"设备工具管理":{
			index:10,
			"工具、工装、设备使用完毕未及时清洁、保养的":-1,
			"工具、工装、设备使用完毕未放回定置位置的":-1,
			"工具遗失或人为损坏的，工装、设备操作不当损坏的":-2
		},
		"作业盯控":{
			index:11,
			"未按照要求在作业时将手机进行定置管理的":-2,
			"作业期间与他人交流与工作无关的话题":-1,
			"不积极配合车间管理人员对规的，或对规成绩低于75分以下的":-2
		},
		"工作量积分":{}
	}
};
//工具管理员
export const project_gongjuguanliyuan = {
	"实作考核":{
		"作业流程":{
			index:8,
			"未及时汇总各车间计划信息且在规定时间内未报车间主任签字确认采购的":-2,
			"在规定时间未对各车间采购计划单汇总后发采购部门，影响工具采购的":-1,
			"对各车间没有超出年度限额的申请单，未及时对申请进行审批，影响工具采购的":-1,
			"采购工具到货后，接到通知，工具管理员未对清单中名称、型号及规格、数量、生产厂家和价格，未及时将数据录入工具综合管理信息系统":-3,
			"工具管理员收到工具实物后2日内未将工具入库的":-1,
			"入库检验中发现问题的，须及时通知物流车间及厂方或不合格证明存档，未做记录的":-5
		},
		"日常管理":{
			index:9,
			"工具日常管理：按工具的构造及作用分为大类存放并按分类编号有序排列，各类工具均应划区分开，不得混存。工具保管环境必须保持整洁美观，室内工具及设施无积尘、无油污。工具存储做到安全、合理、苫垫、查点方便、料签齐全、标志明显。每发现1处不符合要求的":-1,
			"领用工具手续不齐全或领用单填写不规范的":-1,
			"借用工具手续不齐全或借用记录单填写不规范的":-1,
			"未按工具遗失损坏管理要求进行工具遗失损坏处理的":-1,
			"工具领用、借用数量有差错的":-3,
			"未完成班组长交办的各项任务":-3
		}
	},
	"工作业绩":{
		"工具管理":{
			index:10,
			"未按工具退清管理要求办理工具清退手续的":-2,
			"未按规定进行工具清查，帐、卡、物不一致的":-1,
			"未按规定办理工具报废手续的":-1,
			"未按计量计划进行送检的":-1
		},
		"工作量积分":{}
	}
};
//压风司机
export const project_yafengsiji = {
	"实作考核":{
		"设备保养质量":{
			index:8,
			"包保的设备保养不到位的":-3,
			"机房内和储风缸室内风管路较脏或标记缺失的":-2,
			"吸风口过滤网未及时清理致使设备通风不畅，造成机组温度异常升高的":-5,
			"无故停机的":-2,
			"未完成班组长交办的各项任务":-3
		},
		"场地整洁管理":{
			index:9,
			"接班后机房未清扫，垃圾较多的":-1,
			"机房门、窗未清扫，垃圾较多的":-1,
			"使用冷干机过滤网未及时清除，影响散热的":-2,
			"储风缸脏乱的":-2,
			"工具、料箱内未按6S规定摆放或摆放混乱的":-2
		},
		"台帐填写":{
			index:10,
			"台帐填写不及时":-1,
			"漏填、错填台帐":-1,
			"空压机房出入登记未执行的":-2
		}
	},
	"工作业绩":{
		"作业盯控":{
			index:11,
			"交接班未按规定执行的":-2,
			"违反设备操作规程作业的":-2,
			"未按规定巡视机房盯控的":-2,
			"发生异常情况未汇报或应急处置错误的":-2,
			"无故长时间离开机房的":-2
		},
		"工作量积分":{}
	}
};
//高级修调度组
export const project_diaoduzu = {
	"实作考核":{
		"调度工作":{
			index:8,
			"未按规定时间编排好车间月度计划":-5,
			"未协调相关部门，月度计划兑现率未达标":-2,
			"未及时安排临修任务":-1,
			"未安排好整修和专项修":-2,
			"临时交办任务未及时通知到位":-2,
			"生产组织或调度安排不合理":-2,
			"未完成本职范围内的任务":-2,
			"重点工作落实不到位":-2,
			"未完成车间领导交办的各项任务":-3
		}
	},
	"工作业绩":{
		"台账管理":{
			index:9,
			"未汇总好车间周交班会议记录":-1,
			"每月质量分析不到位的":-2,
			"月度临修单未整理收集":-2,
			"未统计好职工加班和临时交办任务":-1,
			"台帐填写不规范":-1
		},
		"应急演练":{
			index:10,
			"未按要求开展扫雪除冰应急演练":-2,
			"未按要求开展防洪应急演练":-2,
			"未按要求进行汇总的":-2
		}
	}
};
//驾驶班专用标准
export const project_jiashiban = {
	"实作考核":{
		"安全驾驶":{
			index:8,
			"违反工作纪律未按派车任务布置完成任务，不服从指挥调度":-2,
			"车况检查保养未按规定进行和车辆安全部件故障征兆未发现":-2,
			"违规出车、修车或者将车辆借给他人使用的":-2,
			"违反国家、地方道路交通法实施条例中“禁止”条款的":-5,
			"违反国家、地方道路交通法实施条例中“不得”条款的":-3,
			"违反国家、地方道路交通法实施条例中“应当遵守”条款的":-2,
			"公安交管部门查处的违法行为：有记分扣2*记录分值（分/件），无记分有处罚的":-1,
		},
		"服务质量":{
			index:9,
			"服务态度不好，用车人对其工作的评价较差":-2,
			"出车路线不了解导致用车人工作产生延误等严重后果的":-1,
			"车辆的清洁度（包括车内和车外）较差的":-2
		}
	},
	"工作业绩":{
		"日常维护":{
			index:10,
			"未按要求开展每日例保工作的":-2
		},
		"台账管理":{
			index:11,
			"未按要求持“双证”上岗":-1,
			"未按要求填写出车记录台账的":-1
		}
	}
};
//应急指挥中心（值班主任）专用标准
export const project_yjzhibanzhuren = {
	"实作考核":{
		"业务技能":{
			index:8,
			"不熟悉本岗位作业流程及标准":-5,
			"应急故障处理手册及应急指挥相关规章考试成绩在60分以下的，本项失格。考试成绩在60分至70分之间的，扣3分。考试成绩在70分至80分之间的":-1
		},
		"按标指挥":{
			index:9,
			"班组未按标指挥导致故障处置超时30分钟以上，60分钟以内的":-5,
			"班组发生未按标指挥被科室内追究或通报的":-5,
			"班组发生未按标指挥被科室内追究或通报的":-5,
			"班组发生未按标指挥被段追究或通报的":-10,


			"未按要求参加动车组应急演练的":-3,
			"指挥过程中未按要求使用应急处置指挥系统的":-2,
			"动车组途中故障信息未按要求及时发布或汇报的":-2
		}
	},
	"工作业绩":{
		"作业纪律":{
			index:10,
			"未请假迟到、早退、擅自换班的":-3,
			"当班期间使用外网电脑做非工作相关事情的":-3
		},
		"台账管理":{
			index:11,
			"班组未及时维护动车组信息系统行车设备故障信息的":-5,
			"未按要求组织做好交接班及注意事项的":-3,
			"应急台交接单填写不规范的，每次扣1分，填写遗漏动车组重点行车设备故障信息的":-3,
			"班组未按要求下发和收集动车组重点故障日报表的":-3,
			"动车组重点故障日报表遗漏重点故障信息的":-2,
			"班组未按要求规范填写应急台日志的":-2,
			"班组未按要求上报动车组行车设备故障分析报告的":-5
		}
	}
};
//应急指挥中心（指挥人员）专用标准
export const project_yjzhihuirenyuan = {
	"实作考核":{
		"业务技能":{
			index:8,
			"不熟悉本岗位作业流程及标准":-5,
			"考试成绩在60分至70分之间的":-3,
			"考试成绩在70分至80分之间的":-1
		},
		"按标指挥":{
			index:9,
			"未按标指挥导致故障处置超时10分钟以上，30分钟以内的":-5,
			"未按标指挥导致故障处置超时30分钟以上，60分钟以内的":-10,
			"未按标指挥被科室内追究或通报的":-5,
			"未按标指挥被段追究或通报的":-10,
			"未按要求参加动车组应急演练的":-3,
			"指挥过程中未按要求使用应急处置指挥系统的":-2,
			"未按要求对随车机械师的应急处置进行评价的":-2,
			"动车组途中故障信息未按要求及时发布或汇报的":-2
		}
	},
	"工作业绩":{
		"作业纪律":{
			index:10,
			"未请假迟到、早退、擅自换班的":-3,
			"当班期间使用外网电脑做非工作相关事情的":-3
		},
		"台账管理":{
			index:11,
			"未及时维护动车组信息系统行车设备故障信息的":-5,
			"应急台交接单填写不规范的，每次扣1分，填写遗漏动车组重点行车设备故障信息的":-3,
			"未按要求下发和收集动车组重点故障日报表的，每次扣3分，动车组重点故障日报表遗漏重点故障信息的":-2,
			"未按要求规范填写应急台日志的":-2,
			"未按要求上报动车组行车设备故障分析报告的":-5
		}
	}
};








export const addScore_common_data={
	"个人被车间通报表扬或奖励":0.5,
	"个人被段通报表扬或奖励":1,
	"个人被路局通报表扬或奖励":2,
	"个人被总公司通报表扬或奖励":4,
	"发现重大故障或安全隐患":2,
	"参加段级及以上技能竞赛取得第1名":2,
	"参加段级及以上技能竞赛取得第2名":1,
	"参加段级及以上技能竞赛取得第3名":0.5,
	"参加总公司、路局技能竞赛取得前3名":0
};
export const addScore_spe_data={
	"被评为标杆班组":5,
	"被评为优秀班组":3,
	"班组成员发现重大故障或安全隐患":2,
	"班组成员被路局通报表扬或奖励":2,
	"班组成员被总公司通报表扬或奖励":4,
	"班组成员参加段技能竞赛取得第1名":1,
	"班组成员参加路局及以上技能竞赛取得前3名":2
};

export const noStar_common_data={
	"职工违法违纪受党政纪处分的，考核期内直接定为无星级，并按《上海动车段奖惩办法》处理，且下一考核周期不得评为二星级及以上":1,
	"发生碰触“红线”、“事苗”类问题的直接责任者和被定为一般D类及以上责任事故负主要责任者，考核期内直接定为无星级，并按《上海动车段安全生产奖惩办法》处理，且下一考核周期不得评为二星级及以上":1,
	"发生严重路风事件":1,
	"严重违反“两纪一化”，如旷工、作弊等情况":1,
	"考核期内发生3件及以上安全新机制A类问题考核者，直接定为无星级，且下一考核周期不得评为三星级":1,
	"其他被上级严重通报批评情况":1
};
export const noStar_spe_data={
	"班组发生责任生产安全事故":1,
	"班组发生刑事治安违法犯罪行为":1,
	"班组违反安全红线管理规定事件":1,
	"班组发生行车和劳动安全“事苗”的":1,
	'班组弄虚作假，隐瞒安全事故及安全信息':1
};

export const depNameData=['安全科','办公室','保卫科','材料科','党委','动车检修车间','动车转向架车间','段领导','工会','杭州动车运用所','虹桥动车运用所','计划财务科','技术科','经营开发部','劳动人事科','南翔动车运用所','上海南动车运用所','设备车间','调度科','调试车间','团委','物流车间','职工教育科','质量检查科','驻段验收室'];
export const helpDepartmentData=['段助勤','值班所长','技术组'];
export const chLanguage=['类别','工号','姓名','部门','班组','评定项目','岗位标识（生产组）','车间标识','生产组','民族','性别','备注（职务、岗位）','分类','干部工人标识','现岗位职名','机械师证书更新','有随车证人员','学历','政治面貌','评定标准'];
export const enLanguage=['someType','number','name','depName','team','rateType','postIDF','workshopIDF','productionTeam','nation','sex','postComments','postType','cadreOrWorker','postName','machinistCertificate','haveCertificate','education','political','standard'];



function formatData(data) {
	var result = [];

	var i = 0;
	for(var key in data) {
		result.push({
			value: key
		});
		i++;
	}
	//console.log("formatData return:", JSON.stringify(result));
	return result
};


const teamArr=['TEDS监控二班',
	'TEDS监控一班',
	'TEDS设备保养班组',
	'部件检修二班',
	'部件检修三班',
	'部件检修一班',
	'部件检修组',
	'车内设施组',
	'乘务二班',
	'乘务六班',
	'乘务七班',
	'乘务三班',
	'乘务四班',
	'乘务五班',
	'乘务一班',
	'单车调试班',
	'电力组',
	'电气检修组',
	'动车专用设备专修班组',
	'二级修班',
	'分解组',
	'高级修材料班组',
	'高级修材料配送班组',
	'构架检修组',
	'杭州动车所材料班组',
	'机械恢复班',
	'计量组',
	'技术科（助勤）',
	'技术组',
	'检修二班',
	'检修三班',
	'检修四班',
	'检修一班',
	'列调二班',
	'列调一班',
	'临修班组',
	'临修二班',
	'临修三班',
	'临修一班',
	'轮对部件组',
	'轮轴班组',
	'轮轴组',
	'南翔动车所材料班组',
	'上南动车所材料班组',
	'调度班组',
	'维修组',
	'运用所',
	'长病假（沪）',
	'制动检修组',
	'质检班组',
	'质检组',
	'转向架二班',
	'转向架一班',
	'综合班组',
	'综合班组（设备）',
	'综合班组（温州）',
	'综合班组（余姚）',
	'综合班组（余姚）值班所长',
	'综合班组1',
	'综合维修组',
	'综合组',
	'综合组（调度）',
	'综合作业组',
	'组装试验组'];
const typeArr=['通用标准','专用标准'];
const depNameArr=['检修车间','转向架车间','设备车间','调试车间','物流车间','上海南动车运用所','虹桥动车运用所','南翔动车运用所','杭州动车运用所','技术科'];

const standardArr=['班组长专用标准','各动车所（检修人员）专用标准','各动车所（随车机械师）专用标准','检修、调试、转向架车间（检修人员）专用标准'];
export default {
	standardArr,
	depNameArr,
	typeArr,
	teamArr,
	chLanguage,
	enLanguage,

	formatToArr: function(data) {
		var result = [];
		var i = 0;
		for(var key in data) {
			result.push({
				value: key
			});
			i++;
		}
		//console.log("formatData return:", JSON.stringify(result));
		return result;
	},

	getProjectArr: function(value) {
		var data = [];
		var back = [];
		if(value == "通用标准")
			data = formatData(project_common_data);
		else
			data = formatData(project_spe_banzuzhang);

		console.log('data', JSON.stringify(data));
		for(var i = 0; i < data.length; i++) 
		{

			console.log( i +':', JSON.stringify(data[i]));

		}	
		//this.$set(data, i, data[i]);
				
		return data;
	},

	getProjectRateData: function(value) {
		if(value == "通用标准")
			return project_common_data;
		else if(value == "班组长专用标准")
			return project_spe_banzuzhang;
		else if(value == "各动车所（检修人员）专用标准")
			return project_spe_jianxiurenyuan;
		else if(value == "各动车所（随车机械师）专用标准")
			return project_spe_suichejixieshi;
		else if(value == "检修、调试、转向架车间（检修人员）专用标准")
			return project_spe_jtzjianxiurenyuan;
		else if(value == "各动车所（值班所长）专用标准")
			return project_spe_zhibansuozhang;
		else if(value == "各动车所（调度员）专用标准")
			return project_spe_diaoduyuan;
		else if(value == "各动车所（质检员）专用标准")
			return project_spe_zhijianyuan;
		else if(value == "各动车所（温州异地存车点）专用标准")
			return project_spe_wenzhouyidicunchedian;
		else if(value == "各动车所（轮轴班组）专用标准")
			return project_spe_lunzhoubanzu;
		else if(value == "各动车所（设备班组）专用标准")
			return project_spe_shebeibanzu;
		else if(value == "各动车所（接触网工）专用标准")
			return project_spe_jiechuwanggong;
		else if(value == "检修、调试、转向架车间（质检员）专用标准")
			return project_spe_jtzzhijianyuan;
		else if(value == "物流车间(班组长)专用标准")
			return project_spe_wlcjbanzuzhang;
		else if(value == "物流车间（管库员）专用标准")
			return project_spe_wlcjguankuyuan;
		else if(value == "物流车间车间（材料工）专用标准")
			return project_spe_wlcjcailiaogong;
		else if(value == "维修、电力班组")
			return project_spe_weixiudianli;
		else if(value == "动车专用设备专修组")
			return project_zhuanyongshebei;
		else if(value == "计量组专用标准")
			return project_jiliangzu;
		else if(value == "TEDS设备保养组专用标准")
			return project_shebeiguanlizu;
		else if(value == "TEDS监控班组专用标准")
			return project_jiankongbanzu;
		else if(value == "工具管理员")
			return project_gongjuguanliyuan;
		else if(value == "压风司机")
			return project_yafengsiji;
		else if(value == "高级修调度组")
			return project_diaoduzu;
		else if(value == "驾驶班专用标准")
			return project_jiashiban;
		else if(value == "应急指挥中心（值班主任）专用标准")
			return project_yjzhibanzhuren;
		else if(value == "应急指挥中心（指挥人员）专用标准")
			return project_yjzhihuirenyuan;
	},

	getAddScoreData: function(value) {
		if(value == "通用标准")
			return addScore_common_data;
		else
			return addScore_spe_data;
	},

	getNoStarData: function(value) {
		if(value == "通用标准")
			return noStar_common_data;
		else
			return noStar_spe_data;
	},

	getNoStarArr: function(value) {
		return this.formatToArr(this.getNoStarData(value));
	},

	getAddScoreArr: function(value) {
		return this.formatToArr(this.getAddScoreData(value));
	},


}
