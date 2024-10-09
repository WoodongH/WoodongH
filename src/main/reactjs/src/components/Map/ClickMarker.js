import React, { useState } from 'react';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';
import DetailInfo from './DetailInfo';
import SimpleInfo from './SimpleInfo';

const ClickMarker = ({ position, onClick, isClicked, onClose }) => {
  // console.log('isClicked>>>', isClicked); // true, false

  const map = useMap();
  const [isOver, setIsOver] = useState(false); // 마우스 hover 여부 상태관리
  // console.log('isOver>>>', isOver); // true, false

  const handleClick = (marker) => {
    onClick();
    map.panTo(marker.getPosition());
  };
  return (
    <MapMarker
      position={position} // 마커를 표시할 위치
      onClick={(marker) => handleClick(marker)}
      onMouseOver={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
    >
      {(isClicked || isOver) && (
        <>
          {isClicked && <DetailInfo onClose={onClose} />}
          {isOver && !isClicked && <SimpleInfo />}
        </>
      )}
    </MapMarker>
  );
};

export default ClickMarker;
