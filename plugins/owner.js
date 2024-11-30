const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*🔥 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: Avishka_X*
🔥 *ɴᴜᴍʙᴇʀ* -: +94788240417
🔥 *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://chat.whatsapp.com/KjDrxhc9b3f7MwmaoraCPC

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Avishka_X-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://iili.io/27eROKB.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
