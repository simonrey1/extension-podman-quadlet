/**
 * @author axel7083
 */
import type { ProviderContainerConnectionIdentifierInfo } from '../models/provider-container-connection-identifier-info';
import type { QuadletType } from '../utils/quadlet-type';
import type { QuadletGenerateOptions } from '../models/quadlet-generate-options';

export abstract class PodletApi {
  static readonly CHANNEL: string = 'podlet-api';

  abstract generate(options: {
    connection: ProviderContainerConnectionIdentifierInfo;
    options?: QuadletGenerateOptions;
    resourceId: string;
  }): Promise<string>;

  abstract compose(options: {
    filepath: string;
    type: QuadletType.CONTAINER | QuadletType.KUBE | QuadletType.POD;
  }): Promise<string>;
}
