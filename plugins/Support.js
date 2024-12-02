const { cmd } = require('../command');

cmd({
    pattern: "support",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
            '*⚠️ 「✔ ᵛᵉʳᶦᶠᶦᵉᵈ」..■■■■■100%*', 
            '*Hi sir*\n*Im Avishka_X-MD support center.How can I help you.. *',
            '*what is your problem..*',
            '*please contact the owner and tell your problem..*',
            '*Here is owner* - +94788240417\n*owner-Avishka_Thuruwiman_X*'
           
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
