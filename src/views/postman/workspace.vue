<template>
    <div>
        <div class="header">
            <div class="pre">{{ protocol }}</div>
            <div class="path">{{ path }}</div>
        </div>
        <!-- 请求信息 -->
        <div class="content">
            <div class="editor">
                <el-input
                    placeholder="请输入内容"
                    v-model="path"
                    @input="handleInput"
                    class="input-with-select"
                >
                    <el-select
                        slot="prepend"
                        v-model="method"
                        placeholder="METHOD"
                    >
                        <el-option label="cc" value="3"></el-option>
                        <el-option
                            v-for="item in options"
                            :key="item"
                            :label="item"
                            :value="item"
                        >
                        </el-option>
                    </el-select>

                    <el-button slot="append" type="primary" @click="send"
                        >send</el-button
                    >
                </el-input>
            </div>
            <div class="section">
                <el-menu
                    :default-active="reqActiveIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="selectReqSection"
                >
                    <!-- @select="handleSelect" -->
                    <el-menu-item
                        v-for="item in section"
                        :index="item.index"
                        :key="item.index"
                    >
                        {{ item.text }}
                    </el-menu-item>
                </el-menu>

                <div class="section-params section-item" v-show="reqActiveIndex==='0'">
                    <el-table :data="params" border style="width: 100%">
                        <el-table-column prop="" label="" width="40">
                        </el-table-column>
                        <el-table-column prop="key" label="key" width="180">
                        </el-table-column>
                        <el-table-column prop="value" label="Value" width="180">
                        </el-table-column>
                    </el-table>
                </div>
                <did class="section-item section-headers"></did>
                <did class="section-item section-body"></did>
            </div>
        </div>
        <!-- 响应信息展示 -->
        <div class="result">
            <div class="result-header">
                <el-menu
                    :default-active="resActiveIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="selectResMenu"
                >
                    <!-- @select="handleSelect" -->
                    <el-menu-item
                        v-for="item in resHeader"
                        :index="item"
                        :key="item"
                        @select="selectResMenu"
                    >
                        {{ item }}
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="result-content">
                <json-viewer
                    v-show="resActiveIndex === 'Body'"
                    :value="resBody"
                ></json-viewer>
                <div
                    v-show="resActiveIndex === 'Headers'"
                    class="result-content-item"
                >
                    <el-table :data="resHeaderData" border style="width: 100%">
                        <el-table-column prop="" label="" width="40">
                        </el-table-column>
                        <el-table-column prop="key" label="Key" min-width="180">
                        </el-table-column>
                        <el-table-column prop="value" label="value" min-width="180">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import vueJsonViewer from 'vue-json-viewer';
import axios from "axios";
export default {
    name: "QingMengWorkspace",

    data() {
        return {
            // 协议
            protocol: "http",
            // 请求方法
            method: "Get",
            options: ["Get", "Post", "Put"],

            // url地址
            path: "http://localhost:3000/playlist/hot?id=9&cc=bb",
            // section部分选中的序号
            reqActiveIndex: "0",
            resActiveIndex: "Body",
            section: [
                {
                    index: "0",
                    text: "params",
                },
                {
                    index: "1",
                    text: "headers",
                },
                {
                    index: "2",
                    text: "body",
                },
            ],
            params: [
                
            ],
            resHeader: ["Body", "Headers", "Cookies"],
            resHeaderData: [],
            result: null,
            resBody:'',
            value: null,
        };
    },
    created() {
        // setInterval(() => {
        //     console.log("this.resActiveIndex:", this.reqActiveIndex);
        // }, 5000);
    },
    mounted() {},

    methods: {
        selectResMenu(e) {
            console.log("select event");
            console.log(e);
            this.resActiveIndex = e;
        },
        selectReqSection(e) {
            console.log(e);
            console.log("select event");
            this.reqActiveIndex = e;
        },
        handleInput() {
            console.log('start handleinput')
            // 将path解析为[[key,value],...]的形式
            let query = this.path
                .split("?")?.[1]
                .split("&")
                .map((item) => {
                    const b = item.split("=");
                    return {
                        key: b[0],
                        value: b[1],
                        selected: true,
                    };
                });
            this.params = query
            console.log(this.params)
        },
        send() {
            axios({
                url: this.path,
                method: this.method,
            }).then((res) => {
                console.log(res);
                this.result = res;
                this.resHeaderData = Object.entries(res.headers).map((item) => {
                    return {
                        key: item[0],
                        value: item[1],
                    };
                });
                console.log(res.data)
                console.log(this.resHeaderData)
                this.resBody = res.data
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.header {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    .pre{
        margin-right: 15px;
    }
}
.pre{
    font-size: large;
    font-weight: 700;
}
.section {
    height: 300px;
}
.result {
    border-top: 1px solid #fafafa;
}
</style>