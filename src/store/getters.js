export default {

  getListsByBoard: (state) => (boardId) => {
    return Object.value(state.lists)
      .filter(list => list.board === boardId)
  },

  getTasksFromList: (state) => (listId) => {
    return Object.value(state.tasks)
      .filter(task => task.list === listId)
  }
}