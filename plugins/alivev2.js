const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'fkalive ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

var lasi = await axios.get(`${Config.ALIVEIMG}`, { responseType: 'arraybuffer' })
await message.sendMessage(Buffer.from(lasi.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.ALIVETEXT})

    }));
}
