const port = process.env.PORT || 3001;
const app = require("./app");
const { login } = require("../routers/index");
const cors = require("cors");
app.use(express.json());
app.use(cors());

//LOGIN
app.use("/", login);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
