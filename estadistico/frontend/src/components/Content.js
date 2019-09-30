import React from 'react';
import Topbar from './Topbar';
import PageContent from './PageContent';
import Footer from './Footer'

const Content = () => {
    return (
        <div id='content-wrapper' className='d-flex flex-column'>
            <div id="content">
                <Topbar />
                <PageContent />
            </div>
            <Footer />
        </div>
    );
};

export default Content;