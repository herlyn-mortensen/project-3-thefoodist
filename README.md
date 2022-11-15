![Landing](https://user-images.githubusercontent.com/91460556/201992819-5ff75e8f-76f3-4cd3-b9d7-699ea32b595f.png)



### PROJECT OVERVIEW

Potential customers will always put their trust in other customers before the establishment. That's the allure of social proof marketing. While the business's promotional and advertising activities will undoubtedly bring in new customers, nothing beats the support of existing customers who can attest to the quality of the products and experience.

Users consider online reviews to be more credible than any other advertisement. The reviews will speak for themselves if the restaurants do their utmost to provide exceptional customer service. People now recommend restaurants to their friends and family based on online ratings.

This site targets food lovers and it focuses on online reviews of restaurants around the city. 

### UI Design of public server

**FIGMA [DESIGN](https://www.figma.com/file/DCI4Nlu5kR6pCmxHsUSTxm/Project-3?node-id=0%3A1)** :tent:

### FIVE PLANES OF UX/UI

1. Strategy
- The site exists to show restaurant reviews, users will be able to view reviews as well as write one per restaurant. Data should be both accessible for website and mobile use.
2. Scope
- The site gives the number reviews per restaurant. As well as write, edit and delete their own reviews. Users are also able to comment to reviews.
- Users can select which restaurant they want to check.
3. Structure
- Sites contain data of every user reviews about their restaurant experience.
- The data of the reviews can be viewed when clicking the “Find Restaurant” button on the start page, which can then be filtered by selecting which restaurant the user wants to check.
- Users can also log in or register an account.
-
4. Skeleton
- Elements are designed on multiple pages format with navigation bar.
- Users will first see a landing page with the website logo and illustration up front.
- Users will also see a navigation bar with the website logo. Navigation bar turns into a burger button for mobile use.
- "Write a review" button on the navigation bar leads the user into a form they have to fill out in order to give a review to a restaurant.
- "Find restaurant" button on the navigation bar leads the user to search for a restaurant they want to view.
- Information and data are all easy to navigate and view as it follows proper website format. 
- 
5. Surface
- Fonts used are Abril Fatface and Poppins as the ease of reading is the most important.
- Black and white signifies classic vintage design. It was used for the primary color of the site/app.
- Font awesome icons are also used to designate specific elements such as star ratings.
- Illustrations are also used to convey the text information better.

### FEATURES

The sites main feature is to the collection of restaurant reviews - the users can register and/or log-in, write a review to any restaurant they wish, find a restaurant they would like to dine-in and see the reviews of other users. Users can also edit their review or delete it if wanted. Users can also upload a photo of the restaurant as an added feature, as well as adding comments on reviews.

### LIMITATIONS

For the bugs and limitations,the site that the /'review'/:reviewID url which is part of the "edit" feature - is not responding to the css link I created, making it look messy. Lastly, the .env file which was placed on the .gitignore is still showing on this repository. 

### USER STORIES

| USER STORIES | ACCEPTANCE CRITERIA(S) |
| ---- | ----- |
| As a researcher, I would like to see how a country is managing the pandemic and gather data for my own research.| Charts displayed must be able to update based on a range of days. |
| As a government agent, I would like to see the different sets of Covid-19 data collected and updated so that I can use it as a basis for preventive measures and decisions towards new policy and/or policy changes in terms of public health.| Site should provide visualization from data collected in the form of a chart, wherein it is easy to comprehend.|
| As a tourist, I would like to see the active Covid-19 cases and vaccine rate of the country I am interested in so that I would know if I can travel safely without certain limitations.| Pie charts displayed are filtered by country and show the percentages of people vaccinated and partially vaccinated.|
|As a citizen, I would like to see my own country's progress in fighting Covid-19 and show whenever I should begin taking necessary health measures when I see the cases increasing.| Charts displayed should be easy for users to comprehend.|

### TEST CASES

| CATERGORY | INPUT/ACTIONS | OUTPUT/ERRORS|
| :---: | :---: | :---:|
| OVERALL | Mobile Responsive Check | Charts are responsive with change of screen sizes.|
| CHART FUNCTION | On load | Displays empty chart structure, does not show any default country.|
| | Dropdown button filtering | Show different countries with different data.|
| | | Shows the correct data per country.|
| | Hovering across the chart. | Will show numeric data of the chart.|
| Nav Bar | Hover | Arrow turns to a pointer icon.|
| | On press | User is led to another page. Single page application is applied on the first page, symptoms and prevention page.|
| | Responsive | Navigation bar turns into a burger icon.|

### PLATFORM USED

- Github for CI/CD
- Gitpod.io
- Dependencies used:
  - Vue 2
  - NodeJS 
  - NodeJS depencies: 
    - "cors": "^2.8.5",
    - "dotenv": "^16.0.2",
    - "express": "^4.18.1",
    - "handlebars-helpers": "^0.10.0",
    - "hbs": "^4.2.0",
    - "jsonwebtoken": "^8.5.1",
    - "mongodb": "^4.9.0",
    - "wax-on": "^1.2.2",
    - "yarn": "^1.22.19"
  - MongoDB
  - HTML, CSS and Bootstrap
  - Google fonts, Fontawesome and Canva.


### CREDITS

- DATA:
  - DWAD-E Trent Global class recordings.
  - https://tripAdvisor.com

- ILLUSTRATIONS
  - https://www.canva.com/

- FONTS
  - https://fonts.google.com/
