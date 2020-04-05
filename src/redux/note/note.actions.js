import noteActionTypes from './note.types';

export const addNote = ({
  type: noteActionTypes.ADD_NOTE
})

export const removeNote = toRemoveNote => ({
  type: noteActionTypes.REMOVE_NOTE,
  payload: toRemoveNote
})

export const editNote = (toEditNote, text) => ({
  type: noteActionTypes.EDIT_NOTE,
  payload: {
    toEditNote,
    text
  },
})

export const toggleEditable = toToggleNote => ({
  type: noteActionTypes.TOGGLE_NOTE,
  payload: toToggleNote
})
