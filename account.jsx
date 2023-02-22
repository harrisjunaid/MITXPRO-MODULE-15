// this keeps a running total of deposit/withdrawal
/**
 *  called by Account( ) that is the  main function
 * @function ATMDeposit - create input field and handle input change
 * @param {function} { onChange } - handleChange for input: update deposit 
 * @returns {input} input amount: deposit/withdrawal
 */
const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
};

/**
 *  main function to create the form
 *  - displaying balance
 *  - getting input deposit/withdrawal through <ATMDeposit />
 * @type {function}
 * @name Account
 * @param {null}
 * @returns {form} onSubmit event
 * @returns {number} display account balance
 * @returns {function} ATMDeposit - create input for deposit/withdrawal
 */
const Account = () => {
  /**
   * @description component state: account balance usually stored in bank
   * @name accountState
   */
  const [accountState, setAccountState] = React.useState(0);
  /**
   * @type {number} - to store input
   */
  var deposit = 0;

  /**
   * @function handleChange - store updated input in deposit
   * @param {  handler } e - event handler
   */
  const handleChange = e => {
    console.log(`handleChange ${e.target.value}`);
    deposit = Number(e.target.value);
  };
  /**
   * @function handleSubmit - form submit: setAccountState(newTotal)
   * @param {handler} e 
   */
  const handleSubmit = e => {
    let newTotal = accountState + deposit;
    alert(`Account total = ${newTotal}`);
    setAccountState(newTotal);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance {accountState}</h2>     
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
