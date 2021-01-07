const fs = require('fs-extra')

const help = (prefix, cts, pendaftar) => {
    return `
┌──「 *INFORMASI* 」
│ 
├  KAY BOT
├  1.1
├  TOTAL COMMAND = 000
├ Saat ini Bot telah │berjalan selama ${format(uptime)}
│ 
╠══✪〘 GROUP 〙✪══
│ 
├  ${prefix}snk
├  ${prefix}groupinfo
├  ${prefix}add 62858xxxxx
├  ${prefix}kick @tagmember
├  ${prefix}promote @tagmember
├  ${prefix}demote @tagadmin
├  ${prefix}tagall
├  ${prefix}adminList
├  ${prefix}ownerGroup
├  ${prefix}leave
├  ${prefix}delete [replyChatBot]
├  ${prefix}kickAll
├  ${prefix}group [open|close]
├  ${prefix}NSFW [enable|disable]
├  ${prefix}left [enable|disable]
├  ${prefix}simi [enable|disable]
├  ${prefix}antisticker [enable|disable]
├  ${prefix}antilink [enable|disable]
├  ${prefix}antibadword [enable|disable]
├  ${prefix}leveling [enable|disable]
│ 
╠══✪〘 VIP MENU 〙✪══
│ 
├  ${prefix}mute
├  ${prefix}unmute
├  ${prefix}ban @tagmember
├  ${prefix}unban @tagmember
├  ${prefix}daftarulang @tagmember umur
├  ${prefix}spamcall [81273xxxx]
├  ${prefix}addbadword [text]
├  ${prefix}delbadword [text]
├  ${prefix}listbadword [text]
├  ${prefix}resetsticker @tagmember
├  ${prefix}resetbadword @tagmember
├  ${prefix}kickall
├  ${prefix}oleave
├  ${prefix}opromote
├  ${prefix}odemote
├  ${prefix}odelete
├  ${prefix}oadd 62813xxxxx
├  ${prefix}okickall
├  ${prefix}otagall
├  ${prefix}pinterest [query]
├  ${prefix}giftlimit
├  ${prefix}getvideos
├  ${prefix}getmusic
├  ${prefix}getxxx
├  ${prefix}getnhentai
├  ${prefix}getxvideos
├  ${prefix}brainlysearch
├  ${prefix}ptlvid
├  ${prefix}youtubesearch
├  ${prefix}video
├  ${prefix}subreddit [query]
├  ${prefix}music
│ 
╠══✪〘 TEXT MAKER 〙✪══
│ 
├  ${prefix}thunder [teks]
├  ${prefix}blackpink [teks]
├  ${prefix}party [teks]
├  ${prefix}romtext [teks]
├  ${prefix}silk [teks]
├  ${prefix}pornhub [|teks1|teks2]
├  ${prefix}quotemaker [|teks|author|theme]
├  ${prefix}skytext1 [teks]
├  ${prefix}skytext2 [teks]
├  ${prefix}lava [teks]
├  ${prefix}captain [teks]
├  ${prefix}galaxy [teks]
├  ${prefix}bokeh [teks]
├  ${prefix}dropwater [teks]
├  ${prefix}googletext [|teks1|text2|text3]
├  ${prefix}neon1 [|teks1|text2|text3]
├  ${prefix}neon2 [teks]
├  ${prefix}neon3 [teks]
├  ${prefix}avengers [|teks1|teks2]
├  ${prefix}marvel1 [|teks1|teks2]
├  CASE GRATIS DI wa.me/6285648253605
│ 
╠══✪〘 IMAGE MAKER 〙✪══
│ 
├  CASE BELI DI wa.me/6285648253605
│ 
╠══✪〘 KERANG 〙✪══
│ 
├  ${prefix}apakah [optional]
├  ${prefix}rate [optional]
├  ${prefix}bisakah [optional]
├  ${prefix}kapankah [optional]
│ 
╠══✪〘 PRAY 〙✪══
│ 
├  ${prefix}quran [urutan surah]
├  ${prefix}infosurah [nama surah]
├  ${prefix}tafsir [nama surah] [ayat]
├  ${prefix}jadwalsholat [daerah]
├  ${prefix}listsurah
├  ${prefix}renungharian
├  ${prefix}alkitabharian
├  ${prefix}alkitabsearch [query]
│ 
╠══✪〘 OWNER 〙✪══
│ 
├  ${prefix}block 62858xxxxx
├  ${prefix}unblock 62858xxxxx
├  ${prefix}addvip @tagmember
├  ${prefix}delvip @tagmember
├  ${prefix}restart
├  ${prefix}ekickall
├  ${prefix}banchat
├  ${prefix}unbanchat
├  ${prefix}setname [teks]
├  ${prefix}setstatus [teks]
├  ${prefix}setprofilepic
├  ${prefix}eval [kode JavaScript]
├  ${prefix}getses
│ 
╠══✪〘 OWNER 2 〙✪══
│ 
├  ${prefix}block 62858xxxxx
├  ${prefix}unblock 62858xxxxx
├  ${prefix}ekickall
├  ${prefix}banchat
├  ${prefix}unbanchat
├  ${prefix}eval [kode JavaScript]
│ 
╠══✪〘 FUN 〙✪═
│ 
├  ${prefix}caklontong
├  ${prefix}leardboard
├  ${prefix}jadwalbola
├  ${prefix}loker
├  ${prefix}trendtwitter
├  ${prefix}gethoax
├  ${prefix}afk [alasan]
├  ${prefix}level
├  ${prefix}motor [query]
├  ${prefix}spek [query]
├  ${prefix}mobil [query]
├  ${prefix}waktu
├  ${prefix}jarak |kota|tujuan
├  ${prefix}meme
├  ${prefix}family100
├  ${prefix}tebakgambar
├  ${prefix}fakta
├  ${prefix}pantun
├  ${prefix}katabijak
├  ${prefix}motivasi
├  ${prefix}slap
├  ${prefix}truth
├  ${prefix}dare
├  ${prefix}tagme
├  ${prefix}kiss @tagmember
├  ${prefix}spank @tagmember
├  ${prefix}magernulis1 --[Nama Kamu]--[Kelas Kamu]--[Teks]
├  ${prefix}ramalpasangan [kamu|pasangan]
├  ${prefix}zodiak [zodiak kamu]
├  ${prefix}artinama [nama]
├  ${prefix}howgay [nama]
├  ${prefix}whipped [nama]
├  ${prefix}artimimpi [mimpi]
├  ${prefix}heroml [nama hero]
├  ${prefix}nulis2 [teks]
├  ${prefix}mock [text]
├  ${prefix}hilih [text]
├  ${prefix}ToD
├  ~${prefix}pinsearch [query]~
├  ${prefix}babi
├  ${prefix}ganteng
│ 
╠══✪〘 MEDIA 〙✪══
│ 
├  ${prefix}covid [negara]
├  ${prefix}jadwalTvnow
├  ${prefix}jgetemoji [emoji]
├  ${prefix}linesticker [link]
├  ${prefix}asupan
├  ${prefix}cuaca [tempat]
├  ${prefix}resepmasakan [optional]
├  ${prefix}tts [kode bhs] [teks]
├  ${prefix}igstalk [@username]
├  ${prefix}tiktokstalk [@username]
├  ${prefix}smulestalk [@username]
├  ${prefix}kbbi [query]
├  ${prefix}wiki [query]
├  ${prefix}shopee [query]
├  ${prefix}google [query]
├  ${prefix}playstore [query]
├  ${prefix}googleimage [query]
├  ${prefix}translate [bahasa] [teks]
├  ${prefix}brainly [pertanyaan] [.jumlah]
├  ${prefix}lirik [optional]
├  ${prefix}chord [optional]
├  ${prefix}qrcode [optional]
├  ${prefix}maps [optional]
├  ${prefix}checkip [ipaddress]
├  ${prefix}pastebin [teks1|username]
├  ${prefix}gdrive [linkgdrive]
├  ${prefix}sspc [linkWeb]
├  ${prefix}shorturl [linkWeb]
├  ${prefix}ssphone [link]
├  ${prefix}newstickerline
├  ${prefix}indoxxi
├  ${prefix}mostview
├  ${prefix}berita
├  ${prefix}cineplex
│ 
╠══✪〘 ANIME 〙✪══
│ 
├  ${prefix}loli
├  ${prefix}shota
├  ${prefix}waifu
├  ${prefix}husbu
├  ${prefix}randomNekoNime
├  ${prefix}randomTrapNime
├  ${prefix}randomAnime
├  ${prefix}quotesnime
├  ${prefix}quoteanime
├  ${prefix}waifusticker
├  ${prefix}wallanime
├  ${prefix}wait
├  ${prefix}malanime [optional]
├  ${prefix}malcharacter [optional]
├  ${prefix}kusonime [optional]
├  ${prefix}otakudesu [optional]
├  ${prefix}dewabatch [optional]
├  ${prefix}komiku [optional]
├  ${prefix}animesearch [query]
├  ${prefix}randomkiss
├  ${prefix}randomhug
├  ${prefix}ongoinganime
│ 
╠══✪〘 DOWNLOADER 〙✪══
│ 
├  ${prefix}ytmp3 [linkYt]
├  ${prefix}ytmp4 [linkYt]
├  ${prefix}ig [linkIg]
├  ${prefix}fb [linkFb]
├  ${prefix}twitter [linkTwitter]
├  ${prefix}smule [linkSmule]
├  ${prefix}tiktok [linkTiktok]
├  ${prefix}starmaker [linkStarmaker]
├  ${prefix}xnxx [linkXnxx]
├  ${prefix}nhder [kodeNuclear]
├  ${prefix}joox [lagu]
├  ${prefix}play [lagu]
│ 
╠══✪〘 18+ 〙✪══
│ 
├  ${prefix}randombokep
├  ${prefix}togel
├  ${prefix}randomhentai
├  ${prefix}randomnsfwneko
├  ${prefix}randomtrapnime
├  ${prefix}randomblowjob
├  ${prefix}nhentai [kode]
├  ${prefix}xxx
├  ${prefix}xvideos
├  ${prefix}nhder [kode]
├  ${prefix}xnxx [linkXnxx]
├  ${prefix}indohot
├  ${prefix}nekopoi
│ 
╠══✪〘 OTHER 〙✪══
│
├  ${prefix}bahasa
├  ${prefix}sticker
├  ${prefix}stickergif
├  ${prefix}ttp [teks]
├  ${prefix}ttp2 [teks]
├  ${prefix}ttg [teks]
├  ${prefix}stickertoimg
├  ${prefix}neko
├  ${prefix}pokemon
├  ${prefix}inu
├  ${prefix}infoGempa
├  ${prefix}quotes
├  ${prefix}ptl
├  ${prefix}dadu
├  ${prefix}koin
├  ${prefix}quoterandom
├  ${prefix}wa.me
│ 
╠══✪〘 ABOUT 〙✪══
│ 
├  cekprefix
├  ${prefix}cekvip
├  ${prefix}runtime
├  ${prefix}daftar |nama|umur
├  ${prefix}bugreport [teks]
├  ${prefix}listblock
├  ${prefix}listbanned
├  ${prefix}listgroup
├  ${prefix}iklan
├  ${prefix}info
├  ${prefix}limit
├  ${prefix}snk
├  ${prefix}readme
├  ${prefix}donate
├  ${prefix}ping
├  ${prefix}kaysagroup
├  ${prefix}listvip
├  ${prefix}owner
│ 
├──「 *FREE MUSIC* 」
│
├  *Iri*
│
├  REQUEST MUSIC
├  CHAT OWNE
│
├ CONTOH KETIK Iri
│
└──「 *KAYBOT* 」`
}
exports.help = help
const info = () => {
    return `
------donasi-------
│
├  *BOT TYPE : NODEJS V14*
├  *NAME : KAYSA BOT*
├  *VERSION : 3.0*
├  *GITHUB : github.com/KayG47*
├  *TEAM : @PEPENGSHOOT*
│
--------------------
`
}

