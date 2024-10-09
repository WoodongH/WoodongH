import React from 'react';
import '../../styles/Map/DetailInfo.scss';

const DetailInfo = ({ onClose }) => {
  return (
    <>
      <div style={{ minWidth: '150px', position: 'relative' }}>
        <img
          alt="close"
          width="14"
          height="13"
          src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
          style={{
            position: 'absolute',
            right: '5px',
            top: '5px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        />
        <div style={{ padding: '5px', color: '#000' }}>Hello World!</div>
      </div>
    </>
  );
};

export default DetailInfo;
