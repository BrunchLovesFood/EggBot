const { Client, Embed } = require(`touchguild`);
const config = require(`./settings.json`);
const egg = require(`./egg.json`);

const client = new Client({token: config.token})
client.connect(config.token)

client.once(`ready`, (client) => {
    console.log(`Client is online and ready`)
    console.log(client.guilds.size)
})

client.on(`messageCreate`, (message, client, args) => {

    if (message.content == `eggjoke`) {
    const Egg = () => {
        let joke = egg.Jokes;
        let Joke = Math.floor(Math.random() * joke.length)

        const eggbed = {
        "title": `Eggcellent.`,
        "desntiption":`${joke[Joke]}`
        }
        message.createMessage({ embeds: [eggbed], replyMessageIds: [message.id]})
    }
    Egg();
}
if (message.content == `eggpun`) {
    const EPUN = () => {
        let pun = egg.Puns;
        let Pun = Math.floor(Math.random() * pun.length)

        const eggbed = {
        "title": `Eggcellent.`,
        "description": `${pun[Pun]}`
        }
        message.createMessage({ embeds: [eggbed], replyMessageIds: [message.id]})
    }
    EPUN();
}
if (message.content == `egghelp`) {
    const yolkybed = {
    "title": `Eggcellent.`,
    "description": `So you require some help, Well you're in luck! I have some useful information for you. Isn't that EGGCITING?!`,
    "fields": [
        { name: `eggpun`, value: `Tells you amazing puns for you and your yolk to read.`, inline: true},
        { name: `eggjoke`, value: `Funneh yolks for the fans, isn't that eggciting?!`, inline: true}
    ]
}
    message.createMessage({ embeds: [yolkybed], replyMessageIds: [message.id]})
}
});

