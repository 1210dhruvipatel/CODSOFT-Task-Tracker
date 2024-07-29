import React, { useEffect, useState } from 'react';
import './index.css'
import { IoMdAdd } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'

const CreateTask = (props) => {

    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        id: '',
        title: "",
        content: "",
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }
    const addTask = () => {
        if (!note.title && !note.content) {
            alert('fill the data')
        } else if (props.edit) {
            console.log(props.isEditItem)
            props.editCard(note)
            props.setEdit(false)

            setNote({
                title: "",
                content: "",
            });
            setExpand(false)
        }
        else if (!props.edit) {
            props.passNote(note);
            setNote({
                title: "",
                content: "",
            });
            setExpand(false)
        }
    }
    const expandIt = () => {
        setExpand(true)
    }
    const newTitle = props.editTitle;
    const newContent = props.editContent

    useEffect(() => {
        if (props.edit) {
            setNote({
                title: newTitle,
                content: newContent,
            });
            setExpand(true)
        } else {
            setNote({
                title: "",
                content: "",
            });
        }
    }, [props.edit])
    return (
        <>
            <div className='main'>
                <div className='create'>
                    <div className='title__div'>
                        {expand ?
                            <input type="text"
                                placeholder='Title'
                                name='title'
                                value={note.title}
                                onChange={inputEvent}
                                className='title' /> : null}
                        <textarea rows='3'
                            placeholder='Take a note...'
                            name='content'
                            value={note.content}
                            onChange={inputEvent}
                            onClick={expandIt}
                            className='title note'></textarea>
                    </div>
                    <div className='add-btn'>
                        {!props.edit ?
                            (<IoMdAdd className='add' onClick={addTask} />) :
                            (<FiEdit className='add' onClick={addTask} />
                            )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateTask