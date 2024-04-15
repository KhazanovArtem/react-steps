import React, { useState } from 'react'
import { InnerForm } from './InnerForm'
import { ListTraining } from './ListTraining'

export const FormTraining = () => {

    const [items, setItems] = useState([{
        date: "2019-07-20",
        distance: 5.7,
    },
    {
        date: "2019-07-19" ,
        distance: 14.2,
    },
    {
        date: "2019-07-17" ,
        distance: 3.4,
    }])

    const [form, setForm] = useState({
        date: '',
        distance: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        let checkDate = true;
        items.forEach(el => {
            if(el.date == e.target.date.value) {
                el.distance += parseFloat(e.target.distance.value);
                checkDate = false;
            }
        })

        if (checkDate){
            setItems([...items, form].sort((a, b) => {
              return new Date(a.date) > new Date(b.date) ? -1 : 1;
            }));
          } else {
            setItems([...items].sort((a, b) => {
              return new Date(a.date) > new Date(b.date) ? -1 : 1;
            }));
          }
    }

    const handleClick = (index) => {
        setItems([...items.slice(0, index), ...items.slice(index + 1)]);  
    }

    const handleChangeDate = (e) => {
        setForm(prevForm => ({...prevForm, date: date.value}));
    }

    const handleChangeDistance = (e) => {
        let value;
        if (e.target.value == ''){
          value = e.target.value;
        } else {
          value = parseFloat(e.target.value);
        }
        setForm(prevForm => ({...prevForm, distance: value}));
    }

  return (
    <div className='form-training'>
        <div className='inner-form'>
            <div className='inner-form-names'>
                <span>Дата (ДД.ММ.ГГГГ)</span>
                <span>Пройдено км</span>
            </div>
            <InnerForm onClick={handleClick} 
            handleSubmit={handleSubmit} 
            handleChangeDate={handleChangeDate} 
            handleChangeDistance={handleChangeDistance} 
            form={form}/>
        </div>
        <div className='list-training'>
            <div className='list-training-names'>
                <span>Дата (ДД.ММ.ГГГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
        </div>
        <ListTraining items={items} handleClick={handleClick}/>
    </div>
  )
}
