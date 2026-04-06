import { isCodexAlias } from '../../services/api/providerConfig.js'
import { isEnvTruthy } from '../envUtils.js'

export type APIProvider =
  | 'openai'
  | 'github'
  | 'codex'

export function getAPIProvider(): APIProvider {
  return isEnvTruthy(process.env.OMNICODE_USE_GITHUB)
    ? 'github'
    : isEnvTruthy(process.env.OMNICODE_USE_OPENAI)
      ? isCodexModel()
        ? 'codex'
        : 'openai'
      : 'openai'
}

function isCodexModel(): boolean {
  const model = (process.env.OPENAI_MODEL || '').trim()
  if (!model) return false
  // Delegate to the canonical alias table in providerConfig to keep
  // the two Codex detection systems (provider type + transport) in sync.
  return isCodexAlias(model)
}

export function isFirstPartyAnthropicBaseUrl(): boolean {
  return false
}

export function usesAnthropicAccountFlow(): boolean {
  return false
}

export function getAPIProviderForStatsig(): string {
  return getAPIProvider()
}
