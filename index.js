
												
const Discord = require('discord.js')
const client = new Discord.Client()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
client.on('ready', () => {
  console.log("logged in the bot is")
  client.user.setActivity("With my pee pee", "PLAYING")
})
function checkperms(){
    if (msg.member.roles.find(r => r.name === "Moderation Team")) {
    	return "True"
    	} else{
    	return "False"
    }}
function y() {
 msg.react("🇾")
setTimeout(e, 500)
}
function e() {
 msg.react("🇪")
setTimeout(f, 500)
}
function f() {
 msg.react("3⃣")
setTimeout(t, 500)
}
function t() {
 msg.react("🇹")
}
function z() {
msg.react("🇳");
setTimeout(p, 500)
}
function p() {
msg.react("🇮")
setTimeout(b, 500)
}
function l(){
msg.react("🇧")
}
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
       msg.channel.send("removing " + member + " from timeout")

}
function time() {
       var time = msg.content.split(" ").splice(-1)
       var time = time * 60000
       return time
client.on('message', msg => {

if(msg.author.bot) return
if (msg.content === '!ping') {
	msg.author.send('Pong.');
}
//i know i did a trash job here but as long as it works 


if (msg.content.includes('yeet')) {
	y()
}
if (msg.content.includes('nib')) {
msg.channel.send("*n ឵឵i ឵឵b*")
}
unction checkperms(){
    if (msg.member.roles.find(r => r.name === "Moderation Team")) {
    	return "True"
    	} else{
    	return "False"
    }}


//  console.log(msg.content)
  if (msg.content.startsWith("!timeout")) {
let member = msg.mentions.members.first();
let role = msg.guild.roles.find(r => r.name === "Time Out Role");

}
    if (checkperms) {
        time()
	addrole()
        console.log(time)
        setTimeout(delrole, time());
}}



if (msg.content.includes('untimeout')) {
let member = msg.mentions.members.first();
let role = msg.guild.roles.find(r => r.name === "Time Out Role");

if (checkperms()) {
delrole()
}

console.log(msg.content)


});


client.login(process.env.BOT_TOKEN)
