import { EdgeGatewayNat64RuleJson } from './__json__/edge-gateway-nat64-rule-json';

/**
 * Edge Gateway NAT 64 Rule
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayNat64Rule {

  constructor(private _json: EdgeGatewayNat64RuleJson) {
  }

  /**
   * Get rule id.
   * @returns {number}
   */
  get ruleId(): number {
    return this._json.rule_id;
  }

  /**
   * Get rule tag.
   * @returns {number}
   */
  get ruleTag(): number {
    return this._json.rule_tag;
  }

  /**
   * Get logging enabled.
   * @returns {boolean}
   */
  get loggingEnabled(): boolean {
    return this._json.logging_enabled;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get match ipv6 destination prefix.
   * @returns {string}
   */
  get matchIpv6DestinationPrefix(): string {
    return this._json.match_ipv6_destination_prefix;
  }

  /**
   * Get translated ipv4 source prefix.
   * @returns {string}
   */
  get translatedIpv4SourcePrefix(): string {
    return this._json.translated_ipv4_source_prefix;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayNat64RuleJson}
   */
  get json(): EdgeGatewayNat64RuleJson {
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
