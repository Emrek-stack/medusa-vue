import fse from "fs-extra"
import os from "os"
import { resolve } from "path"
import dedent from "ts-dedent"

import { getComponentName } from "@/commands/icons/utils"

const BANNER =
  dedent`
    // This file is generated automatically.
` + os.EOL

export async function generateIndex(path: string) {
  let index = BANNER

  const entries = await fse.readdir(path)

  for (const entry of entries) {
    if (entry === "index.ts" || entry === "__tests__") {
      continue
    }

    const name = entry.replace(/\.vue$/, "")
    const exportName = getComponentName(name)

    index += `export { default as ${exportName} } from "./${name}.vue"${os.EOL}`
  }

  await fse.writeFile(resolve(path, "index.ts"), index)
}
