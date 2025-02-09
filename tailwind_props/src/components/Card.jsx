import React from 'react'

function Card({data})
{
    let title='Testing';
    let description='this componet  is all about testing '
    let buttonText="click me"
    return(
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src="https://picsum.photos/200"
        alt="Card image"
      /> <img/>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{data.name}</h2>
        <p className="text-gray-700 text-base">{data.age}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {buttonText}
        </button>
      </div>
      </div>
        </>
    )


}

export default Card