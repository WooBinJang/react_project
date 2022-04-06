import { useState } from "react";
import StorageAPI from "../../data/StorageAPI";
import Calendar from "../calendar/Calendar";
import "./Layout.css";
function Layout() {
  const [image, setImage] = useState("");
  const aa = new StorageAPI();
  aa.downloadB64("MyrA73r5UmQbpPusVpktwi");
  aa.downloadB64("MyrA73r5UmQbpPusVpktwi").then(({ file_b64 }) => {
    setImage(file_b64);
  });
  return (
    <div className="Layout">
      <Calendar />
    </div>
  );
}

export default Layout;
