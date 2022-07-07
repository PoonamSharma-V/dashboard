import React from 'react'
const Header = () => {
  return (
    <>
    <div className="containerHeader">

        <div className="header">
          
            <h1>My Wide Chart Title</h1>
            
        <div className="menu">
            <ul>Drag to drop
                <li><button className="week" type="text">2 week</button></li>
                <li><button className="month" type="text">1 month</button></li>
                <li><button className="months" type="text">3 month</button></li>
            </ul>
        </div>
        </div>
    </div>
    </>
  )
}

export default Header
