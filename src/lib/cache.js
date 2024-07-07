import { unstable_cache as nextCache } from 'next/cache'; // over riding built-in cache for data and everything in nextjs
import { cache as reactCache } from 'react' // for request memoization

export function cache(callBack, keyParts, options) {
    return nextCache(reactCache(callBack), keyParts, options)
}