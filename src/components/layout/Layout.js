import Calendar from "../calendar/Calendar";
import "./Layout.css";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import UserDataService from "../../service/UserDataService";

function Layout() {
  const userData = new UserDataService();
  const [userinfo, setUserinfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await userData.getUserData();
        setUserinfo(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>대기중</div>;
  }
  if (!userinfo) {
    return null;
  }
  return (
    <div className="Layout">
      <Calendar userData={userinfo} />
    </div>
  );
}

export default Layout;
