// import Button from "./components/Button";
// import Way1 from "./components/Way1";
// import Way2 from "./components/Way2";
// import Way3 from "./components/Way3";
// import Way4 from "./components/Way4";
// import Way5 from "./components/Way5";
// import Way6 from "./components/Way6";
// import UserType from "./components/Way5"
// import { info, adminInfoList } from "./Types";
import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  const user= {
    id: 1,
    name: "mani",
    email: "mani@gmail.com",
  };
  const admin= {
    id: 2,
    name: "rani",
    email: "rani@gmail.com",
    role: "manager",
    loginData: new Date(),
  };

  return (
    <div>
      {/* <Way1 name={"mani"} age={20} isMale={true} />
      <Way2 naam={"mani"} umar={21} isMale={true} />
      <Way3 naam={"mani"} umar={22} isMale={true} />
      <Way4 naam={"mani"} umar={23} isMale={true} />
      <Way5>
        <h2>Using with Children</h2>
      </Way5>
      <Way6 naam={"mani"} umar={23} isMale={true} />
      <Button label="click" onclick={()=>alert("button clicked")} disabled={false} /> */}
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
