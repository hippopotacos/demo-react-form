import React, {useState} from 'react';

const ShareUrl = props => {
  const handleClick = () => {
    const url = window.location.href;
    console.log(url);
    navigator.clipboard.writeText(url);
    alert("コピーしました");
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
                <div className="flex mt-7">
                  <div>
                    <a href="/" className="block"><img src="" alt="" /></a>
                    <p>a</p>
                  </div>
                  <div>
                    <a href="/" className="block"><img src="" alt="" /></a>
                    <p>b</p>
                  </div>
                  <div>
                    <a href="/" className="block"><img src="" alt="" /></a>
                    <p>c</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-7">
                  <button type="button" onClick={handleClick}>copy</button>
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

export default ShareUrl;