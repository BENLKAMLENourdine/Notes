
const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))
  
const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        payload: {
          content,
          important: true,
          id: generateId()
        }
      }
}

const toggleImportance = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: { id }
      }
}

export default {
    createNote,
    toggleImportance
}