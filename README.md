




  <h3 align="center">FETCHING DATA FROM LOCAL MACHINE</h3>

## About The Project

getting data is called a side effect in web components. This doesent affect rendering
part of the life cycle and can be controlled in useEffect.

 anything inside useEffect (its first argument) does not cause a re-render. A rerender is caused by useEffect's second argument. This second arbument could be blank [] if re-render is not required.

 So, we see that 'useEffect' is important because it allows us to take actions while the object is
being loaded, while it's actually is loaded. And various side effects are happening, like going out
and getting data, and pulling back that data and storing it. And then finally, when our component
is unloaded that we can clean up. As I said, that useEffect itself does not cause any re-renderings.
However, if we're doing things inside of 'useEffect' that are using you 'useState' like here, we're
setting the data that will cause a re-render of the component.


axios library is used to fetch data which is easier than fetchData()
useReduce to keep track of states


So, we've seen how to render lists in React. And we looked at the example where we were getting
data from a local variable. Now, let's go and get the data from the web. So, we're going to hit a
URL and pull in data. Let's take a look at the code. So, the data that we're going to get is going to
be in our local file system.

It's an object, and inside the object is an array called ' "hits":'.


Now, we may want to do a query and set that we go to another website. For now, we're going to
hardwire this. And we're going to use up here, we'll have 'localhost:8080' and the 'date'. So, let's
take a look where we make the request on the web. We're going to make it inside 'useEffect()'.




https://user-images.githubusercontent.com/51511122/221484611-5c03d7ed-4828-4539-8ddf-0b4589f0ce6d.mp4


![](assets/account.drawio.svg)






VIDEO: 15.7
https://classroom.emeritus.org/courses/1173/pages/video-15-dot-7-15-dot-8-10-10-fetching-data-exercise-overview-and-fetch-data-via-a-url-with-useeffect?module_item_id=290790

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

