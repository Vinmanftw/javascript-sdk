import { O365BillJson } from './__json__/o365-bill-json';
import { CurrencyCode } from '../common/billing/__json__/currency-code-type';

/**
 * O365 Bill
 */
/* istanbul ignore next: autogenerated */
export class O365Bill {

  constructor(private _json: O365BillJson) {
  }

  /**
   * Get the number of licenses exceeding the reserved licenses count
   * @returns {number}
   */
  get burstCountLicenses(): number {
    return this._json.burst_count_licenses;
  }

  /**
   * Get cost per license of O365 bill
   * @returns {number}
   */
  get costPerLicense(): number {
    return this._json.cost_per_license;
  }

  /**
   * Get currency code of O365 bill
   * @returns {CurrencyCode}
   */
  get currencyCode(): CurrencyCode {
    return this._json.currency_code.currency_code;
  }

  /**
   * Get full month contract cost of O365 bill
   * @returns {number}
   */
  get fullMonthContractCost(): number {
    return this._json.full_month_contract_cost;
  }

  /**
   * Get month of O365 bill
   * @returns {number}
   */
  get month(): number {
    return this._json.month;
  }

  /**
   * Get number of licenses of O365 bill
   * @returns {number}
   */
  get numberOfLicenses(): number {
    return this._json.number_of_licenses;
  }

  /**
   * Get total of O365 bill
   * @returns {number}
   */
  get total(): number {
    return this._json.total;
  }

  /**
   * Get the used total including burst usage if any
   * @returns {number}
   */
  get totalCostForUsedLicenses(): number {
    return this._json.total_cost_for_used_licenses;
  }

  /**
   * Get year of O365 bill
   * @returns {number}
   */
  get year(): number {
    return this._json.year;
  }

  /**
   * Get the json representation of this class
   * @returns {O365BillJson}
   */
  get json(): O365BillJson {
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
