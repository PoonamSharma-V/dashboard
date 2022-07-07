import React from 'react'

const Schedule = () => {
  return (
    <>
    <div className="containerSchedule">
     <div className="Fyear">
        <h3>2021</h3>
        <div  className="Fline">
        <hr/>
        </div> 
        <div  className="FirstList">
            <ul>
                <li>July</li>
                <li>Aug</li>
                <li>Sept</li>
                <li>Oct</li>
                <li>Nov</li>
                <li>Dec</li>
            </ul>
        </div> 
     </div>
     <div className='Syear'>
        <h3>2022</h3>
        <div  className="Sline">
        <hr/>
        </div>
        <div className="SecondList">
            <ul>
                <li>Jan</li>
                <li>Feb</li>
                <li>March</li>
                <li>April</li>
                <li>May</li>
                <li>June</li>
            </ul>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Schedule
