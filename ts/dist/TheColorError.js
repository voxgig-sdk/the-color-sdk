"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheColorError = void 0;
class TheColorError extends Error {
    isTheColorError = true;
    sdk = 'TheColor';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.TheColorError = TheColorError;
//# sourceMappingURL=TheColorError.js.map