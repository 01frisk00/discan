import * as Discord from 'discord.js';
import 'reflect-metadata';
import { Type } from './type';
export interface Command {
    info: {
        name: string;
    };
    comp: Type<any>;
}
export interface DiModule {
    commands: Command[];
    providers: Type<any>[];
    token: string;
    prefix: string;
    options: {
        useCommandsManager: boolean;
        botUseCommands: boolean;
    };
}
export declare class CommandsManager {
    private client;
    private commandsRef;
    private commandsNames;
    private diModule;
    constructor(client: Discord.Client, commandsRef: any[], commandsNames: string[], diModule: DiModule);
    run(message: Discord.Message): void;
}
export interface OnReady {
    diOnReady(): any;
}
export interface OnMessage {
    diOnMessage(message: Discord.Message): any;
}
export declare const DiModule: (diModule: DiModule) => (target: Type<object>) => void;
