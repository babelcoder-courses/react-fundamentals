import React, { useEffect } from 'react'
import axios from 'axios'

import styles from './NoteList.module.css'

export default function NoteList({ notes, setNotes }) {
  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await axios.get('/notes')

      setNotes(data)
    }

    fetchNotes()
  }, [setNotes])

  return (
    <ul className={styles['note-list']}>
      {notes.map((note) => (
        <li key={note.id} className={styles['note-list-item']}>
          {note.body}
        </li>
      ))}
    </ul>
  )
}
