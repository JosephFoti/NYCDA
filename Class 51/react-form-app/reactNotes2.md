# React 2

  - NOTE always stop server before making copies of files

## Ref/Refs
  - ref
    - equivalent to id parameter in css3/html5

```html
<input type="something" ref='num1'>

```

  - called with

```javascript

this.refs.refName.value

```

## React Router (react-router-dom)
  - [ Router ] -> [ Route ] -> [ Links ]
                                ^ creates anchor

  -  Routes cascade renders through like paths
    -  Use tag exact to stop cascade of rendering
    -  Use strict to express 'strict' parse of route, excluding trailing slashes and hashes

## Lifecycle Triggers and Events
  - 4 cycle categories
    - Initialization
      - getDefaultProps
      - getInitialState

      - componentWillMount
        - called once immediately before render

      - render
        - returns markup

      - componentDidMount
        - called once immediately after the initial rendering has occurred
        - DOM is available

    - Updating State
      - shouldComponentUpdate
        - give condition to test to see if update is necessary (nextProps, nextState)

      - componentWillUpdate
      - renders
      - componentDidUpdate

    - Updating Props
      - used when the parent element modifies the props of the child
      - componentWillReceiveProps
      - shouldComponentUpdate
      - componentWillUpdate
      - render
      - componentDidUpdate

    - Unmounting
      - componentWillUnmount
        - prompt user before Unmounting (save? warn?)


## Examples

```javascript




```
