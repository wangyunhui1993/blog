<template>
	<div style="height: 100%;" v-loading.lock="loading">
		<section style="height: 100%; overflow-y: scroll;">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<el-form :inline="true" :model="searchForm" class="demo-form-inline">
						<el-form-item label="通知类别">
							<el-select v-model="searchForm.notificationCategory" placeholder="通知类别">
								<el-option label="通知类别" value="shanghai"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="通知类型">
							<el-select v-model="searchForm.notificationType" placeholder="通知类型">
								<el-option label="通知类型" value="shanghai"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="下发部门">
							<el-select v-model="searchForm.issueDepartment" placeholder="状态查询">
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
						
					</el-form>
				</div>
				<el-row>
						
						
					</el-row>
				<el-row style="margin-top: 10px;">
					<el-button type="primary" icon="el-icon-download">下发</el-button>
					<el-button type="danger"  @click="backBtn">退回</el-button>
				</el-row>
			</el-card>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				searchForm: {},
				submitForm:{},
			}
		},
		methods: {
			//提交审核
			onSubmit() {
				console.log(this.content);
			},
			//上传文件按钮
			importBtn(){
				
			},
			//退回
			backBtn(){
				
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
	.ql-editor{
		min-height: 300px;
	}
</style>