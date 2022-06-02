<template>
    <!--固钉-->
    <el-affix>
        <div style="height: 67px; border-bottom: 1px solid #cccccc; display: flex">
            <div style="width: 70px">
                <el-avatar
                        size="large"
                        :src="logo"
                        style="margin-right: 5px;margin-left: 5px"
                />
            </div>
            <!--导航菜单-->
            <div style="width: 320px">
                <el-menu
                        default-active="1"
                        mode="horizontal"
                        style="height: 69px"
                >
                    <el-menu-item index="1"> <router-link to="/">校园树洞</router-link> </el-menu-item>
                    <el-menu-item index="2"> <router-link to="/jumpmarkest">跳蚤市场</router-link> </el-menu-item>
                    <el-menu-item index="3">组队广场</el-menu-item>
                </el-menu>
            </div>
            <div style="flex: 1"></div>
            <!--后半部-->
            <div style="width: 400px">
                <el-container style="margin-right: 10px">
                    <!--搜索框-->
                    <el-input
                            size="large"
                            placeholder="全站搜索"
                            prefix-icon="Search"
                            style="margin-right: 10px"
                    />
                    <el-button style="width: 50px;height: 50px" size="large" type="primary" circle plain v-if="!loginStatus" @click="dialogFormVisible = true">
                        <h4>登录</h4>
                    </el-button>
                    <!--登录对话框-->
                    <el-dialog v-model="dialogFormVisible" title="登陆" width="35%">
                        <el-form
                                ref="ruleFormRef"
                                :model="ruleForm"
                                status-icon
                                :rules="rules"
                                label-width="120px"
                                label-position="left"
                        >
                            <el-form-item label="用户名" prop="username">
                                <el-input v-model="ruleForm.username" autocomplete="on" />
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input
                                        v-model="ruleForm.password"
                                        type="password"
                                        autocomplete="off"
                                />
                            </el-form-item>
                            <el-form-item>
                                没有账号？点此<el-link type="primary" icon="link"> <router-link to="/signin">注册</router-link></el-link>
                            </el-form-item>
                        </el-form>
                        <template #footer>
                          <span class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取消</el-button>
                            <el-button type="primary" @click="login">登录</el-button
                            >
                          </span>
                        </template>
                    </el-dialog>
                    <!--头像、用户名下拉框-->
                    <el-dropdown type="primary" v-if="loginStatus">
                        <span>
                            <el-container>
                                <!--头像-->
                                <el-avatar
                                        size="large"
                                        :src=avatarUrl
                                        style="margin-right: 10px"
                                />
                                <!--用户名-->
                                <h4 style="margin-top: 30px">{{username}}</h4>
                                <!--下拉框icon-->
                                <el-icon style="margin-top: 30px"><ArrowDown /></el-icon>
                            </el-container>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item @click="loginStatus=false">注销</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>

                </el-container>
            </div>

        </div>
    </el-affix>

</template>

<script>
    import logo from "../assets/2.jpg"
    export default {
        name: "Header",
        mounted() {
        },
        methods:{
          login:function () {
              if(this.ruleForm.password=="1234"){
                  this.dialogFormVisible = false;
                  this.loginStatus = true;
                  this.username = this.ruleForm.username;
              }
          }
        },
        data(){
            return{
                loginStatus:false,
                username:"hoozge",
                avatarUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                dialogFormVisible:false,
                formLabelWidth:'140px',
                logo:logo,
                ruleForm:{
                    username: '',
                    password: '',
                },
                rules:{
                    username:[
                        {required: true,message:"req",trigger:'blur'},
                        {min:3,max:10,message: "len",trigger: 'blur'}
                    ],
                    password: [
                        {required: true,message:"req",trigger:'blur'},
                        {min:3,max:5,message: "len",trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>