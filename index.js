
												
const Discord = require('discord.js')
const client = new Discord.Client()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
client.on('ready', () => {
  console.log("logged in the bot is")
  client.user.setActivity("With my pee pee", "PLAYING")
})

client.on('message', msg => {

if(msg.author.bot) return
if (msg.content === '!ping') {
	msg.author.send('Pong.');
}
//i know i did a trash job here but as long as it works 

function y() {
 msg.react("🇾")
setTimeout(e, 400)
}

function e() {
 msg.react("🇪")
setTimeout(f, 400)
}

function f() {
 msg.react("3⃣")
setTimeout(t, 400)
}
function t() {
 msg.react("🇹")
}


if (msg.content.includes('yeet')) {
	y()
}
if (msg.content.includes('nib')) {
msg.channel.send("*n ឵឵i ឵឵b*")
}



//  console.log(msg.content)
  if (msg.content.startsWith("!timeout")) {
let member = msg.mentions.members.first();
let role = msg.guild.roles.find(r => r.name === "Time Out Role");
function addrole() {
        var timemins = time() / 60000
        msg.reply("timing out" + ' ' + member + " " + "for" + " " + timemins + " " + "minutes")
        member.addRole(role)
	member.send("you have been put in a virtual timeout corner, wait " + timemins + " minutes before you can chat on the server again");
}
function delrole() {
       member.removeRole(role)
       console.log("removed role")
       member.send("you have been released from the virtual timeout corner i hope you have learned your lesson, you may chat now")
}
function time() {
       var time = msg.content.split(" ").splice(-1)
       var time = time * 60000
       return time
}
    if (msg.member.roles.find(r => r.name === "Admin" || "STAFF IN TRIANING" || "Operator")) {
        time()
	addrole()
        console.log(time)
        setTimeout(delrole, time());
}}



if (msg.content.includes('untimeout')) {
let member = msg.mentions.members.first();
let role = msg.guild.roles.find(r => r.name === "Time Out Role");

function delrole() {
       member.removeRole(role)
       console.log("removed role")
       member.send("you have been released from the virtual timeout corner i hope you have learned your lesson, you may chat now")
}

if (msg.member.roles.find(r => r.name === "Admin" || "STAFF IN TRAINING" || Operator)) {
delrole()
msg.channel.send("removing " + member + " from timeout")
}}

console.log(msg.content)
var stdin = process.openStdin();
var g
stdin.addListener("data", function(d) {
var d = d.toString().trim();
if (d !== g ) {
client.channels.get("466669866934599680").send(d)
var g = d
}
})

});


client.login(process.env.BOT_TOKEN)
