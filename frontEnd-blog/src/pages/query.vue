<template>
	<div style="height: 100%;" v-loading.lock="loading">
		<section style="height: 100%; overflow-y: scroll;">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<el-form :inline="true" :model="searchForm" class="demo-form-inline">
						<el-form-item label="通知类别">
							<el-select v-model="searchForm.notificationCategory" placeholder="通知类别">
								<el-option label="通知类别" value="1"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="通知类型">
							<el-select v-model="searchForm.notificationType" placeholder="通知类型">
								<el-option label="通知类型" value="shanghai"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="状态查询">
							<el-select v-model="searchForm.statusQuery" placeholder="状态查询">
								<el-option label="状态查询" value="shanghai"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="下发部门">
							<el-select v-model="searchForm.issueDepartment" placeholder="下发部门">
								<el-option label="下发部门" value="shanghai"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="下发时间">
							<el-date-picker v-model="searchForm.deliveryTime" type="date" placeholder="下发时间">
							</el-date-picker>
						</el-form-item>
						<el-form-item label="要求反馈时间">
							<el-date-picker v-model="searchForm.requestFeedbackTime" type="date" placeholder="要求反馈时间">
							</el-date-picker>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit"  icon="el-icon-search">查询</el-button>
						</el-form-item>
						<el-row>
						<el-form-item style="float: right;">
							<el-button type="primary" @click="exportBtn"  icon="el-icon-download">导出</el-button>
						</el-form-item>
					</el-row>
					</el-form>
				</div>
				<el-table :data="tableData" border style="width: 100%" header-row-class-name="headerRowClass" @row-click="skipDetail">
					<el-table-column label="序号" type="index" width="70">
					</el-table-column>
					<el-table-column prop="notificationCategory" label="通知类别">
					</el-table-column>
					<el-table-column prop="notificationType" label="通知类型">
					</el-table-column>
					<el-table-column prop="noticeName" label="通知单名称">
					</el-table-column>
					<el-table-column prop="issueDepartment" label="下发部门">
					</el-table-column>
					<el-table-column prop="deliveryTime" label="下发时间">
					</el-table-column>
					<el-table-column prop="requestFeedbackTime" label="要求反馈时间">
					</el-table-column>
					<el-table-column prop="actualFeedbackTime" label="实际反馈时间">
					</el-table-column>
					<el-table-column prop="statusQuery" label="目前状态">
					</el-table-column>
				</el-table>
				<el-row style="margin-top: 10px;">
				<el-pagination style="float: right;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagesInfo.current" :page-sizes="pageSizes" :page-size="pagesInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</el-row>
			</el-card>
		</section>
	</div>
</template>

<script>
	export default {
		 props:{
        obj:{
            //类型 普通类型：字符串（String）、数字（Number）、布尔值（Boolean）、空（Null）引用类型：数组（Array）、对象（Object）
            /*其中，普通类型是可以在子组件中更改，不会影响其他兄弟子组件内同样调用的来自父组件的值，但是，引用类型的值，当在子组件中修改后，父组件的也会修改，那么后果就是，其他同样引用了改值的子组件内部的值也会跟着被修改。除非你有特殊的要求这么去做，否则最好不要这么做。*/
            type:Object, 
            require:true,
            default: {},  //默认值
            validator: function (value) {   //验证器
                return value;
            }
        },
         
    },
		data() {
			return {
				loading: false,
				searchForm: {
					notificationCategory:"1"
				},
				tableData: [
					{notificationCategory:"1",
					notificationType:"2",
					issueDepartment:"3",
					deliveryTime:"4",
					requestFeedbackTime:"5",
					noticeName:"6",
					actualFeedbackTime:"7",
					statusQuery:"8",
					}
				],
				fileList: [],
				pagesInfo:{
					current:1,
					size:15,
				},
				pageSizes: [15, 100, 200, 500],
				total:0,
			}
		},
		methods: {
			//查询按钮
			onSubmit(){
				
			},
			//导出按钮
			exportBtn(){
				
			},
			//每页显示的条数改变时
			handleSizeChange(val) {
				this.tableDataLoading=true;
				this.pagesInfo.size=val;
				this.changeSearch();
				this.getUserList();
			},
			//当前页
			handleCurrentChange(val) {
				this.tableDataLoading=true;
				this.pagesInfo.current=val;
				this.changeSearch();
				this.getUserList();
			},
			/*改变查询串*/
			changeSearch(){
				let queryInfo=Object.assign(this.searchForm,this.pagesInfo);
				this.$router.push({
					path:"/trainingNotice/query",
					query:{
						keywords:JSON.stringify(queryInfo)
					}
				});
			},
			skipDetail(row, event, column){
				this.$router.push({
					path:"/emergencyDrills/program",
					query:{
						
					}
				});
			},
		},
	}
</script>

<style>
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.headerRowClass {
		text-align: center;
	}
</style>