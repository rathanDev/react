'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';


const Nav = () => {

    // const isUserLoggedIn = false;
    const {data: session} = useSession();
    let isUserLoggedIn = session?.user;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    // only runs at start
    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, []);

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image 
                src = "/assets/images/logo.svg" 
                alt = "Promptia Logo"
                width={30}
                height={30}
                className='object-contain'
                />
                <p className='logo_text'>Promptopia</p>
            </Link>

            {/* {alert(session?.user)} */}
            {/* {alert(providers)} */}

            <div className='sm:flex hidden'>
                {
                isUserLoggedIn 
                ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt' className='black_btn'>Create post</Link>
                        <button type='button' onClick={signOut} className='outline_btn'>Sign out</button>
                        <Link href='/profile'>
                            <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            />
                        </Link>
                    </div>
                    )
                : (
                <>
                    {providers && Object.values(providers).map(
                        (provider) => (
                            <button 
                            type='button' 
                            key={provider.name} 
                            onClick={() => signIn(provider.id)}
                            className='black_btn'
                            >
                                Sign In
                            </button>
                        )
                    )}
                </>
                )
                }
            </div>

            {/* mobile navigation */}
            <div className='sm:hidden flex relative'>
                {
                    isUserLoggedIn ? (
                        <div className='flex'>
                            <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => setToggleDropdown((prev) => !prev)}
                            />

                            {toggleDropdown && (
                                <div className='dropdown'>
                                    <Link 
                                        href='/profile'
                                        className='dropdown_link'
                                        onClick={() => setToggleDropdown(false)}
                                        >
                                            My Profile
                                    </Link>
                                    <Link 
                                        href='/create-prompt'
                                        className='dropdown_link'
                                        onClick={() => setToggleDropdown(false)}
                                        >
                                            Create prompt
                                    </Link>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setToggleDropdown(false);
                                            signOut();
                                        }}
                                        className='mt-5 w-full black_btn'
                                        >
                                        Sign Out
                                    </button>
                                </div>
                            )}

                        </div>
                    ) 
                    : (
                        <>
                            {providers && Object.values(providers).map(
                                (provider) => (
                                    <button 
                                    type='button' 
                                    key={provider.name} 
                                    onClick={() => signIn(provider.id)}
                                    className='black_btn'
                                    >
                                        Sign In
                                    </button>
                                )
                            )}
                        </>
                    )
                }
            </div>

        </nav>
    )
}

export default Nav;