# express-typescript-starterkit

A simple starterkit providing boilerplate code for a basic Express API

## 🧰 Setup project dependencies

Please open a terminal and run the following command:

```bash
yarn install
```

## 🖥 Run the project

Please open a first terminal and run the following command:

```bash
yarn watch
```

### 🐛 Debugging the project

If you want to run the project with VSCode debugger, simply go to the `Run and debug` section of your IDE

Then select the `Debug` option from the dropdown menu, and press ▷ to run (F5).

### Without debugger

Please open a second terminal and run the following command:

```bash
yarn dev
```

## 🎨 Lint the project

Please open a terminal and run the following command:

```bash
yarn lint
```

## 🧪 Tests

To run tests locally, please open a terminal and run the following command:

```bash
yarn test
```

## ✉️ Postman

Sometimes maintining Postman collection up to date can become really painful...

This project comes with an automated script to generate all the Postman collection

The `postmanConfig` object located at `@/src/config/index.ts` must be kept up to date with your API in order to generate the config file correctly

Please open a terminal and run the following command:

```bash
yarn generate-postman-collection
```

You will see a `collection.json` file created at the root of the project.

You simply have to import it in the Postman application, and then you will be ready to test your API on Postman 🚀

## 📊 Features

- Up and running `express` API
- Basic rate limiting usage example on routes
- `Postman` collection auto-generated supporting image upload, `URL-encoded` form, `JSON` body
- Added unit test example with `jest` with coverage report
- Basic CI setup with `Github Actions`

`TODO`:

- Find a workaround and remove usage from `tsconfig-paths` and `moragn` to limit as possible dependencies

## 🗒 Ressources

- [Used to generate Postman collection automatically](https://siddharth-lakhara.medium.com/generate-postman-collections-using-node-js-68fcf425d823)
