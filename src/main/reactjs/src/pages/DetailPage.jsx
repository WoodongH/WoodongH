import React from 'react';
import Headers from '../components/Headers.js';
import DetailPageMarker from '../components/Map/DetailPageMarker.js';
import Title from '../components/DetailPage/Title.js';
import InfoBox from '../components/DetailPage/InfoBox.js';

const DetailPage = () => {
  return (
    <>
      <Headers isMain={false} />
      <Title />
      <DetailPageMarker />
      <InfoBox />
    </>
  );
};

export default DetailPage;
