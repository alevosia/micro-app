const PORT = 3000

import { Micro } from './deps.ts'

const app = new Micro()

app.get('/', (req) => {
    req.respond({ body: 'Hello World!'})
})

app.listen(PORT, () => {
    console.log(`App is now listening port ${PORT}`)
})
