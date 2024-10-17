import React from 'react';
import '../../styles/InfoBox.scss';

const InfoBox = () => {
  return (
    <section className="info-container">
      <h3 className="title">병원 정보</h3>
      <div className="grid-container">
        <div className="grid-item header">주소</div>
        <div className="grid-item">
          서울특별시 강남구 개포로109길 9, 203호 (개포동, 대치종합상가)
        </div>

        <div className="grid-item header">전화번호</div>
        <div className="grid-item">02-445-7172</div>

        <div className="grid-item header">진료일</div>
        <div className="grid-item">월 ~ 금 9:00 ~ 20:00 / 토 9:00 ~ 13:00 </div>

        <div className="grid-item header">점심 시간</div>
        <div className="grid-item">월 ~ 금 13:00 ~ 14:00 / 토 없음</div>
      </div>
    </section>
  );
};

export default InfoBox;
