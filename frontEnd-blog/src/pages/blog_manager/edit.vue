<template>
  <div style="height: 100%;" v-loading.lock="loading">
    <section style="height: 100%; overflow-y: scroll;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-form :inline="true" :model="searchForm" class="demo-form-inline">
            <el-row>
              <el-form-item style="float: right;">
                <el-button type="primary" @click="addBtn" icon="el-icon-plus">添加</el-button>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
        <el-table :data="tableData" border style="width: 100%" header-row-class-name="headerRowClass">
          <el-table-column label="序号" type="index" width="70">
          </el-table-column>
          <el-table-column prop="sort_article_id" label="分类ID">
          </el-table-column>
          <el-table-column prop="sort_article_name" label="分类名称">
          </el-table-column>
          <el-table-column prop="sort" label="排序">
          </el-table-column>
          <el-table-column label="操作" width="130">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="handleDelete(scope.row)" type="text" size="small" style="color:#f56c6c">删除</el-button>
            </template>
          </el-table-column>
        </el-table>


        <el-dialog title="分类操作" :visible.sync="articleOpVis">
          <el-card class="box-card">
            <el-row>
              <el-form :inline="true" :model="submitForm" class="demo-form-inline">
                <el-form-item label="分类名称">
                  <el-input v-model="submitForm.sort_article_name" style="width: 500px;"></el-input>
                </el-form-item>
                <el-form-item label="排序">
                  <el-input v-model="submitForm.sort" style="width: 500px;"></el-input>
                </el-form-item>
              </el-form>
            </el-row>

            <el-row style="margin-top: 10px;">
              <el-button type="primary" @click="onSubmit">提 交</el-button>
              <el-button @click="articleOpVis = false">取 消</el-button>
            </el-row>
          </el-card>
        </el-dialog>
      </el-card>
    </section>
  </div>
</template>
<script>
  import {
    getSortList,
    submitSort,
    delSort,
  } from '../../js/api'
  const defaultSubmit = {
    sort_article_id: '',
  }
  import {
    formatTime,
    deepClone
  } from '@/js/publicFun';

  export default {
    data() {
      return {
        loading: false,
        articleOpVis: false,
        submitForm: deepClone(defaultSubmit),
        searchForm: {
          pageSize: 20,
          pageNum: 1
        },
        opType: "",
        tableData: [],
        fileList: [],
        pageSizes: [15, 100, 200, 500],
        total: 0,
        sortList: [],
        imageUrl: '',
        base: window.g.base,
        base_files: window.g.base_files,
      }
    },
    methods: {
      addBtn() {
        this.opType = 'add'
        this.submitForm = deepClone(defaultSubmit);
        this.imageUrl = '';
        this.articleOpVis = true;
      },
      //详情
      handleDetail(row) {

      },
      //修改
      handleEdit(row) {
        this.opType = 'edit'
        this.articleOpVis = true;
        this.submitForm = Object.assign({},row);
      },
      //删除
      handleDelete(row) {
        this.$confirm('确定删除该条记录?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.getDel(row.sort_article_id);
                }).catch((e) => {
                  console.log(e);
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });
                });
      },
      getDel(sort_article_id){
        let params = {
          sort_article_id
        }
        delSort(params).then(res => {
          let {
            err_code,
            err_msg,
              data
          } = res;
          if (err_code !== 0) {
            this.$message({
              message: err_msg,
              type: 'error'
            });
          } else {
            this.$message({
              message: err_msg,
              type: 'success'
            });
            this.getUserList();
          }
        });
      },
      //导出按钮
      exportBtn() {

      },
      //每页显示的条数改变时
      handleSizeChange(val) {
        this.tableDataLoading = true;
        this.searchForm.size = val;
        this.getUserList();
      },
      //当前页
      handleCurrentChange(val) {
        this.tableDataLoading = true;
        this.searchForm.current = val;
        this.getUserList();
      },
      //获取文章列表
      getList() {
        let info = this.searchForm;
        console.log(info);
        getSortList(info).then(data => {
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
            this.total = total;
            console.log(list);
          }
        });
      },

      //发表
      onSubmit() {
        let info = this.submitForm;
        submitSort(info).then(data => {
          let {
            err_code,
            err_msg
          } = data;
          if (err_code !== 0) {
            this.$message({
              message: err_msg,
              type: 'error'
            });

          } else {
            this.$message({
              message: err_msg,
              type: 'success'
            });
            this.getList();
            this.articleOpVis = false;
          }
        });
        console.log(this.submitForm.content);
      },
    },
    mounted() {
      this.getList();
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


  .ql-editor {
    min-height: 300px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: auto;
    min-height: 100px;
    display: block;
  }
</style>
