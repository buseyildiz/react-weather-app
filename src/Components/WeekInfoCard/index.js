import React, { useEffect, useState } from 'react'
import { UseWeatherAppContext } from '../../Context/Context'
import SingleCardComponents from '../SıngleCard';

function WeekInfoCardComponents() {
    const {state:{daily,city},dispatch} = UseWeatherAppContext()
    const [selectedCard,setSelectedCard] = useState(0)
    
    const updateCurrent = () =>{
        return(
            dispatch({
                type: "SET_CURRENT",
                payload:daily[selectedCard],
              })
        )
    }

    useEffect(()=>{
        updateCurrent()
    },[daily[selectedCard],city]);
   
  return (
    <>
        <div className='cardWrap'>
            <ul className='cardList'>
                {daily && daily.length > 0 ? daily.map((item,index)=>{
                    if(index<7){
                        return <SingleCardComponents item={item} className={index === selectedCard ? 'active' : ''} key={index} onClick={()=>{
                            setSelectedCard(index);
                            updateCurrent();
                        }}/>
                    }
                   
                   
                }) : ''}
            </ul>
        </div>
    </>
  )
}

export default WeekInfoCardComponents