
/**
 * called by Account( )
 * @param {event} onChange
 * @returns {input}  transaction input field with submit button
 * @returns {status} status display
 */
const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];{/*15.6*/}
  return (
    <label className="label huge">
      <h4>{choice[Number(!isDeposit)]}</h4>{/*15.6*/}
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  );
};

/**
 * MAIN FUNCTION: Parent Component
 * - Simulates Bank: keep record of balance
 * @returns {form} 
 * @description 
 * - form displays balance 
 * - creates input through <ATMDeposit />
 * - handles onSubmit
 */
const Account = () => {
  console.log('Rendered: Account()');
  let transactionState = 0; // state of this transaction
  /**
 * DO NOT USE:
 * - let totalState = 100; // Account total at Bank
 * USE:
 * - const [totalState, setTotalState] = React.useState(0);
 */
  const [totalState, setTotalState] = React.useState(100); //bank state
  const [isDeposit, setIsDeposit] = React.useState(true); // 15.6
  /**
 * @type {string} - account status text
 */
  let status = `Account Balance $${totalState}`;
  /**
   * DO NOT USE:
   * - let status = 'zero';
   * because on rerender fired from setTotalState status = 'zero'
   * and "status = `Account Balance $ ${totalState}`;" is not executed
   */
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
 * @param {handler} e
 */
  const handleSubmit = (e) => {
    let newTotal = isDeposit ? totalState + transactionState : totalState - transactionState; //15.6
    /**
     * DO NOT USE:
     * - totalState += transactionState;
     * USE:
     * - state setter function to fire a rerender 
     */
    setTotalState(newTotal);    
    /** 
     * "status = `Account Balance $ ${totalState}`;"
     * already done outside handleSubmit
     * and is called at every rerender 
     * fired throuhg setTotalState( )
     * 
    */
    /**
     * should not directly wright into actual DOM 
     * - React shadow DOM does not know what is being done in actual DOM
     * document.getElementById("total").innerHTML = status;
     */
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button onClick={()=>setIsDeposit(true)}>Deposit</button>{/*15.6*/}
      <button onClick={()=>setIsDeposit(false)}>Cash Back</button>{/*15.6*/}
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
