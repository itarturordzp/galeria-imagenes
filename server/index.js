import express from 'express'
import fileUpload from 'express-fileupload'
import indexRoutes from './routes/index'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(fileUpload({
    tempFileDir: '/temp'
}))
app.use(indexRoutes)


app.listen(app.get('port'))
console.log('server on port', app.get('port'))