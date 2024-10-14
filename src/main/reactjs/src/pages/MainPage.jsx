import React, { useState } from 'react';
import Headers from '../components/Headers';
import MapBox from '../components/Map/MapBox';
import TapGroup from '../components/MainPage/TapGroup';
import SearchBox from '../components/MainPage/SearchBox';
import { List } from '../components/MainPage/List';

const MainPage = () => {
  const [actionTab, setActionTab] = useState('list'); // tab이 목록인지 지도인지 상태관리
  return (
    <>
      <Headers isMain={true} />
      <TapGroup actionTab={actionTab} setActionTab={setActionTab} />
      <SearchBox />
      {actionTab === 'list' && <List />}
      {actionTab === 'map' && <MapBox />}
    </>
  );
};

export default MainPage;
