<template>
  <div>
    <input @change="changeFilterValue" />
    <el-pagination layout="prev, pager, next" @current-change="changePage" :page-size="pageSize" :total="dataLength" />
    <el-table :empty-text="'empty'" :data="filteredData"
      :default-sort="{prop: 'email', order: 'descending'}" style="width: 100%">
      <!-- <div slot="empty">whatever wanna render for empty data</div> -->
      <el-table-column type="index" sortable />
      <el-table-column class-name="filter-column" prop="email" label="email" sortable />
      <el-table-column prop="firstname" label="First Name" sortable />
      <el-table-column prop="lastname" label="Last Name" sortable />
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Table as ElTable,
    TableColumn as ElTableColumn,
    Pagination as ElPagination,
    Loading,
    Button as ElButton,
    FormItem as ElFormItem
  } from 'element-ui'
  import 'element-theme-chalk/lib/table.css'
  import 'element-theme-chalk/lib/pagination.css'
  import 'element-theme-chalk/lib/icon.css'

  export default {
    mounted () {
      fetch('http://localhost:3100/tabledata', {
        mode: 'cors'
      }).then((ret) => ret.json())
        .then((ret) => {
          Vue.set(this, 'tableData', ret.data)
        })
        .catch((err) => {
          console.error(err)
        })

      Loading.service({ fullscreen: true })
    },
    data () {
      return {
        tableData: [],
        currentPage: 1,
        filterValue: '',
        loading: true
      }
    },
    components: {
      'el-pagination': ElPagination,
      'el-table': ElTable,
      'el-table-column': ElTableColumn,
      'el-button': ElButton,
      'el-form-item': ElFormItem
    },
    methods: {
      changePage (value) {
        Vue.set(this, 'currentPage', value)
      },
      changeFilterValue (event) {
        Vue.set(this, 'filterValue', event.target.value)
      },
      handleEdit (index, row) {
        console.log(index, row, 'edit')
      },
      handleDelete (index, row) {
        console.log(index, row, 'delete')
      }
    },
    computed: {
      dataLength () {
        return this.tableData.length
      },
      filteredData () {
        const filteredData = this.filterValue !== ''
          ? this.tableData.filter((record) => {
            return Object.values(record).some((recordValue) => {
              return recordValue.includes(this.filterValue)
            })
          })
          : this.tableData
        return filteredData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      },
      pageSize () {
        return 20
      }
    }
  }
</script>

<style>
</style>
