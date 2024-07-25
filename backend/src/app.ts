import { CommandInterface } from "./interfaces/command";
import mongoose from "mongoose";
import {Context, Telegraf} from "telegraf";


export class App{
    public bot:Telegraf<Context>;
    private token:string = process.env.BOT_TOKEN as string;

    constructor(commands:CommandInterface[]){
        this.bot = new Telegraf(this.token);
        this.initializeDatabase();
        this.initializeCommands(commands);
    }

    public initializeCommands(commands: CommandInterface[]){
        commands.forEach(command=>{
            command.initializeCommands(this.bot);
        })
    }

    public initializeDatabase(){
        mongoose.Promise = Promise;
        mongoose.connect(process.env.MONGO_URL as string);
        mongoose.connection.on("error",(error:Error)=>{
            console.log(error);
        })
        console.log("Database Connected");
    }

    public launchBot(){
        console.log("Bot Server Running")
        this.bot.launch();
    }

}