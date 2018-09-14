<template>
  <div style="height: 100%;" v-loading.lock="loading">
    <section style="height: 100%; overflow-y: scroll;">
      <el-card class="box-card">
        <el-row>
          <el-form :inline="true" :model="submitForm" class="demo-form-inline">
            <el-form-item label="文档标题">
              <el-input v-model="submitForm.article_name"></el-input>
            </el-form-item>
          </el-form>
        </el-row>
        <div class="quill-wrap">
          <quill-editor v-model="submitForm.article_content" ref="myQuillEditor" :options="editorOption">
          </quill-editor>
        </div>
        <el-row style="margin-top: 10px;">
          <el-button type="primary" @click="onSubmit">发表</el-button>
        </el-row>
      </el-card>
    </section>
  </div>
</template>
<script>
import { quillEditor, Quill } from 'vue-quill-editor'
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
import { test, blogCreate } from '../../js/api'
Quill.register('modules/ImageExtend', ImageExtend)
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      loading: false,
      searchForm: {},
      submitForm: {},
      fileList: [],
      // 富文本框参数设置
      editorOption: {
        modules: {
          ImageExtend: { // 如果不作设置，即{}  则依然开启复制粘贴功能且以base64插入 
            name: 'img', // 图片参数名
            size: 3, // 可选参数 图片大小，单位为M，1M = 1024kb
            //							action: 'https://jsonplaceholder.typicode.com/posts/', // 服务器地址, 如果action为空，则采用base64插入图片
            action: 'http://localhost:3000/uploadFiles',
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
          }
        }
      }
    }
  },
  methods: {
    //发表
    onSubmit() {
      let info = this.submitForm;
      blogCreate(info).then(data => {
        let { err_code, err_msg } = data;
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
        }
      });
      console.log(this.submitForm.content);
    },

  },
  mounted() {
    // let info={
    // 	user_name:"123",
    // 	user_pwd:"456"
    // }
    // test(info).then(data => {
    // 		console.log(data);
    // });
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

</style>
