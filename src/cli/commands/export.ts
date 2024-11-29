import { ConfigManager } from "../../lib";
import * as fs from "fs";
import * as YAML from "yaml";

export const exportCommand = async (format: string, configPath: string) => {
 const manager = new ConfigManager();
 const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
 const result = manager.process([config], {});

 if (format === "json") {
   console.log(JSON.stringify(result, null, 2));
 } else if (format === "yaml") {
   console.log(YAML.stringify(result));
 }
};
