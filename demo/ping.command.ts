import { Client, Message } from "discord.js";

import { DiCommand } from "../src/decorators/Command";

@DiCommand()
export class PingCommand {
    text: string = "Hello world!";

    constructor(
        private client: Client
    ) { }

    run(message: Message) {
        message.reply(":ping_pong: Pong! " + Math.floor(this.client.ping));
    }
}