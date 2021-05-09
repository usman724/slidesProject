const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const morgan = require('morgan')
const bodyParser = require('body-parser')
var mysql = require('mysql');

const jwt = require('jsonwebtoken');
const fetch = require("node-fetch");
var nodemailer = require('nodemailer')

var connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'slidedb',
  connectionLimit: 10,               // this is the max number of connections before your pool starts waiting for a release
  multipleStatements: true           // I like this because it helps prevent nested sql statements, it can be buggy though, so be careful

});



const app = express();
const server = http.createServer(app);
const io = socketio(server);



const UserRoutes = require('./api/routes/user')
const ProductRoutes = require('./api/routes/Product')


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin ,X-Requested-With ,Content-Type ,Accept , Authorization")
  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "*")
    return res.status(200).json({})
  }
  next();
})

// app.get('/client', function (req, res) {
//   res.redirect('edit-new-first.html');
// });

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api', UserRoutes)
app.use('/api', ProductRoutes)



// app.get('/', function (req, res) {
//   res.sendfile('wellcome.html');
// });
const gamesRooms = ["1", "2", "3"];



// set the view engine to ejs
app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

// Here two namesapace addedx
var admin = io.of('/edit-new-first');
var client = io.of('');

admin.on('connection', function (socket) {
  console.log('admin is called');
  socket.on("joinroom", (room) => {
    console.log(room);
    if (gamesRooms.includes(room)) {
      socket.join(room);
      io.of("/admin")
        .in(room)
        .emit("newUseremit", "new user join the room" + room)

      return socket.emit("success", "yes you have joined" + room);
    } else {
      return socket.emit("err", "error joined room " + room);
    }

  })

  function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }



  //admin.emit("pushdata",arraylabel);

  admin.emit('message1', 'Message1: admin to admin');
  client.emit('message1', 'Message1: admin to client');


  socket.on('pushdata', (data) => {


    connection.getConnection(function (err, conn) {
      if (err) throw err;

      let datatomap = data.arraylabel;


      datatomap.map((doc, i) => {
        connection.query(`INSERT INTO slidedata (share,user_id,folder_id,slide_id,option,optionname,vote) values
         ('${makeid(5)}',${data.currentUserId},${data.currentFolderid},${data.selectedlideID},${i},'${doc}',${0})`, function (err, rows) {
          if (err) {
            conn.release();
            console.log(err);
            return
          }


        })
      })




      console.log('Data Inseted');
      // for simplicity, just send the rows
      // res.send(rows);

      // CLOSE THE CONNECTION
      conn.release();
    })




    client.emit('newdatasend', data);
  })
  // Data get  from field and set 





  socket.on('geteachslidedata', (data) => {

    console.log(`current slide id  ${data.e}`);
    console.log(`current user id  ${data.currentUserId}`);
    console.log(`current folder id  ${data.currentFolderid}`);

  


    console.log(`Select * From slidedata where slide_id=${data.e} 
      AND folder_id=${data.currentFolderid}`);

    connection.query(`Select * From slidedata where slide_id=${data.e} 
      AND folder_id=${data.currentFolderid}`, function (err, rows) {
      if (err) {
        conn.release();
        console.log(err);
        return
      }

      console.log(rows);


      admin.emit('geteachslidedata', rows);
    })






    //console.log('Data Inseted');
    // for simplicity, just send the rows
    // res.send(rows);

    // CLOSE THE CONNECTION
    //  conn.release();





    //client.emit('newdatasend', data);
  })


  socket.on('addnewslide', (data) => {

    console.log('addnewslide');

    console.log(`current user id  ${data.currentUserId}`);
    console.log(`current folder id  ${data.currentFolderid}`);


    connection.getConnection(function (err, conn) {
      if (err) throw err;


      connection.query(`insert into user_folder_slide (user_id,folder_id) values(?,?)`,
        [data.currentUserId, data.currentFolderid], function (err, rows) {
          if (err) {
            conn.release();
            console.log(err);
            return
          }



          connection.query(`Select slide_id from user_folder_slide Where user_id=${data.currentUserId}
          AND folder_id=${data.currentFolderid} order by slide_id DESC limit 1 `
            , function (err, rows) {
              if (err) {
                conn.release();
                console.log(err);
                return
              } else {

                console.log('new slide created', rows[0].slide_id);


                admin.emit('newCreatedSlideId', rows[0].slide_id);
              }


              // admin.emit('geteachslidedata',rows);
            })




          // admin.emit('geteachslidedata',rows);
        })






      //console.log('Data Inseted');
      // for simplicity, just send the rows
      // res.send(rows);

      // CLOSE THE CONNECTION
      //  conn.release();
    })




    //client.emit('newdatasend', data);
  })


  // Now we get data from client and show on admin

  socket.on('userdata', function (data) {
    client.emit('userdatasend', { data });
  });


  socket.on('newinput', function (data) {
    console.log(data);
  });

  socket.on('userdatachoice1', function (data) {
    client.emit('userdatasendchoice1', { data });
  });


  socket.on('userdatachoice2', function (data) {
    console.log('choice2 ' + data);
    client.emit('userdatasendchoice2', { data });
  });


  socket.on('userdatachoice3', function (data) {
    client.emit('userdatasendchoice3', { data });

  });


  socket.on('adddata', function (data) {
    client.emit('refresh', { data });

  });


  socket.on('loadslideone', function (data) {
    client.emit('slideone', { data });

  });



});





client.on('connection', function (socket) {
  console.log('user is called');


  socket.on("joinroom", (room) => {
    if (gamesRooms.includes(room)) {
      socket.join(room);
      io.of('')
        .in(room)
        .emit("newUseremit", "new user join the room" + room)
      return socket.emit("success", "yes you have joined" + room);
    } else {
      return socket.emit("err", "error joined room " + room);
    }
  })

  socket.on('vote', (data) => {
    console.log('calllled');

    connection.getConnection(function (err, conn) {
      if (err)
        return res.send(400);

      // if you got a connection...


      connection.query(`select vote from slidedata  where  slide_id=${data.lastSegment} AND option=${data.i}`, function (err, rows) {
        if (err) {
          conn.release();
          return res.send(400, err);
        }




        console.log(rows[0].vote + 1);
        // res.render('client.ejs', { myVar: rows });

        connection.query(`UPDATE slidedata  SET  vote=${rows[0].vote + 1} where  slide_id=${data.lastSegment} AND option=${data.i}`, function (err, rows) {
          if (err) {
            conn.release();
            return res.send(400, err);
          }

          admin.emit('voteupdate', data.i);
        })
      })











    })



    console.log(data.i);
  })




  admin.emit('message2', 'Message2: client to admin');
  client.emit('message2', 'Message2: client to client');
});



//  audience page route
app.get('/audience/:id', function (req, res) {

  // console.log(req.params.id);
  // res.sendfile(`client.html/&id=${req.params.id}`);

  connection.getConnection(function (err, conn) {
    if (err)
      return res.send(400);

    // if you got a connection...


    console.log(`Select * form slidedata  where  slide_id='${req.params.id}'`);

    connection.query(`Select * from slidedata  where  slide_id='${req.params.id}'`, function (err, rows) {
      if (err) {
        conn.release();
        return res.send(400, err);
      }

      console.log(rows);
      res.render('client.ejs', { myVar: rows });
    })

  })





});


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})


const PORT = process.env.PORT || 1900;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
