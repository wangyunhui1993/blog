<template>
  <div style="height: 100%;" v-loading.lock="loading">
    <section style="height: 100%; overflow-y: scroll;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!-- <el-form :inline="true" :model="searchForm" class="demo-form-inline">
						<el-form-item label="通知类别">
							<el-select v-model="searchForm.notificationCategory" placeholder="通知类别">
								<el-option label="通知类别" value="shanghai"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit"  icon="el-icon-search">查询</el-button>
						</el-form-item>
						<el-row>
						<el-form-item style="float: right;">
							<el-button type="primary" @click="exportBtn"  icon="el-icon-download">导出</el-button>
						</el-form-item>
					</el-row>
					</el-form> -->
        </div>
        <el-table :data="tableData" border style="width: 100%" header-row-class-name="headerRowClass">
          <el-table-column label="序号" type="index" width="70">
          </el-table-column>
          <el-table-column prop="article_id" label="文章ID">
          </el-table-column>
          <el-table-column prop="article_name" label="文章名称">
          </el-table-column>
          <el-table-column prop="article_time" label="发表时间">
          </el-table-column>
           <el-table-column
      label="操作"
      width="130">
      <template slot-scope="scope">
        <el-button @click="handleDetail(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="handleEdit(scope.row)"  type="text" size="small">编辑</el-button>
        <el-button  @click="handleDelete(scope.row)" type="text" size="small" style="color:#f56c6c">删除</el-button>
      </template>
    </el-table-column>
        </el-table>
        <el-row style="margin-top: 10px;">
          <el-pagination style="float: right;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchForm.pageNum" :page-sizes="pageSizes" :page-size="searchForm.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </el-row>
      </el-card>
    </section>
  </div>
</template>
<script>
import { getArticleList } from "@/js/api"
import {formatTime} from '@/js/publicFun';
export default {
  data() {
    return {
      loading: false,
      searchForm: {
      	pageSize: 20,
        pageNum: 1
      },
      tableData: [],
      fileList: [],
      pageSizes: [15, 100, 200, 500],
      total: 0,
    }
  },
  methods: {
  	//详情
  	handleDetail(row){

  	},
  	//修改
  	handleEdit(row){

  	},
  	//删除
  	handleDelete(row){

  	},
    //查询按钮
    onSubmit() {

    },
    //导出按钮
    exportBtn() {

    },
    //每页显示的条数改变时
    handleSizeChange(val) {
      this.tableDataLoading = true;
      this.searchForm.size = val;
      this.changeSearch();
      this.getUserList();
    },
    //当前页
    handleCurrentChange(val) {
      this.tableDataLoading = true;
      this.searchForm.current = val;
      this.changeSearch();
      this.getUserList();
    },
    /*改变查询串*/
    changeSearch() {
      let queryInfo = Object.assign({},this.searchForm);
      this.$router.push({
        path: "/trainingNotice/query",
        query: {
          keywords: JSON.stringify(queryInfo)
        }
      });
    },
    //获取文章列表
    getArticles() {
      let info = this.searchForm;
      getArticleList(info).then(data => {
        let {
          err_code,
          err_msg,
          list,
          total
        } = data;
        if (err_code !== 0) {
           this.$message({
          message: err_msg,
          type: 'error'
        });
        } else {
          this.tableData = list;
          this.total=total;
          console.log(list);
        }
      });
    },
  },
  mounted(){
  	this.getArticles();
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
