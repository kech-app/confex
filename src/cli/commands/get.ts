import { ConfigManager } from "../../lib";
import * as fs from "fs";

export const getCommand = async (path: string, configPath: string) => {
 const manager = new ConfigManager();
 const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
 const result = manager.process([config], {});
 
 const value = path.split(".").reduce((obj, key) => obj?.[key], result);
 console.log(value);
};
