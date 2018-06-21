# Databases

## SQl

- takes data in form of table. Each row must contain a value.
- primary key mandatory, unique values.
- functions as its own coding languages

```sql

-- create table people
CREATE TABLE people (
  username VARCHAR(255) NOT NULL UNIQUE,
  --                ^ describes the maximum character length
  first_name VARCHAR(255),
  last_name VARCHAR(255) NOT NULL,
  age INT DEFAULT 21
);


-- select all from profiles with the user_id is equal to 7
SELECT * FROM profiles WHERE profiles.user_id = 7;
--     ^ all records

```

## postgreSQl


```SQl

CREATE DATABASE dbName;
-- makes new database

select * from dbName;
-- gets all the records

select * from hats where columnName = 'a value you want to find'
-- searches table to find a value of hats where the desired value exists

delete from hats where columnName = 'aValue';
-- searches table to find a value of hats where

\?         /* help: list available commands */
\c my_app  /* connect to database 'my_app' */
\dt+       /* list tables */
\d+ fruit  /* describe table 'fruit' */
\q         /* quit */


insert into students (name,email) values ('Joe','Joe@email.com'),('Sasha','Sasha@email.com'),('Hasom','Hasom@email.com');

```


###### Glossary


------------------------------------------------------------------------

- _Schema_ -> defines databases -> type of data you have in each column
  - _VARCHAR_ -> Variable length string of characters
  - _INTEGER_ -> Number with no decimal
  - _DECIMAL_ -> Number with decimal
  - _BOOLEAN_ -> stores true/false | 1/0
  - _DATE_ -> Date object

- Constraints
  - _PRIMARY KEY_ -> unique value for each row in column
    - _AUTO_INCREMENT_ -> Automatically increments for each entry, used for id/primary key.
  - _UNIQUE_
  - _NOT NULL_ -> will not save if is Null
  - _FOREIGN KEY_ ->  a datapoint that points a connection between data tables. enforce constraints on database and keeps consistency

- Commands
  - _Insert_ insert into [table] ([Declare Values for table columns]) value ([values for data entry])_ -> Add entry into table
  - _Update_ update [tableName] set [new = "value"] where [uniqueValue = "ofTarget"] -> updates data of entry
  - _Chain Queries_ select * from [database] where [property1] = (select (id) from users where [property2 = a value]);
  -_Add Column_ ALTER TABLE [table_name] ADD [column_name] datatype;
  -_Drop column_ ALTER TABLE [table_name] DROP COLUMN [column_name] datatype;
  - Alter column_ ALTER TABLE [table_name] Alter COLUMN [column_name] datatype;


  

- Query Method
    -  Can list inline variables with concatination variables $+ (base 1++)  
    - .query('A SQL QUERY STRING IS CALLED $1', [valueOf$1])

------------------------------------------------------------------------

###Sqlize

   - Converts JavaScript into sql commands
   - Promise based form
   - Read from, write to and modify postresql tables with javascript
   - _you dont need pg package when you are using sqlize_
   - No quote restriction

  - Models
    - table creating goes to plural
    - Creation of tables runs once, records added multiple times

  - Like and ILike
    - ILike is insensitive
    - % is unlimited wild card before or after STRING
    - Jo% == Joe, Joseph
    - %oti == Foti, Broti

  - ({order: ['aFiels']})

``` javascript

var Hat = sequelize.define(hat, {
  name: Sequelize.STRING,
  material: Sequelize.STRING,
  height: Sequelize.INTEGER,
  brim: Sequelize.BOOLEAN
})

.sync()
// Does table exists
.then(function () {

})

// insert
Hat.create({
    name: 'cowboy',
    material: 'straw',
    height: 4,
    brim: true
});

// select
Hat.findAll().then(function(rows) {
  for (let i = 0; i < rows.length; i++) {
    var columnData = rows[i].dataValues;
    var name = columnData.name;
    var brim = columnData.brim
  };
});


// built in that finds by id
Hat.findById(id).then(function(row)=>{
  var name = row.dataValues.name;
  var brim = row.dataValues.brim;
});

// select with condition
Hat.findAll({
  where: {
    brim: true
  }
})
.then(function(rows){
  for (let i = 0; i < rows.length; i++) {
    var columnData = rows[i].dataValues;
    var name = columnData.name;
    var brim = columnData.brim
    }
})


// select with a string search
Hat.findAll({
  where: {
    name: {
      iLike: 'cow%';
    }
  }
})
.then(function() {

})

app.get('/posts/search', function(req,res){
  var query = req.params.query;
})

Hat.findOne({
  where: {
    name: 'cowboy'
  }
})

Hat.findAll({order: ['aField']}).then(function(rows) {
  for (let i = 0; i < rows.length; i++) {
    var columnData = rows[i].dataValues;
    var name = columnData.name;
    var brim = columnData.brim
  };
});

```


------------------------------------------------------------------------


### Bits and bobs

multer
- uploader


``` JavaScript

Javascript Data manipulation
 $.ajax([url:var],()=>{
   url:
   type:delete
  success:function
 })
 ```
 dotenv
