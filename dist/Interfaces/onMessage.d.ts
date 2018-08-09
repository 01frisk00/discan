import * as Discord from 'discord.js';
export interface OnMessage {
    diOnMessage(message: Discord.Message): any;
}
