<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useNoteStore } from "@/stores/notes";
import NoteCard from "../components/NoteCard.vue";

const note = useNoteStore();
const router = useRouter();

const { getAllNotes } = storeToRefs(note);
const notes = computed(() => getAllNotes.value);

const addNoteHandler = () => {
  router.push({ name: "add-note" });
};
</script>

<template>
  <header>
    <h1>My Notes</h1>
    <button class="btn blue" @click="addNoteHandler()">Добавить</button>
  </header>
  <div v-if="notes.length > 0" class="notes">
    <NoteCard v-for="note in notes" :key="note.id" :note="note" />
  </div>
  <p v-else>Результатов не найдено!!!</p>
</template>

<style lang="scss">
header {
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 40px;
    color: #ccc;
  }
  button {
    margin-top: 1rem;
  }
}
.notes {
  padding: 2rem;
}
p {
  text-align: center;
  font-size: 18px;
  color: #333;
}
</style>
