
import { importDefault } from "./index.mjs";

async function main() {
  const examplejs = await importDefault("example.mjs");
  console.log(examplejs())

  const examplets = await importDefault("example.ts");
  console.log(examplets())

}

main()
