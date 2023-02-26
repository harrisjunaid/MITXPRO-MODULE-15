




  <h3 align="center">ATM COMPONENT</h3>

## About The Project

**The logic for input change and submit handle along with variables (running balance, current user transaction and account balance display message) have moved from *ATMDeposit* into *Account* parent component.**
- **Account** simulates bank which 
  - creates form
  - gets input from ATMDeposit child
  - handles form submit through handleSubmit
- **ATMDeposit** simulates ATM which creates input field along with a submit button
  - input change is managed through handleSubmit method.

  

![](assets/account.drawio.svg)



**VIDEO: 15.4**
https://classroom.emeritus.org/courses/1173/pages/video-15-dot-4-15-dot-5-14-20-atm-in-react-and-atm-state?module_item_id=290785

### Built With

- HTML
- React
- Bootstrap


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

