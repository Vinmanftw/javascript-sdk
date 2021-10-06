import { ExpandedVpgJson } from './__json__/expanded-vpg-json';
import { ActiveProcessStage } from './__json__/vpg-active-process-stage';
import { VpgEntities } from './vpg-entities';
import { ServiceProfile } from './service-profile';
import { VpgVm } from './vpg-vm';
import { VpgStatus } from './__json__/vpg-status-type';
import { VpgSubStatus } from './__json__/vpg-sub-status-type';
import { VpgPriority } from './__json__/vpg-priority-type';

/**
 * Expanded VPG.
 */
/* istanbul ignore next: autogenerated */
export class ExpandedVpg {

  constructor(private _json: ExpandedVpgJson) {
  }

  /**
   * The ID of the company that the VPG belongs to.
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get service profile.
   * @returns {ServiceProfileJson | null}
   */
  get serviceProfile(): ServiceProfile | null {
    return this._json.service_profile ? new ServiceProfile(this._json.service_profile) : null;
  }

  /**
   * Get vms.
   * @returns {Array<VpgVm>}
   */
  get vms(): Array<VpgVm> {
    return this._json.vms.map(it => new VpgVm(it));
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get service profile uuid.
   * @returns {string}
   */
  get serviceProfileUuid(): string {
    return this._json.service_profile_uuid;
  }

  /**
   * Get vpg identifier.
   * @returns {string}
   */
  get vpgIdentifier(): string {
    return this._json.vpg_identifier;
  }

  /**
   * Get vpg name.
   * @returns {string}
   */
  get vpgName(): string {
    return this._json.vpg_name;
  }

  /**
   * Get organization name.
   * @returns {string}
   */
  get organizationName(): string {
    return this._json.organization_name;
  }

  /**
   * Get actual rpo.
   * @returns {number}
   */
  get actualRpo(): number {
    return this._json.actual_rpo;
  }

  /**
   * Get entities.
   * @returns {VpgEntitiesJson}
   */
  get entities(): VpgEntities {
    return new VpgEntities(this._json.entities);
  }

  /**
   * Get status.
   * @returns {VpgStatus}
   */
  get status(): VpgStatus {
    return this._json.status;
  }

  /**
   * Get sub status.
   * @returns {VpgSubStatus}
   */
  get subStatus(): VpgSubStatus {
    return this._json.sub_status;
  }

  /**
   * Get priority.
   * @returns {VpgPriority}
   */
  get priority(): VpgPriority {
    return this._json.priority;
  }

  /**
   * Get vms count.
   * @returns {number}
   */
  get vmsCount(): number {
    return this._json.vms_count;
  }

  /**
   * Get last test.
   * @returns {number}
   */
  get lastTest(): number {
    return this._json.last_test;
  }

  /**
   * Get source site.
   * @returns {string}
   */
  get sourceSite(): string {
    return this._json.source_site;
  }

  /**
   * Get target site.
   * @returns {string}
   */
  get targetSite(): string {
    return this._json.target_site;
  }

  /**
   * Get provisioned storage in mb.
   * @returns {number}
   */
  get provisionedStorageInMb(): number {
    return this._json.provisioned_storage_in_mb;
  }

  /**
   * Get used storage in mb.
   * @returns {number}
   */
  get usedStorageInMb(): number {
    return this._json.used_storage_in_mb;
  }

  /**
   * Get iops.
   * @returns {number}
   */
  get iops(): number {
    return this._json.iops;
  }

  /**
   * Get throughput in mb.
   * @returns {number}
   */
  get throughputInMb(): number {
    return this._json.throughput_in_mb;
  }

  /**
   * Get service profile identifier.
   * @returns {string}
   */
  get serviceProfileIdentifier(): string {
    return this._json.service_profile_identifier;
  }

  /**
   * Get backup enabled.
   * @returns {boolean}
   */
  get backupEnabled(): boolean {
    return this._json.backup_enabled;
  }

  /**
   * Get recovery site identifier.
   * @returns {string}
   */
  get recoverySiteIdentifier(): string {
    return this._json.recovery_site_identifier;
  }

  /**
   * Get protected site identifier.
   * @returns {string}
   */
  get protectedSiteIdentifier(): string {
    return this._json.protected_site_identifier;
  }

  /**
   * Get active process stage.
   * @returns {ActiveProcessStage}
   */
  get activeProcessStage(): ActiveProcessStage {
    return this._json.active_process_stage;
  }

  /**
   * Get recovery journal used storage mb.
   * @returns {number}
   */
  get recoveryJournalUsedStorageInMb(): number {
    return this._json.recovery_journal_used_storage_in_mb;
  }

  /**
   * Get recovery journal provisioned storage in mb for Vpg
   * @returns {number} recovery journal provisioned storage in mb
   */
  get recoveryJournalProvisionedStorageInMb(): number {
    return this._json.recovery_journal_provisioned_storage_in_mb;
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get deleted.
   * @returns {boolean}
   */
  get deleted(): boolean {
    return this._json.deleted;
  }

  /**
   * Get deleted date.
   * @returns {number}
   */
  get deletedDate(): number {
    return this._json.deleted_date;
  }

  /**
   * Get updated date.
   * @returns {number}
   */
  get updatedDate(): number {
    return this._json.updated_date;
  }

  /**
   * Get the json representation of this class.
   * @returns {ExpandedVpgJson}
   */
  get json(): ExpandedVpgJson {
    return Object.assign({}, this._json);
  }

  /**
   * Return whether or not the vpg is failing over or not.
   * @returns {boolean}
   */
  isFailingOver(): boolean {
    return this.status === 'FAILING_OVER' || this.activeProcessStage !== 'NONE';
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
