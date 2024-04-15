import React from 'react'

export const InnerForm = ({handleSubmit, handleChangeDate, handleChangeDistance, form}) => {
  const {date, distance} = form;
  return (
    <form onSubmit={handleSubmit}>
        <input id='date' type="date" value={date} onChange={handleChangeDate}/>
        <input id='distance' type="text" value={distance} onChange={handleChangeDistance}/>
        <button>OK</button>
    </form>
  )
}
