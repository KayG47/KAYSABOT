const { create, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const left = require('./lib/left')
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
// const msgHndlr = require ('./kay')
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')
const options = require('./options')

// AUTO UPDATE BY NURUTOMO
// THX FOR NURUTOMO
// Cache handler and check for file change
require('./kay.js')
nocache('./kay.js', module => console.log(`'${module}' Updated!`))
require('./lib/help.js')
nocache('./lib/help.js', module => console.log(`'${module}' Updated!`))
require('./lib/database/setting.json')
nocache('./lib/database/setting.json', module => console.log(`'${module}' Updated!`))

const adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
const setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    mtc: mtcState,
    banChats,
    restartState: isRestart
    } = setting

function restartAwal(kay){
    setting.restartState = false
    isRestart = false
    kay.sendText(setting.restartId, 'Restart Succesfull!')
    setting.restartId = 'undefined'
    //fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
}

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const start = async (kay = new Client()) => {
        console.log('------------------------------------------------')
        lolcatjs.fromString(color(figlet.textSync('KAYSA BOT', { horizontalLayout: 'full' })))
        console.log('------------------------------------------------')
        lolcatjs.fromString('[DEV] UDAH COK')
        lolcatjs.fromString('[SERVER] COBA DULU COK!')
        kay.onAnyMessage((fn) => messageLog(fn.fromMe, fn.type))
        // Force it to keep the current session
        kay.onStateChanged((state) => {
            console.log('[Client State]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') kay.forceRefocus()
        })
        // listening on message
        kay.onMessage((async (message) => {

        kay.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[CLIENT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    kay.cutMsgCache()
                }
            })
        // msgHndlr(kay, message)
        // Message Handler (Loaded from recent cache)
        require('./kay.js')(kay, message)
    }))
           

        kay.onGlobalParicipantsChanged((async (heuh) => {
            await welcome(kay, heuh) 
            left(kay, heuh)
            }))
        
        kay.onAddedToGroup(async (chat) => {
            if(isWhite(chat.id)) return kay.sendText(chat.id, 'Halo aku Kaysa, Ketik #help Untuk Melihat List Command Ku...')
            if(mtcState === false){
                const groups = await kay.getAllGroups()
                // BOT group count less than
                if(groups.length > groupLimit){
                    await kay.sendText(chat.id, 'Maaf, Batas group yang dapat Kaysa tampung sudah penuh').then(async () =>{
                        kay.deleteChat(chat.id)
                        kay.leaveGroup(chat.id)
                    })
                }else{
                    if(chat.groupMetadata.participants.length < memberLimit){
                        await kay.sendText(chat.id, `Maaf, BOT keluar jika member group tidak melebihi ${memberLimit} orang`).then(async () =>{
                            kay.deleteChat(chat.id)
                            //kay.leaveGroup(chat.id)
                        })
                    }else{
                        if(!chat.isReadOnly) kay.sendText(chat.id, 'Halo aku Kaysa, Ketik #help Untuk Melihat List Command Ku...')
                    }
                }
            }else{
                await kay.sendText(chat.id, 'Kaysa sedang maintenance, coba lain hari').then(async () => {
                    kay.deleteChat(chat.id)
                    kay.leaveGroup(chat.id)
                })
            }
        })

        /*kay.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) kay.sendSeen(to)
        }))*/

        // listening on Incoming Call
        kay.onIncomingCall(( async (call) => {
            await kay.sendText(call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!')
            .then(() => kay.contactBlock(call.peerJid))
        }))
    }

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

create(options(true, start))
    .then(kay => start(kay))
    .catch((error) => console.log(error))
