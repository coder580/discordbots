const Discord = require('discord.js')
const client = new Discord.Client()
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


client.on("guildMemberAdd", member => {
    let guild = member.guild;
    client.channels.find('name', 'welcome').send(`Welcome ${member.user} to the discord server`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
//  client.user.setActivity("With my pee pee", "PLAYING")
})

client.on('message', msg => {
if (msg.content.includes('fortnite')) {
    msg.reply("has been lost to the battle bus")
    sleep(1000)
    msg.member.setNickname("IM 9 YEARS OLD");
}
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
client.login(process.env.BOT_TOKEN)
