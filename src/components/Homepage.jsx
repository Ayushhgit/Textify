import React, { useRef, useState, useEffect } from 'react';

function HomePage(props) {
  const { setAudioStream, setFile } = props;

  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([]);
  const [duration, setDuration] = useState(0);

  const mediaRecorder = useRef(null);
  const mimeType = 'audio/webm';
  const [stream, setStream] = useState(null);

  const startRecording = async () => {
    let tempStream;
    try {
      const streamData = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      tempStream = streamData;
      setStream(tempStream);
    } catch (err) {
      console.log(err.message);
      return;
    }

    setRecordingStatus('recording');
    const media = new MediaRecorder(tempStream, { type: mimeType });
    mediaRecorder.current = media;

    mediaRecorder.current.start();
    let localAudioChunks = [];

    mediaRecorder.current.ondataavailable = (event) => {
      if (!event.data || event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };

    setAudioChunks(localAudioChunks);
  };

  const stopRecording = async () => {
    setRecordingStatus('inactive');
    mediaRecorder.current.stop();

    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      setAudioStream(audioBlob);
      setAudioChunks([]);
      setDuration(0);
    };

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    if (recordingStatus === 'recording') {
      const interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [recordingStatus]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20'>
      <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>
        Text<span className='text-purple-400 bold'>ify</span>
      </h1>
      <h3 className='font-medium md:text-lg'>
        Record <span className='text-purple-400'>&rarr;</span> Transcribe <span className='text-purple-400'>&rarr;</span> Translate
      </h3>

      <button
        className='flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'
        onClick={() => (recordingStatus === 'inactive' ? startRecording() : stopRecording())}
      >
        <p className='text-purple-400'>
          {recordingStatus === 'inactive' ? 'Record' : 'Stop Recording'}
        </p>
        <div className='flex items-center gap-2'>
          {recordingStatus === 'recording' && (
            <>
              <div className='w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping'></div>
              <p className='text-sm text-slate-600'>{formatTime(duration)}</p>
            </>
          )}
          <i className={`fa-solid duration-200 fa-microphone ${recordingStatus === 'recording' ? 'text-rose-400' : 'text-purple-400'}`}></i>
        </div>
      </button>

      <p className='text-base'>
        or{' '}
        <label className='text-purple-400 cursor-pointer hover:text-blue-600 duration-200'>
          upload
          <input
            onChange={(e) => {
              const tempFile = e.target.files[0];
              setFile(tempFile);
            }}
            className='hidden'
            type='file'
            accept='.mp3,.wave'
          />
        </label>{' '}
        a mp3 file
      </p>

      <p className='italic text-slate-400'>Just one click away</p>
    </main>
  );
}

export default HomePage;
