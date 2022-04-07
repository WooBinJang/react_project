import moment from "moment";
import React, { useEffect, useState } from "react";
import CalendarTag from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import styled from "styled-components";
import StorageAPI from "../../data/StorageAPI";
import TransactionPlanAPI from "../../data/TransactionPlanAPI";
import "./Calendar.css";
function Calendar() {
  const imageStorage = new StorageAPI();
  const [value, onChange] = useState(new Date(2022, 2, 24));
  const TransactionPlan = new TransactionPlanAPI().getUserTransactionPlans();
  const [mark, setMark] = useState([]);

  useEffect(() => {
    TransactionPlan.map((data) => {
      let dateFormat = moment(data.next_payment_ymd).format("YYYY-MM-DD");
      imageStorage
        .downloadB64(data.management_service.image_id)
        .then(({ file_b64 }) => {
          mark.push({ date: dateFormat, image: file_b64 });
        });
    });
  }, []);
  const CalendarContainer = styled.div`
    button {
      border: 0;
      border-radius: 3px;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;

      &:hover {
        background-color: #556b55;
      }
    }
    .react-calendar__tile--active {
      border-radius: 50%;
      color: white;
    }
    .react-calendar__month-view__days__day--weekend {
    }
  `;
  return (
    <div>
      <CalendarContainer>
        <CalendarTag
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("D")}
          minDetail="month"
          showNeighboringMonth={false}
          value={value}
          showNavigation={false}
          tileContent={({ date, view }) => {
            // 추가할 html 태그를 변수 초기화
            let html = [];
            // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
            if (
              mark.find((x) => x.date === moment(date).format("YYYY-MM-DD"))
            ) {
              html.push(<div className="dot"></div>);
            }
            // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  {html}
                </div>
              </>
            );
          }}
        />
      </CalendarContainer>
      <div></div>
      <div>{moment(value).format("YYYY년 MM월 DD일")}</div>
    </div>
  );
}
export default Calendar;
