Install tsc globally and run npx tsc --init to make a config file.
change the root and output directory to src and build respectively. We will write ts code in src and js code will be generated in build dir.

/*DEPENDENCIES*/
  "dependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.3",
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.4",
    "nodemon": "^3.0.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.2",
    "@types/cors": "^2.8.17",
    "@types/jsonwebtoken": "^9.0.5"
  }

we know all of them 

add scripts :
  "scripts": {
    "start" : "node ./build/index.js",
    "dev" : "nodemon ./src/index.ts",
    "build" : "tsc -p ."
  },

1. ### "start": "node ./build/index.js"

    - This script is used to start the production version of your Node.js application.
    - It runs the node command to execute the index.js file located in the ./build directory.
    - It assumes that you've already built your TypeScript code into JavaScript using the TypeScript compiler (tsc).

2. ### "dev": "nodemon ./src/index.ts"

    - This script is used for development purposes.
    - It uses nodemon to monitor changes in your TypeScript files (./src/index.ts in this case).
    - Whenever a change is detected, nodemon restarts your application, making the development process more efficient by automatically refreshing the server when code changes occur.

3. ### "build": "tsc -p ."

    - This script is responsible for building your TypeScript code into JavaScript.
    - It uses the TypeScript compiler (tsc) with the -p flag, specifying the path for the TypeScript configuration file (usually tsconfig.json).
    - The dot . represents the current directory, indicating that the TypeScript compiler should use the configuration file in the current directory.

## We have done and we know what we did =>
in index.ts we imported cors mongoose and express and we created an app
we used required middlewares that are express.json() => returns a functiion and cors() => returns a function
Conncted the database and when successfully connected we started the app by app.listen(),
models/users.ts, we  created basic schema for user and exported its model


## Enums in TS =>
no enums in js.
just a way to name and classify variables

### We are using enums to create custom error for user in errors.ts files
## different ways to export =>
1. export enum alpha { ... } exports the alpha enum directly.When another module imports this, they can access the enum using alpha.
2. export { alpha as ALPHA }; exports the alpha enum with the name ALPHA. when another module imports this, they can access the enum using ALPHA instead of alpha.
3. export default alpha; exports the alpha enum as the default export of the module. When another module imports this, they can choose to import it using any name they prefer since it's the default export.


### in TS it is important to specify the typr of err in catch block, so we can specify it as err : any.

### TS interfaces 
export interface IUSER {
    _id?: string;      // Optional property for the user's identifier (id)
    username: string;   // Required property for the user's username
    password: string;   // Required property for the user's password
    email: string;      // Required property for the user's email
    amount: number;     // Required property for the user's amount (numeric value)
    // purchasedItems: number; // Example of a commented-out property (not part of the interface)
}
The code you provided defines an interface named IUSER in TypeScript. Interfaces in TypeScript are used to define the shape or structure of objects. In this case, IUSER represents the structure of an object that typically represents a user in your application.
1. _id?: string;: This is an optional property representing the unique identifier of the user. The question mark (?) makes it optional, meaning it can be present or absent in the object.

2. .username: string;: This is a required property specifying the user's username. It must be a string.

3. password: string;: This is a required property for the user's password. It must be a string.

5. email: string;: This is a required property for the user's email. It must be a string.

6. amount: number;: This is a required property for the user's amount. It must be a numeric value.

