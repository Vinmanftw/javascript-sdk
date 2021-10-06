import { O365MarkedPurgeMailboxJson } from './__json__/o365-marked-purge-mailbox-json';

/**
 * O365 marked purge mailbox
 */
/* istanbul ignore next: autogenerated */
export class O365MarkedPurgeMailbox {

  constructor(private _json: O365MarkedPurgeMailboxJson) {
  }

  /**
   * Get the mailbox (email) that is marked for purging.
   * @returns {string}
   */
  get mailbox(): string {
    return this._json.mailbox;
  }

  /**
   * Get the user native uuid for the mailbox that was marked for purging.
   * @returns {string}
   */
  get userNativeUuid(): string {
    return this._json.user_native_uuid;
  }

  /**
   * Get the org platform uuid associated with this mailbox.
   * @returns {string}
   */
  get organizationUuid(): string {
    return this._json.organization_uuid;
  }

  /**
   * Get whether this user / mailbox will be purged at all (cancel use case).
   * @returns {string}
   */
  get isActive(): boolean {
    return this._json.active;
  }

  /**
   * Get the purge date associated with this mailbox.
   * @returns {number}
   */
  get purgeDate(): number {
    return this._json.purge_date;
  }

  /**
   * Get the status of this purge user request - Completed, Running, Cancelled or Failed.
   * @returns {string}
   */
  get purgeStatus(): string {
    return this._json.purge_status;
  }

  /**
   * Get the purge initiated date associated with this mailbox.
   * @returns {number}
   */
  get initiatedDate(): number {
    return this._json.initiated_date;
  }

  /**
   * Get the error message if any on this purge request (would come from monocle)
   * @returns {string | undefined}
   */
  get errorMsg(): string | undefined {
    return this._json.error_msg;
  }

  /**
   * Get the user who requested the purged mailbox
   * @returns {string | undefined}
   */
  get requestedBy(): string | undefined {
    return this._json.requested_by;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365MarkedPurgeMailboxJson}
   */
  get json(): O365MarkedPurgeMailboxJson {
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
