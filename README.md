# import-bundled

Builds and imports a typescript or javascript file

Example:

```javascript
// index.mjs

import { importDefault } from 'import-bundled';

async function main() {
  const foo = await importDefault('foo.ts')
  console.log(foo)
}

main()
```
