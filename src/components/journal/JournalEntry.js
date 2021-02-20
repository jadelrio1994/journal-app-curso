import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 
        className="journal__entry-pincture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg)'
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo dia
        </p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iste!
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>

    </div>
  )
}
