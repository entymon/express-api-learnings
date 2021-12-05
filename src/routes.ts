import * as express from 'express'
import HarvardArtMuseum from './components/harvard-art-museum/harvard-art-museum.controller'

export default function registerRoutes(app: express.Application): void {
    new HarvardArtMuseum(app)
}