import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const start = async () => {
  try {
    const app = express();
    app.listen(process.env.PORT, () => {
      console.log(chalk.green("==========SUCCESS==============="));
      console.log("server started...");
      console.log(chalk.green("==========SUCCESS==============="));
    });
  } catch (error) {
    console.log(chalk.red("===============ERRR================="));
    console.log(error);
    console.log(chalk.red("===============ERRR================="));
  }
};
start();
