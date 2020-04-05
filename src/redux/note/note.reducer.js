import noteActionTypes from './note.types';

import { addNewNote, removeNote, editNote, toggleNote } from "./note.utils";

const INITIAL_STATE = {
  notes: []
};

const noteReducer = (state=INITIAL_STATE, action={}) => {
  switch (action.type) {
    case noteActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: addNewNote(state.notes)
      };

    case noteActionTypes.REMOVE_NOTE:
      return {
        ...state,
        notes: removeNote(state.notes, action.payload)
      }

    case noteActionTypes.EDIT_NOTE:
      return {
        ...state,
        notes: editNote(state.notes, action.payload.toEditNote, action.payload.text)
      }

    case noteActionTypes.TOGGLE_NOTE:
      return {
        ...state,
        notes: toggleNote(state.notes, action.payload)
      }

    default:
      return state;
  }
}

export default noteReducer;