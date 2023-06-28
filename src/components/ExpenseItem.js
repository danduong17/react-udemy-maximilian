import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>July 01 2023</div>
            <div className="expense-item__description">
                <h2 className="expense-item__title">Happy Birthday</h2>
                <div className="expense-item__price">$200</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
