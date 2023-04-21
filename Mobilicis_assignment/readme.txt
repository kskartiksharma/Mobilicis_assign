The programme is intended to serve as the front end of a web application that communicates with a server in the background. React is used to implement the frontend, while a RESTful API is used to get data from the backend.

The results are shown in tables on the frontend, which has five buttons that each relate to a distinct API endpoint on the backend. When a button is hit, the frontend uses the fetch() function to send an HTTP call to the relevant endpoint on the backend, waits for a response, and then modifies the component's state based on the outcome.


Express is used to implement the backend, which connects to a MongoDB database. It specifies five routes, each of which corresponds to a separate front-end button. Each route uses the database's to retrieve information.