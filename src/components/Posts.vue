<template>
    <el-carousel :interval="4000" type="card" height="210px" style="margin-top: 20px;margin-left: 20px;margin-right: 20px;">
        <el-carousel-item v-for="(item,index) in items" :key="index" >
            <el-card body-style="padding: 5px" style="margin-bottom: 5px">
                <template #header>
                    <el-container>
                        <el-aside>
                            <div style="font-weight: bold">
                                <el-tag
                                        type="danger"
                                        effect="dark"
                                        size=""
                                >
                                    [置顶]
                                </el-tag>
                                vue返回上一页(后退)的几种方法与区别 - CSDN
                            </div>
                            <p style="font-weight: lighter;font-size: small">
                                 一、我们知道，如果是一个页面的某些部分切换变化，那不是网页之间的切换，而是子组件的切换；对于页面切换，我们需要知道的是整个页面的内容和路径都发生了改变。
                                在原生JS...</p>
                        </el-aside>
                        <el-main style="padding-top: 0;padding-bottom: 0">
                            <el-image src='https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' />
                        </el-main>
                    </el-container>
                </template>
            </el-card>
        </el-carousel-item>
    </el-carousel>
    <el-container>
        <el-header style="margin-bottom: 5px">
            <el-card>
                <el-row class="row-bg" justify="end">
                    <el-col :span="14"></el-col>
                    <el-col :span="6">
                        <el-input
                                size="large"
                                placeholder="树洞搜索"
                                prefix-icon="Search"
                        />
                    </el-col>
                    <el-col :span="1">
                        <el-button icon="plus" style="width: 40px;height: 40px" size="large" type="primary" circle @click="add">
                        </el-button>
                    </el-col>
                </el-row>
            </el-card>

        </el-header>
        <el-main>
            <el-card v-if="addStatus==true" style="padding-left: 10%;padding-right: 10%">
                <h3>编辑内容:</h3>
                <el-input v-model="formdata.title" placeholder="" style="margin-bottom: 5px;width: 60%;">
                    <template #prepend style="color: aqua">标题</template>
                </el-input>
                <el-input
                        v-model="formdata.text"
                        :autosize="{ minRows: 4, maxRows: 6 }"
                        type="textarea"
                        placeholder="正文"
                        style="margin-bottom: 5px;"
                />
                <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :http-request="uploadURL"
                        :before-upload="handleBeforeUpload"
                        :limit="9"
                >
                    <el-icon><Plus /></el-icon>
                </el-upload>
                <el-button type="primary" @click="log">发送</el-button>
            </el-card>
        </el-main>
    </el-container>

    <el-row :gutter="20" style="margin-left: 8%">
        <el-col :span="12">
            <el-container>
                <el-header>
                    <el-card body-style="padding: 5px" style="margin-bottom: 5px">
                        <template #header>
                            <el-container>
                                <el-aside>
                                    <div style="font-weight: bold">
                                        <el-tag
                                                type="danger"
                                                effect="dark"
                                                size=""
                                        >
                                            [置顶]
                                        </el-tag>
                                        vue返回上一页(后退)的几种方法与区别 - CSDN
                                    </div>
                                    <p style="font-weight: lighter;font-size: small">
                                         一、我们知道，如果是一个页面的某些部分切换变化，那不是网页之间的切换，而是子组件的切换；对于页面切换，我们需要知道的是整个页面的内容和路径都发生了改变。
                                        在原生JS...</p>
                                </el-aside>
                                <el-main style="padding-top: 0;padding-bottom: 0">
                                    <el-image src='https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' />
                                </el-main>
                            </el-container>
                        </template>
                        <div style="display: flex">
                            <div style="width: 8%">
                                <el-avatar
                                        size=""
                                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                />
                            </div>
                            <div style="width: 13%">
                                <div style="font-weight: lighter;font-size: small;margin-top: 15px">hoozge</div>
                            </div>
                            <div style="width: 25%">
                                <div style="font-size: small;font-weight: bold;margin-top: 15px"><el-icon><Calendar /></el-icon>2022-06-02 4:35</div>
                            </div>
                            <div style="width: 15%">
                                <div style="font-size: small;margin-top: 15px"><el-icon><View /></el-icon>150</div>
                            </div>
                            <div style="width: 15%">
                                <div style="font-size: small;margin-top: 9px"><el-button icon="ChatDotSquare" link>65</el-button></div>
                            </div>
                            <div style="width: 10%">
                                <div style="font-size: small;margin-top: 9px">
                                    <el-button icon="CaretTop" link>7</el-button>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <el-card body-style="padding: 5px" style="margin-bottom: 5px">
                        <template #header>
                            <el-container>
                                <el-aside>
                                    <div style="font-weight: bold">
                                        <el-tag
                                                type="danger"
                                                effect="dark"
                                                size=""
                                        >
                                            [置顶]
                                        </el-tag>
                                        vue返回上一页(后退)的几种方法与区别 - CSDN
                                    </div>
                                    <p style="font-weight: lighter;font-size: small">
                                         一、我们知道，如果是一个页面的某些部分切换变化，那不是网页之间的切换，而是子组件的切换；对于页面切换，我们需要知道的是整个页面的内容和路径都发生了改变。
                                        在原生JS...</p>
                                </el-aside>
                                <el-main style="padding-top: 0;padding-bottom: 0">
                                    <el-image src='https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' />
                                </el-main>
                            </el-container>
                        </template>
                        <div style="display: flex">
                            <div style="width: 8%">
                                <el-avatar
                                        size=""
                                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                />
                            </div>
                            <div style="width: 13%">
                                <div style="font-weight: lighter;font-size: small;margin-top: 15px">hoozge</div>
                            </div>
                            <div style="width: 25%">
                                <div style="font-size: small;font-weight: bold;margin-top: 15px"><el-icon><Calendar /></el-icon>2022-06-02 4:35</div>
                            </div>
                            <div style="width: 15%">
                                <div style="font-size: small;margin-top: 15px"><el-icon><View /></el-icon>150</div>
                            </div>
                            <div style="width: 15%">
                                <div style="font-size: small;margin-top: 9px"><el-button icon="ChatDotSquare" link>65</el-button></div>
                            </div>
                            <div style="width: 10%">
                                <div style="font-size: small;margin-top: 9px">
                                    <el-button icon="CaretTop" link>7</el-button>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <el-card body-style="padding: 5px" style="margin-bottom: 5px">
                        <template #header>
                            <el-container>
                                <el-aside>
                                    <div style="font-weight: bold">
                                        <el-tag
                                                type="danger"
                                                effect="dark"
                                                size=""
                                        >
                                            [置顶]
                                        </el-tag>
                                        vue返回上一页(后退)的几种方法与区别 - CSDN
                                    </div>
                                    <p style="font-weight: lighter;font-size: small">
                                         一、我们知道，如果是一个页面的某些部分切换变化，那不是网页之间的切换，而是子组件的切换；对于页面切换，我们需要知道的是整个页面的内容和路径都发生了改变。
                                        在原生JS...</p>
                                </el-aside>
                                <el-main style="padding-top: 0;padding-bottom: 0">
                                    <el-image src='https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' />
                                </el-main>
                            </el-container>
                        </template>
                        <div style="display: flex">
                            <div style="width: 8%">
                                <el-avatar
                                        size=""
                                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                />
                            </div>
                            <div style="width: 13%">
                                <div style="font-weight: lighter;font-size: small;margin-top: 15px">hoozge</div>
                            </div>
                            <div style="width: 25%">
                                <div style="font-size: small;font-weight: bold;margin-top: 15px"><el-icon><Calendar /></el-icon>2022-06-02 4:35</div>
                            </div>
                            <div style="width: 15%">
                                <div style="font-size: small;margin-top: 15px"><el-icon><View /></el-icon>150</div>
                            </div>
                            <div style="width: 15%">
                                <div style="font-size: small;margin-top: 9px"><el-button icon="ChatDotSquare" link>65</el-button></div>
                            </div>
                            <div style="width: 10%">
                                <div style="font-size: small;margin-top: 9px">
                                    <el-button icon="CaretTop" link>7</el-button>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-header>
            </el-container>
        </el-col>
        <el-col :span="9">
            <el-container>
                <el-header>
                    <el-card>
                        <template #header>
                            <div class="card-header">
                                热度榜
                            </div>
                        </template>
                        <div style="margin-bottom: 5px">
                            <el-icon color="green"><ArrowUp />1 </el-icon>
                            vue返回上一页(后退)的几种方法与区别...
                            <el-icon color="gold"><StarFilled /></el-icon>100
                        </div>
                        <div style="margin-bottom: 5px">
                            <el-icon color="red"><ArrowDown />2</el-icon>
                            vue返回上一页(后退)的几种方法与区别...
                            <el-icon color="gold"><StarFilled /></el-icon>10
                        </div>
                    </el-card>
                </el-header>
            </el-container>
        </el-col>
    </el-row>

