import React from 'react';
import Feed from '@components/feed';
import Nav from '@components/nav';
import Provider from '@components/provider';

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
                {/* <br className='max-md:hidden'/> */}
                <br className='max-md'/>
                <span className='orange_gradient text-center'>
                    AI-powered prompts
                </span>
            </h1>
            <p className='desc text-center'>
                Promptia is an open-source AI prompting tool for beginners
            </p>

            <Feed/>

        </section>
    )
}

export default Home;