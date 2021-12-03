import { db } from './firebase'

export default {
  getBoardsUser (userId = 1) {
    const query = db.ref('/boards').orderByChild('owner').equalTo(userId)
    return query.once('value')
  },

  postBoard (name, owner = 1) {
    const id = db.ref('/boards').push().key
    const board = {id, name, owner}

    return db.ref('/boards').child(id).set(board)
      .then(() => board)
  },

  getListsFromBoard (boardId) {
    const query = db.ref('/lists').orderByChild('board').equalTo(boardId)
    return query.once('value')
  },

  postList (board, name) {
    const id = db.ref('/lists').push().key
    const column = {id, name, board}

    return db.ref('/lists').child(id).set(column)
      .then(() => column)
  },

  getTaskFromList (listId) {
    const query = db.ref('/tasks').orderByChild('list').equalTo(listId)
    return query.once('value')
  },

  postTask (list, title) {
    const id = db.ref('/tasks').push().key
    const task = { id, list, title, completed: false }

    return db.ref('/tasks').child(id).set(task)
      .then(() => task)
  },

  deleteTask (taskId) {
    return db.ref('/tasks').child(taskId).remove()
  },

  completedTask (taskId) {
    const query = db.ref('/tasks').child(taskId).child('completed')
    return query.once('value')
      .then(snap => snap.val())
      .then(data => query.set(!data))
  }
}