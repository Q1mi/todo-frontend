<template>
    <el-card class="box-card">
        <el-row :gutter="20">
            <el-col :span="16" :offset="2">
                <el-input 
                v-model="newTitle" 
                size="large"
                maxlength="50"
                placeholder="请输入待办事项..." 
                />
            </el-col>
            <el-col :span="6">
                <el-button size="large" type="primary" @click="handleAdd" circle>
                    <el-icon style="vertical-align: middle" ><Plus /></el-icon>
                </el-button>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-table :data="tableData" size="large" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column align="center" label="待办事项" prop="title"></el-table-column>
            <el-table-column align="right" label="操作">
                <template #default="scope">
                    <el-button type="success" v-show="!scope.row.status"
                        @click="handleEdit(scope.$index, scope.row)" circle>
                        <el-icon><Check /></el-icon>
                    </el-button>
                    <el-button type="warning" v-show="scope.row.status"
                        @click="handleEdit(scope.$index, scope.row)" circle>
                        <el-icon><RefreshLeft /></el-icon>
                    </el-button>
                    <el-button type="danger" @click="handleDelete(scope.$index, scope.row.id)"
                        circle>
                        <el-icon><Close /></el-icon>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>
  
<script>
export default {
    name: "TodoList",
    data() {
        return {
            tableData: [],
            newTitle: ""
        };
    },
    mounted() {
        this.axios
            .get("/v1/todos")
            .then(response => (this.tableData = response.data.data.data));
    },
    methods: {
        tableRowClassName({ row }) {
            if (row.status) {
                return "success-row";
            } else {
                return "";
            }
        },
        getTodoList() {
            this.axios
                .get("/v1/todos")
                .then(response => (this.tableData = response.data.data.data));
        },
        handleEdit(index, row) {
            let messageSuffix = row.status ? " 置为未完成" : " 置为已完成";
            this.axios
                .put("/v1/todo/" + row.id, {
                    status: !row.status
                })
                .then(() => {
                    this.tableData[index].status = !row.status;
                    this.$message({
                        showClose: true,
                        duration: 1500,
                        message: `<${row.title}> ${messageSuffix}`,
                        type: "success"
                    });
                });
        },
        handleDelete(index, id) {
            this.axios.delete("/v1/todo/" + id).then(() => {
                this.tableData.splice(index, 1);
                this.$message({
                    showClose: true,
                    duration: 1500,
                    message: "删除待办事项成功",
                    type: "success"
                });
            });
        },
        handleAdd() {
            if (this.newTitle != "") {
                this.axios
                    .post("/v1/todo", {
                        title: this.newTitle
                    })
                    .then(() => {
                        this.getTodoList();
                        this.$message({
                            showClose: true,
                            duration: 1500,
                            message: "添加待办事项成功",
                            type: "success"
                        });
                    });
                this.newTitle = "";
            } else {
                this.$message({
                    showClose: true,
                    duration: 1500,
                    message: "title不能为空哦",
                    type: "warning"
                });
            }
        }
    }
};
</script>
  
<style>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    text-decoration: line-through;
    background-color: #FAFAFA;
}
</style>