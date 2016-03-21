### Command-Line Interface
- cd, mkdir, rm, ls, touch, mv, pwd

### GIT
- Primary Work Pattern
  - work on files
  - add files to stage
  - commit what is on stage
    - commit message:  present tense describing what the commit does
      - YES:  "adds mta user interface"
      - NO:   "added mta user interface"
- git remote: location to store the repo... on a different machine
- Github is a social network that USES the git technology
  - forking is to make a copy for your own user

#### GIT EXAMPLES
- add to stage
  - `git add .`
- commit changes
  - `git commit -m "adds good stuff"`
- add a new remote
  - `git remote add NAME-OF-REMOTE URL-OF-REMOTE`
  - `git remote add upstream https://github.com/ga-students/WDI_KNOCKKNOCK_OWL.git`


### HTML & CSS
- inline:  I'll go as up left as I can... no height or width on me
- block: I'll take up an entire line
- inline-block: I'll take up space... but you can be next to me


### Javascript
- variable:  consider the assignment NOT the description
  - x = 4   NO "x equals 4"
  - x = 4   YES "4 is assigned to x"
- objects: key values storage
  - I have attributes
  - I have abilities
- arrays: lists of data
- loops:
  - while:  when I'm not sure how many time the loop will continue
  - for:  when I DO know how many time the loop should run

### DOM
- Document Object Model
  - JS connecting to the HTML
- We can navigate using
  - `document.body.firstElementChild`, etc. etc.
- We can also query the dom
  - `document.querySelector('#specific-person')``
  - `document.querySelectorAll('.person')``
- We can create a new element
  - `var liNode = document.createElement('li')`
- We can modify the text
  - `liNode.innerText = 'banana'`
- We can append element to page
  - `document.body.appendChild(liNode)`
- We can modify attributes
  - `imageNode.setAttriubtes('src', 'a-picture-url')`



```js

// Passing an anoymemous function
setInterval(function(){    // I didn't name the function
  console.log('Bananas!');
}, 1000);


// Naming the function
function logBananas(){  ///  LOOOK I named it!!!!
  console.log('Bananas!');
}
setInterval(logBananas, 1000);

```


<!--  -->
