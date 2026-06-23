import type {
  ComparisonCriterion,
  AmenityGroup,
  RoomRecommendation,
} from '@/types/rooms';
import {
  roomComparisonFr,
  amenityGroupsFr,
  roomRecommendationsFr,
} from './fr/rooms-extras';
import {
  roomComparisonEn,
  amenityGroupsEn,
  roomRecommendationsEn,
} from './en/rooms-extras';

// Extras de la page Chambres (tableau comparatif, équipements, « pour qui »).
export function getRoomComparison(locale: string): ComparisonCriterion[] {
  return locale === 'en' ? roomComparisonEn : roomComparisonFr;
}

export function getAmenityGroups(locale: string): AmenityGroup[] {
  return locale === 'en' ? amenityGroupsEn : amenityGroupsFr;
}

export function getRoomRecommendations(locale: string): RoomRecommendation[] {
  return locale === 'en' ? roomRecommendationsEn : roomRecommendationsFr;
}
