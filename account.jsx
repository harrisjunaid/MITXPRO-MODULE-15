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
 * handle input change: callback function
 * - store input transactionState deposit/withdrawal
 * @param {handler} e 
 */
const handleChange = e => {
  console.log(`handleChange ${e.target.value}`);
  transactionState = Number(e.target.value);
};
/**
 * handle submit button: callback function
 * - calculate bank totalState and display
 * @param {handler} e
 */
const handleSubmit = e => {
  totalState += transactionState;
  status = `Account Balance $ ${totalState}`;
  document.getElementById("total").innerHTML = status;
  e.preventDefault();
};
/**
 * functional component
 * @returns {input}  transaction input field with submit button
 * @returns {status} status display
 */
const ATMDeposit = () => {
  /**
   * @description only gets initialized at the first render
   */
  let backupState = totalState + transactionState; 
  let backupStatus = `Account Balance $${backupState}`;
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={handleChange}></input>
      <input type="submit" onClick={handleSubmit}></input>
      <h2 id="total">{status}</h2>
      <h2 >BACKUP STATUS: {backupStatus}</h2>
    </label>
  );
};

// ========================================
ReactDOM.render(<ATMDeposit />, document.getElementById("root"));
