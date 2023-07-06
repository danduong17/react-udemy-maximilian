import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
//   const [pickedYear, setPickedYear] = useState(2022);

  const yearChangeHandler = (event) => {
    // setPickedYear(event.target.value);
    // console.log(pickedYear);
    // props.onSelectYear(pickedYear); --> instead of logging the current selected year, it logs the year that was just selected previously
    props.onFilterYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* In select element, we can remove value attribute, it stills result the same */}
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
