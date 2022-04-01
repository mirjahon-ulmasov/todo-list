<script setup lang="ts">
import type { Note } from "@/types";
import { useRouter } from "vue-router";
import { useNoteStore } from "@/stores/notes";
import NoteForm from "@/components/NoteForm.vue";

const router = useRouter();
const noteStore = useNoteStore();

// Call action from store to add note
const submitHandler = (note: Note) => {
  noteStore.addNote(note);
  router.push({ name: "main" });
};
</script>

<template>
  <div class="main">
    <h1>Add Note</h1>
    <NoteForm @submit="submitHandler" />
  </div>
</template>

<style lang="scss">
.main {
  text-align: center;
  padding: 2rem;
  h1 {
    color: #ccc;
    font-size: 40px;
    text-transform: uppercase;
  }
}
</style>
