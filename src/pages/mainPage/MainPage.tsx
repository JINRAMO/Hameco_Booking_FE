import React, { useState } from "react";
import MainDesignerPage from "./MainDesignerPage";
import MainManagerPage from "./MainManagerPage";
import MainUserPage from "./MainUserPage";

type UserType = "designer" | "manager" | "user";

const MainPage: React.FC = () => {
  // 디자이너인지 점장인지 사용자인지 구분하는 변수
  const [userType] = useState<UserType>("designer");

  if (userType === "designer") {
    return <MainDesignerPage />;
  } else if (userType === "manager") {
    return <MainManagerPage />;
  } else {
    return <MainUserPage />;
  }
};
export default MainPage;
