<template>
  <div class="notes">

    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a New Note">
      <template #buttons>
        <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote">Add new note</button>
      </template>
    </AddEditNote>

    <pre>{{ newNote }}</pre>
    <!-- <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" v-model="newNote"
          placeholder="Add a new note" ref="newNoteRef"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote">Add new note</button>
        </div>

      </div> -->
      <!-- <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" @deleteClicked="deleteNote"></Note> -->
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note"></Note>
    <!-- </div> -->
  </div>
</template>

<script setup>

  import { ref } from "vue";
  import Note from "@/components/notes/Note.vue";
  import AddEditNote from "@/components/notes/AddEditNote.vue";
  import { useStoreNotes } from '@/stores/storeNotes';
  import { useWatchCharacters } from '@/use/useWatchCharacters';

  const storeNotes = useStoreNotes();

  const newNote = ref("");

  // const newNoteRef = ref(null);
  const addEditNoteRef = ref(null);

  const addNote = () => {

    storeNotes.addNote(newNote.value);

    newNote.value = "";
    addEditNoteRef.value.focusTextarea()
    // newNoteRef.value.focus();
  }

  // const deleteNote = idToDelete => {
  //   notes.value = notes.value.filter(note => {
  //     return note.id !== idToDelete
  //   })
  // }

  // watch(newNote, (newValue, oldValue) => {
  //   if (newValue.length === 100) {
  //     alert('Only 100 characters allowed');
  //   }
  // })
  useWatchCharacters(newNote);
</script>
