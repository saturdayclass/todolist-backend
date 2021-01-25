# Simple Todolist Backend

These are the repositories for backend api of todolist app. Create with expressjs and mysql

## How to use

First you need to create database with the name is db_todo, then import sql file in inside root folder

Second, check the `connection.js` file and make sure your config is correct with your mysql server.

Third, you must install all dependecies needed with this command

```
npm install
```

Fourth, start the todolist backend server with this command

```
npm start
```

## Endpoint

| Path                | Method | Description                                    | Data                                                                                                  |
| ------------------- | ------ | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| /api/v1/todo        | GET    | used for show list of todo from database.      | Params Request : <br> id_user: integer                                                                |
| /api/v1/todo        | POST   | used for add data todo to database.            | Raw Object Request :<br>todo: varchar<br> id_user: integer                                            |
| /api/v1/todo/:id    | DELETE | used for delete data of todo from database.    | Params Request :<br>id: integer                                                                       |
| /api/v1/auth/signin | POST   | used for sign in user for access the todolist. | Params Request :<br> Raw Object Request :<br>username: varchar<br> password: varchar                  |
| /api/v1/auth/signup | POST   | used for sign up.                              | Params Request :<br> Raw Object Request :<br>name: varchar<br>username: varchar<br> password: varchar |

Done! Don't forget to click star haha! 🔥
