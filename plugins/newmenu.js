const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `👋 Hello ${pushname}

╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0
╰──────────●●►

╭╼╼╼╼╼╼╼╼╼╼
├ 1 • OWNER
├ 2 • CONVERT
├ 3 • AI
├ 4 • SEARCH
├ 5 • DOWNLOAD
├ 6 • MAIN
├ 7 • GROUP
├ 8 • FUN
├ 9 • MOVIE
├ 10 • OTHER
├ 11 • NEWS
├ 12 • TOOLS
├ 13 • LOGO Fixing
╰╼╼╼╼╼╼╼╼╼╼

╭────────❍──────❍❍➣
┝❍ All commands pannel
╰────────❍──────❍❍➣

_🌟 Reply with the Number you want to select_

> powered by Avishka_X-MD `;

                  // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'Avishka_X-MD',
          newsletterJid: "120363354060105050@g.us",
          },
          externalAdReply: {
              title: `Avishka_X-MD Menu List`,
              body: `https://Avishka-md-main-web.vercel.app/`,
              thumbnailUrl: `https://iili.io/2c1i67f.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`╭────────────────❍❍➣
 🔒 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .join
┝❍ .restart
┝❍ .shutdown
┝❍ .broadcast
┝❍ .setpp
┝❍ .block
┝❍ .unblock
┝❍ .clearchats
┝❍ .jid
┝❍ .gjid
╰────────────────❍❍➣

> powered by Avishka_X-MD `);
                        break;
                    case '2':               
                        reply(`╭────────────────❍❍➣
 🔄 𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .tts
┝❍ .qmake
┝❍ .readmore
┝❍ .sticker
┝❍ .vv
┝❍ .circle
┝❍ .crop
┝❍ .round
┝❍ .toaudio
┝❍ .currency
┝❍ .img2url
┝❍ .trt
╰────────────────❍❍➣

> powered by Avishka_X-MD `);
                        break;
                    case '3':               
                        reply(`╭────────────────❍❍➣
 👾 𝐀𝐢 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .ai
╰────────────────❍❍➣

> powered by Avishka_X-MD `);
                        break;
                    case '4':               
                        reply(`╭────────────────❍❍➣
 🔍 𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .lyric 
┝❍ .yts
┝❍ .repo
┝❍ .weather
┝❍ .img
╰────────────────❍❍➣

> powered by Avishka_X-MD `);
                        break;
                    case '5':               
                        reply(`╭────────────────❍❍➣
 📥 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .song
┝❍ .video
┝❍ .fb
┝❍ .tt
┝❍ .gdrive
┝❍ .apk
┝❍ .id
┝❍ .apk
┝❍ .img
┝❍ .mfire
┝❍ .scloud
┝❍ .xvideo
╰────────────────❍❍➣

> powered by Avishka_X-MD `);
                        break;
                    case '6':               
                        reply(`╭────────────────❍❍➣
 🔧 𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .alive
┝❍ .owner
┝❍ .support
┝❍ .about
┝❍ .system
┝❍ .ping
┝❍ .allmenu
┝❍ .menu
╰────────────────❍❍➣

> powered by Avishka_X-MD `);
                        break;
                    case '7':               
                        reply(`╭────────────────❍❍➣
 👥 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .mute
┝❍ .unmute
┝❍ .promote
┝❍ .demote
┝❍ .del
┝❍ .add
┝❍ .setgoodbye
┝❍ .setwelcome
┝❍ .admins
┝❍ .groupdesc
┝❍ .groupinfo
┝❍ .grouplink
┝❍ .gname
┝❍ .setsubject
┝❍ .tagall
┝❍ .kick
┝❍ .unlock
┝❍ .block
┝❍ .getpic
╰────────────────❍❍➣

> powered by Avishka_X-MD `);
                       break;
                    case '8':               
                        reply(`╭────────────────❍❍➣
 🎉 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .animegirl
┝❍ .animegirl1
┝❍ .animegirl2
┝❍ .animegirl3
┝❍ .charge
┝❍ .hack
┝❍ .insult
┝❍ .joke
┝❍ .quote
╰────────────────❍❍➣

> powered by Avishka_X-MD `);

                        break;
                    case '9':               
                        reply(`╭────────────────❍❍➣
 🎬 𝐌𝐨𝐯𝐢𝐞 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .movie
┝❍ .gdmovie
╰────────────────❍❍➣

> powered by Avishka_X-MD `);

                    break;
                    case '10':               
                        reply(`╭────────────────❍❍➣
 ⚙️ 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .animegirl1
┝❍ .animegirl2
┝❍ .animegirl3
┝❍ .animegirl4
┝❍ .animegirl5
┝❍ .loli
┝❍ .waifu
┝❍ .neko
┝❍ .megumin
┝❍ .maid
┝❍ .awoo
┝❍ .define
┝❍ .gpass
┝❍ .wiki
╰────────────────❍❍➣

> powered by Avishka_X-MD `);

                    break;
                    case '11':               
                        reply(`╭────────────────❍❍➣
 📰 𝐍𝐞𝐰𝐬 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .hirunews
┝❍ .sirasanews
┝❍ .derananews
┝❍ .lankadeepanews
┝❍ .bbcnews
╰────────────────❍❍➣

> powered by Avishka_X-MD `);

                    break;
                    case '12':               
                        reply(`╭────────────────❍❍➣
 🛠️ 𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .bass
┝❍ .blown
┝❍ .deep
┝❍ .fast
┝❍ .reverse2
╰────────────────❍❍➣

> powered by Avishka_X-MD `);

                    break;
                    case '13':               
                        reply(`╭────────────────❍❍➣
 🌌 𝐋𝐨𝐠𝐨 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .logo1
┝❍ .logo2
╰────────────────❍❍➣

> powered by Avishka_X-MD `);
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
