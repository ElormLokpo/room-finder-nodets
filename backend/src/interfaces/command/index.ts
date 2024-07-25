import { Telegraf, Context } from "telegraf"

export interface CommandInterface{
    initializeCommands(bot: Telegraf<Context>):void;
}