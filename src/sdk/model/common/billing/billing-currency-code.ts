import { BillingCurrencyCodeJson } from './__json__/billing-currency-code-json';
import { CurrencyCode } from './__json__/currency-code-type';

/**
 * Billing Currency Code
 */
/* istanbul ignore next: autogenerated */
export class BillingCurrencyCode {

  constructor(private _json: BillingCurrencyCodeJson) {
  }

  /**
   * Get currency code.
   * @returns {CurrencyCode}
   */
  get currencyCode(): CurrencyCode {
    return this._json.currency_code;
  }

  /**
   * Get the json representation of this class.
   * @returns {BillingCurrencyCodeJson}
   */
  get json(): BillingCurrencyCodeJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
