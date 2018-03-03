# jai-kisan assignment

These are the additional library used
1. nodemon - for live reloading while development
2. lodash - for string and array manipulation
3. axios - for making http request
4. DataTable - for showing data in table format

This is the basic workflow of the application
1. On get request to the index page make http request to heroku server to get all users data
2. Process the string, Create user object from the string and store into and array
3. Pass the array to handlebars view
4. In view use jquery datatable library to show the data in table format.
5. To find unique company list and university list used lodash library and pass the array to the view
