import React, { useState } from 'react'
import './index.css';
import { TiTick, TiTickOutline } from 'react-icons/ti'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline, MdDoNotDisturb } from 'react-icons/md'

const Card = (props) => {
    const [complete, setComplete] = useState(false)
    const { title, content} = props
    const deleteNote =()=>{
        props.deleteItem(props.id)
    }
    const editNote =()=>{
        props.editItem(props.id)
        props.setEdit(true)
    }
    return (
        <>
                <div className="card_main">
                    {complete ? <div className='completed'>
                        <TiTick />
                    </div> : <div className='completed not'> </div>}
                    <h2 className='card_title'>{title}</h2>
                    <p className='card_note'>{content}</p>
                    <div className='bottom'>
                        <div className='toggle_complete'>
                            {!complete ? <span className='complete option' onClick={() => setComplete(true)} ><TiTickOutline className='icon' /> Complete</span>
                                : <span className='option' onClick={() => setComplete(false)}><MdDoNotDisturb className='icon' /> Incomplete</span>}
                        </div>
                        <div>
                            <FiEdit className='icon' onClick={editNote} />
                            <MdDeleteOutline className='icon' onClick={deleteNote} />
                        </div>
                </div>
            </div>
        </>
    )
}

export default Card
