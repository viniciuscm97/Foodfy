const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const recipes = require("./data")

server.use(express.static('public'))

server.use(express.static('images'))

server.set('view engine', 'njk')

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})


server.get("/", function(req,res){
    const infoHome = {
        title: "As melhores receitas",
        content: "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
        img: "chef",
        cardRecipes: recipes
    }
    return res.render("index", {infoHome})
})

server.get("/recipes", function(req,res){
    return res.render("recipes", {recipes})
})

server.get("/about", function(req,res){
    const infoAbout = {
        aboutTitle: "Sobre o Foodfy",
        aboutFirstParagraph: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel"
        +"lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada"
        +"facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa."
        +"Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis,"
        +"non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
        aboutSecondParagraph: "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula"
        +"lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et"
        +"posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate"
        +"semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",

        beginTitle: "Como tudo começou…",
        beginFirstParagraph: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel"
        +"lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada"
        +"facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa."
        +"Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis,"
        +"non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
        beginSecondParagraph: "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula"
        +"lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et"
        +"posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate"
        +"semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",
        
        recipeTitle: "Nossas Receitas",
        recipeParagraph: "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula"
        +"lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et"
        +"posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate"
        +"semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",

        
    }
    return res.render("about", {infoAbout})
})

server.listen(5000, function(){
    console.log('server running')
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });