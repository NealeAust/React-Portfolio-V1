# React-Portfolio

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To create a portfolio using my recently acquired React skills to help showcase my experience using the latest technologies. The application is to be deployed by using the **'gh-branch'** to host the deployed applications build.

## React

The application was built using the **create-react-app**.

In simple terms React is a library that lets a developer build user interfaces out of individual pieces called components. Then combine them into entire screens, pages and apps. *This project requires creating these components, which interface with other components and/or app.js to display features of my portfolio.*

## React Portfolio Webpage

The React Portfolio Webpage has been created to increase my visibility and highlight my up-to-date skills, talents and experience to future employers. It provides a short biography and has been purposedly designed to be effortless to use and aesthetically pleasing. 

The Header contains a Navigation Bar with the following direct links:

 |         Page Link               |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
|About Me:                      |This is the default window. Contains an image of myself and a short biography.                                        |
|Portfolio:                      | Contains details of six applications I have developed. Each application listed includes an image of its home page, with links to both the deployed application and the corresponding Github repository.|         |
ContactMe:                      |   This section displays a form with the fields *name*, *email* and *message*. Plus, a **submit** button to enable the enquiring person to contact me.                                                                                   |
|Resume:                         |    Provides a link to a PDF copy of my resume, along with a list of my proficiencies.                    |

The Footer contains a notation that the webpage was created by Neale Chapman, and a link to my Github repository.

**Note:** In this application the Header and Footer are always displayed, the centre section (body) changes in response to one of the above navigation links being selected.

## Project Description

The objective of this project was to build a webpage from the start featuring the React front-end JavaScript Library.

**Note:** A description of how to use the completed web page appears in the 'Usage' section below.

The steps taken to build this webpage included but were not limited to the following:

- Initiated project by installing **npx create-react-app**, which created almost the whole file structure.

- Created the necessary component files: **Header.js**, **Footer.js**, **AboutMe.js**, **Portfolio.js**, **ContactMe.js**, & **Resume.js**.

- Within the **Header.js** component, coded the necessary *(onClick) links* to *AboutMe*, *Portfolio*, *ContactMe* & *Resume* pages.

- Within the **App.js** component, coded the *renderPage function* to establish, navigate to and display the selected page.

- Within the **AboutMe.js** component, added an image of myself and wrote a short biography. Whilst ensuring the Header & Footer are always displayed.

- Within the **Portfolio.js** component, added an image of the homepage and links to deployed application and Github repository of six web applications I developed. 

- Within the **ContactMe.js** component, coded a contact form with three fields *Name*, *Email* and *Message*. Included handleChange & handleSumit functions to handle input & submitting form.
   -  A folder named **utils** containing a **helper.js** file was created with a function that contained a regular expression to validate the email address entered. 
   Pattern: /^([a-z0-9_ \ .-]+)@([\da-z \ .-]+).([a-z \ .]{2,6})$/

- Within the **Resume.js** coded a link to download a PDF file of my resume. Also used props to display a list of my proficiencies. 

## Installation

N/A

## Usage

The Neale Chapman Portfolio webpage is a fully functional web application. 

When first opened the application defaults to the AboutMe window, between the constant Header and Footer sections.

To navigate throughout the application the user hovers the cursor over the chosen link **AboutMe**, **Portfolio**, **ContactMe**, or **Resume.** and upon click the window will open.

The user can also click on the **Github NealeAust** at the bottom right-hand corner of the webpage to navigate to my Github webpage.


## Deployed Application and Screenshot

Link to deployed application:


Screenshot:

![image](https://user-images.githubusercontent.com/115671306/235103560-0da837d0-b13f-4c08-b717-ca66cb1c7ca3.png)

## Credits

N/A

## Licence

MIT

