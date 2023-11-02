import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// Express
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())

// Database
import { connection } from './db.js'
connection()

// Routes
import userRoutes from './routes/userRoute.js'
import awardRoutes from './routes/awardRoute.js'

app.use(userRoutes)
app.use(awardRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
