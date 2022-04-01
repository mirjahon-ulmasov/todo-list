<script setup lang="ts">
import { computed } from "vue";
import type { Note } from "@/types";
import { useRouter } from "vue-router";
import { useNoteStore } from "@/stores/notes";

const { note } = defineProps<{
  note: Note;
}>();

const router = useRouter();
const noteStore = useNoteStore();
const { deleteNoteById } = noteStore;

const get3Tasks = computed(() =>
  note.tasks.length >= 3 ? note.tasks.slice(0, 3) : note.tasks
);

const deleteNoteHandler = (id: number) => {
  deleteNoteById(id);
};

const editNoteHandler = (id: number) => {
  router.push({ name: "edit-note", params: { id } });
};
</script>

<template>
  <div class="card">
    <h3>{{ note.title }}</h3>
    <div>
      <div class="task" v-for="task in get3Tasks">
        <label>
          <input type="checkbox" disabled v-model="task.state" />
          {{ task.name }}
        </label>
      </div>
    </div>
    <div class="actions">
      <button class="btn red" type="button" @click="deleteNoteHandler(note.id)">
        Удалить
      </button>
      <button class="btn blue" type="button" @click="editNoteHandler(note.id)">
        Изменить
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 2rem;
  margin: 1rem;
  width: 350px;
  height: 250px;
  display: inline-flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 5px 2px #ccc;

  h3 {
    font-size: 30px;
    color: #555;
    text-transform: uppercase;
  }
  .task {
    label {
      margin-top: 5px;
      font-size: 19px;
    }
  }
  .actions {
    display: flex;
    margin-top: 1rem;
    justify-content: space-evenly;
  }
}
</style>
