import * as types from './mutations-types.js'
import API from '@/api'

export default {
  // fetch via ajax de los paneles del usuario
  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST)

    API.getBoardsUser(user)
      .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },

  // fetch via ajax de listas asociadas a un panel
  fetchList ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST)

    API.getListsFromBoard(board)
      .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  // fetch via ajax de listas asociadas a un panel
  fetchTask ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST)

    API.getTaskFromList(list)
      .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
      .catch(error => commit(types.FETCH_TASKS_FAILURE, { error }))
  },

  // añadir nuevo panel
  addBoard ({ commit }, { name }) {
    API.postBoard(name)
      .then(board => commit(types.ADD_BOARD, { board }))
  },

  // añadir nueva columna
  addColumn ({ commit }, { board, name }) {
    API.postList(board, name)
      .then(column => commit(types.ADD_COLUMN, { column }))
  },

  // añadir nueva columna
  addTask ({ commit }, { list, title }) {
    API.postTask(list, title)
      .then((task) => commit(types.ADD_TASK, { task }))
  },

  // delete tarea
  deleteTask ({ commit }, { taskId }) {
    API.deleteTask(taskId)
      .then(() => commit(types.DELETE_TASK, { taskId }))
  },

  // marcar tarea como completada
  markAsCompleted ({ commit }, { task }) {
    API.deleteTask(task.id)
      .then(() => commit(types.MARK_AS_COMPLETED, { task }))
  }
}