exports.info = info
const snk = () => {
    return `Syarat dan Ketentuan Bot *ELAINA*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk
const sewa = () => {
    return `
╔══✪〘 IKLAN 〙✪══
│
╠═══════════════════════════
├  *DAFTAR SEWA & BUAT BOT :*
├  *SEWA : 25K/GRUP (BULAN)*
├  *BUAT : 100K (BISA JADI OWNER)*
├  *PEMBAYARAN BISA MELALUI :*
├  *OVO, PAYPAL, DANA, PULSA +5K*
╠═══════════════════════════
├  *KEUNTUNGAN SEWA BOT :*
├  *1. BISA MENJADI ADMIN ELAINA*
├  *2. BISA MENDAPATKAN COMMAND ADMIN*
├  *KEUNTUNGAN BUAT BOT :*
├  *1. BISA MENJADI OWNER BOT SENDIRI*
├  *2. BISA MENGGANTI NAMA BOT SENDIRI*
├  *3. BISA MEMBAWA BOT KE GROUP*
├  *4. BISA MENGGUNAKAN COMMAND OWNER*
├  *5. BISA MENYEWAKAN BOT KEMBALI*
╠═══════════════════════════
├  *JIKA MINAT IKLAN DIATAS*
├  *HARAP HUBUNGI NOMOR DIBAWAH :*
├  *wa.me/628xxxxxxxx*
│
╚═〘 ELAINA BOT 〙
`
}
exports.sewa = sewa
const sumbang = () => {
    return `
╔══✪〘 DONATE 〙✪══
│
├  *DONASI BISA MELALUI :*
├  *DANA/PULSA/OVO : 08xxxxxxx*
├  *PAYPAL : XXXXXXX*
├  *SAWERIA : saweria.co/xxxxx*
├  *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
│
╚═〘 ELAINA BOT 〙
`
}
exports.sumbang = sumbang
const listChannel = () => {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel
const bahasalist = () => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist
