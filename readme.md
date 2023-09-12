Introduction
---
This test project is a "Frontend skills" assessment for MindArc. This contains solutions for the 2 given exercises. And, a bunos question to explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

##### Exercise 1
Build a responsive and fluid page based on the given designs or mockup.

##### Exercise 2
Add/create a tabs section (desktop) or accordion section (mobile) with the given JSON data.


Exercise 1
---
When you view the `index.html` file you can see the HTML version of the mockups given:

##### Desktop
https://github.com/mindarc/frontend-assessment-magento/blob/master/exercise1-desktop.png

##### Mobile
https://github.com/mindarc/frontend-assessment-magento/blob/master/exercise1-mobile.png

The styles for this page is genereated by SASS through Grunt. The source files are found in `src` folder. The compiled css file is found in `assets/css` directory.

The following are the conventions being use for the styling:
- kebab-case casing
- [BEM](https://medium.com/@andrew_barnes/bem-and-sass-a-perfect-match-5e48d9bc3894) syntax
- Bootstrap-like layout


Exercise 2
---
Still in the `index.html` file at the bottom you can see the tabs section on desktop and accordion section on mobile. The tab names and contents are coming from the `data.json` file. The tab and accordion functionality and animation are made possible by using CSS and jQuery. 

The tab or accordion structure is dynamically contructed using Knockout.js.

All the JavaScript files are found in `assets/js` directory.


###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Bonus Point
---
Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.


