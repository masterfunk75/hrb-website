import type { HotelEvent } from '@/types/events';
import { eventsFr } from '@/content/fr/events';
import { eventsEn } from '@/content/en/events';

// Événements à proximité (fr par défaut).
export function getEvents(locale: string): HotelEvent[] {
  return locale === 'en' ? eventsEn : eventsFr;
}
