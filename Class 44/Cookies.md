# Cookies

  - some browsers will only allow cookie creation through server
  - [Package that lets you make cookies on browser side][github.com/ScottHamper/Cookies]

```js

document.cookie = "hello=test"

// javascript

let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
   document.cookie = 'username=john;{Max-Age=900000}'
                      // ^ key     ^ value
                      //             ^ expiration date
   alert('cookie created');
});

// jQuery

$('#btn').click(()=>{
  Cookies.set('word', 'Hudson');
});

$('#btn2').click(()=>{
  var x = Cookies.get( );
  //                  ^ All / key
  console.log(x);
  $('.cookies').text(x.username)
})

// Node.js

// Set = res.cookie
// Get = req.cookies

```
