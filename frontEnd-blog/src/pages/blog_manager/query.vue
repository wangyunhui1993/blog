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
          <el-table-column prop="article_id" label="文章ID" width="70">
          </el-table-column>
          <el-table-column prop="article_name" label="文章名称">
          </el-table-column>
          <el-table-column prop="sort_article_name" label="文章分类" width="80">
          </el-table-column>
          <el-table-column prop="article_time" label="发表时间" width="140">
          </el-table-column>
          <el-table-column label="操作" width="130">
            <template slot-scope="scope">
              <el-button @click="handleDetail(scope.row)" type="text" size="small">查看</el-button>
              <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="handleDelete(scope.row)" type="text" size="small" style="color:#f56c6c">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row style="margin-top: 10px;">
          <el-pagination style="float: right;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="searchForm.pageNum" :page-sizes="pageSizes" :page-size="searchForm.pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </el-row>


        <el-dialog title="文章操作" :visible.sync="articleOpVis" fullscreen>
          <el-card class="box-card">
            <el-row>
              <el-form :inline="true" :model="submitForm" class="demo-form-inline">
                <el-form-item label="文档标题">
                  <el-input v-model="submitForm.article_name" style="width: 500px;"></el-input>
                </el-form-item>
                <el-row>
                  <el-form-item label="文档分类">
                    <el-select v-model="submitForm.sort_article_id" placeholder="请选择">
                      <el-option v-for="item in sortList" :key="item.sort_article_id" :label="item.sort_article_name"
                        :value="item.sort_article_id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="文档封面">
                    <el-upload class="avatar-uploader" :action="base_files" :show-file-list="false" :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </el-form-item>
                </el-row>
              </el-form>
            </el-row>
            <div class="quill-wrap">
              <quill-editor v-model="submitForm.article_content" ref="myQuillEditor" :options="editorOption">
              </quill-editor>
            </div>
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
    quillEditor,
    Quill
  } from 'vue-quill-editor'
  import {
    container,
    ImageExtend,
    QuillWatch
  } from 'quill-image-extend-module'
  import {
    getSortList,
    getArticleList,
    submitArticle,
    delArticle,
    detailArticle
  } from '../../js/api'
  const defaultSubmit = {
    sort_article_id: '',
  }
  Quill.register('modules/ImageExtend', ImageExtend)
  import {
    formatTime,
    deepClone
  } from '@/js/publicFun';

  export default {
    components: {
      quillEditor
    },
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
        // 富文本框参数设置
        editorOption: {
          modules: {
            ImageExtend: { // 如果不作设置，即{}  则依然开启复制粘贴功能且以base64插入
              name: 'img', // 图片参数名
              size: 3, // 可选参数 图片大小，单位为M，1M = 1024kb
              //							action: 'https://jsonplaceholder.typicode.com/posts/', // 服务器地址, 如果action为空，则采用base64插入图片
              action: this.base_files,
              // response 为一个函数用来获取服务器返回的具体图片地址
              // 例如服务器返回{code: 200; data:{ url: 'baidu.com'}}
              // 则 return res.data.url
              response: (res) => {
                console.log(res);
                return res.data.url
              },
              headers: (xhr) => {
                // xhr.setRequestHeader('myHeader','myValue')
                //								 xhr.setRequestHeader('Content-Type','multipart/form-data')
              }, // 可选参数 设置请求头部
              sizeError: () => {}, // 图片超过大小的回调
              start: () => {}, // 可选参数 自定义开始上传触发事件
              end: () => {}, // 可选参数 自定义上传结束触发的事件，无论成功或者失败
              error: () => {}, // 可选参数 上传失败触发的事件
              success: () => {}, // 可选参数  上传成功触发的事件
              change: (xhr, formData) => {
                // xhr.setRequestHeader('myHeader','myValue')
                // formData.append('token', 'myToken')
              } // 可选参数 每次选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
            },
            toolbar: { // 如果不上传图片到服务器，此处不必配置
              container: container, // container为工具栏，此次引入了全部工具栏，也可自行配置
              handlers: {
                'image': function() { // 劫持原来的图片点击按钮事件
                  QuillWatch.emit(this.quill.id)
                }
              }
            },
          }
        }
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
        this.getDetail(row.article_id);
      },
      getDetail(article_id) {
        let params = {
          article_id
        }
        detailArticle(params).then(res => {
          let {
            err_code,
            err_msg,
            total,
            data
          } = res;
          if (err_code === 0) {
            this.submitForm = Object.assign({}, data)
            this.imageUrl = data.cover;
            console.log('data', data)
          } else {
            this.$message({
              message: err_msg,
              type: 'error'
            });
          }
        });
      },
      //删除
      handleDelete(row) {
        this.$confirm('确定删除该条记录?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.getDel(row.article_id);
                }).catch((e) => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });
                });
      },
      getDel(article_id){
        let params = {
          article_id
        }
        delArticle(params).then(res => {
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
      getArticles() {
        let info = this.searchForm;
        console.log(info);
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
            this.total = total;
            console.log(list);
          }
        });
      },

      //发表
      onSubmit() {
        let info = this.submitForm;
        submitArticle(info).then(data => {
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
            this.getArticles();
            this.articleOpVis = false;
          }
        });
      },
      getSortList() {
        let info = {};
        getSortList(info).then(res => {
          let {
            err_code,
            err_msg,
            list
          } = res;
          if (err_code === 0) {
            this.sortList = list;
          } else {
            this.$message({
              message: err_msg,
              type: 'success'
            });
          }
        });
      },
      handleAvatarSuccess(res, file) {
        console.log(res, file)
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.imageUrl = res.data.url;
        this.submitForm.cover = res.data.url;
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 10;
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 10MB!');
        }
        // return isJPG && isLt2M;
        return isLt2M;
      },
    },
    mounted() {
      this.getArticles();
      this.getSortList();
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
