
const Discord = require('discord.js')
const ud = require('urban-dictionary')
const client = new Discord.Client()
member1=0
client.on('ready', () => {
//runs on succesful login
console.log("logged in the bot is")
//sets things
client.user.setActivity(process.env.STATUS, {type: process.env.STATUS1 });

})
//start of new message detection
client.on('message', msg => {
if(msg.author.bot) return
/*
these are all the functions in the bot
----------------------------------------------------------------------------------------------------------------
**/
function checkperms(){

if(msg.member.roles.some(r=>["Moderation Team", "BOT CODER"].includes(r.name))) {


    	return true
    	} else{
    	return false
    }}
function isdm(){
	if (msg.guild === null){
    return true
	} else{
	return false
	}
}

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
	//sets member var
	let member = msg.mentions.members.first();
	//converts role name to role id to be more flexible with noobs
        let role = msg.guild.roles.find(r => r.name === "Time Out Role");
	//this  takes the amount of time the time function, from milleseconds to minutes
        var timemins = time() / 60000
	//announces the timing out of the user
	msg.reply("timing out" + ' ' + member + " " + "for" + " " + timemins + " " + "minutes")
	//gives the user the timeout role
	member.addRole(role)
	//direct messages them of what happened just incase they dont know
	member.send("you have been put in a virtual timeout chair, wait " + timemins + " minutes before you can chat on the server again");
}
function delrole() {
       let member = msg.mentions.members.first();
       let role = msg.guild.roles.find(r => r.name === "Time Out Role");
       member.removeRole(role)
       console.log("removed role")
       member.send("you have been released from the virtual timeout chair i hope you have learned your lesson, you may chat now")
       client.channels.get("601173874209718287").send("removing " + member + " from timeout")

}
function time() {
	//gets the time the user specifies by finding the last thing the person running the command said which is the time
       var time = msg.content.split(" ").splice(-1)
       //turns them human mins to evilvoice("computer milliseconds")
       var time = time * 60000
       //lets the answer func be free
       return time
}
/*
this is where the functions end and the endless if statements begin
--------------------------------------------------------------------------------------------------------
**/
if(msg.author.bot) return
if (msg.content.startsWith("//")) return
//reacts to messages that say yeet in them with ye3t
if (msg.content.includes('yeet')) {
	y()
}
//console.log(msg.member)
//custom chat response feature, you can change the words
if (msg.content.includes('nib')) {
	msg.channel.send("*n i b*")
}
//this is the place where admin commands are
//---------------------------------------------------------------------------------------------------------------------
if (!isdm()){
if (checkperms()){
//if user passes checkperms and they say !timeout at beginning of message, get the timeout chair ready
if (msg.content.startsWith("!timeout")) {
        time()
	     addrole()
        console.log(time)
        setTimeout(delrole, time());
}
//if you read the top, you know whats going on here
if (msg.content.startsWith('!untimeout')) {
delrole()
}
if (msg.content.startsWith("!setimage")) {
client.user.setAvatar((msg.attachments).array()[0].url);
}
if (msg.content.startsWith("!setwatching")){
	   watching = (msg.content).slice(13)
	   process.env['STATUS'] = watching;
	   process.env['STATUS1'] = 'WATCHING';
	client.user.setActivity(watching, {type: "WATCHING" });
}
if (msg.content.startsWith("!setplaying")){
	   playing = (msg.content).slice(12)
  	   process.env.STATUS = playing;
	   process.env.STATUS1 = 'PLAYING';
	client.user.setActivity(playing, {type: "PLAYING" });
}
}
}
//--------------------------------------------------------------------------------------------------------------------
//logs all chat messages to console, remove if your going to use on a large server for obvious reasons
console.log(msg.content)
//requires user id but you can use it to make the bot
if (msg.content.startsWith("!help")){
msg.channel.send(`admin commands\n-------------------------------\n
!timeout @user mins | puts people in virtual timeout chair\n
!untimeout @user | removes people from the virtual timeout chair\n
!setplaying insert desired status | sets playing status\n
!setwatching insert desired status | sets watching status\n
!setimage upload image | sets bot profile image\n
----------------------------\n normal user commands\n ----------------------------
!ud word | gets a definition from urban dictionary\n
saying yeet in a message | reacts with yeet using emojis`)


}
if (msg.author.id=="279681908793933827"){
	if (isdm()){
		if (msg.content.startsWith("!setuserid")) {
   member1 = msg.content.split(" ").splice(-1)
   msg.author.send("Connecting to " +client.users.get(member1[0]).username)
} else {
	if (member1=="0") {
		msg.author.send("please set the users id with !setuserid")
      return
   }
console.log(member1[0])
if (msg.attachments.size > 0) {
msg.author.send("to: " + client.users.get(member1[0]).username+"\n"+msg.content, {file: (msg.attachments).array()[0].url})
client.users.get(member1[0]).send(msg.content, {file: (msg.attachments).array()[0].url})

console.log((msg.attachments).array()[0].url)
} else{
	if (member1=="0") {
   msg.author.send("please set the users id with !setuserid")	
   return
   	}
	
	console.log(member1)
msg.author.send("to: " + client.users.get(member1[0]).username+"\n"+msg.content)
client.users.get(member1[0]).send(msg.content)
}}
}}
	if (isdm()){
if (msg.author.id == member1){
	if (msg.attachments.size > 0){
client.users.get("279681908793933827").send("from: " + msg.author.username+"\n"+msg.content, {file: (msg.attachments).array()[0].url})
}else{
client.users.get("279681908793933827").send("from: " + msg.author.username+"\n"+msg.content)

}}}
if (msg.content.startsWith("!ud")){
definition = (msg.content).slice(4)
msg.channel.send("word:")
msg.channel.send(definition)
ud.term(definition).then((result) => msg.channel.send("definition:\n"+(result.entries[0].definition)))
ud.term(definition).then((result) => msg.channel.send("example:\n"+(result.entries[0].example)))
}
//end of new message detection
});
//detects when message deleted
client.on("messageDelete", (messageDelete) => {
console.log(messageDelete.content)
  }); 
//end of message delete detection
/*this part logs in with the bot token, mine is set on the hosting platform
if your running it replace process.env.BOT_TOKEN with "your token" with the qoutes
*/
//client.login(process.env.BOT_TOKEN)
