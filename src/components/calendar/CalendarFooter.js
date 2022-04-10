import "./CalendarFooter.css";
import moment from "moment";
import { numberComma } from "../../utils/NumberComma";

function CalendarFooter({ value, userData }) {
  let totalPrice = 0;
  let count = 0;
  for (let data of userData) {
    if (data.date === moment(value).format("YYYY-MM-DD")) {
      totalPrice += data.price;
      count++;
    }
  }
  return (
    <div className="CalendarFooter">
      <div className="CalendarFooter-top-box">
        <div className="CalendarFooter-date">
          {moment(value).format("DD일")}
        </div>
        <div className="CalendarFooter-price">
          {`${numberComma(totalPrice)}원`}· {`${count}건`}
        </div>
      </div>

      <div className="CalendarFooter-list-box">
        <ul className="CalendarFooter-list-ul">
          {userData?.map((item) => {
            if (item.date === moment(value).format("YYYY-MM-DD")) {
              return (
                <li className="CalendarFooter-list-li" key={item.id}>
                  <div className="CalendarFooter-list-top-box">
                    <img
                      className="CalendarFooter-list-item-image"
                      src={"data:image/jpeg;base64," + item.image}
                      alt="캘린더에 안에 삽입된 이미지"
                    />
                    <div>
                      <div className="CalendarFooter-list-item-name">
                        {item.name}
                      </div>
                      <div className="CalendarFooter-list-item-price">
                        {`${numberComma(item.price)}원 / 1개월`}
                      </div>
                    </div>
                  </div>
                  <div className="CalendarFooter-detail-box">
                    <button className="CalendarFooter-detail-btn">&gt;</button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
export default CalendarFooter;
