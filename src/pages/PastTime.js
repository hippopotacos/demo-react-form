import React from 'react';
import CalcTime from '../components/CalcTime';

const PastTime = props => {
  const items = props.pastTimeData;

  return(
    <div className="flex justify-center w-50">
      <ul>
        {items.map((item,i) => 
          <li key={i}>
            <CalcTime
              time={item.time}
            />
          </li>
        )}
      </ul>
    </div>
  )
}

export default PastTime;