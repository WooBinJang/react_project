import Calendar from "../calendar/Calendar";
import "./Layout.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import StorageAPI from "../../data/StorageAPI";
import TransactionPlanAPI from "../../data/TransactionPlanAPI";
function Layout() {
  const imageStorage = new StorageAPI();
  const TransactionPlan = new TransactionPlanAPI().getUserTransactionPlans();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    TransactionPlan.map(async (data) => {
      let dateFormat = await moment(data.next_payment_ymd).format("YYYY-MM-DD");
      await imageStorage
        .downloadB64(data.management_service.image_id)
        .then(({ file_b64 }) => {
          userData.push({
            date: dateFormat,
            image: file_b64,
            name: data.name,
            price: data.price,
          });
        });
    });
  }, []);

  return (
    <div className="Layout">
      <Calendar userData={userData} />
    </div>
  );
}

export default Layout;
