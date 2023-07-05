import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  
  /* This way doesn't work because React only render all applications once no matter there is any code newly added

  let title = props.title;

  const clickHandler = () => {
    title = "Updated!";
    console.log(title);
  }

  */

  // title is variable whose initial value is originally props.title, setTitle is a function updating variable "title"  
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Finally updated!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2 className="expense-item__title">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
