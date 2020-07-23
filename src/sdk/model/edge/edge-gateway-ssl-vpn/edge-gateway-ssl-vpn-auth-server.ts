import { EdgeGatewaySslVpnAuthServerJson } from './__json__/edge-gateway-ssl-vpn-auth-server-json';
import { EdgeGatewaySslVpnAuthServerType } from './edge-gateway-ssl-vpn-auth-server-type';

/* istanbul ignore next: autogenerated */
export class EdgeGatewaySslVpnAuthServer {

  constructor(private _authServerJson: EdgeGatewaySslVpnAuthServerJson) {
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._authServerJson.object_id;
  }

  /**
   * Get auth server type.
   * @returns {EdgeGatewaySslVpnAuthServerType}
   */
  get authServerType(): EdgeGatewaySslVpnAuthServerType {
    return this._authServerJson.auth_server_type;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._authServerJson.enabled;
  }

  /**
   * Get secondary auth server.
   * @returns {boolean}
   */
  get secondaryAuthServer(): boolean {
    return this._authServerJson.secondary_auth_server;
  }

  /**
   * Get terminate session on auth fails.
   * @returns {boolean}
   */
  get terminateSessionOnAuthFails(): boolean {
    return this._authServerJson.terminate_session_on_auth_fails;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewaySslVpnAuthServerJson}
   */
  get json(): EdgeGatewaySslVpnAuthServerJson {
    return Object.assign({}, this._authServerJson);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._authServerJson, undefined, 2);
  }
}
