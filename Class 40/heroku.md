# Heroku Notes

  - Simple solution for hosting a web application. Takes node js
  - Dyno
    - A small server container, set to 0 to stop
    ```bash

    heroku ps:scale web=0 # off
    heroku ps:scale web=1 # on (with one dyno)

    ```
----------------------------------------------------------------------------
  - Node.js by the existence of a package.json file in the root directory.



# My Sample Url
  - https://mysterious-citadel-91916.herokuapp.com/
