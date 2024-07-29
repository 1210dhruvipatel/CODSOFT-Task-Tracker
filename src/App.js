import React, { useState } from 'react'
import CreateTask from './CreateTask'
import Card from './Card'

const App = () => {
  const [item, setItem] = useState([]);
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')
  const [edit, setEdit] = useState(false)
  const [isEditItem, setIsEditItem] = useState(null)

  const addNote = (note) => {
    setItem((prevData) => {
      return [...prevData, note]
    });
    console.log(note);
  } 
  const onDelete = (id) => {
    setItem((oldData) =>
      oldData.filter((currentdata, index) => {
        return index !== id;
      })
    )
  }
  const onEdit = (id) => {
    const Data = item.find((elem, index) => {
      return id === index
    });
    setEditTitle(Data.title)
    setEditContent(Data.content)
    setIsEditItem(id);
  }
  const editCard = (note) => {
    setItem( item.map((elem, index) => {
      if (index === isEditItem) {
        return {title:note.title , content:note.content}
      }
      return elem;
    }))
  }
  console.log(item)
  return (
    <>
      <CreateTask passNote={addNote}
        onEdit={onEdit}
        editCard={editCard}
        edit={edit}
        setEdit={setEdit}
        editTitle={editTitle}
        editContent={editContent}
        isEditItem={isEditItem}
      />
      <div className='all_card'>
        {item.map((val, index) => {
          return <Card
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            editTitle={editTitle}
            editContent={editContent}
            deleteItem={onDelete}
            editItem={onEdit}
            setEdit={setEdit}
            edit={edit}
          />
        })}
      </div>
    </>
  )
}

export default App
