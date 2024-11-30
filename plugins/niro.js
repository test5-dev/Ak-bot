const {cmd , commands} = require('../command')

cmd({
    pattern: "niro",
    desc: "wallpaper the bot",
    category: "main",
    react: "🎗️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ MY Avishka_X WALLPEPAR 🧚‍♂️💗 ❯❯`
await conn.sendMessage(from,{image:{url: `https://iili.io/2KVSNkv.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://iili.io/2CrVICN.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://iili.io/2oILvl1.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
