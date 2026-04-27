export type SocialEngagementMetrics = {
  views: number
  reachedAccounts: number
  interactions: number
}

export type SocialPresenceChannel = {
  id: string
  label: 'Instagram' | 'TikTok'
  followers: number
  engagementLast90Days: SocialEngagementMetrics
}

export const socialPresenceMetrics = {
  totalFollowers: 700_000,
  totalFollowersSuffix: '+',
  engagementWindowLabel: 'Últimos 90 dias',
  channels: [
    {
      id: 'ig',
      label: 'Instagram',
      followers: 250_000,
      engagementLast90Days: {
        views: 19_000_000,
        reachedAccounts: 3_700_000,
        interactions: 1_700_000,
      },
    },
    {
      id: 'tt',
      label: 'TikTok',
      followers: 450_000,
      engagementLast90Days: {
        views: 10_000_000,
        reachedAccounts: 2_200_000,
        interactions: 1_000_000,
      },
    },
  ] as const satisfies readonly SocialPresenceChannel[],
} as const

/**
 * Compact formatter focused on K/M/B notation to keep cards short.
 */
export function formatMetricNumber(value: number) {
  if (value >= 1_000_000_000) {
    return `${stripTrailingZero(value / 1_000_000_000)}B`
  }
  if (value >= 1_000_000) {
    return `${stripTrailingZero(value / 1_000_000)}M`
  }
  if (value >= 1_000) {
    return `${stripTrailingZero(value / 1_000)}K`
  }
  return String(value)
}

function stripTrailingZero(value: number) {
  return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1)
}
