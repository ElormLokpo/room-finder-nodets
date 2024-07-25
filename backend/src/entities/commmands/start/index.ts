import { CommandInterface } from "../../../interfaces/command";
import { Telegraf, Context } from "telegraf";

export class StartCommand implements CommandInterface{

    public initializeCommands(bot:Telegraf<Context>){
        this.start(bot)
    }

    public start(bot:Telegraf<Context>){
        bot.command("start",(ctx)=>{
            //console.log(ctx.chat);
            ctx.telegram.sendMessage(ctx.chat.id, "Hello there, welcome to the room finder chatbot.\nThis bot helps you: \na) Find rooms around you \nb) Rent out your room for short term periods", {});
        })
    }
}