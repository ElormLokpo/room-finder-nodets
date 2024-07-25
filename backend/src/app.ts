import { CommandInterface } from "./interfaces/command";
import mongoose from "mongoose";
import {Context, Telegraf} from "telegraf";


export class App{
    public bot:Telegraf<Context>;
    private token:string = process.env.BOT_TOKEN as string;

    constructor(commands:CommandInterface[]){
        
        this.bot = new Telegraf(this.token);
        this.initializeCommands(commands);
    }

    public initializeCommands(commands: CommandInterface[]){
        commands.forEach(command=>{
            command.initializeCommands(this.bot);
        })
    }

    public launchBot(){
        console.log("Bot Server Running")
        this.bot.launch();
    }

}