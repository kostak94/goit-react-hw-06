import { createSlice, nanoid } from "@reduxjs/toolkit";
import initialContacts from "../assets/contacts.json";
import { formatPhoneNumber } from "../assets/helpers/formatPhoneNum";

const initialState = {
  contacts: initialContacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
  },
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload);
    },
    addNewContact: {
      prepare: (newContact) => {
        return {
          payload: {
            id: nanoid(),
            name: newContact.name,
            number: formatPhoneNumber(newContact.number),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.unshift(payload);
      },
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, addNewContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;
