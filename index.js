import express from "express";
import bodyParser from "body-parser";

const app = express();
const port=3000;
const currentYear = new Date();
 const realYear = currentYear.getFullYear();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/",(req,res) =>
{
    res.render(("index.ejs"),{year:realYear,});
});
app.get("/finance",(req,res) => {
    res.render("finance.ejs",{year:realYear,}); 
});
app.get("/technology",(req,res) => {
    res.render("technology.ejs",{year:realYear,});
});
app.get("/design", (req,res) => {
    res.render("design.ejs",{year:realYear,});
});
app.get("/law", (req,res) => {
    res.render("law.ejs",{year:realYear,});
});
app.get("/game", (req,res) => {
    res.render("game.ejs",{year:realYear,});
});
app.get("/science", (req,res) => {
    res.render("science.ejs",{year:realYear,});
});
app.get("/article/:id", (req,res) => {
    const selectedId = req.params.id;
    res.render("article.ejs",{
        articleId : selectedId,
        year:realYear,
    });

});

app.listen(port,() => {
    console.log(`listening from port ${port}!`);
});