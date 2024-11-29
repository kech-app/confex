import { Command } from "commander";
import { evalCommand } from "./commands/eval";
import { exportCommand } from "./commands/export";
import { getCommand } from "./commands/get";
import { vetCommand } from "./commands/vet";

const program = new Command();

program
 .name("confex")
 .description("Configuration management tool")
 .version("0.0.1");

program
 .command("eval")
 .argument("<path>", "Path to config files")
 .option("-e, --env <environment>", "Environment")
 .action(evalCommand);

program
 .command("export")
 .argument("<format>", "Output format (json/yaml)")
 .argument("<path>", "Path to config files")
 .action(exportCommand);

program
 .command("get")
 .argument("<path>", "Value path (e.g. .server.host)")
 .argument("<config>", "Config file path")
 .action(getCommand);

program
 .command("vet")
 .argument("<path>", "Path to config files")
 .action(vetCommand);

program.parse();
