const Discord = require('discord.js')
const client = new Discord.Client()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
//  client.user.setActivity("With my pee pee", "PLAYING")
})

client.on('message', msg => {

if (msg.content === '!ping') {
	// send back "Pong." to the channel the message was sent in
	msg.author.send('Pong.');
}

if (msg.content.includes('fortnite')) {
    var user = msg.member
//    msg.reply("has been lost to the battle bus")

function setnick() {
    msg.member.setNickname("[muted] IM 9 YEARS OLD");
}
setTimeout(setnick, 5000);
  }
  console.log(msg.content)
  if (msg.content.startsWith("!timeout")) {
let member = msg.mentions.members.first();
let role = msg.guild.roles.find(r => r.name === "Time Out Role");
function addrole() {
        var timemins = time() / 60000
        msg.reply("timing out" + ' ' + member + " " + "for" + " " + timemins + " " + "minutes")
        member.addRole(role)
	member.send("you have been put in a virtual timeout corner, wait " + timemins + " before you can chat on the server again");
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
    if (msg.member.roles.find(r => r.name === "Admin")) {
        time()
	addrole()
        console.log(time)
        setTimeout(delrole, time());


}}})    
client.login(process.env.BOT_TOKEN)
