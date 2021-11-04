<template>
  <div>
    <h3>Mis Paneles</h3>
    <div class="boards-collection"></div>
      <span v-if="fechingData">Cargando...</span>
      <input type="text"
      placeholder="Añade un nuevo panel"
      v-model="boardName"
      @keyup.enter="add()"
      />
      <board-card
      v-for="(board,index) in boards"
      :key="index"
      :name="board.name"
      :id="board.id"></board-card>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BoardCard from '@/components/BoardCard'
export default {
  name: 'home-view',
  components: {BoardCard},
  data () {
    return {
      boardName: ''
    }
  },
  computed: {
    ...mapState([ 'boards', 'fechingData' ])
  },
  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    add () {
      this.addBoard({ name: this.boardName })
      this.boardName = ''
    }
  },
  created () {
    this.fetchBoards({ user: 1 })
  }
}

</script>

<style lang="css" scoped>
  h3 {
  text-align: center;
  margin: 1.5em;
  }

  .boards-collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: #546e7a;
    border: 2px solid #546e7a;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0;
    transition: all 600ms ease;
    width: 80%;
  }

  input:focus {
    background-color: white;
    color:#546e7a;
  }

  input:active {
  background-color: white;
  color: #546e7a;
  }

  input::placeholder {
  color: white;
  }

</style>