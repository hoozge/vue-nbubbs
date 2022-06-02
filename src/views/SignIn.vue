<template>
        <el-row justify="center">
            <el-col :span="2"/>
            <el-col :span="12">
                <el-card style="margin-top: 5px">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><HomeFilled /></el-icon>加入社区</span>
                        </div>
                    </template>
                    <el-form
                            ref="ruleFormRef"
                            :model="siginForm"
                            status-icon
                            :rules="rules"
                            label-width="120px"
                            label-position="left"
                            style="width: 400px"
                    >
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="siginForm.username" autocomplete="on" />
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input
                                    v-model="siginForm.password"
                                    type="password"
                                    autocomplete="off"
                            />
                        </el-form-item>
                        <el-form-item label="确认密码" prop="password">
                            <el-input
                                    v-model="siginForm.confirm"
                                    type="password"
                                    autocomplete="off"
                            />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="signin">注册</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :span="2"/>
        </el-row>
</template>

<script>
    export default {
        name: "SignIn",
        data(){
            return{
                siginForm:{
                    username: '',
                    password: '',
                    confirm: ''
                },
                rules:{
                    username:[
                        {required: true,message:"req",trigger:'blur'},
                        {min:3,max:10,message: "len",trigger: 'blur'}
                    ],
                    password: [
                        {required: true,message:"req",trigger:'blur'},
                        {min:3,max:5,message: "len",trigger: 'blur'}
                    ],
                    confirm: [
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