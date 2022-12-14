![Landing](https://user-images.githubusercontent.com/91460556/201992819-5ff75e8f-76f3-4cd3-b9d7-699ea32b595f.png)



### PROJECT OVERVIEW

Potential customers will always put their trust in other customers before the establishment. That's the allure of social proof marketing. While the business's promotional and advertising activities will undoubtedly bring in new customers, nothing beats the support of existing customers who can attest to the quality of the products and experience.

Users consider online reviews to be more credible than any other advertisement. The reviews will speak for themselves if the restaurants do their utmost to provide exceptional customer service. People now recommend restaurants to their friends and family based on online ratings.

This site targets food lovers and it focuses on online reviews of restaurants around the city. 

### UI Design of public server

**FIGMA [DESIGN](https://www.figma.com/file/DCI4Nlu5kR6pCmxHsUSTxm/Project-3?node-id=0%3A1)** :tent:

#### TAKE NOTE!

As the site runs on Vue 2. In order to view the website live, please follow this link and steps:

https://docs.google.com/document/d/1V7sqYcXr3ebdTYccith5OQLRfVkR74edpXp5m_WsXWo/edit?usp=sharing

Here is also the Express extension which should also be run:
https://github.com/herlyn-mortensen/foodist-express


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

4. Skeleton
- Elements are designed on multiple pages format with navigation bar.
- Users will first see a landing page with the website logo and illustration up front.
- Users will also see a navigation bar with the website logo. Navigation bar turns into a burger button for mobile use.
- "Write a review" button on the navigation bar leads the user into a form they have to fill out in order to give a review to a restaurant.
- "Find restaurant" button on the navigation bar leads the user to search for a restaurant they want to view.
- Information and data are all easy to navigate and view as it follows proper website format. 

5. Surface
- Fonts used are Abril Fatface and Poppins as the ease of reading is the most important.
- Black and white signifies classic vintage design. It was used for the primary color of the site/app.
- Font awesome icons are also used to designate specific elements such as star ratings.
- Illustrations are also used to convey the text information better.

### FEATURES

The sites main feature is to the collection of restaurant reviews - the users can register and/or log-in, write a review to any restaurant they wish, find a restaurant they would like to dine-in and see the reviews of other users. Users can also edit their review or delete it if wanted. Users can also upload a photo of the restaurant as an added feature, as well as adding comments on reviews.

### LIMITATIONS

Since the website runs on Vue 2, there were some added steps in order to run the website live. Lastly, the .env file which was placed on the .gitignore is still showing on this repository. 

### USER STORIES

| USER STORIES | ACCEPTANCE CRITERIA(S) |
| ---- | ----- |
| As a researcher, I would like to see how the guests gets affected by their overall dining experience.| Reviews are displayed per restaurant that is registered in the site. Users can state what they think was good or what was bad about their experience and upload a photo.|
| As a government agent, I would like to see which restaurants are highly rated as the food and beverage industry businesses also helps the country's economy and tourism.| Site provides data per restaurant and shows which one's have 5-star ratings.|
| As a tourist, I would like to see which restaurant is worth the visit and can provide us which best recommendation for food.| The site asks the users which food they ordered, what they think about it and upload a photo. It'll be easy for the user to know which dish to try.|
|As a citizen, I would like to see my own country's best restaurants.| Site provides search options so the users can easily see or check if the restaurant they're interested in is actually worth the visit.|

### TESTING

1. Test that user can sign in or log in
      - From the home page, click on the 'Login' button
      - Fill in a valid username and password and click on the 'Login'  button
      - The user should be redirected to the home page


2. Test user registering an invalid username and/or password
      - From the home page, click on the 'Register' button
      - FIll in a valid username but an invalid password, and click on the 'Register' button
      - The user should be informed that the login has failed, and stated what is needed to successfully register.


### TEST CASES

| TEST CASE | TEST CASE DESCRIPTION | TEST STEPS | EXPECTED RESULT |
| :---: | :---: | :---:| :---: |
| 1. | Mobile Responsive Check | 1. Use the Toggle device toolbar option available in the developer tools of the site and change the screen sizes.| Navigation bar turns into a burger icon. |
| 2. | Write a review | 1. Click on "Write a review" button.| Review should show up on both the site and on mongoDB "restaurant reviews" collection.|
|  |  | 2. Complete form and submit.| |
| 3. | Upload image | 1. Click on "Write a review" button.| Photo should show up on both the site and on mongoDB "restaurant reviews" collection.|
|  |  | 2. Click upload image button.||
| | |3. Drag & drop any files or choose a local file.||
| | |4. Click "Done" and proceed with filling out the whole review form.||
| 4. | Search Review | 1. Click on "Find Restaurant" button.| Restaurant should show up upon hitting search button.|
|  |  | 2. Type in restaurant name.||
|  |  | 2. Hit search button.||
| 5. | Log-in or register | 1. Click on Log-in or Register.| When log-in or registration is a success, it should lead to home page.|
|  |  | 2. Type in username and password.||
|  |  | 3. When registering, username and password should contain special characters, otherwise an error will show.||



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
    - "jsonwebtoken": "^8.5.1",
    - "mongodb": "^4.9.0",
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
