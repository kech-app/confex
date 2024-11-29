import { ConfigManager } from "../../lib";
import * as fs from "fs";
import * as path from "path";
import * as YAML from "yaml";

export const evalCommand = async (configPath: string, options: any) => {
 const manager = new ConfigManager();
 const files = fs.readdirSync(configPath);
 const configs = [];

 for (const file of files) {
   if (file.endsWith(".json") || file.endsWith(".yaml") || file.endsWith(".yml")) {
     const content = fs.readFileSync(path.join(configPath, file), "utf8");
     configs.push(file.endsWith(".json") ? JSON.parse(content) : YAML.parse(content));
   }
 }

 const result = manager.process(configs, { env: options.env });
 console.log(JSON.stringify(result, null, 2));
};
