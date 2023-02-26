

Video 12 – Paginate Data
So, we saw last time that we retrieved data from the Hacker News API. And we had quite a lot of
items retrieved. What we'd like to do now is paginate them. So, we'd like to choose how many we
have per page. And then we can step through the pages using these buttons so that's stepping
forward and we can step back. So, we'd like to add this to our user interface. Let's take a look at
the code.

add pagination helper functions.
  'range'. (start, end) return array uses .fill and .map
  'paginate'(items, pageNumber, pageSize) returns items for that page

 'App'. What we're going to do is we're going to add
to our '< Fragment >' here. At the very bottom, we're going to put our 'Pagination'. And we're going
to pass in the data that we've retrieved. We're going to pass in the 'pageSize'. I'm hard-coding it
here to be 10, but we could, for example, have an input that allows the user to choose the
'pageSize'.
And we're going to call 'onPageChange'. We're going to have a function that handles the page
change. Let's just take a look at that function. So, when we click on one of those blue buttons,
we're going to pick up which button it was going to get '(e.target.textContent)'. And we're going to
convert that to a number. And so, if the button had number 2 on it, we'd set the current page
number 2. So, the button that was clicked on, that's going to be page that we're going to go to.
Okay, so that's pretty straightforward. Let's take a look at 'Pagination'. So, here we're going to
pass in the list of items that we've retrieved. We're going to pass in the 'pageSize', and then that's
the handler that we just saw. So, here's 'Pagination'. We're going to get the number of items that
have been returned. If they're less or equal to 1, then we don't need any buttons so this will return.
We're not going to do any 'Pagination'. We're not going to put the buttons up if we don't have more
than one item returned. Now, we're going to calculate the 'pageSize', the total number of pages
we need We're going to get the item's length and defined by 'pageSize'. And then we're going to
round up. So, for example, if we've got 11 items, we're going to divide 11 by 'pageSize'. It's going
to come to 1.1, 'pageSize' is 10. And we want to round that up to 2. So, we're going to get 2 pages
then. Now, we get an 'Array' that's got the numbers 1, 2 in it if we've got 2 pages. And now, what
we're going to do is we're going to return those two blue buttons. So, this is where they're created.
And now, we put them into an unordered '{list}'.
So, we've got buttons in the '{list}' and we 'return' that between two < divs >, just '< nav>'. So,
that's basically it. Let's just go and take a look. Now, at this, we need to pass in these properties.
So, we've lined those up. Now, remember one of the things is that we're going to pick those
properties up in the 'Pagination' web component. So, usually, we don't have to match these
arguments. But here we do because we're using decomposition here, that whatever object is
being passed to us, and that's usually called props.
We're going to pick out props.items, prop.pageSize, and props.onPageChange.Okay, so that's
one little thing to watch out for. Okay, so that's the code. And as an exercise, why don't you put
in an input so we can input the number of items per page, okay, that we want they'll set the
'pageSize'. Put in an input, I don't mind where you put it, but we should be able to set the
'pageSize' so that, for example, we can have 5 items instead of 10. As I say, I hard-coded. Okay,
so, that's been a long journey with getting data, but now I think we've mastered it.


  <h3 align="center">ATM COMPONENT</h3>

## About The Project
- user balance managed through state hook destructured as [accountState , setAccountState]. This is usually stored in a bank DB.
- user interaction deposit/withdrawal stored in local variable called deposit. That is updated in handleChange function.
- on submit newTotal is calculated and updated through setter function called in handleSubmit function.
  

![](assets/account.drawio.svg)



VIDEO: 15.3
https://classroom.emeritus.org/courses/1173/pages/video-15-dot-2-15-dot-3-17-14-atm-with-html-and-atm-component?module_item_id=290784

### Built With

- HTML
- React
- Bootstrap


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

