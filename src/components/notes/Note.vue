<template>
    <div class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
        <div class="has-text-right has-text-grey-light mt-2">
          <small>
            {{ characterLength }}
          </small>
        </div>
      </div>
      <footer class="card-footer">
        <router-link :to="`/editNote/${note.id}`" href="#" class="card-footer-item">Edit</router-link>
        <!-- <a href="#" class="card-footer-item" @click.prevent="handleDeleteClicked">Delete</a> -->
        <!-- <a href="#" class="card-footer-item" @click.prevent="storeNotes.deleteNote(note.id)">Delete</a> -->
        <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
      </footer>
      <ModalDeleteNote :noteId="note.id" v-model="modals.deleteNote" v-if="modals.deleteNote"></ModalDeleteNote>
    </div>
</template>

<script setup>

  import { computed, reactive } from 'vue';
  import { useStoreNotes } from '@/stores/storeNotes';
  import ModalDeleteNote from './ModalDeleteNote.vue';
import ModalDeleteNote from './ModalDeleteNote.vue';

  const storeNotes = useStoreNotes();

  const props = defineProps({
    note: {
      type: Object,
      require: true
    }
  });

  // const emit = defineEmits(['deleteClicked'])

  const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character';
    return `${length} ${ description }`
  });

  // const handleDeleteClicked = () => {
  //   emit('deleteClicked', props.note.id)
  // }

  const modals = reactive({
    deleteNote: false,
    editNote: false,
  })

</script>
