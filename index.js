
												
const Discord = require('discord.js')
const client = new Discord.Client()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
client.on('ready', () => {
  console.log("logged in the bot is")
  client.user.setActivity("With my pee pee", "PLAYING")
})

client.on('message', msg => {
/*
these are all the functions in the bot
----------------------------------------------------------------------------------------------------------------
**/
function checkperms(){
    if (msg.member.roles.find(r => r.name === "Moderation Team")) {
    	return "True"
    	} else{
    	return "False"
    }}
function y() {
 msg.react("🇾")
setTimeout(ye, 500)
}
function ye() {
 msg.react("🇪")
setTimeout(yee, 500)
}
function yee() {
 msg.react("3⃣")
setTimeout(yeet, 500)
}
function yeet() {
 msg.react("🇹")
}
function n() {
msg.react("🇳");
setTimeout(ni, 500)
}
function ni() {
msg.react("🇮")
setTimeout(nib, 500)
}
function nib(){
msg.react("🇧")
}
function addrole() {
	let member = msg.mentions.members.first();
        let role = msg.guild.roles.find(r => r.name === "Time Out Role");
        var timemins = time() / 60000
        msg.reply("timing out" + ' ' + member + " " + "for" + " " + timemins + " " + "minutes")
        member.addRole(role)
	member.send("you have been put in a virtual timeout corner, wait " + timemins + " minutes before you can chat on the server again");
}
function delrole() {
       let member = msg.mentions.members.first();
       let role = msg.guild.roles.find(r => r.name === "Time Out Role");
       member.removeRole(role)
       console.log("removed role")
       member.send("you have been released from the virtual timeout corner i hope you have learned your lesson, you may chat now")
       msg.channel.send("removing " + member + " from timeout")

}
function time() {
       var time = msg.content.split(" ").splice(-1)
       var time = time * 60000
       return time
}
/*
this is where the functions end and the endless if statements begin
--------------------------------------------------------------------------------------------------------
**/
if(msg.author.bot) return

if (msg.content.includes('yeet')) {
	y()
}
if (msg.content.includes('nib')) {
msg.channel.send("*nib*")
}


//  console.log(msg.content)
  if (msg.content.startsWith("!timeout")) {
let member = msg.mentions.members.first();
let role = msg.guild.roles.find(r => r.name === "Time Out Role");

    if (checkperms()) {
        time()
	addrole()
        console.log(time)
        setTimeout(delrole, time());
}}
	
if (msg.content.includes('untimeout')) {
if (checkperms()) {
delrole()
}}

console.log(msg.content)


});


client.login(process.env.BOT_TOKEN)
