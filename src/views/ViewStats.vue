<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>
            Stat
          </th>
          <th>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td> {{ storeNotes.totalNotesCount}} </td>
        </tr>
        <tr>
          <td>Number of characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount}}</td>
        </tr>
      </tbody>
    </table>
    <input v-model="loveNoteBalls" type="text" placeholder="Do you love noteballs?" class="input" v-autofocus>
  </div>
</template>


<script setup>

  import { useStoreNotes } from '../stores/storeNotes';
  import { ref } from 'vue';
  import { vAutofocus } from "@/directives/vAutofocus";
  import { useWatchCharacters } from '@/use/useWatchCharacters';

  const storeNotes = useStoreNotes();

  const loveNoteBalls = ref('');

  useWatchCharacters(loveNoteBalls, 50);
</script>
