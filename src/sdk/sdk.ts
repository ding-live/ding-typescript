/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Lookup } from "./lookup.js";
import { Otp } from "./otp.js";

export class Ding extends ClientSDK {
    private _otp?: Otp;
    get otp(): Otp {
        return (this._otp ??= new Otp(this.options$));
    }

    private _lookup?: Lookup;
    get lookup(): Lookup {
        return (this._lookup ??= new Lookup(this.options$));
    }
}
