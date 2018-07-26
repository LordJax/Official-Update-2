const Discord = require("discord.js");


module.exports.run = async (client,message,args) => {

    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");

    let folder = args[0]
    let command = args[1]

  //  delete require.cache[require.resolve(`../${args[0]}.js`)];
  delete require.cache[require.resolve(`./${folder}/${command}.js`)];
    message.reply(`The command ${command} has been reloaded in the folder ${folder}`);
  
    

}
module.exports.help = {
    name: "reload"
}