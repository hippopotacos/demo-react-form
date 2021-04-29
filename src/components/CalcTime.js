import React from 'react';

const CalcTime = props => {
  const postTime = new Date(props.time);
  const nowTime = new Date();
  const secondsDiff = (nowTime.getTime() - postTime.getTime()) / 1000;

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  let result;
  if(secondsDiff < minute) {
    result = Math.round(secondsDiff) + '秒前';
  }else if(secondsDiff < hour) {
    result = Math.round(secondsDiff/minute) + '分前';
  }else if(secondsDiff < day) {
    result = Math.round(secondsDiff/hour) + '時間前';
  }else if(secondsDiff < month) {
    result = Math.round(secondsDiff/day) + '日前';
  }else if(secondsDiff < year) {
    result = Math.round(secondsDiff/month) + 'ヶ月前';
  }else{
    result = Math.round(secondsDiff/year) + '年前';
  }

  return(
    <div>
      {result}
    </div>
  );
}

export default CalcTime;