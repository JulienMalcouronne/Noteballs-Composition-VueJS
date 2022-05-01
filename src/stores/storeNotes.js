import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure dignissimos quas doloribus ad explicabo ea placeat, corporis, voluptatem fugit sint ratione laborum commodi, necessitatibus eveniet nam. Architecto, maiores labore!'
        },
        {
          id: "id2",
          content: 'Shorter notes'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime();
      let id = currentDate.toString();
      let note = {
        id: id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => {
        return note.id !== idToDelete
      })
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => { return note.id === id })[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
});
