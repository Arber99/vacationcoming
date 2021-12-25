import express from 'express'

const app = express()

const PORT = 5000

app.get('/', (req, res) => {
    res.status(200).send('Server exists')
})

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})

export default app