<template>
    <div ref="container" class="container">
        <header class="header">
            <el-button
                size="small"
                type="primary"
                @click="initializeTable"
                class="refresh"
                >刷新</el-button
            >
            <input
                type="search"
                class="search"
                v-model="keyword"
                placeholder="search by title"
            />
            <el-button size="small" type="primary" @click="filterData"
                >筛选</el-button
            >
            <el-button size="small" type="primary" @click="clearFilter"
                >清除</el-button
            >
        </header>

        <el-table
            :data="currentData"
            stripe   
            border
            style="width: 100%"
        >
            <el-table-column prop="id" label="id" width="80"> </el-table-column>
            <el-table-column
                class-name="column-title"
                prop="title"
                label="标题"
                width="180"
            >
            </el-table-column>
            <el-table-column prop="author" label="作者"> </el-table-column>
            <el-table-column prop="summary" label="简介"> </el-table-column>
            <el-table-column prop="date" label="发布时间"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button
                        @click="handleClick(scope.row)"
                        type="text"
                        size="small"
                        >查看</el-button
                    >
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[20, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            class= 'pagination'
        >
        </el-pagination>
    </div>
</template>

<script>
import _ from "lodash";
import { getArticleList } from "@/api/example";

export default {
    name: "QingMengPagination",

    data() {
        return {
            tableData: [], //显示的数据
            copyData: [], //筛选备份数据
            intervalTime: 0,
            keyword: "",
            size: 20,//每页的条目数
            currentPage: 1
        };
    },

    created() {
        this.initializeTable();
    },
    computed: {
        currentData: function () {
            return this.copyData.slice(this.currentPage*20-20,this.currentPage*20)
        },
        total: function () {
            return this.copyData.length
        }
    },

    mounted() {},

    methods: {
        handleClickCheck(){
            console.log('查看')
        },
        handleSizeChange(val){
            this.size = val
        },
        handleCurrentChange(val){
            console.log('tabeldata length' , this.total)
            this.currentPage = val
            this.$refs.container.scrollIntoView(true)
        },
        filterData() {
            if (this.keyword == "") return;
            this.tableData = this.tableData.filter((item) => {
                return item.title.toLowerCase().includes(this.keyword);
            });
            console.log(this.tableData);
        },
        clearFilter() {
            this.tableData = _.cloneDeep(this.copyData);
            this.keyword = "";
        },
        refreshTable() {
            const now = new Date();

            if (now - this.intervalTime < 5000) {
                return this.$message("刷新过于频繁，请稍后再试！");
            }
            this.intervalTime = now;
            this.initializeTable();
        },
        initializeTable() {
            getArticleList()
                .then((res) => {
                    console.log("article list", res);
                    if (res.data.success) {
                        this.tableData = res.data.tableData;
                        this.tableData.forEach((item) => {
                            item.date = new Date(item.date)
                                .toISOString()
                                .slice(0, 19)
                                .replace("T", " ");
                        });
                        this.copyData = _.cloneDeep(this.tableData);
                        console.log(this.tableData);
                    } else {
                        this.$message(res.data.message);
                    }
                })
                .catch((e) => {
                    this.$message({
                        message: e,
                        type: "error",
                    });
                    throw e;
                });
        },
    },
};
</script>

<style  scoped>
.container{
    transition: all 300ms;
    /* scroll-behavior: smooth; */
}
.header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.refresh {
    margin-right: auto;
}

.search {
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin-right: 20px;
    border-radius: 5px;
    padding: 3px 5px;
    width: 250px;
    font-size: 16px;
    color: #555;
}
.pagination{
    margin-top: 50px;
    margin-bottom: 30px;
}
</style>
