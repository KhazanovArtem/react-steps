import React from 'react'

export const ListTraining = ({items, handleClick}) => {
  return (
    <div className='list-training-items'>
        {items.map((item, index) => (
            <div className='list-training-item' key={items.indexOf(item)}>
                <div className='item-date'>{new Date(item.date).toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                    })}</div>
                <div className='item-distance'>{item.distance}</div>
                <div className='item-buttons'>
                    <button className='item-edit'>✎</button>
                    <button className='item-remove' onClick={() => handleClick(index)}>✘</button>
                </div>
            </div>
        ))}
    </div>
  )
}
