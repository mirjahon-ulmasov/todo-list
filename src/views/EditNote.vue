<script setup lang="ts">
import type { Note } from "@/types";
import { useRouter } from "vue-router";
import { useNoteStore } from "@/stores/notes";
import NoteForm from "@/components/NoteForm.vue";

// Get id from dynamic route
const { id } = defineProps<{ id: string }>();

const router = useRouter();
const noteStore = useNoteStore();

const { getNoteById, editNoteById } = noteStore;

// Call action from store to edit note
const submitHandler = (note: Note) => {
  editNoteById(+id, note);
  router.push({ name: "main" });
};
</script>

<template>
  <div class="main">
    <h1>Edit Note</h1>
    <NoteForm @submit="submitHandler" :note="getNoteById(+id)" :id="+id" />
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
