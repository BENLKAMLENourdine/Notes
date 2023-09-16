const initialState = [
    {
      content: 'reducer defines how redux store works',
      important: true,
      id: 1,
    },
    {
      content: 'state of store can contain any data',
      important: false,
      id: 2,
    },
  ]

const noteReducer = (state = initialState, action) => {
    if (action.type === 'NEW_NOTE') {
      return state.concat(action.payload)
    }
  
    if (action.type === 'TOGGLE_IMPORTANCE') {
      const id = action.payload.id
      const note = state.find(item => item.id === id)
      const changedNote = {
        ...note,
        important: !note.important
      }
      return state.map(note => note.id !== id ? note : changedNote)
    }
  
    return state
  }

export default noteReducer