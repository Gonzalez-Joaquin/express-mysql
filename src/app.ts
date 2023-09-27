import express, { Application } from 'express'
import morgan from 'morgan'

class App {
    private App: Application

    constructor(private PORT?: number | string) {
        this.App = express()
        this.Settings()
        this.MiddleWares()
    }

    Settings() { this.App.set('port', this.PORT || process.env.PORT || 7777) }

    MiddleWares() {
        this.App.use(morgan('dev'))
    }

    async Listen() {
        await this.App.listen(this.App.get('port'))
        console.log('Server running in Port:', this.App.get('port'))
    }
}

export default App