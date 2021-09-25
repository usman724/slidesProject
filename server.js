const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const morgan = require('morgan')
const bodyParser = require('body-parser')
var mysql = require('mysql');

require('dotenv').config()

var connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database : process.env.DB_NAME,
  connectionLimit: 1000,               // this is the max number of connections before your pool starts waiting for a release
  multipleStatements: true           // I like this because it helps prevent nested sql statements, it can be buggy though, so be careful

});

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// add new line
// second line
// add line here
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
app.get('/client', function (req, res) {
  res.render('new_login_signup.ejs');
});

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



// Here two namesapace 
var admin = io.of('/edit-new-first');
var client = io.of('');


// Javascript Funcion 


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

function function1() {
  // stuff you want to happen right away
  console.log('Welcome to My Console,');
}

function function2() {
  // all the stuff you want to happen after that pause
  console.log('Blah blah blah blah extra-blah');
  admin.emit('loaderEnd', 'asdasd');
}





admin.on('connection', function (socket) {
  console.log('admin is called');


  socket.on("joinroom", (room) => {
    
    console.log(`joinRoom ---------------------- ${room}`);

    socket.to(room).on('pushdata', (data) => {

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
        connection.query(`INSERT INTO slidequestion (q_detail,slide_id) values ('${data.question}',${data.selectedlideID})`, function (err, rows) {
          if (err) {
            conn.release();
            console.log(err);
            return
          }
  
         })
        console.log('Data Inseted');
        conn.release();
      })
      client.emit('newdatasend', data);
    })





    //Save each data Question into the field 
      socket.to(room).on('pushdataforQuestion', (data) => {
        console.log(data);
          connection.getConnection(function (err, conn) {
            if (err) throw err;
        
            connection.query(`SELECT q_id FROM slidequestion WHERE slide_id=${data.selectedlideID} AND slidetype='${data.type}'`, function (err, rows) {
              if (err) {
                console.log(err);
                return
              }
              console.log('row ',rows.length);
        
              if (rows.length >0 ) {
                connection.query(`UPDATE slidequestion SET q_detail ='${data.question}' where  slide_id=${data.selectedlideID}`, function (err, rows) {
                if (err) {
                  console.log(err);
                  return
                }
                console.log('Question Updated');
              })
              } else {
              connection.query(`INSERT INTO slidequestion (q_detail,slide_id,slidetype) values ('${data.question}',${data.selectedlideID},'${data.type}')`, function (err, rows) {
                  if (err) {
                    console.log(err);
                    return
                  }
              console.log('Question Saveeed');
            })
              }
            })  
          })
        })
  


        // Save Mcq 1 

//Save each data Question into the field 
socket.to(room).on('savemcqone', (data) => {
  //console.log(data);
  
  admin.emit('loaderstart', "Start the uploading");
    connection.getConnection(function (err, conn) {
      if (err) throw err;
  
      connection.query(`SELECT optionname FROM slidedata WHERE slide_id='${data.selectedlideID}' AND optionx=${data.atindex}`, function (err, rows) {
        if (err) {
          console.log(err);
          return
        }
        console.log('row ',rows.length);

        if (rows.length >0 ) {
          connection.query(`UPDATE slidedata SET optionname ='${data.valuesend}' where  slide_id=${data.selectedlideID} AND optionx=${data.atindex}`, function (err, rows) {
          if (err) {
            console.log(err);
            return
          }
          console.log('data Updated');
          admin.emit('loaderEnd', "Start the uploading");
        })
        } else {
        connection.query(`INSERT INTO slidedata (share,user_id,folder_id,slide_id,optionx,optionname,vote,live) values
        ('${data. slide_link_share}',${data.currentUserId},${data.currentFolderid},${data.selectedlideID},${data.atindex},'${data.valuesend}',${0},${0})`, function (err, rows) {
            if (err) {
              console.log(err);
              return
            }
        console.log('data Saveeed');
        
        admin.emit('loaderEnd', "Start the uploading");
       })
        }
       })  
    })
  })



  

  socket.to(room).on('geteachslidedata', (data) => {

    admin.emit('loaderstart', "Start the uploading");
   

    console.log(`Select * From slidedata where slide_id=${data.e} AND folder_id=${data.currentFolderid}`);

    connection.query(`Select * From slidedata where slide_id=${data.e} AND folder_id=${data.currentFolderid}`, function (err, rows) {
      if (err) {
     
        console.log(err);
        return
      }

      connection.query(`Select * From slidequestion where slide_id=${data.e}`, function (err, rowsofquestion) {
      if (err) {
        conn.release();
        console.log(err);
        return
      }
  
      console.log('caleed');
      let dataofslide = {
        slidedata:rows,
        rowsofquestion:rowsofquestion
      }
      console.log(dataofslide);
      admin.emit('geteachslidedata', dataofslide);
      admin.emit('loaderEnd', "Start the uploading");
    })

      admin.emit('geteachslidedata', rows);
    })

  })




  socket.to(room).on('addnewslide', (data) => {

    console.log('addnewslide');

    console.log(`current user id  ${data.currentUserId}`);
    console.log(`current folder id  ${data.currentFolderid}`);


    connection.getConnection(function (err, conn) {
      if (err) throw err;


      connection.query(`insert into user_folder_slide (presentation_id,user_id,folder_id) values(?,?,?)`,
        [data.slide_id,data.currentUserId, data.currentFolderid], function (err, rows) {
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
            })
        })

    })
    
  })


    socket.on('updateLiveData', (selectedSlideData) => {

      console.log(selectedSlideData);
      admin.emit('loaderstart', 'asdasd');

      connection.getConnection(function (err, conn) {
        if (err) throw err;


        connection.query(`UPDATE slidedata  SET  live=0 where  share='${selectedSlideData.slide_link_share}'`, function (err, rows) {
          if (err) {
            conn.release();
            return res.send(400, err);
          }
          connection.query(`UPDATE slidedata  SET  live=1 where  slide_id=${selectedSlideData.id} AND share='${selectedSlideData.slide_link_share}'`, function (err, rows) {
            if (err) {
              conn.release();
              return res.send(400, err);
            }
            console.log('Updated');
            client.emit('voteupdate', rows);
            function1();

            function2();

          })

        })

      })

    })


  })





    
 socket.on('getEachSlideQuestion', function (data) {
  connection.query(`SELECT *  FROM slidequestion WHERE slide_id=${data}` , function (err, rows) {
    if (err) {
      conn.release();
      return res.send(400, err);
    }
    console.log(rows.length);
    if(rows.length>0) {
      console.log('no data exitsss');
      admin.emit('setEachSlideQuestion',rows);
    }
    console.log(rows.length);
// call the rest of the code and have it execute after 3 seconds
    
  })
  });






  // Now we get data from client and show on admin

  socket.on('userdata', function (data) {
    client.emit('userdatasend', { data });
  });


  socket.on('newinput', function (data) {
    console.log(data);
  });



  socket.on('AllowMultipelOption', function (data) {
   
    admin.emit('loaderstart', 'asdasd');
    connection.getConnection(function (err, conn) {
      if (err)
        return res.send(400);
    
        connection.query(`UPDATE slidedata  SET  allowmultipelcol=${data.participent} WHERE  slide_id=${data.id} AND share='${data.slide_link_share}'`, function (err, rows) {
          if (err) {
            conn.release();
            return res.send(400, err);
          }
          console.log('Updated');
          client.emit('voteupdate', rows);
          function1();

          function2();

        })


      });

  });




  socket.on('AllowMultipelOptionRangeSelection', function (data) {
   
    admin.emit('loaderstart', 'asdasd');
    connection.getConnection(function (err, conn) {
      if (err)
        return res.send(400);
    
        connection.query(`UPDATE slidedata  SET  allowselection='${data.selectionNumber}' WHERE  slide_id=${data.id} AND share='${data.slide_link_share}'`, function (err, rows) {
          if (err) {
            conn.release();
            return res.send(400, err);
          }
          console.log('Updated');
          client.emit('voteupdate', rows);
          function1();

          function2();

        })


      });

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



// End of the admin Connection





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
    
    connection.getConnection(function (err, conn) {
      if (err)
        return res.send(400);
      

     connection.query(`select slide_id from slidedata  where  share='${data.lastSegment}' AND optionx='${data.i+1}' And optionname='${data.optiondata}' And live=1`, function (err, rows_slide_id) {
        if (err) {
          conn.release();
          return res.send(400, err);
        }
        console.log(data.Slide_id);
        connection.query(`select vote from slidedata  where  slide_id=${data.Slide_id} AND optionx=${data.i}`, function (err, rows) {
          if (err) {
            conn.release();
            return res.send(400, err);
          }
          // res.render('client.ejs', { myVar: rows });
            console.log('data.Slide_id ',data.Slide_id);
            console.log('data.i ',data.i);
          connection.query(`UPDATE slidedata  SET  vote=${rows[0].vote + 1} where  slide_id=${data.Slide_id} AND optionx=${data.i}`, function (err, rows) {
            if (err) {
              conn.release();
              return res.send(400, err);
            }
            admin.emit('voteupdate', data.i);
          })

      })

     
      })


    })

  admin.emit('message2', 'Message2: client to admin');
  client.emit('message2', 'Message2: client to client');
})
});


