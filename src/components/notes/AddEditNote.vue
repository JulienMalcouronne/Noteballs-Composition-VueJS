<template>

    <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">

      <label v-if="label" class="label has-text-white">{{ label }}</label>
      <div class="field">
        <div class="control">
          <textarea class="textarea"
          :placeholder="placeholder" ref="textareaRef" v-model="modelValue" @input="$emit('update:modelValue', modelValue)" v-autofocus maxlength="100"></textarea>
          <!-- <textarea class="textarea" v-model="newNote"
          placeholder="Add a new note" ref="newNoteRef"></textarea> -->
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <slot name="buttons"></slot>
          <!-- <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote">Add new note</button> -->
        </div>

      </div>
    </div>

</template>

<script setup>

  import { ref } from 'vue';
  import { vAutofocus } from "@/directives/vAutofocus";

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'success'
    },
    placeholder: {
      type: String,
      default: 'Type something...'
    },
    label: {
      type: String,
    }
  })

  const emit = defineEmits(['update:modelValue']);

  const textareaRef = ref(null);

  const focusTextarea = () => {
    textareaRef.value.focus();
  }
  // to parent recognize the function
  defineExpose({
    focusTextarea
  })

  // const vAutofocus = {
  //   mounted: (el) => {
  //     el.focus
  //   }
  // }

</script>
