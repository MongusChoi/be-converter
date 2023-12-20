const { env, port } = require('./config/vars')
const moduleAlias = require("module-alias")
const app = require("./config/express")

moduleAlias.addAlias({"@src": __dirname})

app.listen(port, () => console.log(`[server] started on port ${port} (${env})`))

module.exports = app