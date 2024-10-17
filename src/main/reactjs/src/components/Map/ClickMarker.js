import React, { useState } from 'react';
import { CustomOverlayMap, MapMarker, useMap } from 'react-kakao-maps-sdk';
import SimpleInfo from './SimpleInfo';
import '../../styles/Map/CustomOverlayMap.scss';
import { Link } from 'react-router-dom';

const ClickMarker = ({ position, onClick, isClicked, onClose }) => {
  // console.log('isClicked>>>', isClicked); // true, false

  const map = useMap(); // 클릭한 마커가 중앙으로 오도록 이동
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
          {isClicked && (
            <CustomOverlayMap
              position={position} // 줌인 줌아웃시에도 위치 고정되도록
              yAnchor={1.33} // 마커 위로 커스텀 오버레이 위치 조정
              xAnchor={0.5} // 가로 중앙에 맞춤
              clickable={true}
              // zIndex={10}
              // style={{
              //   width: '300px',
              //   transform: 'translate(-20px, -100px)',
              //   backgroundColor: 'white',
              //   borderRadius: '5px',
              //   boxShadow: '0px 1px 2px #888',
              // }}
            >
              <div className="wrap">
                <div className="info">
                  <div className="title">
                    <p>참바로 소아과</p>
                    <img
                      alt="close"
                      // width="14"
                      // height="13"
                      // src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                      src="cancelled.png"
                      // style={{
                      //   position: 'absolute',
                      //   right: '5px',
                      //   top: '5px',
                      //   cursor: 'pointer',
                      // }}
                      onClick={onClose}
                    />
                  </div>
                  <div className="body">
                    <div className="desc">
                      <div className="address">
                        제주특별자치도 제주시 첨단로 242
                      </div>
                      <div className="phone-number">02-1234-5678</div>
                      <div className="linkContainer">
                        <a
                          href="https://www.kakaocorp.com/main"
                          target="_blank"
                          className="link"
                          rel="noreferrer"
                        >
                          상세페이지
                        </a>
                        {/* <button type="button">상세페이지</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomOverlayMap>
          )}
          {/* {isClicked && <DetailInfo onClose={onClose} />} */}
          {isOver && !isClicked && <SimpleInfo />}
        </>
      )}
    </MapMarker>
  );
};

export default ClickMarker;
