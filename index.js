const Discord = require('discord.js')
const client = new Discord.Client()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
var net = require('net');
function sendmsg(msg) {
   client.channels.get("397900004468981770").send(msg)
}

var server = net.createServer(function(socket) {
     var general = client.channels.get("397900004468981770")

});



client.on('ready', () => {
  var general = client.channels.get("397900004468981770")

  console.log(`Logged in as ${client.user.tag}!`)
//  general.send("hi im here")
})

client.on('message', msg => {
  var general = client.channels.get("397900004468981770")
  console.log(msg.content)
  if (msg.content.startsWith("!timeout")) {
let member = msg.mentions.members.first();
let role = msg.guild.roles.find(r => r.name === "Time Out Role");
function addrole() {
        var timemins = time() / 60000
        msg.reply("timing out" + ' ' + member + " " + "for" + " " + timemins + " " + "minutes")
        member.addRole(role)
}
function delrole() {
       member.removeRole(role)
       console.log("removed role")
}
function time() {
       var time = msg.content.split(" ").splice(-1)
       var time = time * 60000
       return time
}
    if (msg.member.roles.find(r => r.name === "Admin")) {
        time()
	addrole()
        console.log(time)
        setTimeout(delrole, time());


}}})    
client.login("NjAxNzg5MTcyNDQ0ODIzNTYz.XVMlmg.HO92H_aARB9uE888x6GcNaO--OM");

