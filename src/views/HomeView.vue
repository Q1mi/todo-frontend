<template>
  <el-container>
    <el-header>Go课程小练习</el-header>
    <el-main>
      <el-row justify="center">
        <el-col :xs="20" :span="12" >
          <div class="grid-content">
            <el-divider>小清单</el-divider>
            <TodoList></TodoList>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>by 七米老师 liwenzhou.com</el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "HomeView",
  components: {
    TodoList
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #409eff;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #909399;
  display: block;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>