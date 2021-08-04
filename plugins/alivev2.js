const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

Asena.addCommand({pattern: 'ailive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    
    if (Config.ALIVEMSG == '```BIP BOP!```\n\n```HEY, I AM ALIVE!```') {
        
        var ttinullimage = await axios.get(`${Config.ALIVEIMG}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALIVETEXT})
    }));
