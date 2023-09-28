import express from 'express'
import morgan from 'morgan'

import userRouter from './Routes/user.routes'
import indexRouter from './Routes/index.routes'
import individualRouter from './Routes/individual.routes'

class App {
    private App: express.Application

    constructor(private PORT?: number | string) {
        this.App = express()
        this.Settings()
        this.MiddleWares()
        this.Routes()
    }

    Settings() { this.App.set('port', this.PORT || process.env.PORT || 7777) }

    MiddleWares() {
        this.App.use(morgan('dev'))
        this.App.use(express.json())
    }

    Routes() {
        this.App.use(indexRouter)
        this.App.use('/users', userRouter)
        this.App.use('/individuals', individualRouter)
    }

    async Listen(): Promise<void> {
        await this.App.listen(this.App.get('port'))
        console.log('Server running in Port:', this.App.get('port'))
    }
}

export default App