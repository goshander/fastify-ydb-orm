# 💾 Fastify plugin for YDB simple ORM

---

Minimal ORM lib for YDB database for fast development services with serverless ecosystem

**Usage example**

- as `fastify` web-server plugin:

```javascript
const { YdbFastify } = require('fastify-ydb-orm')

app.register(YdbFastify, {
  endpoint: process.env.YDB_ENDPOINT,
  database: process.env.YDB_DATABASE,

  // same auth option as lib

  model: [
    User, // YdbModel list for load
  ],
  timeout: 2000,

  sync: true, // [optional] enable auto sync model creation/migration
})

// connection in fastify mode not needed
```

### Environment variables

- `YDB_SA_KEY` - specific path to service account credential json file

- `YDB_CERTS` - specific path to ydb connection certs

---

Минимальная реализация ORM для YDB базы данных для быстрой разработки сервисов в бессерверной экосистеме на основе лямбда функций
