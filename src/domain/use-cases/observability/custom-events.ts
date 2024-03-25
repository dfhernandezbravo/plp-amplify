import observabilityRepository from '@repositories/observability';
import { CustomEvent } from '@entities/observability';

const customEvents = async (event: CustomEvent) => {
  try {
    observabilityRepository().customEvents(event);
  } catch (error) {
    return null;
  }
};

export default customEvents;
