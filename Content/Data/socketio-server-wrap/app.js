var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);



// localhost:3000으로 서버에 접속하면 클라이언트로 index.html을 전송한다
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// unit test용
app.get('/test', function(req,res) {
  res.sendFile(__dirname + '/test.html');
});

// combined test용
app.get('/scenario1', function(req,res) {
  res.sendFile(__dirname + '/test-scenario-1.html');
});

// combined test용
app.get('/scenario2', function(req,res) {
  res.sendFile(__dirname + '/test-scenario-2.html');
});



// connection event handler
// connection이 수립되면 event handler function의 인자로 socket인 들어온다
io.on('connection', function(socket) {

  // 접속한 클라이언트의 정보가 수신되면
  socket.on('login', function(data) {
    console.log('Client logged-in:\n name:' + data.name + '\n userid: ' + data.userid);
    // socket에 클라이언트 정보를 저장한다
    socket.name = data.name;
    socket.userid = data.userid;
    // 접속된 모든 클라이언트에게 메시지를 전송한다
    io.emit('login', data.name );
  });

  // 클라이언트로부터의 메시지가 수신되면
  socket.on('operation', function(data) {
    console.log('Script Message from %s: %s', socket.name, data.msg);
    // var msg = {
    //   from: {
    //     name: socket.name,
    //     userid: socket.userid
    //   },
    //   msg: data.msg
    // };
    console.log(data);
    
    //var msg = data.msg;
    //var msg = data;  // 2018년 버전

    var parsed_data;
    if (typeof(data) == 'string') {
      parse_data = JSON.parse(data);      
    } else {      
      parse_data = data;     
    }  
   
    var wrapped_msg = {
      type: "OP",      
      No_OP: 1,
      Tag: "action",
      Source: "arinchat",
      Target: "arinbody",
      OP: "script",
      Data: parse_data
    };

    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    //socket.broadcast.emit('action', msg);
    // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
    // socket.emit('s2c chat', msg);

    // 접속된 모든 클라이언트에게 메시지를 전송한다
    //io.emit('s2c chat', msg);
    //io.emit('action', msg);
    io.emit('operation', wrapped_msg);
    console.log(wrapped_msg);
  });

  // action script 리턴 메시지 수신되면
  socket.on('end', function(data) {
    console.log('End(respose) Message from %s: %s', socket.name, data);
    //var msg= data.msg;  
    var msg = data;        
    // 접속된 모든 클라이언트에게 메시지를 전송한다
    //io.emit('s2c chat', msg);
    //io.emit('end', msg);
    console.log(msg);
    //io.emit('return', data));

    // 특정 클라이언트에게만 메시지를 전송한다
    // io.to(id).emit('s2c chat', data);
  });


  
  socket.on('event', function(data) {
    console.log('Event Message from %s: %s', socket.name, data);
    //var msg= data.msg;  
    var msg = data;    

    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    //socket.broadcast.emit('action', msg);

    // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
    // socket.emit('s2c chat', msg);

    // 접속된 모든 클라이언트에게 메시지를 전송한다
    //io.emit('s2c chat', msg);
    //io.emit('end', msg);
    console.log(msg);
    //io.emit('return', data));

    // 특정 클라이언트에게만 메시지를 전송한다
    // io.to(id).emit('s2c chat', data);
  });
  
  socket.on('name', function(data) {
    console.log('Name Message from %s: %s', socket.name, data);
      
    //console.log(data);          
    //var msg= data.msg;  
    var msg = data;    

    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    //socket.broadcast.emit('action', msg);

    // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
    // socket.emit('s2c chat', msg);

    // 접속된 모든 클라이언트에게 메시지를 전송한다
    //io.emit('s2c chat', msg);
    //io.emit('end', msg);
    console.log(msg);
    //io.emit('return', data));

    // 특정 클라이언트에게만 메시지를 전송한다
    // io.to(id).emit('s2c chat', data);
  });

  // dual script 리턴 메시지 수신되면
  socket.on('return_dual', function(data) {
    console.log('Dual Return Message from %s: %s', socket.name, data);      
    //var msg = data.msg;

    var msg= data;      
    // 접속된 모든 클라이언트에게 메시지를 전송한다
    //io.emit('s2c chat', msg);
    io.emit('return_dual', msg);
    //io.emit('return', data));

    // 특정 클라이언트에게만 메시지를 전송한다
    // io.to(id).emit('s2c chat', data);
  });

  // force client disconnect from server
  socket.on('forceDisconnect', function() {
    socket.disconnect();
  })

  socket.on('disconnect', function() {
    console.log('user disconnected: ' + socket.name);
  });
});

server.listen(3000, function() {
  console.log('Socket IO server listening on port 3000');
});