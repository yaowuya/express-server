(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4b0c"],{"90fe":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("avue-crud",{attrs:{data:e.data,option:e.option,page:e.page},on:{"update:page":function(t){e.page=t},"size-change":e.sizeChange,"current-change":e.currentChange,"search-change":e.searchChange}})],1)},s=[],i={data:function(){return{page:{pageSizes:[10,20,30,40],currentPage:1,total:0,pageSize:10},data:[{name:"张三",sex:"男"},{name:"李四",sex:"女"}],option:{emptyText:"暂无数据",columnBtn:!1,refreshBtn:!1,addBtn:!1,dialogDrag:!0,border:!0,stripe:!0,selection:!1,align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}}},created:function(){this.getList()},methods:{getList:function(){this.page.total=200,1===this.page.currentPage?this.data=[{name:"张三",sex:"男"}]:2===this.page.currentPage&&(this.data=[{name:"李四",sex:"女"}])},sizeChange:function(e){this.page.currentPage=1,this.page.pageSize=e,this.getList(),this.$message.success("行数"+e)},currentChange:function(e){this.page.currentPage=e,this.getList(),this.$message.success("页码"+e)},searchChange:function(e,t){t(),this.$message.success(JSON.stringify(e))}}},c=i,r=a("2877"),g=Object(r["a"])(c,n,s,!1,null,null,null);t["default"]=g.exports}}]);