</template>

<script>
    import {client,	getFileNameUUID} from '@/utils/alioss'

    export default {
        name: "Posts",
        methods: {
            add: function () {
                this.addStatus = !this.addStatus
            },
            log:function () {
                console.log(this.fileList)
            },
            // 上传文件之前的方法
            handleBeforeUpload(file) {
                const isJPEG = file.name.split('.')[1] === 'jpeg';
                const isJPG = file.name.split('.')[1] === 'jpg';
                const isPNG = file.name.split('.')[1] === 'png';
                const isWEBP = file.name.split('.')[1] === 'webp';
                const isGIF = file.name.split('.')[1] === 'gif';
                const isLt500K = file.size / 1024 / 1024 / 1024 / 1024 < 4;
                if (!isJPG && !isJPEG && !isPNG && !isWEBP && !isGIF) {
                    this.$message.error('上传图片只能是 JPEG/JPG/PNG 格式!');
                }
                if (!isLt500K) {
                    this.$message.error('单张图片大小不能超过 4mb!');
                }
                return (isJPEG || isJPG || isPNG || isWEBP || isGIF) && isLt500K;
            },
            uploadURL(file) {
                var fileName = 'banner' + `${Date.parse(new Date())}` + '.jpg'; //定义唯一的文件名
                //定义唯一的文件名，打印出来的uid其实就是时间戳
                client().multipartUpload(fileName, file.file).then(
                    result => {
                        //此处为给自己属性进行赋值，
                        //根据需要可能项目还需对自己的数据库进行保存
                        this.fileList.push({name:fileName,url: 'https://nbubbs-image.oss-cn-hangzhou.aliyuncs.com/' + fileName});
                    })
            }
        },
        data(){
            return{
                addStatus:false,
                items:[{title:"这是1",label:"美食"},
                    {title:"这是2",label:"美食"},
                    {title:"这是3",label:"美食"}],
                formdata:{
                    title:'',
                    text:''
                },
                fileList:[{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                },
                {
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                }]
            }
        }
    }
</script>

<style scoped>

</style>