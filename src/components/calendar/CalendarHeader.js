import { numberComma } from "../../utils/NumberComma";
import "./CalendarHeader.css";
import moment from "moment";

function CalendarHeader({ userData, value }) {
  let totalPrice = 0;
  let count = 0;
  for (let data of userData) {
    if (
      data.date >= moment(value).format("2022-03-01") &&
      data.date <= moment(value).format("2022-03-31")
    ) {
      count++;
      totalPrice += data.price;
    }
  }
  return (
    <div className="CalendarHeader">
      <div className="CalendarHeader-back-box">
        <button className="CalendarHeader-back-btn">&lt;</button>
      </div>
      <div className="CalendarHeader-content-box">
        <div className="CalendarHeader-month">3월 지출 내역</div>
        <div className="CalendarHeader-price">
          {`${numberComma(totalPrice)}원`}
          <span className="CalendarHeader-price-gray">· {`${count}건`}</span>
        </div>
      </div>
    </div>
  );
}
export default CalendarHeader;
