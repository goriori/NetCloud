import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();
const start = async () => {
  try {
    const app = express();
    app.listen(process.env.MAIN_PORT, () => {
      // main server
      console.log(chalk.green("==========SUCCESS==============="));
      console.log("server started... on main port " + process.env.MAIN_PORT);
      console.log(chalk.green("==========SUCCESS==============="));
      // services
      console.log(chalk.blue('======================Services Servers======================'))
      const authServer = ()=>   import('./srvices/auth/main.js')
      authServer()
      

    });


  } catch (error) {
    console.log(chalk.red("===============ERRR================="));
    console.log(error);
    console.log(chalk.red("===============ERRR================="));
  }
};
start();
