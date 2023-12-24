import { useQueryClient, useMutation } from '@tanstack/react-query'
import { createNote } from '../requests/requests'

const NoteForm = () => {
    const queryClient = useQueryClient()

    const noteMutation = useMutation({
        mutationFn: createNote,
        onSuccess: (newNote) => {
            // this re-fetches the notes data
            // queryClient.invalidateQueries({
            //     queryKey: ['notes']
            // })
            const notes = queryClient.getQueryData(['notes'])
            queryClient.setQueryData(['notes'], notes.concat(newNote))
        }
      })

    const addNote = async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        noteMutation.mutate({
            content,
            important: true
        })
      }

    return (
    <form onSubmit={addNote}>
        <input name="note" /> 
        <button type="submit">add</button>
    </form>
    )
}

export default NoteForm