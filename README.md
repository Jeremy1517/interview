# Frontend Developer Home Assignment - Arkmind

You are tasked to create a user interface for a testing system and microservices health.

>The application monitor a collection of service status from the backend and performs calls to the backend API tovidw the usage foro each service.
>

**How to run Backend Server**
- open terminal
- type `cd backend`
- type `npm install`
- type `node index.js`

We have 4 main service need to monitor:
1. **Policy Service**
- Get status: GET `http://localhost:3000/services/check-policy`
- Get details: GET `http://localhost:3000/services/check-policy/details`
2. **Auth Engine Service**
- Get status: GET `http://localhost:3000/services/check-auth`
- Get details: GET `http://localhost:3000/services/check-auth/details`
3. **Insurance Engine Service**
- Get status: GET `http://localhost:3000/services/check-insurance`
- Get details: GET `http://localhost:3000/services/check-insurance/details`
4. **Rating Engine Service**
- Get status: GET `http://localhost:3000/services/check-rating-engine`
- Get details: GET `http://localhost:3000/services/check-rating-engine/details`

**Please create a UI in React that runs and displays the tests.**

The UI should have two pages:

1. The main page with the list of service status
   - basically it can be 4 card view
   - if the `result` field return as `true`, show background green in color, else background red in color
   
2. A page with the service usage
   - when user clicked on the card bod, it should redirect to another page and show the usage
   - 5 page in total
     - 1 page to see all the service status
     - 1 page for each of the service usage (4 pages in total)

#### Additional requirements:
* Hooks should be used where suitable
* A CSS framework of your choice may be used to style the components, for example Tailwind or AntDesign
* Proper loading state when calling the API
* Library required to use to call APIs in frontend: `axios`

We will accept a zip archive with the entire `arkmind-technical-accessment-1` folder (do not include node_modules).
<br>
Good luck! 
