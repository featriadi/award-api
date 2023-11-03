# award-api

## 1. Setup .env
adjust the environment by create new file .env
```bash
PORT=8000 #your desire port for the api
MONGOURL="" #your mongodb url 

JWT_SECRET_ACCESS_TOKEN="" #your jwt secret for access token
JWT_SECRET_REFRESH_TOKEN="" #your jwt secret for refresh token
JWT_ACCESS_TOKEN_EXPIRED="" #your jwt access token valid periode, ex: 1d (for 1 day), 1h (for 1 hour)
JWT_REFRESH_TOKEN_EXPIRED="" #your jwt access token valid periode, ex: 1d (for 1 day), 1h (for 1 hour)
```

## 2. Run Migration and Seeder
```bash
npm run seed
```

## 3. Run The Application
```bash
npm run start
```
or run using nodemon
```bash
nodemon start
```

## 4. Test The API
you can use postman collection that included on this repo.



# API Endpoints

## Get all awards

```http
GET /api/v1/awards
```

| Parameter       | Type     | Description                                                   |
| :-------------- | :------- | :------------------------------------------------------------ |
| `type`          | `string` | Filter for field type                                         |
| `minprice`      | `int`    | Filter for min value of field point                           |
| `maxprice`      | `int`    | Filter for max value of field point                           |

## Login

```http
POST /api/v1/auth/login
```

example body:
```http
{
    "email": "spongebob@gmail.com"
}
```

example return:
```http
{
    "data": {
        "_id": "6540812ec987224cebe43db9",
        "name": "Spongebob SquarePants",
        "email": "spongebob@gmail.com",
        "__v": 0
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1NDA4MTJlYzk4NzIyNGNlYmU0M2RiOSIsIm5hbWUiOiJTcG9uZ2Vib2IgU3F1YXJlUGFudHMiLCJlbWFpbCI6InNwb25nZWJvYkBnbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2OTg5NzI0ODcsImV4cCI6MTY5ODk3NjA4N30.whL9K0go0-GDvzGfA2flxsmfkIyuP_F4khVlTpeX-6w",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1NDA4MTJlYzk4NzIyNGNlYmU0M2RiOSIsIm5hbWUiOiJTcG9uZ2Vib2IgU3F1YXJlUGFudHMiLCJlbWFpbCI6InNwb25nZWJvYkBnbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2OTg5NzI0ODcsImV4cCI6MTY5OTA1ODg4N30.kchUuGJr7n2gVAFeZ-Ehy8dri93v7gYjWYncog-GvNI"
}
```

## Refresh Token

```http
POST /api/v1/auth/refresh-token
```

example body:
```http
{
    "email": "spongebob@gmail.com",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1NDA4MTJlYzk4NzIyNGNlYmU0M2RiOSIsIm5hbWUiOiJTcG9uZ2Vib2IgU3F1YXJlUGFudHMiLCJlbWFpbCI6InNwb25nZWJvYkBnbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2OTg5NzEyMjMsImV4cCI6MTY5OTA1NzYyM30.WKvI7hcHloLvRQQ8EwSdoR2A_vgOBN28EdgeChXAj0o"
}
```

example return:
```http
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1NDA4MTJlYzk4NzIyNGNlYmU0M2RiOSIsIm5hbWUiOiJTcG9uZ2Vib2IgU3F1YXJlUGFudHMiLCJlbWFpbCI6InNwb25nZWJvYkBnbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2OTg5NzI0NzIsImV4cCI6MTY5ODk3NjA3Mn0.wh1ryOtModBR-jTsCpvgu9HbQvpmiW0auwzn1ypAmrg"
}
```