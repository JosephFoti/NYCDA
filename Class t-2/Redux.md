#Redux

  - state manegment tool
  - MVC (Controller model View)

  - Can be applied outside of react

  - Flux
    action -> Dispatch -> Store -> View
              | ^                   |
               <--------------------<
    improves data consistency by simplifying the flow of data between inputs
    an action updates value of the data store, the data store pushes data to render content.

## Terms

  - State: State - The single state value that is managed by the store, it represents the entire state of a Redux application, which is often a deeply nested object (this is very similar to React state, but is stored externally)

  - Action: A plain object that represents an intention to change the state. Actions are the only way to get data into the store. Actions must have a type property, but otherwise can have any number of data/metadata fields

  - Reducer: Reducer - A function that accepts an accumulation and a value and returns a new accumulation. In Redux, the Reducer function produces new states for the data store given the previous state and an action object
    takes action, adds current state and provides you with new state

## Priciples
  - Single store of truth
    - Everything belongs in a single store

  - State is read-only
    - Every new state is created separately, not updated. Actions decribe what happened

  - Changes are made with pure functions
    - Pure function: given the same input it produces the same output, produces no side effects and does not rely on an external state

    ```javascript

    // not pure function example

    var y = 2;
    function badAdd(x) {
      return x + y;
    }
    y = 2;
    badAdd(y) // 5

    y = 3;
    badAdd(y) // 6

    // because changing the external y variable changed the output, baddAdd is not a pure function.


    ```
## short declairation

// Still need to import component

function(props) {
  return jsx
}

export default function


## Stuff to look up
    referentially transparent functions
    RESTful (again)
