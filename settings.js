//base by DGXeon x Phantom
//YouTube: @phantom-hacks01
//Instagram: phantom-hacks01
//Telegram: t.me/Hackerzone25
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@phantom-hacks01

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "50943212342"
global.ownername = "TAP-NO|ON👾💀☠️🤖"
global.ytname = "YT: phantom-hacks01"
global.socialm = ""
global.location = "India, Mizoram, Aizawl"

global.ownernumber = '2348108395270'  //creator number
global.ownername = 'Phantom+Hacker' //owner name
global.botname = 'xbug bot' //name of the bot

//sticker details
global.packname = 'Sticker By Phantom'
global.author = 'Hallo\n\nContact: 2348108395270'

//console view/theme
global.themeemoji = '😡'
global.wm = "Phantom"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaBROanEquiLW3ii1n47'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Mwen fini ui grimas🙄!',
    prem: 'Soumoun kòmand sa pa pou ou',
    admin: 'Kòman nou fè anlè konsa noumenm 🤨',
    botAdmin: 'Tenten mete mèt bot lan admin pou use bot lan😑 ',
    owner: 'Ou te fout gen bot malpròpte',
    group: 'Nèg sòt kòmand sa se pou gwoup li ye sèlman😠',
    private: 'Tchanpan kòmand sa se pou mesaj prive li ye😡',
    wait: 'Tann mwen...🥱 ',    
    error: 'Ou voye kaka zanmi😂!',
}

global.thumb = fs.readFileSync('./modsMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
