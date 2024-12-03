const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
      pattern: "alive",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "🧚🏻‍♀️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);


          // Status message to be sent


          let desc = `👋 Hello ${pushname}

📍 *I'm Avishka_X-MD Whatsapp Bot* ✅
┏━━━━━━━━━━━➤◍◉➤
┝*∘₊✧──────✧₊∘*
├ .✦  > Platform :  ${os.hostname()}
┗━━━━━━━━━━━━━━━━━➤◍◉➤
┏━━━━━━━━━━━➤◍◉
┝*∘₊✧──────✧₊∘*
├ .✦  > Ram Usage : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━━━➤◍◉➤
┏━━━━━━━━━━━➤◍◉➤
┝*∘₊✧──────✧₊∘*
├ .✦  > Runtime : ${runtime(process.uptime())} 
┗━━━━━━━━━━━━━━━━━➤◍◉➤
┏━━━━━━━━━━━➤◍◉➤
┝*∘₊✧──────✧₊∘*
├ .✦  > Version : 2.0.0
┗━━━━━━━━━━━━━━━━━➤◍◉➤                                                                                                 
🚩 Have A Nice Day 🚩

> *powered by Avishka_X-MD* `





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'Avishka_X-MD-MD',
          newsletterJid: "120363354060105050@newsletter",
          },
          externalAdReply: {
              title: `*I'm Alive Now* ⚡`,
              body: `https://Avishka_X-MD-md-main-web.vercel.app/`,
              thumbnailUrl: `https://iili.io/2c1i67f.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`Error: ${e.message}`);
      }
    });
