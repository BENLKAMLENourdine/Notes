import { useSelector, useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
import noteService from '../services/notes'

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const NoteForm = () => {
    const dispatch = useDispatch()

    const addNote = async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        dispatch(createNote(content))
        // setDef(!def)
      }

    return (
    <form onSubmit={addNote}>
        <input name="note" /> 
        <button type="submit">add</button>
    </form>
    )
}

export default NoteForm