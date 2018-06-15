const express=require('express');

//modulo de templates
const hbs=require('hbs');
//para usar o express tenho que criar uma nova variavel.
const app= express();

//__dirname lê o caminho ate o node
app.use(express.static(__dirname+"/public"))
//INICIO DA AULA
// COLOCAR NO BROWSER - http://localhost:3000/
// 1º rota, 2º função, com 2 parametros
/*app.get('/',(request, response)=>{
//resposta quando o cliente pede a barra
response.send("<h1>Hello from Express!</h1>")
});


//COLOCAR NO BROWSER - http://localhost:3000/about
app.get('/about',(request, response)=>{
//resposta quando o cliente pde a barra
response.send("<h2>About my site</h2>");
});

//COLOCAR NO BROWSER - http://localhost:3000/carachao
app.get('/carochao',(request, response)=>{
    //resposta quando o cliente pede a barra
    response.send(`<h1>Current time:</h1></br><p>${Date().toString()}</p>`);
    
    });
*/



// se quiser usar templates


// COLOCAR NO BROWSER - http://localhost:3000/
    app.get('/',(request, response)=>{
        response.render('welcome.hbs',{
            title:"Welcome to this site",
            text:"Hello from Express"
        });
        
        });
      //COLOCAR NO BROWSER - http://localhost:3000/about
        app.get('/about',(request, response)=>{
            response.render('welcome.hbs',{
                title:"About my site",
                text:"..."
            });
            
            });


        //COLOCAR NO BROWSER - http://localhost:3000/carachao    
            app.get('/carochao',(request, response)=>{
                response.render('welcome.hbs',{
                    title:"Current time:",
                    text:Date().toString()
                });
                
                });
        

//arranca o servidor e diz a porta que se vai usar
app.listen(3000);