import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import actions from './actions/noteActions'
import { useSelector, useDispatch } from 'react-redux'
import NoteForm from './components/NoteForm'
import VisibilityFilter from './components/VisibilityFilter'


const Note = ({note, handleToggleImportance}) => {
  return (
    <li
            key={note.id} 
            onClick={handleToggleImportance}
          >
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
  )
}

const App = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => {
    if (state.filter === 'ALL') return state.notes

    return state.filter === 'IMPORTANT' ? state.notes.filter(note => note.important) : state.notes.filter(note => !note.important)
  })

  const toggleImportance = (id) => {
    dispatch(actions.toggleImportance(id))
    // setDef(!def)
  }
  return(
    <div>
      <NoteForm />
      <VisibilityFilter />
      <ul>
        {notes.map(note =>
          <Note note={note} handleToggleImportance={() => toggleImportance(note.id)} />
        )}
      </ul>
    </div>
  )
}

export default App