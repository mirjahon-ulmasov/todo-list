import type { Note } from "@/types";
import { defineStore } from "pinia";

const save_notes = (notes: Note[]) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const get_notes = (): Note[] => {
  return JSON.parse(localStorage.getItem("notes") || "[]");
};

export const useNoteStore = defineStore("note", {
  state: () => ({
    notes: get_notes(),
  }),
  getters: {
    getAllNotes(state) {
      return state.notes;
    },
    getNoteById(state) {
      return (id: number) => state.notes.find((note) => note.id === id);
    },
  },
  actions: {
    addNote(note: Note) {
      this.notes.push(note);
      save_notes(this.notes);
    },
    deleteNoteById(id: number) {
      this.notes = this.notes.filter((note) => note.id !== id);
      save_notes(this.notes);
    },
    editNoteById(id: number, new_note: Note) {
      this.notes = this.notes.map((note) => {
        return note.id === id ? new_note : note;
      });
      save_notes(this.notes);
    },
  },
});
