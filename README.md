# Silas Cundiff's Portfolio Project

** Version 0.1.3 **

This is an overview of my portfolio project, what I plan to add, and what potential changes I want to make.

My portfolio will consist of 4 pages. The theme is 4 seasons and different elements will change based off what page(season) the user is currently viewing.
The aim is to provide a clean minimal ui with the required information while including a crisp look and feel through animations and layout.


## General information

Coded using HTML & CSS. Javascript will be added as needed and Express will most likely be used.
CSS written with SCSS and compiled using npm.
Dependencies included, not all will be used until project reaches near completion.

- The website consists of 4 "pages".
- Each page has a theme corresponding to one of the four seasons.
- All 4 pages are technically on a single webpage.
- The website scrolls horizontally.
- Load times should be kept to a minimal and animations should not interfere with functionality.

## Home

Theme of spring.

This page is the landing page 
When a user first loads the page, my logo will be displayed in full, after either 2 seconds or any user interaction, the shield will fade to be replaced with the tree blooming with the appropriate leaves.

The content of this page consists of nothing but a short introduction and a CTA button for viewing my projects, or contacting me.

## Projects

Theme of Summer.

Will consist of my current and future projects that I think display the deepest part of my skillset.

~~Still deciding on the end design of this page. Will most likely use a fliping card or carousel system, but I'm exploring other options.~~

- Uses a grid system to display cards. 
- Can filter cards by project type.
- possibly add alternate toggle-able grid layouts like a list type instead of cards


## About

Theme of Fall.

Provides the user a short bio about myself and key skills.

~~Still exploring options, I don't want a boring old bulleted list to display my skills and achievements.~~

- Near full page bio
- Skillset displayed via icons at bottom


## Contact

Theme of Winter.

~~Will provide a simple html form for the user to contact me, most likely will use express to provide functionality.~~
Scrapped the form because I decided it didn't fit the theme I was going for. Instead providing links to socials and a phone number

## TODO list

### Markup is 99% done
- Scan for typos and grammar mistakes
- Possible small refactors
- Give proper hrefs to links and alts to images

### CSS
- finish background assets
- finish logo assets
- polish many aspects of the site including: animations, colors, hovers, shadows, etc.
- BUG fix projects page bug that makes transition not function when changing from "All" filter to one of the other filters.

- ~~Add media queries for every page~~
- Add vendor prefixes
- Test on multiple browsers

### JS

