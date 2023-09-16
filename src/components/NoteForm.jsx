import { useSelector, useDispatch } from 'react-redux'
import noteActions from '../actions/noteActions'

const NoteForm = () => {
    const dispatch = useDispatch()

    const addNote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        dispatch(noteActions.createNote(content))
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