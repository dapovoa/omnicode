import { afterEach, expect, test } from 'bun:test'

import {
  getAPIProvider,
  usesAnthropicAccountFlow,
} from './providers.js'

const originalEnv = {
  OMNICODE_USE_GEMINI: process.env.OMNICODE_USE_GEMINI,
  OMNICODE_USE_GITHUB: process.env.OMNICODE_USE_GITHUB,
  OMNICODE_USE_OPENAI: process.env.OMNICODE_USE_OPENAI,
  OMNICODE_USE_BEDROCK: process.env.OMNICODE_USE_BEDROCK,
  OMNICODE_USE_VERTEX: process.env.OMNICODE_USE_VERTEX,
  OMNICODE_USE_FOUNDRY: process.env.OMNICODE_USE_FOUNDRY,
}

afterEach(() => {
  process.env.OMNICODE_USE_GEMINI = originalEnv.OMNICODE_USE_GEMINI
  process.env.OMNICODE_USE_GITHUB = originalEnv.OMNICODE_USE_GITHUB
  process.env.OMNICODE_USE_OPENAI = originalEnv.OMNICODE_USE_OPENAI
  process.env.OMNICODE_USE_BEDROCK = originalEnv.OMNICODE_USE_BEDROCK
  process.env.OMNICODE_USE_VERTEX = originalEnv.OMNICODE_USE_VERTEX
  process.env.OMNICODE_USE_FOUNDRY = originalEnv.OMNICODE_USE_FOUNDRY
})

function clearProviderEnv(): void {
  delete process.env.OMNICODE_USE_GEMINI
  delete process.env.OMNICODE_USE_GITHUB
  delete process.env.OMNICODE_USE_OPENAI
  delete process.env.OMNICODE_USE_BEDROCK
  delete process.env.OMNICODE_USE_VERTEX
  delete process.env.OMNICODE_USE_FOUNDRY
}

test('first-party provider keeps Anthropic account setup flow enabled', () => {
  clearProviderEnv()

  expect(getAPIProvider()).toBe('firstParty')
  expect(usesAnthropicAccountFlow()).toBe(true)
})

test.each([
  ['OMNICODE_USE_OPENAI', 'openai'],
  ['OMNICODE_USE_GITHUB', 'github'],
  ['OMNICODE_USE_GEMINI', 'gemini'],
  ['OMNICODE_USE_BEDROCK', 'bedrock'],
  ['OMNICODE_USE_VERTEX', 'vertex'],
  ['OMNICODE_USE_FOUNDRY', 'foundry'],
] as const)(
  '%s disables Anthropic account setup flow',
  (envKey, provider) => {
    clearProviderEnv()
    process.env[envKey] = '1'

    expect(getAPIProvider()).toBe(provider)
    expect(usesAnthropicAccountFlow()).toBe(false)
  },
)

test('GEMINI takes precedence over GitHub when both are set', () => {
  clearProviderEnv()
  process.env.OMNICODE_USE_GEMINI = '1'
  process.env.OMNICODE_USE_GITHUB = '1'

  expect(getAPIProvider()).toBe('gemini')
})
