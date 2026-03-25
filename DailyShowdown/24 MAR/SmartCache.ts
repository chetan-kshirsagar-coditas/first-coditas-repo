type ConstructorOptions = {
    ttl: number,
    onCacheMiss: (key: unknown) => void,
    flushDebounceMs: number
}

type FetcherFn<T> = (key: T) => Promise<T>;

type Stats = {
    hits: number,
    misses: number
}

type SettledResult<T> = {
    status: 'rejected' | 'fulfilled',
    value?: T,
    reason?: unknown
}

class SmartCache<T> {
    constructor(
        public fetcherFn: FetcherFn<T>,
        public options: ConstructorOptions,
        public cacheMap: Map<T, T> = new Map(),
        public stats: Stats = { hits: 0, misses: 0 }
    ) {
    }
    async fetch(key: T): Promise<T | undefined> {
        const fetcherResult = await this.fetcherFn(key).then((res) => res);

        if (this.cacheMap.get(key)) {
            this.stats.hits += 1;
            return (this.cacheMap.get(key));
        }
        this.stats.misses += 1;
        this.options.onCacheMiss(key);
        this.cacheMap.set(key, fetcherResult);

        // setTimeout((() => {
        //     this.cacheMap.delete(key)
        // }).bind(this), this.options.ttl);

        return this.cacheMap.get(key);


    }

    async polyfillAllSettled<T>(promises: Array<Promise<T>>): Promise<Array<SettledResult<T>>> {
        const settleRes: Array<SettledResult<T>> = [];
        for (const promise of promises) {
            const result = await promise;
            settleRes.push({
                status : result ? "fulfilled" : "rejected"
            })
        }
        return settleRes;
    }

     fetchMany(keys: T[]): Promise<SettledResult<T | undefined>[]> {
        const fetchPromises: Array<Promise<T | undefined>> = [];
        for (const key of keys) {
            fetchPromises.push(this.fetch(key));
        }
        return this.polyfillAllSettled(fetchPromises);
    }

    flush() {
        for (const entry of Array.from(this.cacheMap.keys())) {
            this.cacheMap.delete(entry);
        }
    }

    getStats() {
        return this.stats;
    }
}


const fetcher: FetcherFn<string> = async (key) => `data-for-${key}`;

const cache = new SmartCache(fetcher, {
    ttl: 5000,
    onCacheMiss: (key) => console.log(`Cache miss: ${key}`),
    flushDebounceMs: 300,
});


const result = await cache.fetch('user:42').then((res) => res); //✔ 👍
const cached = await cache.fetch('user:42').then((res) => res); //✔👍
const results = await cache.fetchMany(['a', 'b', 'c']);
cache.flush();//✔👍
cache.getStats(); //✔👍