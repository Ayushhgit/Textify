import React from 'react';

export default function FileDisplay(props) {
  const { handleAudioReset, file, audioStream } = props;

  return (
    <main className="flex-1 p-4 flex flex-col items-center justify-center gap-6 text-center min-h-screen pb-20 w-72 max-w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your<span className="text-purple-400 font-bold">File</span>
      </h1>

      <div className="flex flex-col text-left my-4">
        <h3 className="font-semibold">Name</h3>
        <p>{file ? file?.name : "Custom Audio"}</p>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <button
          onClick={handleAudioReset}
          className="text-slate-400 hover:text-purple-600 duration-200"
        >
          Reset
        </button>
        <button className="specialBtn px-4 py-2 rounded-lg text-purple-400 flex items-center gap-2 font-medium"> 
          <p>Transcribe</p>
          <i className="fa-solid fa-pen-nib"></i>
        </button>
      </div>
    </main>
  );
}
