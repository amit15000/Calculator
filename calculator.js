// const bodyParser = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
//   res.sendFile("index.html");       not working
});



app.use(bodyParser.urlencoded({extended:true}));
app.post("/index.html", function (req, res) {
  console.log(req.body);

  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  // var a = req.body.num1;        it will give 1+3 == 13 === as string
  // var b = req.body.num2;
  var result = a + b;
  res.send(`POST request sent by Amit :- ${a} + ${b} = ${result}`)
  console.log(result);
})  ;


app.get('/bmi', (req, res) => {
  res.sendFile(__dirname+"/BmiCalculator.html")
});


app.post('/bmi', function (req, res) {
  console.log(req.body);

  var w = Number(req.body.weight) ;
  var h = Number(req.body.height) ;
  var bmi = w/(h*h);
  res.send(`Bmi = ${bmi}`);
})




// app.post("/index.html", function (req, res) {
// console.log(req.body);
// res.send("Thanks for posting");
// });




// app.post("/", function (req, res) {
  
//   console.log(req.body);
//   res.send("Thanks for posting");
//   });
  




//__dirname --- esme current directory location rehta hai
app.listen(port, () =>
console.log(`Example app listening on port ${port}!`),
// console.log(__dirname)
)