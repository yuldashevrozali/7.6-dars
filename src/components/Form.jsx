import React, { useEffect, useState } from 'react';
import useSpeechRecognition from '../hooks/usespeechrecognition';

const Form = () => {
    const { start, result, listening } = useSpeechRecognition();
    const [text, settext] = useState('');

    useEffect(() => {
        if (result) {
            settext(result);
        }
    }, [result]);

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(text);
    }

    return (
        <div className='absolute bottom-9 w-full'>
            <form onSubmit={handlesubmit} className='relative'>
                <input
                    type="text"
                    onChange={(e) => settext(e.target.value)}
                    value={text}
                    placeholder="command here..."
                    className="input input-bordered w-full input-lg"
                />
                <button disabled={!text} className='absolute right-3 bottom-4 disabled:text-slate-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12H16L12 8L8 12H11V16H13V12Z"></path>
                    </svg>
                </button>
            </form>

            <button onClick={start} className='absolute right-10 bottom-4'>
                {listening ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.4249 17.839C15.3929 18.4228 14.2341 18.8087 13.0002 18.9451V23H11.0002V18.9451C6.82854 18.4839 3.51623 15.1716 3.05509 11H5.07105C5.55627 14.3923 8.47368 17 12.0002 17C13.0503 17 14.0464 16.7688 14.9404 16.3544L13.3902 14.8042C12.9489 14.9317 12.4825 15 12.0002 15C9.23873 15 7.00016 12.7614 7.00016 10V8.41421L1.39355 2.80761L2.80777 1.3934L22.6068 21.1924L21.1925 22.6066L16.4249 17.839ZM19.3747 15.1604L17.9323 13.7179C18.4407 12.9084 18.788 11.9874 18.9293 11H20.9452C20.7754 12.5366 20.2187 13.9565 19.3747 15.1604ZM16.4658 12.2514L7.68575 3.47139C8.55427 1.99268 10.1613 1 12.0002 1C14.7616 1 17.0002 3.23858 17.0002 6V10C17.0002 10.8099 16.8076 11.5748 16.4658 12.2514Z"></path></svg>
                )}
            </button>
        </div>
    );
};

export default Form;
