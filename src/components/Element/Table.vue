<template>
  <div>
    <div class="actionArea">
      <input ref="filter" @change="changeFilterValue" />
      <button @click="fireRemoveRows">Delete Rows</button>
    </div>
    
    <el-pagination layout="prev, pager, next" @current-change="changePage" :page-size="pageSize" :total="dataLength" />
    <el-table :empty-text="'empty'" :data="filteredData" @selection-change="handleSelectionChange" @header-click="sortTableRow"
      v-loading="loading" :default-sort="{prop: 'email', order: 'descending'}" style="width: 100%">
      <!-- <div slot="empty">whatever wanna render for empty data</div> -->
      <el-table-column type="index" sortable />
      <el-table-column type="selection" width="55" />
      <el-table-column prop="email" label="email" class-name="filter-column" sortable />
      <el-table-column prop="firstname" label="First Name" sortable />
      <el-table-column prop="lastname" label="Last Name" class-name="forMobile" sortable />
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="removeTargetRows([scope.row])">Delete</el-button>
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
  import 'element-theme-chalk/lib/loading.css'

  Vue.use(Loading.directive)

  export default {
    mounted () {
      fetch('http://localhost:3100/tabledata', {
        mode: 'cors'
      }).then((ret) => ret.json())
        .then((ret) => {
          Vue.set(this, 'tableData', ret.data)
          // actually doen't need to setTimeout. this setTimeout exists just to show loading
          setTimeout(() => {
            Vue.set(this, 'loading', false)
          }, 1000)
        })
        .catch((err) => {
          console.error(err)
        })

      setInterval(() => {
        Vue.set(this, 'filterValue', this.$refs.filter.value)
      }, 200)
    },
    data () {
      return {
        tableData: [],
        currentPage: 1,
        filterValue: '',
        loading: true,
        deleteTargetRows: []
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
      fireRemoveRows () {
        this.removeTargetRows(this.deleteTargetRows)
        Vue.set(this, 'deleteTargetRows', [])
      },
      handleEdit (index, row) {
        console.log(index, row, 'edit')
      },
      handleSelectionChange (targetRows) {
        Vue.set(this, 'deleteTargetRows', targetRows)
      },
      removeTargetRows (targetRows) {
        const newData = targetRows.reduce((stack, current) => {
          return stack.filter((targetData) => {
            return targetData.id !== current.id
          })
        }, this.tableData)
        Vue.set(this, 'tableData', newData)
      },
      sortTableRow (columnData) {
        console.log('you can get columnData to sort', columnData)
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
  .actionArea {
    display: flex;
  }

  @media (max-width: 767px) {
    .forMobile {
      display: none;
    }
  }
</style>
