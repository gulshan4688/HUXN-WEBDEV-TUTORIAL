// import AdminInfo from "./components/AdminInfo";

type info={
    id:number;
    name:string;
    email:string;

};
type adminInfoList= info & {
    role:string;
    loginData:Date;
};

export {type info, type adminInfoList}