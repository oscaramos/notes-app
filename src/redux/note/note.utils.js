export const addNewNote = (notes) => {
  const lastid = notes.length ? notes[notes.length - 1].id : 1;
  const newNote = {
    id: lastid + 1,
    text: '',
    dateCreated: new Date().toLocaleString(),
  }
  return [...notes, newNote]
}

export const removeNote = (notes, noteToRemove) => (
  notes.filter(note => note.id !== noteToRemove.id)
)

export const editNote = (notes, noteToEdit, text) => (
  notes.map(note =>
    (note.id === noteToEdit.id
      ? { ...note, text: text }
      : note)
  )
)

export const toggleNote = (notes, noteToToggle) => (
  notes.map(note =>
    note.id === noteToToggle.id ?
      { ...note, editable: !note.editable }
      : note
  )
)