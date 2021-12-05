import express from 'express'
import cors from 'cors';
import registerRoutes from './routes'
import addErrorHandler from './middleware/error-handler';
import { setGlobalEnvironment } from './globals';


export default class App {
    public app: express.Express = express()

    public constructor() {
        this.app = express()
        this.routes()
        this.middleware()
        this.addErrorHandler()
    }

    public start(): void {
        this.app.listen(3000, () => {
            console.log('Listining on 3000')
        })
    }

    private middleware(): void {
        this.app.use(express.json({ limit: '100mb' }))
        this.app.use(express.urlencoded({ limit: '100mb', extended: true }))
        this.app.use(cors())
    }

    /**
     * here register your all routes
     */
    private routes(): void {
        this.app.get('/', this.basePathRoute)
        registerRoutes(this.app)
    }

    private basePathRoute(request: express.Request, response: express.Response): void {
        response.json({ message : 'base path' })
    }

    private addErrorHandler(): void {
        this.app.use(addErrorHandler)
    }
}

new App().start()