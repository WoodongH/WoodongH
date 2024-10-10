import React from 'react';
import '../styles/TapGroup.scss';

const TapGroup = ({ actionTab, setActionTab }) => {
  return (
    <nav className="tapContainer">
      <div
        className={`list ${actionTab === 'list' ? 'active' : ''}`}
        onClick={() => setActionTab('list')}
      >
        목록
      </div>
      <div
        className={`map ${actionTab === 'map' ? 'active' : ''}`}
        onClick={() => setActionTab('map')}
      >
        지도
      </div>
    </nav>
  );
};

export default TapGroup;
