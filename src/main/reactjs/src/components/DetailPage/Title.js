import React from 'react';
import '../../styles/Title.scss';

const Title = () => {
  return (
    <div className="titleContainer">
      <h2 className="title">참조아 소아과</h2>
      <div className="directions">
        <a
          href="https://map.kakao.com/link/to/참조아소아과,37.492361,127.066303"
          target="_blank"
          rel="noopener noreferrer"
        >
          길찾기
        </a>
      </div>
    </div>
  );
};

export default Title;
