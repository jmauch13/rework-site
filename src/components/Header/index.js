import React from 'react';
import SideBar from '../NavBar/Sidebar';
import Navigation from '../Menu/Navigation';

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            {/*<div className='c-logo'>
            <img src={logo} alt='logo' />
            </div>

        <div className='App' id='outer-container'>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id='page-wrap'>
    </div>*/}

        <Navigation />
    
        
        <SideBar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        >

</SideBar>
        
        </header>
        
    );
}

export default Header;