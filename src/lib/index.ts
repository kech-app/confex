import merge from "deepmerge";
import Handlebars from "handlebars";
import { z } from "zod";

export class ConfigManager {
  process(configs: any[], vars: object = {}) {
    const merged = configs.reduce((acc, config) => merge(acc, config), {});
    const template = Handlebars.compile(JSON.stringify(merged));
    return JSON.parse(template(vars));
  }

  validate(config: any, schema: z.ZodSchema) {
    return schema.parse(config);
  }
}
