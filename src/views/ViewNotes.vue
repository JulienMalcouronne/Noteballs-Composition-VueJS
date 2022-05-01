<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" v-model="newNote"
          placeholder="Add a new note" ref="newNoteRef"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success" @click.prevent="addNote" :disabled="!newNote">Add new note</button>
        </div>

      </div>
      <Note v-for="note in notes" :key="note.id" :note="note" @deleteClicked="deleteNote"></Note>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import Note from "@/components/notes/Note.vue";

const newNote = ref("");

const newNoteRef = ref(null);

const notes = ref([
    {
      id: "id1",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure dignissimos quas doloribus ad explicabo ea placeat, corporis, voluptatem fugit sint ratione laborum commodi, necessitatibus eveniet nam. Architecto, maiores labore!'
    },
    {
      id: "id2",
      content: 'Shorter notes'
    }
  ]);
 const addNote = () => {
   let currentDate = new Date().getTime();
   let id = currentDate.toString();
   let note = {
     id: id,
     content: newNote.value
   }
   notes.value.unshift(note);

   newNote.value = "";
   newNoteRef.value.focus();
 }

 const deleteNote = idToDelete => {
   notes.value = notes.value.filter(note => {
     return note.id !== idToDelete
   })
 }
</script>
