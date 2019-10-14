
												
const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
//runs on succesful login
console.log("logged in the bot is")
//sets things
client.user.setActivity("Anime", {type: "WATCHING" });

})
//start of new message detection
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
       //lets the answer of the func escape the func
       return time
}
/*
this is where the functions end and the endless if statements begin
--------------------------------------------------------------------------------------------------------
**/
if(msg.author.bot) return
//reacts to messages that say yeet in them with ye3t
if (msg.content.includes('yeet')) {
	y()
}
	
//custom chat response feature, you can change the words
if (msg.content.includes('nib')) {
	msg.channel.send("*nib*")
}

//if user passes checkperms and they say !timeout at beginning of message, get the timeout chair ready
if (msg.content.startsWith("!timeout") &&  checkperms()) {
        time()
	addrole()
        console.log(time)
        setTimeout(delrole, time());
}
//if you read the top, you know whats going on here
if (msg.content.startsWith('!untimeout') && checkperms()) {
delrole()
}
//logs all chat messages to console, remove if your going to use on a large server for obvious reasons
console.log(msg.content)
if (msg.content.startsWith("lol")){
//	client.users.get("448274312085110796").send({ files: ["./lol.txt"] });
        client.users.get("448274312085110796").send(Sorry,
You have not passed your Staff application forum. You got 3 answers wrong.
Here are the questions you got wrong, and the answers to them.

Why should we pick you?
You did not fill this question out correctly 

How Often are you available to manage the server?
What you answered: Not often at all.
You did not meet the requirements to this question.

How familiar are you with the rules?
What you answered: I know barely any
It is required to know at least most of them.

Tell me about mentions, what is and isn't allowed?
What you answered: idk who tf mention is
Correct awnser: No unnecessary mentioning, if you need a moderator use !admin in any text channel.

Is racist or sexist remarks allowed on the server? 
What you answered: Sort of
Correct answer: No


Is there a rule about full cap messages? If so what does the rule state?
What you answered: If you type in all caps you are a phaggot.
Correct answer: No full cap messages.

Is putting links to your personal social accounts allowed?
What you answered: Yes
Correct answer: No


Is talking bad about the server a rule? If so what does it state?
What you answerd: If you talk shit you get hit, bitch.
Correct answer: Do not disrespect the server.

Is using spoilers allowed in the server?
What you anwserd: Yes
Correct anwser: Yes but not constantly

Is mic-spam allowed?
What you answered: Yes
Correct Answer: No
and this
Who's the Owner of the server?
What you answered: Some phaggot named jeff
Correct answer: Otto Potato

Is trying to get a staff member not to punish you allowed?
What you answered: Yes
Correct answer: No

What two text channels are you not allowed to have conversations in?
What you answered: Main Room, Dank Memes, Bot Commands, non-meme things, Server Suggetions
Correct Answer: Bot Commands, Server suggetions

Are you allowed to pretend to be a staff member?
What you answered: Yes
Correct answered: No

How many times can you break a rule before you get muted?
What you answered: Five times
Correct answer: Three times

How many time can you get kicked before you get banned?
What you answered: You can never be banned
Correct Answer: Twice

Are staff allowed to insult users?
What you answered: Yes
Correct answer: No

Can you copy the server?
What you answered: Yes
Correct Answer: Its illegal to

Where is the only text channel where NSFW content is allowed?
What you answered: Right up your phat phucking ass.
Correct answer: The V.I.P. NSFW Chat


Thanks for trying!

-𝓞𝓽𝓽𝓸 𝓟𝓸𝓽𝓪𝓽𝓸, 𝓞𝔀𝓷𝓮𝓻 𝓸𝓯 𝓞𝓽𝓽𝓸'𝓼 𝓓𝓪𝓷𝓴 𝓓𝓲𝓼);
}
//end of new message detection
});
//detects when message deleted
client.on("messageDelete", (messageDelete) => {
  
  }); 
//end of message delete detection
/*this part logs in with the bot token, mine is set on the hosting platform
if your running it replace process.env.BOT_TOKEN with "your token" with the qoutes
*/
client.login(process.env.BOT_TOKEN)
