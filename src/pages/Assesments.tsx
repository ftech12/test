import React from 'react'

function Assesments() {

  const questions = [
  {
    text: 'I trust that I can navigate challenges by drawing on my inner resources.',
  },
  {
    text: 'Even when outcomes are unclear, I maintain confidence that I will learn and grow.',
  },
  {
    text: 'I regularly use positive affirmations or mindset shifts to replace doubt with trust.',
  },
  {
    text: 'I view obstacles as opportunities to deepen my faith in my own abilities.',
  },
  {
    text: 'When I feel discouraged, I recall past successes to reinforce my belief in what’s possible.',
  },
];
  return (
    <>
     <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-lg font-semibold">🧘‍♀️ 8 Keys Spiritual Assessment</h2>
        <p className="text-sm text-gray-500">Discover your spiritual strengths and growth areas</p>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Progress: 1 of 8 Keys</span>
          <span className="text-green-600 font-medium">13% Complete</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className="h-full bg-green-500 rounded-full" style={{ width: '13%' }} />
        </div>
      </div>

      {/* Section Title */}
      <div>
        <h3 className="text-md font-semibold text-gray-800">Belief (Foundation of Possibility)</h3>
        <div className="text-right text-sm text-gray-500">Subtotal: 0/25</div>
        <p className="text-sm text-gray-500 mt-1">
          Cultivating an unwavering conviction in yourself, in growth, and in possibility even under uncertainty or setback.
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 pt-3 rounded-md text-sm">
        <div className='px-4'>
           <strong>Instructions:</strong> <br />
        Rate each statement on a scale from 1 to 5:
        </div>

        <div className='bg-blue-200 p-2 rounded-md mt-2'>
          <p>1: Strongly Disagree 2: Disagree 3: Neutral 4: Agree 5: Strongly Agree </p>
        </div>
        {/* <ul className="mt-1 list-disc list-inside">
          <li>1: Strongly Disagree</li>
          <li>2: Disagree</li>
          <li>3: Neutral</li>
          <li>4: Agree</li>
          <li>5: Strongly Agree</li>
        </ul> */}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index}>
            <p className="text-sm text-gray-800 mb-2">{index + 1}. {q.text}</p>
            <div className="flex justify-between mb-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className="w-10 h-10 rounded-full border text-sm hover:bg-purple-100 transition"
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="flex justify-between px-3 py-1 text-xs text-white rounded-lg  bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 ">
              <span className=" font-medium">Strongly Disagree</span>
              <span className=" font-medium">Strongly Agree</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
       <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
  <div className="w-6 h-6 flex items-center justify-center bg-black text-white text-center rounded-full">
    <span className="text-2xl mb-2">{'\u2039'}</span> {/* Unicode for left arrow */}
  </div>
  <span className="text-black font-medium text-sm">Previous</span>
</button>

         <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-full hover:bg-gray-200">
  <span className="text-white font-medium text-sm">Next</span>
  <div className="w-6 h-6 flex items-center justify-center bg-white text-purple-600 text-center rounded-full">
    <span className="text-2xl mb-2">{'\u203A'}</span> {/* Unicode for left arrow */}
  </div>
</button>
      </div>
    </div>
    </>
  )
}

export default Assesments