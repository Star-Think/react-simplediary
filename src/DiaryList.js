import React from "react";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, dummyList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{dummyList.length}개의 일기가 있습니다.</h4>
      <div>
        {dummyList.map((it, idx) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
