import React from 'react';

const Header = (props) => {
    const { handleNew } = props;

    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/Free-Scribe/">
                <h1 className='font-large font-bold'>
                    Text<span className='text-purple-400 font-bold'>ify</span>
                </h1>
            </a>
            <div className='flex items-center gap-4'>
                
                <a 
                    href="/Free-Scribe/"
                    className={`specialBtn flex items-center gap-2 px-3 py-2 rounded-lg text-purple-400 cursor-pointer transition-opacity duration-300`}
                >
                    <p>New</p>
                    <i className="fa-solid fa-box"></i>
                </a>
            </div>
        </header>
    );
}

export default Header;
