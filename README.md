## How to use

Install dependencies:

- `yarn`

Start application:

- `yarn start`

## Components architecture

- App: Container responsible for connecting to the state and injecting the filtered categories and products. This container will render the following components:
  - Categories: Stateless component responsible for rendering the categories
  - Products: Statefull component that render the products and their descriptions if selected

## General FE architecture reasoning

- Selectors (Reselect): Immutable, Stateless and composable, the selectors are small functions that build the data from the State into a data shape ready to inject into the component props.

- Reducers (Redux): Contain the logic that normalize the data received from the API into Dictionary. Storing the data into a dictionary indexed by ID make it easy to avoid duplication of entities.

- Epics (Redux-observable / Rxjs): Functional / reactive side effects manager from Redux-observable, they make asynchronousity easier to reason about as data is wrapped into streams (Observables).

- Typescript: Make data shape explicit and predictable. [Typescript article that highlight the compiler strengths](https://codeburst.io/five-tips-i-wish-i-knew-when-i-started-with-typescript-c9e8609029db)

- Connect-react-router: Make it easier to sync URL data with redux state.

- Styled-components: Slower than CSS but much more maintainable and easier to reason about (also very functional) which make it my favourite styling library in the React ecosystem.

## Possible improvements

- The product entity returned from the API should return an array of category ids instead of the whole category entity as this end up being duplicated in the state and it should be avoided as much as possible.

- Add runtime data validation of URL and API potentially (API data validation ultimately should happen at Gateway / GraphQL layer ?) to protect from unmatching data shape between compile time and runtime.
