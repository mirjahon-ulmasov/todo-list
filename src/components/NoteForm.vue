<script setup lang="ts">
import { computed, ref } from "vue";
import type { Note } from "@/types";
import { useRouter } from "vue-router";
import { useNoteStore } from "@/stores/notes";

// send data to Parent components
const emit = defineEmits<{
  (e: "submit", value: Note): void;
}>();

// get data from Parent components
const props = defineProps<{
  note?: Note;
  id?: number;
}>();

const router = useRouter();
const notesStore = useNoteStore();

const note = ref<Note>(
  props.note
    ? props.note
    : {
        id: Date.now(),
        title: "",
        tasks: [
          {
            id: Date.now(),
            state: false,
            name: "",
          },
        ],
      }
);

const isValidForm = computed(() => {
  return (
    note.value.title !== "" &&
    note.value.tasks.every((task) => task.name !== "")
  );
});

// Сохранить note
const submitHandler = () => {
  if (isValidForm.value) {
    emit("submit", note.value);
  }
};

// Удалить note
const deleteNoteHandler = (id: number) => {
  notesStore.deleteNoteById(id);
};

// Добавить task
const addTaskHandler = () => {
  if (isValidForm.value) {
    note.value.tasks.push({
      id: Date.now(),
      state: false,
      name: "",
    });
  }
};

// Удалить task
const deleteTaskHandler = (id: number) => {
  note.value.tasks = note.value.tasks.filter((task) => task.id !== id);
};

// Отменить
const cancelHandler = () => {
  router.push({ name: "main" });
};
</script>

<template>
  <form @submit.prevent="submitHandler">
    <div class="form-input">
      <label>Title</label>
      <input type="text" v-model="note.title" />
    </div>
    <div class="tasks">
      <h3>Tasks</h3>
      <button class="btn blue" type="button" @click="addTaskHandler()">
        +
      </button>
    </div>
    <div class="task-item" v-for="task in note.tasks" :key="task.id">
      <input type="checkbox" v-model="task.state" />
      <input type="text" v-model="task.name" />
      <button class="btn red" type="button" @click="deleteTaskHandler(task.id)">
        x
      </button>
    </div>
    <p v-if="!isValidForm" class="error">Please fill all fields!!!</p>
    <div class="actions">
      <button
        class="btn"
        style="color: #aaa"
        type="button"
        @click="cancelHandler()"
      >
        Отменить
      </button>
      <button
        v-if="props.id"
        class="btn red"
        type="button"
        @click="deleteNoteHandler(props.id as number)"
      >
        Удалить
      </button>
      <button class="btn blue" type="submit">Добавить</button>
    </div>
  </form>
</template>

<style lang="scss">
form {
  padding: 2rem;
  width: 400px;
  margin: 1rem auto;
  border-radius: 5px;
  display: inline-block;
  box-shadow: 0 0 5px 2px #ccc;

  .form-input {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      color: #aaa;
      font-size: 16px;
      text-transform: uppercase;
    }
    input {
      width: 100%;
    }
  }
  .tasks {
    display: flex;
    align-items: center;

    h3 {
      color: #aaa;
      font-size: 20px;
      text-transform: uppercase;
    }
    button {
      font-size: 25px;
      padding: 0 7px;
      margin-left: 1rem;
    }
  }
  .task-item {
    input[type="text"] {
      width: 80%;
    }
    button {
      font-size: 20px;
      padding: 0 8px 3px 8px;
    }
  }
  .actions {
    display: flex;
    margin-top: 1rem;
    justify-content: space-evenly;
  }
  .error {
    margin-top: 0.5rem;
    color: #e25252;
  }
}
</style>
