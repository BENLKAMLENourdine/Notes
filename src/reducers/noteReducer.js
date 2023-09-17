import { createSlice } from "@reduxjs/toolkit"
import notesService from '../services/notes'

const noteSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        setNotes(state, action) {
            return action.payload
        } ,
        appendNotes(state, action) {
            state.push(action.payload)
        },
        toggleImportance(state, action) {
            console.log(JSON.parse(JSON.stringify(state)))
            const id = action.payload.id
            const note = state.find(item => item.id === id)
            const changedNote = {
                ...note,
                important: !note.important
            }
            return state.map(note => note.id !== id ? note : changedNote)
        }
    }
})

export const initializeNotes = () => {
    return async (dispatch) => {
        const notes = await notesService.getAll()
        dispatch(setNotes(notes))
    }
}

export const createNote = (content) => {
    return async (dispatch) => {
        const notes = await notesService.createNew(content)
        dispatch(appendNotes(notes))
    }
}

export const { toggleImportance, appendNotes, setNotes } = noteSlice.actions
export default noteSlice.reducer