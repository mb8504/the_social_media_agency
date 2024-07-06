import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <section className='mt-4 mb-4'>
            <nav className='siteContainer flex flex-row justify-between'>
                <div className='text-xl'>Social Media Agency</div>

                <button onClick={handleNav} className='z-50 text-white md:max-xl:hidden lg:hidden xl:hidden 2xl:hidden'>
                    {!nav ? <AiOutlineMenu className='text-black' size={40} /> : <AiOutlineCloseCircle className='' size={40} />}
                </button>

                <div id='mobile' className={`fixed top-0 w-[65%] h-full bg-black bg-opacity-90 transition-right duration-300 ease-in-out z-40 ${nav ? 'right-0' : 'right-[-100%]'}`}>
                    <ul className='flex flex-col uppercase text-sm text-white p-4 mt-16'>
                        <li className='my-2'>Home</li>
                        <li className='my-2'>Services</li>
                        <li className='my-2'>About</li>
                        <li className='my-2'>Contact</li>
                    </ul>
                </div>

                <div id='desktop' className='hidden md:block'>
                    <ul className='flex flex-row uppercase text-sm'>
                        <li className='ml-10'>Home</li>
                        <li className='ml-10'>Services</li>
                        <li className='ml-10'>About</li>
                        <li className='ml-10'>Contact</li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
