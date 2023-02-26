
  <h3 align="center">ATM STATE</h3>

## About The Project

- **Deposit/Cash Back buttons have been rendered and logic is controlled through state variable isDeposit.**





  

![](assets/account.drawio.svg)



VIDEO: 15.6
https://classroom.emeritus.org/courses/1173/pages/video-15-dot-6-7-17-atm-deposit-and-cashback-buttons?module_item_id=290786

## History

15.5
 - use useState for managing component's state instead of global variables.
 - status should not be rendered in DOM because React shadow DOM does not know what is beign done directly into the actual DOM.
    document.getElementById("total").innerHTML = status;


The logic for input change and submit handle along with variables current user transaction and account balance display message (but totalState is managed through useState) have moved into Account parent component.
- Account simulates bank which 
  - creates form
  - gets input from ATMDeposit child
  - handles form submit through handleSubmit
- ATMDeposit simulates ATM which creates input field along with a submit button
  - input change is managed through handleSubmit method.
  
### Built With

- HTML
- React
- Bootstrap


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

