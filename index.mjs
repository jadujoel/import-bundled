import * as esbuild from 'esbuild'
import * as fs from 'fs/promises'
import * as path from 'path'
import * as url from 'url'

/**
 * @param {string} entry
 * @param {esbuild.BuildOptions} options
 */
export async function importDefault(entry, options) {
  await fs.mkdir('.cache/import-bundled', { recursive: true })
  const out = path.resolve('.cache', 'import-bundled', `out-${Date.now()}.mjs`)
  await esbuild.build({
    entryPoints: [entry],
    outfile: out,
    bundle: true,
    format: 'esm',
    ...options
  })
  return importDefaultFromFileSystem(out)
}

/**
 * @param {string} file
 */
export async function importDefaultFromFileSystem(file) {
  const resolved = url.pathToFileURL(path.resolve(path.resolve(), file)).toString()
  const mod = await import(resolved)
  return mod.default
}
