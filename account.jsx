
/**
 * called by Account( )
 * @param {event} onChange
 * @returns {input}  transaction input field with submit button
 * @returns {status} status display
 */
const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  );
};

/**
 * Parent Component
 * - Simulates Bank: keep record of balance
 * @returns {form} 
 * @description 
 * - form displays balance 
 * - creates input through <ATMDeposit />
 * - handles onSubmit
 */
const Account = () => {
 /**
 * @type {number} - transaction deposit/withdrawal
 */
  let transactionState = 0; // state of this transaction
  /**
 * @type {number} -BANK BALANCE
 */
  let totalState = 100; // Account total at Bank
  /**
 * @type {string} - account status text
 */
  let status = `Account Balance $${totalState}`;
  /**
 * handle input change
 * - store input transactionState deposit/withdrawal
 * @param {handler} e 
 */
  const handleChange = e => {
    console.log(`handleChange ${e.target.value}`);
    transactionState = Number(e.target.value);
  };
  /**
 * handle submit button
 * - calculate bank totalState and display
//  * @param {handler} e
 */
  const handleSubmit = (e) => {//event is better added
    totalState += transactionState;
    status = `Account Balance $ ${totalState}`;
    document.getElementById("total").innerHTML = status;
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
