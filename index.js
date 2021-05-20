import Express from "express"
const app = Express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("we are at Home Page");
});

app.get("/add", (req, res) => {
    let var1 = parseInt(req.query.var1);
    let var2 = parseInt(req.query.var2);
    let sum = var1 + var2;
    res.send("" + sum);
});

app.get("/sub", (req, res) => {
    let var1 = parseInt(req.query.var1);
    let var2 = parseInt(req.query.var2);
    let sum = var1 - var2;
    res.send("" + sum);
});

app.get("/div", (req, res) => {
    let var1 = parseInt(req.query.var1);
    let var2 = parseInt(req.query.var2);
    let sum = var1 / var2;
    res.send("" + sum);
});

app.get("/mul", (req, res) => {
    let var1 = parseInt(req.query.var1);
    let var2 = parseInt(req.query.var2);
    let sum = var1 * var2;
    res.send("" + sum);
});

app.listen(port, () => console.log("listening at port " + port));