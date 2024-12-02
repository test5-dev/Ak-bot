const { cmd } = require('../command');

cmd({
    pattern: "bodykit",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
            '↻ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... ↻',
            '*connecting to server*',
            '*connecting to Royal Creation LK*\n\n*Connected* ✅',
            '😜 *Hi welcome Royal creation LK Bussid Mod makers team*\n\n⭕Gayindu⁩ = Advertising ( texturing )\n⭕ Chethiya  = 3D modelling\n⭕Janith , Praveen ,Chethiya = Mod file Creator\n⭕Avishka  = Coading\n⭕Jeewantha = 3D modelling , Animation , Mod file Creator , Texturing',
            '⭕*Gayidu-* +94741983279\n⭕ *Chethiya-* +94763022057\n⭕ *Janith-* +94702617275\n⭕ *praveen-* +94788910212\n ⭕ *Avishka-* +94788240417\n⭕ *Jeewantha-* +94718847165'

             
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error:* ${e.message}`);
    }
})
