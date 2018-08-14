<template>
  <div style="padding:20px;" id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">用户管理</div>
      <table class="table table-bordered table-striped text-center">
        <thead>
        <tr>
          <th class="header" v-for="(header,index) in headList" :key="index">{{header.label}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(user,index) in users" :key="index">
          <td v-for="(header,index) in headList" :key="index">{{user[header.attr]}}</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="text"  id="name" v-model="user.name"/></td>
          <td><input type="text" id="age" v-model="user.age"/></td>
          <td><input type="text" id="school" v-model="user.school"/></td>
          <td><button @click="insert">insert</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      user: {'name': '', 'age': '', 'school': ''},
      headList: [
        {attr: 'name', label: '用户名'},
        {attr: 'age', label: '年龄'},
        {attr: 'school', label: '学校'},
        {attr: 'sex', label: '性别'}
      ],
      users: [
        {'name': '李磊2', 'age': '25', 'school': '洛阳理工', sex: '男'},
        {'name': '张成', 'age': '23', 'school': '桂林电子科技'},
        {'name': '炼心', 'age': '22', 'school': '江西电子科技'}
      ]
    }
  },
  methods: {
    insert: function () {
      this.users.push(this.user)
    },
    remove: function (index) {
      this.users.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  tr,th{
    text-align:center;
  }
</style>
