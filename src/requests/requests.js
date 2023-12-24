import axios from 'axios'

const baseUrl = 'http://localhost:3005/notes'

export const getNotes = () => axios.get(baseUrl).then(res => res.data)

export const createNote = newNote => axios.post(baseUrl, newNote).then(res => res.data)

export const updateNote = newNote => axios.put(`${baseUrl}\\${newNote.id}`, newNote).then(res => res.data)