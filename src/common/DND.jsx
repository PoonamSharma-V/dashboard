import React,{useState} from 'react'
import {useDrop} from 'react-dnd'
import Btn from '../pages/Btn'
import btn1 from '../images/button1.png'
const ButtonList=[
    {
        id:1,
        image:btn1
    },
    {
        id:2,
        image:btn1
    },
    {
        id:3,
        image:btn1
    },
]
const DND = () => {
    const [board,setBoard]=useState([])
    const [{isOver},drop]=useDrop(()=>({
            accept:"imag",
            drop : (item)=>addImageToBoard(item.id),
            collect: (monitor)=>({
                isOver:!!monitor.isOver(),
            }),
    }))
    const addImageToBoard=(id)=>{
        const buttonList=ButtonList.filter((button)=> id ===button.id);
        setBoard((board)=>[...board,buttonList[0]])
    }
  return (
    <>
        <div className="Buttons">{ButtonList.map((button)=>{
            return <Btn image={button.image} id={button.id}/> 
        })}</div>
        <div className="PutButton" ref={drop}>
            {board.map((button)=>{
                return <Btn image={button.image} id={button.id}/>
            })}

        </div>
    </>    
  )
}

export default DND
