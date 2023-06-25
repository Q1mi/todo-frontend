<template>
  <el-container>
    <el-header>kratos框架小练习</el-header>
    <el-main>
      <el-row justify="center">
        <el-col :span="24" >
          <el-skeleton :rows="5" animated />
          <div class="grid-content">
            <el-divider>
              <h1>小清单</h1>
            </el-divider>
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