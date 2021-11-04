import * as types from './mutations-types'
import Vue from 'vue'

export default {
  // fecth de los paneles creados por el usuario
  [types.FETCH_BOARDS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
    state.fetchingData = false
    state.error = null
    state.boards = { ...boards }
  },

  [types.FETCH_BOARDS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // fecth de las listas creadas por el usuario
  [types.FETCH_LISTS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_LISTS_SUCCESS] (state, { lists }) {
    state.fetchingData = false
    state.error = null
    state.lists = { ...lists }
  },

  [types.FETCH_LISTS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // fecth de las tareas creadas por el usuario
  [types.FETCH_TASKS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_TASKS_SUCCESS] (state, { tasks }) {
    state.fetchingData = false
    state.error = null
    state.tasks = Object.assing({}, state.tasks, tasks)
  },

  [types.FETCH_TASKS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // crear un nuevo panel
  [types.ADD_BOARD] (state, { board }) {
    Vue.set(state.boards, board.id, board)
  },

  // crear una nueva lista de tareas
  [types.ADD_COLUMN] (state, { column }) {
    Vue.set(state.lists, column.id, column)
  },

  // Añadir uan nueva tarea a una lista
  [types.ADD_TASK] (state, { task }) {
    Vue.set(state.tasks, task.id, task)
  },

  [types.DELETE_TASK] (state, { taskId }) {
    state.tasks = Object.value(state.tasks)
      .filter(task => task.id !== taskId)
  },

  // Marca como completada una tarea
  [types.MARK_AS_COMPLETED] (state, { task }) {
    task.completed = !task.completed
  }
}