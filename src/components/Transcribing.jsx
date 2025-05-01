import React from 'react';

export default function Transcribing({ downloading }) {
  return (
    <div className='flex items-center flex-1 flex-col justify-center gap-10 md:gap-14 text-center pb-24 p-4'>
      <div className='flex flex-col gap-2 sm:gap-4'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
          <span className='text-purple-400 bold'>Transcribing</span>
        </h1>
        <p>{!downloading ? 'Translating into text' : 'Looking for the right words'}</p>
      </div>
      
      {/* Bouncing Dots */}
      <div className='bounce-wrapper'>
        {[0, 1, 2].map((_, idx) => (
          <div key={idx} className='bounce-dot'></div>
        ))}
      </div>
    </div>
  );
}
