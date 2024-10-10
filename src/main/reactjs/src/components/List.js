import React from 'react';
import '../styles/List.scss';

const hospitalData = [
  {
    id: 1,
    name: '참바로 소아과',
    phoneNumber: '02-1234-4567',
    address: '서울특별시 강남구 개포동',
    distance: '19km 이내',
  },
  {
    id: 2,
    name: '하늘 소아과',
    phoneNumber: '02-9876-5432',
    address: '서울특별시 서초구 반포동',
    distance: '12km 이내',
  },
  {
    id: 3,
    name: '아이튼튼 소아과',
    phoneNumber: '02-2345-6789',
    address: '경기도 성남시 분당구',
    distance: '25km 이내',
  },
  {
    id: 4,
    name: '튼튼베이비 소아과',
    phoneNumber: '031-1234-5678',
    address: '경기도 고양시 일산동구',
    distance: '33km 이내',
  },
  {
    id: 5,
    name: '우리아이 소아과',
    phoneNumber: '02-3456-7890',
    address: '서울특별시 마포구 합정동',
    distance: '10km 이내',
  },
  {
    id: 6,
    name: '이웃 소아과',
    phoneNumber: '02-4567-1234',
    address: '서울특별시 동작구 상도동',
    distance: '8km 이내',
  },
  {
    id: 7,
    name: '맑은하늘 소아과',
    phoneNumber: '02-5678-2345',
    address: '서울특별시 영등포구 여의도동',
    distance: '15km 이내',
  },
  {
    id: 8,
    name: '건강한아이 소아과',
    phoneNumber: '02-6789-3456',
    address: '서울특별시 성북구 종암동',
    distance: '6km 이내',
  },
  {
    id: 9,
    name: '튼튼키즈 소아과',
    phoneNumber: '031-8765-4321',
    address: '경기도 수원시 영통구',
    distance: '30km 이내',
  },
  {
    id: 10,
    name: '사랑 소아과',
    phoneNumber: '02-7890-4567',
    address: '서울특별시 송파구 잠실동',
    distance: '22km 이내',
  },
];

export const List = () => {
  return (
    <section>
      {hospitalData.map((hospital) => (
        <div key={hospital.id} className="listContainer">
          <h3 className="name">{hospital.name}</h3>
          <div className="infoContainer">
            <div className="info">
              <div className="phoneNumber">{hospital.phoneNumber}</div>
              <div className="address">{hospital.address}</div>
            </div>
            <div className="link">
              <div className="distance">{hospital.distance}</div>
              <img src="triangle.png" alt="triangle" />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
};
