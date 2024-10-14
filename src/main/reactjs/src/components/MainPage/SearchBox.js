import React from 'react';
import '../../styles/SearchBox.scss';

const SearchBox = () => {
  return (
    <section className="searchContainer">
      <h3 className="title">병원 찾기</h3>
      <p className="region">지역 검색</p>
      <div className="regionSearch">
        <div className="seoul">서울특별시</div>
        <form className="regionContainer">
          <select name="gu" id="gu">
            <option value="강남구">강남구</option>
            <option value="중랑구">중랑구</option>
            <option value="강서구">강서구</option>
          </select>
          <select name="gun" id="gun">
            <option value="개포동">개포동</option>
            <option value="중화동">중화동</option>
          </select>
          <button type="button">검색</button>
        </form>
      </div>
      <p className="keyword">키워드 검색</p>
      <form className="keywordContainer">
        <input type="text" placeholder="병원명을 입력하세요." />
        <button type="button">검색</button>
      </form>
    </section>
  );
};

export default SearchBox;
