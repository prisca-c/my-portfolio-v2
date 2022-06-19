import React, { useState } from "react";

const Tabs = () => {

    const ListTabs = [
        {
            id: 1,
            tabTitle: 'Hard Skills',
            title: 'Hard Skills',
            content: '',
            image: './assets/img/code.svg',
        },
        {
            id: 2,
            tabTitle: 'Soft Skills',
            title: 'Soft Skills',
            content: '',
            image: './assets/img/brain.svg',
        },
        {
            id: 3,
            tabTitle: 'Mes projets',
            title: 'Mes projets',
            content: '',
            image: './assets/img/folder.svg',
        },
    
    ]

    const [currentTab, setCurrentTab] = useState('1')

    const handleClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className="tab-container">

            <div className="tabs">
                {ListTabs.map(tab =>
                    <button 
                        key={tab.id} 
                        id={tab.id} 
                        disabled={currentTab === `${tab.id}`} 
                        onClick={(handleClick)}
                        className="fw-bold roboto-slab"
                    >
                        <img src={tab.image} alt="" /> {tab.tabTitle}
                    </button>
                )}
            </div>

            <div className='content'>
                {ListTabs.map(tab =>
                    <div key={tab.id}>
                        {currentTab === `${tab.id}` 
                        && 
                        <div>
                        <p className='title'> {tab.title}</p>
                            <p>{tab.content}</p>
                        </div>}
                    </div>
                )}
            </div>
            
        </div>
    )
}


export default Tabs;