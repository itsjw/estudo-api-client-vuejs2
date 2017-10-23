<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <div class="field">
          <label>Pesquisar</label>
          <div class="control">
            <input type="text" class="input" v-model="searchId" @change="getTask">
          </div>
        </div>
      </div>
      <div class="box" v-if="resultTask">
        <h2 class="title">Detalhes da tarefa</h2>
        <div class="columns">
          <div class="column is-2">
            <div class="field">
              <label>Id</label>
              <div class="control">
                <input type="text" class="input" v-model="resultTask.id" readonly tabindex="-1">
              </div>
            </div>
          </div>
          <div class="column is-10">
            <div class="field">
              <label>Título</label>
              <div class="control">
                <input type="text" class="input" v-model="resultTask.title" readonly tabindex="-1">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box" v-if="!resultTask">
        <h2 class="title">Nova tarefa</h2>
          <div class="field">
            <label>Título</label>
            <div class="control">
              <input type="text" class="input" v-model="newTask.title">
            </div>
          </div>
          <div class="field">
            <button class="button is-primary" @click="saveTask">Incluir</button>
          </div>
        </div>
      </div>
      <table v-if="tasks && tasks.length && !resultTask" class="table is-striped is-narrow is-hoverable is-fullwidth" style="margin-top: 30px;">
        <thead class="thead">
          <tr class="tr">
            <th>Id</th>
            <th>Title</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="task of tasks" class="tr">
            <td class="td">{{task.id}}</td>
            <td class="td">{{task.title}}</td>
            <td class="td"><i class="fa fa-trash" @click="deleteTask(task.id)" style="cursor: pointer;"></i></td>
          </tr>
        </tbody>
      </table>
      <p style="text-align: center;">{{message}}</p>
    </div>
  </section>
</template>

<style>
  @import './assets/bulma/css/bulma.css';
</style>

<script>
import {HTTP} from './http-common'

export default {
  data () {
    return {
      tasks: [],
      errors: [],
      message: '',
      searchId: '',
      resultTask: null,
      newTask: {
        title: ''
      }
    }
  },
  methods: {
    deleteTask: function (id) {
      HTTP.delete(`api/v1/tasks/` + id)
      .then(response => {
        this.message = response.data.message
        this.fetchAlltasks()
      })
      .catch(e => {
        this.errors.push(e)
        console.log(e)
      })
    },
    getTask: function () {
      if (this.searchId === '') {
        this.resultTask = null
        return
      }

      HTTP.get(`api/v1/tasks/` + this.searchId)
      .then(response => {
        this.resultTask = response.data
      })
      .catch(e => {
        this.errors.push(e)
        console.log(e)
      })
    },
    saveTask: function () {
      if (this.newTask.title === '') {
        alert('Preencha o título.')
        return
      }

      HTTP.post(`api/v1/tasks`, {title: this.newTask.title})
      .then(response => {
        this.fetchAlltasks()
        this.newTask.title = ''
      })
      .catch(e => {
        this.errors.push(e)
        console.log(e)
      })
    },
    fetchAlltasks: function () {
      HTTP.get(`api/v1/tasks`)
        .then(response => {
          this.tasks = response.data
        })
        .catch(e => {
          this.errors.push(e)
          console.log(e)
        })
    }
  },
  created () {
    this.fetchAlltasks()
  }
}
</script>
