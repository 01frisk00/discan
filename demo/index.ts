// Sample Import Example *Importing From The Dist!*
import { DiModule, CommandsManager, OnReady, OnMessage } from '../dist/index';

import * as Discord from 'discord.js';

import { PingCommand } from './ping.command';

@DiModule({
    commands: [
        { comp: PingCommand, info: { name: 'ping' } }
    ],
    providers: [],
    token: 'NDc2OTMyOTg5NDc4MjQwMjg2.Dk0yEQ.YDXWB1SNaCDBr-818kbtcMolwz4',
    prefix: '!',
    options: {
        botUseCommands: false,
        useCommandsManager: true
    }
})
export class MainModule implements OnReady, OnMessage {
    constructor(
        private client: Discord.Client,
        private cmdManager: CommandsManager,
        ping: PingCommand
    ) { 
        console.log(ping.text);
    }

    diOnReady() {
        console.log("Bot's ready!");
    }

    diOnMessage(message: Discord.Message) {
        this.cmdManager.run(message);
    }
}
