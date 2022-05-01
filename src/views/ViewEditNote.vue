<template>
  <div class="edit-note">
    <h1>Edit Note with an id of: {{ $route.params.id }}</h1>

    <AddEditNote v-model="noteContent" label="Edit Note" ref="addEditNoteRef" bgColor="link" placeholder="Edit Note">
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">Cancel</button>
        <button @click="handleSaveClick" class="button is-link has-background-link" :disabled="!noteContent">Save Note</button>
      </template>
    </AddEditNote>
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
      </div>
    </div> -->
  </div>
</template>


<script setup>

  import AddEditNote from '../components/notes/AddEditNote.vue';
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useStoreNotes } from '../stores/storeNotes';

  const storeNote = useStoreNotes();
  const route = useRoute();
  const router = useRouter();

  const noteContent = ref('');

  const handleSaveClick = () => {
    // let payload = {
    //   id: route.params.id,
    //   content: noteContent.value
    // }
    storeNote.updateNote(route.params.id, noteContent.value);
    router.push('/')
  }

  noteContent.value = storeNote.getNoteContent(route.params.id)

</script>
