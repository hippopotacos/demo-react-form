import React, {useState} from 'react';

const WordCount = props => {
  const [textLength, setTextLength] = useState(0);

  const handleTextarea = (event) => {
    const length = event.target.value.length;
    setTextLength(length);
    if(0 < length && length <= 140){
      console.log("ok");
    }else{
      console.log("disabled");
    }
  }

  return(
    <div className="w-96 mx-auto max-w-full border-l border-r">
      <form>
        <div className="bg-gray-200 min-h-screen">
          <div className="py-7">
            <h1 className="font-bold text-2xl text-center">ここにh1</h1>
          </div>
          <div className="px-5">
            <div className="py-7 px-5 bg-white rounded">
              <p className="text-5xl text-center">A</p>
              <h2 className="text-lg text-center font-bold">aa</h2>
              <p className="text-base text-center">xxx</p>
              <div>
                <div className="mt-5">
                  <textarea className="p-2.5 w-full h-28 border rounded text-base bg-gray-100" onChange={handleTextarea} />
                </div>
                <p className="mt-2.5 text-right">{textLength}/140</p>
              </div>
              <div>
                <div className="mt-5">
                  <button>submit</button>
                </div>
                <div className="mt-2.5">
                  <a href="/">skip</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WordCount;