app.get('/audience/:id', function (req, res) {

  // console.log(req.params.id);
  // res.sendfile(`client.html/&id=${req.params.id}`);

  connection.getConnection(function (err, conn) {
    if (err)
      return res.send(400);

    // if you got a connection...

    connection.query(`Select * from slidedata  where  share='${req.params.id}' AND live=1`, function (err, rows) {
      if (err) {
        conn.release();
        return res.send(400, err);
      }

     // console.log(rows[0]);
    //console.log('hewe     iid '+typeof(rows[0].slide_id));
        if (rows.length  > 1) {
          
        let values= typeof(rows[0].slide_id)==='undefined'?1702:rows[0].slide_id;

              connection.query(`Select * from slidequestion  where  slide_id='${values}' `, function (err, rowsid) {
                if (err) {
                  conn.release();
                  return res.send(400, err);
                }
              console.log('now we data ');
              console.log('now we data ',rows);
              res.render('client.ejs', 
              { 
                myVar: rows ,
                question:rowsid[0].q_detail
              });
            })
  
        } else {
          res.render('client.ejs', 
          { 
            myVar: rows ,
            question:""
          });
        }



    })

  })





});




app.get('/updateApi', function (req, res) {

  res.send({
    "message":'send'
  })


});





app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.render('404.ejs');
})


const PORT = process.env.PORT || 1900;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
