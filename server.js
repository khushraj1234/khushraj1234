

var app=require("express")();  

var http=require("http").Server(app); 

var io=require("socket.io")(http);  
var path=require("path");  
const { Socket } = require("socket.io");
path.join("G:\Chattapp\html")

app.get('/',function (req,res){

    res.sendfile("index.html")  

})

var users=[]  
io.on("connection",function(socket){

    socket.on("new-user-joined",name=>{

        users[socket.id]=name;
        console.log("name",name)
        socket.broadcast.emit("user-joined",name);
    })
  
    
socket.on("get-message",function(msg,name){
 
    socket.broadcast.emit("rcv-msg",msg,name)


})

})
   



http.listen(3000,function(){

    console.log("running on localhost:3000")
})