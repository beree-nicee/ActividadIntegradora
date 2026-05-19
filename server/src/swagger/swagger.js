import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gestión de Productos',
      version: '1.0.0',
      description: 'API REST para gestionar productos con Node.js, Express y PostgreSQL'
    },
    servers: [
      {
        url: 'http://localhost:4000'
      }
    ]
  },
  apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJsdoc(options)

export const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  console.log('Documentación disponible en http://localhost:4000/api-docs')
}