const Discord = require('discord.js')
const client = new Discord.Client()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
var net = require('net');
function sendmsg(msg) {
   client.channels.get("397900004468981770").send(msg)
}

var server = net.createServer(function(socket) {
     var general = client.channels.get("397900004468981770")

     socket.on('data', function(data){
     var textChunk = data.toString('utf8');
     console.log(textChunk);
     general.send(textChunk)
});
});

server.listen(1337, '127.0.0.1');


client.on('ready', () => {
  var general = client.channels.get("397900004468981770")

  console.log(`Logged in as ${client.user.tag}!`)
  general.send("hi im here")
})

client.on('message', msg => {
  var general = client.channels.get("397900004468981770")
  console.log(msg.content)
  if (msg.content.startsWith("!timeout")) {

  msg.reply('timing out')
let member = msg.mentions.members.first();
let role = msg.guild.roles.find(r => r.name === "Time Out Role");
let role2 = msg.guild.roles.find(r => r.name === "General");
    if(message.member.roles.find(r => r.name === "Admin")) {
   
       member.addRole(role)
       member.removeRole(role2)
       console.log("added role")
       sleep(600000)
       member.removeRole(role)
       console.log("removed role")



}}


client.login("NjAxNzg5MTcyNDQ0ODIzNTYz.XTHaIw.SoTKnnJjT6hh1fxJSt5G_njtw04")

