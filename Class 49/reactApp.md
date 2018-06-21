# React App

## Set Up React App

1. Make root folder

2. run create-react-app [nameOfApp]

```sh

$ create-react-app my-react-app

```

3. cd into folder of react App

4. run ```sh
npm start
```
  - after initial run server will refresh automatically on change (configuered in the package.js)

5. enter directory, open [App.js][./src/App.js]

 [App.js] -->     [index.js] -->    [index.html]
^ creates       ^ imports into    ^ renders into HTML
 react elements   a controller      element


## React notes

### JSx

- JSx uses class keyword as the javascript class, to define html tag class use "className"

```HTML

<div className="something">
  <!-- content -->
</div>

```
  - Written by facebook, incorporating xml
  - needs to be Transpiled [Babel]

  - Tags with components are custom react tabs defined by our JSx/React code
  - JSx can include whole javascript expressions


### Components

  - components are chunks of jsx code to be rendered modularly

  - DRY -> Don't repeat yourself | Focus on small components first
  - Great for single page applications
    - facilitates swapping components in and out

  - when writing components make sure to wrap code in one html element in return statement. e.g. **<div><something /><something /></div>**
  - components are constructed by extedning Component class

  ```javascript

  class Hello extends Component {
    render() {
      return <h1>Hello, I am a component</h1>
    }
  };

  ```

  - every self-closing tag in jsx needs to have an ending / in the tag declairation
  e.g <img src="" />        <img src="">
                  ^ works             ^ fails

#### data inclusion
  - Props
    - data that is passed into a components
    - immutable - can not be changed
    - default data for components
    - can not pass objects/arrays into props
    - _Link to docs_ -> [here][https://reactjs.org/docs/react-component.html]


  - State
    - mutable porperty of element

### propTypes

  - Describe what types of interactions are acceptable with a component, including required actions
    - errors are printed in browser console, can be made public


--------------------------------

#### Glossary

  - htmlFor -> used to label html form inputs
  - this.props.[nameOfProp] -> used to add property data into react element. e.g.

  in class declairation --
  <h1>hello {this.props.name} </h1>

  in render call --
  <className name="value">
