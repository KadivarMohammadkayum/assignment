import { createStore } from "redux";
const initialState={
    count:0
};

const reducer=(state=initialState,action)=>{
}
const Store=createStore(reducer);
export default Store