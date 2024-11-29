import { ConfigManager } from "../../lib";
import * as fs from "fs";
import { z } from "zod";

export const vetCommand = async (configPath: string) => {
 const manager = new ConfigManager();
 const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
 
 // Example schema - should be loaded from schema file
 const schema = z.object({
   server: z.object({
     host: z.string(),
     port: z.number()
   })
 });

 try {
   manager.validate(config, schema);
   console.log("Config is valid");
 } catch (error) {
   console.error("Config validation failed:", error);
 }
};
