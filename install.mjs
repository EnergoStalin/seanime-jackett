import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import manifest from "./manifest.json" assert { type: "json" }

manifest.payload = fs.readFileSync("index.ts").toString("utf-8")
manifest.payload = manifest.payload
  .replace("<JACKETT_API_KEY>", process.env.JACKETT_API_KEY)

const code = JSON.stringify(manifest, undefined, 2)
const installpath = path.join(
  process.env.HOME,
  ".config",
  "Seanime",
  "extensions",
  `${manifest.id}.json`
)

fs.writeFileSync(installpath, code)
execSync("systemctl --user restart seanime.service")
