//订单来源
export const  orderSource=[
	{label:"全部来源",value:""},
	{label:"U+后台",value:"1"},
	{label:"PC官网",value:"2"},
	{label:"移动官网",value:"3"},
	{label:"iOS应用",value:"4"},
	{label:"安卓应用",value:"5"},
	{label:"导入订单",value:"6"},
	{label:"我下的单",value:"-1"},
	{label:"永沁福利",value:"-100000"}	
	]
//订单状态
export const  orderState=[
	{label:"全部状态(不筛选)",value:""},
	{label:"未确认",value:0},
	{label:"已确认",value:1},
	{label:"已取消",value:2},
	{label:"已备货",value:10},
	{label:"发货中",value:12},
	{label:"送达",value:13},
	{label:"全退",value:14},
	{label:"部分退货",value:15},
	{label:"财务确认收款",value:16},  /*已完成*/
	{label:"退货待入库",value:17},
	{label:"拼团中",value:20},
	{label:"退款审核中",value:101},
	{label:"库房审核中",value:112}
	]
//付款方式
export const  payMethods=[
	{label:"全部收款方式",value:""},
	{label:"现金",value:"现金"},
	{label:"刷卡",value:"刷卡"},
	{label:"员工卡",value:"员工卡"},
	{label:"欠款",value:"欠款"},
	{label:"转账",value:"转账"},
	{label:"其他",value:"其他"},
	{label:"已付款",value:"已付款"}
	]





//订单查询页面->查询条件
export const  orderSearchConditions=[
	{label:"不筛选",value:""},
	{label:"按购货人姓名",value:"realname"},
	{label:"按购货人手机号",value:"userMobile"},
	{label:"按订单号",value:"orderSn"},
	{label:"按地址",value:"address"},
	{label:"按收货人手机号",value:"mobile"},
	{label:"按收货人",value:"consignee"},
	{label:"按配送人",value:"deliveryPersonnel"},
	{label:"按群组名",value:"group"},
	{label:"按包含商品",value:"productName"},
	{label:"按销售负责人",value:"salesperson"},
	{label:"按交易流水号",value:"tradeSn"},
	{label:"按发票信息",value:"inv"}
	]
//订单查询页面->日期条件
export const  dateConditions=[
	{label:"不筛选日期",value:""},
	{label:"按配送日期",value:"deliveryTime"},
	{label:"按送达日期",value:"arriveTime"},
	{label:"按收款日期",value:"financeTime"}
	]




//子订单配货页面->订单筛选
export const Sub_ordersSelect=[
	{label:"所有订单",value:"all"},
	{label:"最近两天订单",value:"now"},
	{label:"需称重订单",value:"bew"}
	]
//子订单配货页面->查询条件
export const Sub_ordersPeihuoSearchConditions=[
	{label:"不选择",value:""},
	{label:"按订单号",value:"orderSn"},
	{label:"按手机号",value:"mobile"},
	{label:"按购货人姓名",value:"realname"},   //...
	{label:"按群组名",value:"group"},
	{label:"按地址",value:"address"},
	{label:"按包含商品",value:"productName"}
	]
//子订单配货页面->日期
export const Sub_ordersDate=[
	{label:"不选择",value:""},
	{label:"按配送日期",value:"deliveryTime"}
	]



//地址线路管理页面->查询条件
export const  AddressLineManagementSearchConditions=[
	{label:"不筛选",value:""},
	{label:"地址包含",value:""},
	{label:"用户或收货人",value:""},
	{label:"手机号或收货人电话",value:""}
	]







//子订单查询发货->查询条件
export const  Sub_ordersFahuoSearchConditions=[
	{label:"不筛选",value:""},
	{label:"按订单号",value:"orderSn"},
	{label:"按手机号",value:"mobile"},
	{label:"按收货人",value:"consignee"},
	{label:"按群组名",value:"group"},
	{label:"按地址",value:"address"},
	{label:"按包含商品",value:"productName"}
	]





//子订单快递单录入->查询条件
export const  Sub_ordersKDSearchConditions=[
	{label:"不筛选",value:""},
	{label:"按姓名",value:"realname"},
	{label:"按订单号",value:"orderSn"},
	{label:"按手机号",value:"mobile"},
	{label:"按收货人",value:"consignee"},
	{label:"按群组名",value:"group"},
	{label:"按地址",value:"address"},
	{label:"按包含商品",value:"productName"}
	]