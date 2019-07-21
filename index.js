const Discord = require('discord.js')
const client = new Discord.Client()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
var net = require('net');
function sendmsg(msg) {
   client.channels.get("590250277672583171").send(msg)
}
var server = net.createServer(function(socket) {
     var general = client.channels.get("590250277672583171")

     socket.on('data', function(data){
     var textChunk = data.toString('utf8');
     console.log(textChunk);
     general.send(textChunk)
});
});

server.listen(1337, '127.0.0.1');


client.on('ready', () => {
  var general = client.channels.get("590250277672583171")

  console.log(`Logged in as ${client.user.tag}!`)
  general.send("hi im here")
})

client.on('message', msg => {
  var general = client.channels.get("590250277672583171")
  console.log(msg.content)
  if (msg.content.startsWith("!addrole")) {

  msg.reply('adding role')
let role = msg.guild.roles.find(r => r.name === "Mod");
let member = msg.mentions.members.first();

member.addRole(role)
//sleep(600000)
//member.removeRole(role
}
})


client.login("NjAwODI4MTE3MTAzMjgwMTk5.XS5bQg.LomOlc66PMPjNhfgMSBNwaDJzDI")

