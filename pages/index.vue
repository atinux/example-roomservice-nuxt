<template>
  <div>
    <h1>Open multiple browser windows!</h1>
    <p>{{ number }}</p>
    <button @click="pickNumber">Pick Random Number</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    }
  },
  async beforeMount() {
    this._room = this.$roomService.room('my-room')
    const { doc } = await this._room.init()

    this.number = doc.number || 0
    this._room.onUpdateDoc(newDoc => {
      console.log('on update')
      this.number = newDoc.number
    })
  },
  methods: {
    pickNumber() {
      this._room.publishDoc(prevDoc => {
        prevDoc.number = Math.floor(Math.random() * 100)
      })
    }
  }
}
</script>
