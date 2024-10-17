import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import '../../styles/Map/DetailPageMarker.scss';

const DetailPageMarker = () => {
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.54699,
        lng: 127.09598,
      }}
      //   style={{
      //     // 지도의 크기
      //     width: '90%',
      //     height: '350px',
      //   }}
      level={4} // 지도의 확대 레벨
      className="map"
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: 37.54699,
          lng: 127.09598,
        }}
        image={{
          src: 'hospitalmarker.png', // 마커이미지의 주소입니다
          size: {
            width: 50,
            height: 50,
          }, // 마커이미지의 크기입니다
          options: {
            offset: {
              x: 27,
              y: 69,
            }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          },
        }}
      />
    </Map>
  );
};

export default DetailPageMarker;
