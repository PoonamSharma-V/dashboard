import React from 'react'
import {useDrag} from 'react-dnd'
function Btn({id,image}){
    const [{isDragging},drag]=useDrag(()=>({
        type:"imag",
        item:{id:id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging(),
        })
    }))
    return <img ref={drag} src={image} width="150px" style={{border:isDragging ?"5px solid pink" : "0px"}}/>
}


export default Btn
