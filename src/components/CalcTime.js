import React from 'react';

const CalcTime = props => {
  const postTime = new Date(props.time);
  const nowTime = new Date();
  const msecDiff = nowTime.getTime() - postTime.getTime();
  const dayDiff = Math.floor(msecDiff / 1000 / 60 / 60 / 24);



  return(
    <div>
      {dayDiff}日前
    </div>
  );
}

export default CalcTime;