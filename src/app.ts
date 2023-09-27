import express, { Application } from 'express'
import morgan from 'morgan'

class App {
    private App: Application

    constructor(private PORT?: number | string) {
        // Inicializo el app mediante express ( Es lo mismo que  const app = express() )
        this.App = express()
        // Seteo el puerto que puede o no puede ser pasado en mi llamado de la intancia app en index.ts
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