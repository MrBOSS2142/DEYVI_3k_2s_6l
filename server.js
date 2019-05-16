var fs = require('fs');
var res;
var res1;
// Считывание содержимого файла в память
fs.readFile('info.txt', function (err, logData) {

  // Если произошла ошибка, то мы генерируем исключение,
  // и работа приложения завершается
  if (err) throw err;

  // logData имеет тип Buffer, переводим в string
  var text = logData.toString();
  //console.log(text);

  
  var studentsNames = [];
  var marks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // Разбивка файла по строкам
  var lines = text.split('\n');

  lines.forEach(function(line)
  {
    let parts = line.split(' ');
    studentsNames.push(parts[0]);
  });
//   console.log(studentsNames);
  var z = 1;
  var k= 0;
  lines.forEach(function(line) {
    let parts1 = line.split(' ');
    for(let i =1 ; i<4; i++)
    { 
        let p = parts1[z].split(":");
        console.log(p[1]);
        z++;
        marks[k] += Number(p[1]); 
        if(z==4)
        z=1;
    }
    marks[k] = marks[k]/3;
    k++;

  });
  console.log(studentsNames);
  console.log(marks);
    var mark4 = [];
    res = "Студенты с баллом < 4: ";
    for(let i=0; i < 10; i++)
    {
        if(marks[i] < 4)
        {
            mark4.push(studentsNames[i]);
        }
    }
    res1 = mark4.toString();
    console.log(mark4);
});


var http = require('http');
console.log('Hello from server.js');
http.createServer(function(request, response) {
 response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
 response.write("Hello World! It's the 6th labwork. ");
 response.write(res);
 response.write(res1);
 response.end();
}).listen(7777); 
