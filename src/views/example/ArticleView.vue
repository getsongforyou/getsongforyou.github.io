<template>
    <div>
        <p class="text">
            Creating and editing pages cannot be cached by keep-alive because
            keep-alive include does not currently support caching based on
            routes, so it is currently cached based on component name. If you
            want to achieve a similar caching effect, you can use a browser
            caching scheme such as localStorage. Or do not use keep-alive
            include to cache all pages directly. See details Document
        </p>
        <div class="edit-head">
            <!-- 文章标题 -->
            <div class="title">
                <input type="text" class="title-input" required  v-model="formData.title">
                <span class="title-note">title</span>
            </div>
            <el-button type="primary" class="publish" @click="handlePublish()">publish</el-button>
        </div>
        <br />
        <div class="author-info">
            <!-- 作者，发布时间，简介 -->
            <div class="author">
                <span class="head">

                    author:
                </span>
                <input type="text" v-model="formData.author" placeholder="请输入内容" class="author-input">
            </div>
            <div class="date">
                <span class="head">

                    publish time:
                </span>
                <el-date-picker
                    v-model="formData.date"
                    type="datetime"
                    placeholder="选择日期时间"
                >
                </el-date-picker>
            </div>

            <div class="summary">
                <span class="head">

                    summary:
                </span>
                <input type="text" class="summary-input" v-model="formData.summary" >
            </div>
        </div>

        <!-- 富文本编辑器 -->
        <div class="richtxt">

            <tinymec  ref="tinymec"></tinymec>
        </div>
    </div>
</template>

<script>
import tinymec from "@/components/tinymec.vue";
import { postArticle } from "@/api/example.js";


const deafultForm = {
    title: 'test',
    author: 'test',
    date: new Date(),
    summary:'test',
    text: ''
}


export default {
    components: { tinymec },
    name: "QingMengArticleVIew",

    data() {
        return {
            publishInterval: 0,
            formData: {
                title: null,
                author: null,
                date: null,
                summary: null,
                text: ''
            }
        };
    },

    mounted() {
        Object.assign(this.formData, deafultForm)
    },

    methods: {
        handlePublish(){
            console.log('tinymec content:',this.$refs.tinymec.articleContent)
            this.formData.text = this.$refs.tinymec.articleContent
            this.formData.date =  new Date(this.formData.date).toISOString().slice(0, 19).replace('T', ' ');




            console.log('publish start')
            // 粗浅的表单验证
            console.log(this.formData)
            for(let i of Object.values(this.formData)){
                if(i==''){
                    return this.$message('有信息尚未填写！')
                }
            }


            // 防抖
            const now = new Date()
            if(now-this.publishInterval<10000){
                return this.$message('您的提交过于频繁，请稍后再试！')
            }
            this.publishInterval = new Date()
            
            postArticle(this.formData)
            .then(res=>{
                if(res.data.success){
                    this.$message({
                        message: '文章发布成功！',
                        type: 'success'
                    })
                }else{
                    this.$message({
                        message:res.data.message,
                        type: 'info'
                    })
                }
            })
            .catch(e=>{
                this.$message({
                    message: e,
                    type: 'warning'
                })
                throw e
            })
        }
    },
};
</script>

<style scoped>
.text{
    margin: 10px;
    margin-bottom: 60px;
    font-size: large;
    line-height: 30px;
    background: rgba(0, 0, 255, 0.2);
    padding: 10px;
    border-radius: 5px;
}
h3{
    padding: 5px 10px;
    font-size: 36px;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    color: #555;
}
.author-info{
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}
.author,.date,.summary{
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #999;
}
.head{
    margin-right: 10px;
    display: inline-block;
}
.summary-input,.author-input{
    height: 20px;
    padding: 3px 5px;
}
.summary-input{
    width: 500px;
    border:none;
    border-bottom: 1px solid #555;
}
.richtxt{
    padding: 10px;
}




.edit-head{
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    
}
.title{
    position: relative;
}
.title-note{
    position:absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    transition: all 400ms;
    padding: 5px 0px;
    font-size: 36px;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    color: #555;
}
.title-input{
    border: none;
    border-bottom: 1px solid #333;
    width: 350px;
    padding: 3px 5px;
    line-height: 30px;
    height: 30px;
    font-size: 24px;
    color: #555;
}
.title-input:focus+.title-note{
    top: -50%;
}
.title-input:valid+.title-note{
    top:-50%;
}
.publish{
    margin-right: 30px;
}

</style>