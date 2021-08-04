const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'abcd ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

var ttinullimage = await axios.get(`${ Config.ALIVEIMG }$`, { responseType: 'arraybuffer' })
await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '\n '+Config.ALIVETEXT+' \n'})

    }));
}
