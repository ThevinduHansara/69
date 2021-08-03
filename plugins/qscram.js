/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const axios = require('axios')
const { errorMessage, infoMessage } = require('../helpers');

//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const TKlang = Language.getString('tiktok');

const wiki = require('wikijs').default;
var gis = require('g-i-s');


if (config.WORKTYPE == 'private') {

    Amdi.applyCMD({ pattern: 'dsong ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.SONG_DESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data})

        await axios
          .get(`https://api.lolhuman.xyz/api/ytplay?apikey=qamdi5652&query=${userName}`)
          .then
          (async (response) => {
            const {
              link,
            } = response.data.result.audio
            const {
                status,
              } = response.data
            const {
              title,
              } = response.data.result.info

            const profileBuffer = await axios.get(link, {responseType: 'arraybuffer'})

            const msg = `${status}`

      if (msg === '500') { await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text)}
          
      if (msg === '200') {
        await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data}); 
        await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'})
        }
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data}),
          )
    }));

    
}
else if (config.WORKTYPE == 'public') {

    Amdi.applyCMD({ pattern: 'dsong ?(.*)', fromMe: false,  deleteCommand: false, desc: Lang.SONG_DESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data})

        await axios
          .get(`https://api.lolhuman.xyz/api/ytplay?apikey=qamdi5652&query=${userName}`)
          .then
          (async (response) => {
            const {
              link,
            } = response.data.result.audio
            const {
                status,
              } = response.data
            const {
              title,
              } = response.data.result.info

            const profileBuffer = await axios.get(link, {responseType: 'arraybuffer'})

            const msg = `${status}`

      if (msg === '500') { await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text)}
          
      if (msg === '200') {
        await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data}); 
        await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'})
        }
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data}),
          )
    }));

    
}

    
