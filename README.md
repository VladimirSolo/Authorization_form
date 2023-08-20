# Application database search

## Application includes:

<ul>
<li>A one-page application with a form with two fields
email (mandatory) and number (optional)
and submit button
when you press submit, the request goes to the back end where you need to find users matching the search query in JSON.
display the found data on the client under the form<br>
</ul>

## Conditions

- [x] We need to add a 5 second delay on the back end for request processing (simulate long response processing).
- [ ] In case of repeated request from the front, cancel the previous request.
- [x] Mandatory validation of email and number fields on the frontend or on the server
- [x] On the front end, a mask should be added to the number field so that the number is displayed with hyphens every two characters. e.g. 22-11-22, 83-03-47.

## Technology stack:

**_Frontend: React (CRA), Typescript, Redux Tookit, Material UI, Axios;_**
**_Backend: Express, Typescript;_**
<br>

## Installation

1. Clone this repo
   **folder client:**
2. `npm install`
3. `npm run start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   **folder server:**
5. `npm install`
6. `npm run dev`
7. Server will started [http://localhost:8000](http://localhost:8000).
   <br><br>
