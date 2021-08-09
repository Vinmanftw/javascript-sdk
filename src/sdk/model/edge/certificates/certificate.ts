import { CertificateJson } from './__json__/certificate-json';
import { X509Certificate } from './x509-certificate';

/* istanbul ignore next: autogenerated */
export class Certificate {

  constructor(private _json: CertificateJson) {
  }

  /**
   * Get the object ID of the certificate.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
  }

  /**
   * Get the description of the certificate.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get the scope of the certificate in relation to the edge.
   * @returns {string}
   */
  get scope(): string {
    return this._json.scope;
  }

  /**
   * Get the subject common name of the certificate.
   * @returns {string}
   */
  get subjectCn(): string {
    return this._json.subject_cn;
  }

  /**
   * Get the issuer common name of the certificate.
   * @returns {string}
   */
  get issuerCn(): string {
    return this._json.issuer_cn;
  }

  /**
   * Get the PEM encoding of the certificate.
   * @returns {string}
   */
  get pemEncoding(): string {
    return this._json.pem_encoding;
  }

  /**
   * Get the type of certificate.
   * Possible values include 'certificate_signed', 'certificate_self_signed', & 'ca_certificate'.
   * @returns {string | null}
   */
  get certificateType(): string | null {
    return this._json.certificate_type;
  }

  /**
   * Get the days left until the certificate expires.
   * @returns {number}
   */
  get daysLeftToExpiry(): number {
    return this._json.days_left_to_expiry;
  }

  /**
   * Get x509 certificate.
   * @returns {Array<X509Certificate>}
   */
  get x509Certificate(): Array<X509Certificate> {
    return this._json.x509_certificate.map(it => new X509Certificate(it));
  }

  /**
   * Get is temporal.
   * @returns {boolean}
   */
  get isTemporal(): boolean {
    return this._json.is_temporal;
  }

  /**
   * Get the json representation of this class.
   * @returns {CertificateJson}
   */
  get json(): CertificateJson {
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
