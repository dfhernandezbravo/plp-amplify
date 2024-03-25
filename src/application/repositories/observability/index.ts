import bffInstance from '@data-sources/bff-web-instance';
import { CustomEvent } from '@entities/observability';

interface ObservabilityRepository {
  customEvents: (event: CustomEvent) => void;
}

const observabilityRepository = (
  httpInstance = bffInstance,
): ObservabilityRepository => ({
  customEvents: (event: CustomEvent) => {
    httpInstance.post('/observability/custom-events', event);
  },
});

export default observabilityRepository;
