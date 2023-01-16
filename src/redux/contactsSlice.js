import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = {contacts: []};

const contactsSlice = createSlice({
    // Ім'я слайсу
    name: "contacts",
    // Початковий стан редюсера слайсу
    initialState: contactsInitialState,
    // Об'єкт редюсерів
    reducers: {
      addContact(state, action) {
        state.contacts = [ action.payload, ...state.contacts];
      },
      deleteContact(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },

    },
  });
  
  // Генератори екшенів
  export const { addContact, deleteContact } = contactsSlice.actions;
  // Редюсер слайсу
  export const contactsReducer = contactsSlice.reducer;