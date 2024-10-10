import React, { useState } from 'react';
import Headers from '../components/Headers';
import TapGroup from '../components/TapGroup';
import SearchBox from '../components/SearchBox';
import MapBox from '../components/Map/MapBox';
import { List } from '../components/List';

const MainPage = () => {
  const [actionTab, setActionTab] = useState('list'); // tab이 목록인지 지도인지 상태관리
  return (
    <>
      <Headers />
      <TapGroup actionTab={actionTab} setActionTab={setActionTab} />
      <SearchBox />
      {actionTab === 'list' && <List />}
      {actionTab === 'map' && <MapBox />}
    </>
  );
};

export default MainPage;
