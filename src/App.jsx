import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import NoteForm from './components/NoteForm'
import VisibilityFilter from './components/VisibilityFilter'
import Notes from './components/Notes'
import Home from './components/Home'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getNotes, updateNote } from './requests/requests'

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

  const queryClient = useQueryClient()

  const result = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes
  })

  const noteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['notes']
      })
    }
  })

  console.log(JSON.parse(JSON.stringify(result)))

  const padding = {
    padding: 5
  }

  if (result.isLoading) return (
    <div>Loading Notes</div>
  )

  const notes = result.data

const toggleImportance = (note) => {
  noteMutation.mutate({
    ...note,
    important: !note.important
  })
}

  return(
    <div>
      <>
      <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/notes">notes</Link>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </Router>
    </>
      <NoteForm />
      <VisibilityFilter />
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} handleToggleImportance={() => toggleImportance(note) } />
        )}
      </ul>
    </div>
  )
}

export default App