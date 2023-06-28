import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 6, 1);
  const expenseTitle = "Happy Birthday";
  const expenseAmount = 500;

  return (
    <div className="expense-item">
      <div>{expenseDate.toUTCString()}</div>
      <div className="expense-item__description">
        <h2 className="expense-item__title">{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
