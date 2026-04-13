var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var SmartCache = /** @class */ (function () {
    function SmartCache(fetcherFn, options, cacheMap, stats) {
        if (cacheMap === void 0) { cacheMap = new Map(); }
        if (stats === void 0) { stats = { hits: 0, misses: 0 }; }
        this.fetcherFn = fetcherFn;
        this.options = options;
        this.cacheMap = cacheMap;
        this.stats = stats;
    }
    SmartCache.prototype.fetch = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var fetcherResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetcherFn(key).then(function (res) { return res; })];
                    case 1:
                        fetcherResult = _a.sent();
                        if (this.cacheMap.get(key)) {
                            this.stats.hits += 1;
                            return [2 /*return*/, (this.cacheMap.get(key))];
                        }
                        this.stats.misses += 1;
                        this.options.onCacheMiss(key);
                        this.cacheMap.set(key, fetcherResult);
                        // setTimeout((() => {
                        //     this.cacheMap.delete(key)
                        // }).bind(this), this.options.ttl);
                        return [2 /*return*/, this.cacheMap.get(key)];
                }
            });
        });
    };
    SmartCache.prototype.polyfillAllSettled = function (promises) {
        return __awaiter(this, void 0, void 0, function () {
            var settleRes, _i, promises_1, promise, result_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        settleRes = [];
                        _i = 0, promises_1 = promises;
                        _a.label = 1;
                    case 1:
                        if (!(_i < promises_1.length)) return [3 /*break*/, 4];
                        promise = promises_1[_i];
                        return [4 /*yield*/, promise];
                    case 2:
                        result_1 = _a.sent();
                        settleRes.push({
                            status: result_1 ? "fulfilled" : "rejected"
                        });
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, settleRes];
                }
            });
        });
    };
    SmartCache.prototype.fetchMany = function (keys) {
        var fetchPromises = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            fetchPromises.push(this.fetch(key));
        }
        return this.polyfillAllSettled(fetchPromises);
    };
    SmartCache.prototype.flush = function () {
        for (var _i = 0, _a = Array.from(this.cacheMap.keys()); _i < _a.length; _i++) {
            var entry = _a[_i];
            this.cacheMap.delete(entry);
        }
    };
    SmartCache.prototype.getStats = function () {
        return this.stats;
    };
    return SmartCache;
}());
var fetcher = function (key) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, "data-for-".concat(key)];
}); }); };
var cache = new SmartCache(fetcher, {
    ttl: 5000,
    onCacheMiss: function (key) { return console.log("Cache miss: ".concat(key)); },
    flushDebounceMs: 300,
});
var result = await cache.fetch('user:42').then(function (res) { return res; }); //✔ 👍
var cached = await cache.fetch('user:42').then(function (res) { return res; }); //✔👍
var results = await cache.fetchMany(['a', 'b', 'c']);
console.log(results);
cache.flush(); //✔👍
cache.getStats(); //✔👍
