<h3 align="center">FETCHING DATA: Local Machine</h3>

## About The Project

going out to Hacker News and
getting MIT's news events

- useEffect( ) is keeping track of [url].
- if blank: 
   - as blank, it would go out every time and useEffect
   because it would re-render, call useEffect,
    and useEffect would cause another re-render
    because things elsewhere we're changing.
-  Let's go back and we
see now it's getting kind of crowded up in here, that in this useEffect there's a lot of states changing
here, it's loading. Here, it has loaded, and we've got the data back. And possibly we might have
an error. So, these are lifecycle events. And now, we'd like to handle them better. And we'll take
a look next at grouping some of these together, and using useReducer

getting data is called a side effect in web components and doesent affect rendering
part of the life cycle and can be controlled in useEffect. useEffect it self does not cause a re-render.

useReduce to keep track of states
  

![](assets/account.drawio.svg)



VIDEO: 15.10
https://classroom.emeritus.org/courses/1173/pages/video-15-dot-10-15-dot-11-13-46-fetch-data-from-hacker-news-and-usereducer-for-fetching-data?module_item_id=290795
### Built With

- HTML
- React
- Bootstrap

### Requirement

- Run and Install http-server on localhost:8080
--  npm install -g http-server 
-- http-server 
--  http-server -a localhost -p 8080 -c-1 

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

