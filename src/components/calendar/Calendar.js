import moment from "moment";
import React, { useEffect, useState } from "react";
import CalendarTag from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import styled from "styled-components";
import StorageAPI from "../../data/StorageAPI";
import TransactionPlanAPI from "../../data/TransactionPlanAPI";

function Calendar() {
  const imageStorage = new StorageAPI();
  const [value, onChange] = useState(new Date(2022, 2, 24));
  const TransactionPlan = new TransactionPlanAPI().getUserTransactionPlans();
  const [mark, setMark] = useState([]);

  useEffect(() => {
    TransactionPlan.map(async (data) => {
      let dateFormat = moment(data.next_payment_ymd).format("YYYY-MM-DD");
      await imageStorage
        .downloadB64(data.management_service.image_id)
        .then(({ file_b64 }) => {
          mark.push({ date: dateFormat, image: file_b64 });
        });
    });
  }, []);
  console.log(mark);
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

      &:active {
        background-color: #a5c1a5;
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
          formatDay={(locale, date) => moment(date).format("D")} // 날'일' 제외하고 숫자만 보이도록 설정
          minDetail="month"
          showNeighboringMonth={false}
          value={value}
          showNavigation={false}
          tileContent={({ date }) => {
            if (
              mark.find((x) => x.date === moment(date).format("YYYY-MM-DD"))
            ) {
              return (
                <>
                  <div className="flex justify-center items-center absoluteDiv">
                    <div className="dot">
                      {/* <img
                        src={"data:image/jpeg;base64," + mark[0].image}
                        alt=""
                      /> */}
                    </div>
                  </div>
                </>
              );
            }
          }}
        />
      </CalendarContainer>
      <div></div>
      <div>{moment(value).format("YYYY년 MM월 DD일")}</div>
    </div>
  );
}
export default Calendar;
