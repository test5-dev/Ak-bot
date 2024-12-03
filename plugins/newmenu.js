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
├ 13 • LOGO
╰╼╼╼╼╼╼╼╼╼╼

╭────────❍──────❍❍➣
┝❍ TOTAL COMMANDS : 182
╰────────❍──────❍❍➣

_🌟 Reply with the Number you want to select_

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `;

                  // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'HYPER-MD',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `HYPER-MD Menu List`,
              body: `https://HYPER-md-main-web.vercel.app/`,
              thumbnailUrl: `https://pomf2.lain.la/f/uzu4feg.jpg`,
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
┝❍ .startnews
┝❍ .stopnews
┝❍ .jid
┝❍ .gjid
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);
                        break;
                    case '2':               
                        reply(`╭────────────────❍❍➣
 🔄 𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍  .convert
┝❍ .sticker2
┝❍ .tts
┝❍ .qmake
┝❍ .readmore
┝❍ .sticker
┝❍ .vv
┝❍ .circle
┝❍ .crop
┝❍ .round
┝❍ .toaudio
┝❍ .toanime
┝❍ .currency
┝❍ .url
┝❍ .img2url
┝❍ .trt
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);
                        break;
                    case '3':               
                        reply(`╭────────────────❍❍➣
 👾 𝐀𝐢 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .ai
┝❍ .bing
┝❍ .copilot
┝❍ .blackbox
┝❍ .bingimgai
┝❍ .gemini
┝❍ .gpt4
┝❍ .laland
┝❍ .obfus
┝❍ .prodia
┝❍ .prodia2
┝❍ .texttoimg1
┝❍ .texttoimg2
┝❍ .texttoimg3
┝❍ .aemtv1
┝❍ .aemtv2
┝❍ .aemtv3
┝❍ .aemtv4
┝❍ .aemtv5
┝❍ .aemtv6
┝❍ .aemtv7
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);
                        break;
                    case '4':               
                        reply(`╭────────────────❍❍➣
 🔍 𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .lyric 
┝❍ .yts
┝❍ .srepo
┝❍ .weather1
┝❍ .tiktoksearch
┝❍ .horo
┝❍ .google
┝❍ .couplepp
┝❍ .snumber
┝❍ .weather
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);
                        break;
                    case '5':               
                        reply(`╭────────────────❍❍➣
 📥 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .song2
┝❍ .video
┝❍ .fb
┝❍ .tt
┝❍ .gdrive
┝❍ .apkdl
┝❍ .twitter
┝❍ .apk
┝❍ .img
┝❍ .mfire
┝❍ .scloud
┝❍ .song
┝❍ .xnxx
┝❍ .xvideo
┝❍ .mega
┝❍ .gitclone
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);
                        break;
                    case '6':               
                        reply(`╭────────────────❍❍➣
 🔧 𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍  .runtime
┝❍ .alive
┝❍ .allmenu
┝❍ .owner
┝❍ .support
┝❍ .repo
┝❍ .about
┝❍ .system
┝❍ .ping
┝❍ .allmenu
┝❍ .menu
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);
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
┝❍ .requests
┝❍ .accept
┝❍ .reject
┝❍ .hidetag
┝❍ .kick
┝❍ .unlock
┝❍ .lock
┝❍ .approve
┝❍ .poll
┝❍ .getpic
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);
                       break;
                    case '8':               
                        reply(`╭────────────────❍❍➣
 🎉 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .animegirl
┝❍ .dog
┝❍ .fact
┝❍ .hack
┝❍ .insult
┝❍ .joke
┝❍ .quote
┝❍ .ronaldo
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);

                        break;
                    case '9':               
                        reply(`╭────────────────❍❍➣
 🎬 𝐌𝐨𝐯𝐢𝐞 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .movie
┝❍ .jshare (ꜱɪɴʜᴀʟᴀ ꜱᴜʙ ᴍᴏᴠɪᴇ ᴊɪᴅ ꜱʜᴀʀᴇ)
┝❍ .uploadme
┝❍ .ytsmx
┝❍ .uploadmovie
┝❍ .moviekv
┝❍ .uploadtv
┝❍ .uploadtvm
┝❍ .uploadmoviem
┝❍ .uploadzip
┝❍ .uploadzipn
┝❍ .uploadzipfile
┝❍ .imdb
┝❍ .gdmovie
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);

                    break;
                    case '10':               
                        reply(`╭────────────────❍❍➣
 ⚙️ 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .anime1
┝❍ .anime2
┝❍ .anime3
┝❍ .anime4
┝❍ .anime5
┝❍ .loli
┝❍ .waifu
┝❍ .neko
┝❍ .megumin
┝❍ .maid
┝❍ .awoo
┝❍ .define
┝❍ .githubstalk
┝❍ .gpass
┝❍ .wiki
┝❍ .ss
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);

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
┝❍ .ios
┝❍ .esananews
┝❍ .technews
┝❍ .wabeta
┝❍ .news
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);

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
┝❍ .calc
┝❍ .translate
┝❍ .reverse
┝❍ .tempmail
┝❍ .checkmail
┝❍ .delmail
┝❍ .encode
┝❍ .decode
┝❍ .npmstalk
┝❍ .iplookup
┝❍ .instastalk
┝❍ .githubuser
┝❍ .password
┝❍ .hijact
┝❍ .antispam
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);

                    break;
                    case '13':               
                        reply(`╭────────────────❍❍➣
 🌌 𝐋𝐨𝐠𝐨 𝐌𝐞𝐧𝐮
┝───────❍❍❍❍❍
┝❍ .logo1
┝❍ .logo2
╰────────────────❍❍➣

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `);
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
