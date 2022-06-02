<template>
    <el-container>
        <el-header style="margin-bottom: 5px;margin-top: 15px">
            <el-card>
                <el-row class="row-bg" justify="end">
                    <el-col :span="14"></el-col>
                    <el-col :span="6">
                        <el-input
                                size="large"
                                placeholder="市场搜索"
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
                <el-input  placeholder="" style="margin-bottom: 5px;width: 60%;">
                    <template #prepend style="color: aqua">标题</template>
                </el-input>
                <el-input
                        :autosize="{ minRows: 4, maxRows: 6 }"
                        type="textarea"
                        placeholder="正文"
                        style="margin-bottom: 5px;"
                />
                <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"


                >
                    <el-icon><Plus /></el-icon>
                </el-upload>
                <el-button type="primary">发送</el-button>
            </el-card>
        </el-main>
    </el-container>

    <el-container>
        <el-card :body-style="{ padding: '0px' }" style="width: 250px;margin: 20px">
            <el-carousel trigger="click" height="240px" style="opacity: 60%">
                <el-carousel-item label="已售">
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            style="opacity: 10%"
                    />
                </el-carousel-item>
            </el-carousel>

            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">2022-6-2</time>
                    <el-button text class="button">Operating</el-button>
                </div>
            </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" style="width: 250px;margin: 20px">
            <el-carousel trigger="click" height="240px">
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
            </el-carousel>

            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">2022-6-2</time>
                    <el-button text class="button">Operating</el-button>
                </div>
            </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" style="width: 250px;margin: 20px">
            <el-carousel trigger="click" height="240px">
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
            </el-carousel>

            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">2022-6-2</time>
                    <el-button text class="button">Operating</el-button>
                </div>
            </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" style="width: 250px;margin: 20px">
            <el-carousel trigger="click" height="240px">
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
                <el-carousel-item>
                    <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    />
                </el-carousel-item>
            </el-carousel>

            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">2022-6-2</time>
                    <el-button text class="button">Operating</el-button>
                </div>
            </div>
        </el-card>

    </el-container>


</template>

<script>
    export default {
        name: "JumpMarkest",
        methods:{
            add:function () {
                this.addStatus = !this.addStatus
            }
        },
        data(){
            return{
                addStatus:false
            }
        }
    }
</script>

<style scoped>

</style>