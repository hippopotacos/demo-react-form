import React, {useState} from 'react'

const Questionnaire = props => {
  const items = props.questionnaireData;
  const length = items.length;
  console.log(length);

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }

  return(
    <div>
      <form>
        <p>{counter}</p>
        <div>
          {counter+1}つめのアンケート
        </div>
        <p>{items[counter].question}</p>
        {items[counter].choices.map((item, i) => (
          <div key={i}>
            <p>{item.text}</p>
          </div>
        ))}
        <button type="button" onClick={handleClick}>つぎへ</button>
      </form>
    </div>
  );
}

export default Questionnaire;