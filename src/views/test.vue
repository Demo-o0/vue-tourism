<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { id } from 'element-plus/es/locale';

const siderbarLsit = ref([
  {
    index:1,
    title:"home",
  },
  {
    index:2,
    title:"Book",
    
  },
  {
    index:3,
    title:"Explore",
  },
  {
    index:4,
    title:"message",
  },
  {
    index:5,
    title:"support",
  }
])




const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<template>
  <div class="sidebar_sticky">
    <div class="sidebar_box">
      <!-- logo -->
       <div class="logo_box">
          <div class="logo_container">
            <img style=" display: inline-block;transform: rotate(-180deg); width: 33px; height: 33px;" src="https://via.placeholder.com/33x33" />
            <p v-show="!isCollapse" style="font-size: 16px; font-weight: 600; line-height: 100%; color: rgba(0, 204, 203, 1);">Traveloo</p>
          </div>
          <div class="logo_line"></div>
       </div>
       <!-- 菜单切换 -->
       <div class="menu_switch">
        <el-switch  v-model="isCollapse" style="margin-bottom: 20px">
        </el-switch>
       </div>

    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="!isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
      <el-menu-item v-for="item in siderbarLsit" :key="item.index" :index=item.index>
        <el-icon><icon-menu /></el-icon>
        <template #title>{{item.title}}</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>

    <!-- 主题颜色改变按钮 -->
     <div class="them">

     </div>

     <!-- 登录退出键 -->
      <div class="Login_or_Logout">
            你好
      </div>
    </div>
  </div>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.sidebar_sticky{
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
}
.sidebar_box{
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logo_box{
  margin-top: 0.7em;
  margin-bottom: 1.2em;
  padding: 15px 2px;
  /* border-bottom: 1px solid var(--el-menu-border-color); */
}
.logo_container{
  /* width: 106px; */
	/* height: 33px; */
	padding-bottom: 4px;
	padding-left: 4px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
.logo_line{
  height: 4px;
  margin: 15px 16px 2px 16px;
  box-sizing: content-box;
  border-bottom: 1px solid var(--el-menu-border-color);
}
.menu_switch{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.7rem;
}

.el-menu-item::before {
    opacity: 0;
    width: 2px;
    height: 16px;
    background-color: green;
    content: '';
}
.el-menu-item:hover::before{
    opacity: 1;
}
.is-active::before{
  opacity: 1;
}

/* 主题改变 */
.them{
  height: 3.2rem;
  background-color: #bc5959;
  position: relative;
  align-content: flex-end;
}

/* 登录或退出键 */
.Login_or_Logout{
  text-align: center;
  height: 3.2rem;
  background-color: rgb(123, 255, 211);
}
</style>

