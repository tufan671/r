module.exports = {

    // aspect.js userUpdate yerinde sunucu id gir dediğim yere sunucu id gir
    bot: {
        token: "", // token
        botOwner: ["712330545073487903"], // owner id
        botPrefix: ".", // prefix
        botStatus: "Developed By Arcenio", // bot durum 
        footer: "Developed By Arcenio", // footer
        botVoice: "914632005151490088", // botun gireceği ses kanalı
        mongoURL: "mongodb+srv://Arcenio:mea3jq14v1@cluster0.qyyew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // mongo url
    },
    roles: {
        registerStaff: ["941051800277098527"], // register rolü
        manRoles: ["911598296483647509", "911598296483647509"], // erkek rolleri
        womanRoles: ["911598316524023840", "911598316524023840"], // kız rolleri
        unregisterRoles: ["911598334345609287"], // unregister rolü
        tagRole: "907362580710977577",  // taglı rolü
        vipRole: "",  // vip rolü
        boosterRole: "",  // booster rolü
        suspecious: "907362462070898769" // şüpheli hesap rolü
    },

    channels: {
        registerChannel: "783333954508947527", // kayıt kanalı
        rulesChannel: "783333954508947527", // kurallar kanalı
        general: "914615095387107459", // chat kanalı
        tagLog: "914615095387107459", // tag log kanalı
    },
    guild: {
        minYas: "13", // BURAYA MİNUMUM YAŞI GİRİNİZ
        guildID: "907361426581098557",
        tag: "✯", // BURAYA İSMİN BAŞINA GELECEK TAG BİRDEN ÇOK TAGINIZ VARSA AŞŞAĞIYA GİRİN
        tagges: ["✯", ""], // BİRDEN ÇOK TAGINIZ VARSA BURAYA GİRİN ÖRNEK: #0001
        defaultTag: "•", // tag olmayanların simgesi 
        defaultName: "• İsim | Yaş", // tagsızların ismi
        suspeciousName: "• Şüpheli | Hesap", // şüpheli hesap ismi
    },
    emojis: {
        yes: "929510719630745631",
        no: "929510722675826778",
        // EMOJİLERİN ID GİRCEKSİNİZ SADECE ID
    }

};