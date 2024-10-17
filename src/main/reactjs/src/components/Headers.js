import React from 'react';
import '../styles/Headers.scss';

const headers = ({ isMain }) => {
  return (
    <nav className="container">
      <img className="logo" src={isMain ? 'hospital.png' : 'back.png'} alt="" />
      <div className="title">{isMain ? '소아과 병원 찾기' : '상세 정보'}</div>
    </nav>
  );
};

export default headers;
