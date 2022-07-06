import React, { useState } from 'react';

const Tabs = ({Tabs}) => {

  const [currentTab, setCurrentTab] = useState('1');

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {Tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className="roboto-slab"
          >
            {tab.image}
            {tab.tabTitle}
          </button>
        ))}
      </div>

      <section className="behind-tab-content">
        <div className="tab-content">
          {Tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <>
                  <h2 className="title"> {tab.title}</h2>
                  {tab.content}
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tabs;
