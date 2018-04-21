## Templating

### ejs

```js

  app.set('veiw engine', 'ejs'); // puck // handlebars

  app.get('/home',function(req,rej){
    app.render('view-name'); // views belong in static folders
  });

```

## Embeding source js

```js

<% %> // executes javascript
<%= %> // evaluates html


<div>
    <h1>My Grocery List</h1>
    <ul>
        <% for (var i = 0; i < groceries.length; i++) { %>
    <li><%= groceries[i] %></li>
        <% } %>
    </ul>
</div>

```

# Example

```js

const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('grocery-list',{ 'groceries':['bananas','milk','lettuce']});
});

app.listen(8080,function(err){
  if (err) throw err;
  console.log('Server!');
});

```

## EJS Partials
  - typically named with '_[name]_'
  - brings in template modules

```js

<% include ./template-name.ejs %>

```

## Handlebars Partials

  - registers partial with name item, gets data from reading a file synchronosly

```js

hbs.registerPartial('item', fs.readFileSync('./views/items.hbs','utf-8'));

```
