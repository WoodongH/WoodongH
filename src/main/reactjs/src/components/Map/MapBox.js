import React, { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import ClickMarker from './ClickMarker';
import '../../styles/Map/MapBox.scss';

const positions = [
  { lat: 33.44975, lng: 126.56967 },
  { lat: 33.450579, lng: 126.56956 },
  { lat: 33.4506468, lng: 126.5707 },
];

const MapBox = () => {
  const [selectedMarker, setSeleteMarker] = useState(); // positions index 상태관리
  console.log('selectedMarker>>>', selectedMarker); // 0 .. 2

  return (
    <Map // 지도를 표시할 Container
      className="mapBox"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      // style={{
      //   // 지도의 크기
      //   width: '90%',
      //   height: '400px',
      // }}
      level={3} // 지도의 확대 레벨
    >
      {positions.map((position, index) => (
        <ClickMarker
          index={index}
          key={`EventMarkerContainer-${position.lat}-${position.lng}`}
          position={position}
          onClick={() => setSeleteMarker(index)} // 클릭 시 해당 마커의 인덱스 저장
          isClicked={selectedMarker === index} // selectedMarker와 index가 같으면 true, 다르면 false / 클릭된 마커를 배열에서 찾는 역할
          onClose={() => setSeleteMarker(null)} // 인포창을 닫는 함수
        />
      ))}
    </Map>
  );
};

export default MapBox;
