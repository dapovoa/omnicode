import { describe, expect, test } from 'bun:test'

import {
  clearGithubModelsToken,
  readGithubModelsToken,
  saveGithubModelsToken,
} from './githubModelsCredentials.js'

describe('readGithubModelsToken', () => {
  test('returns undefined in bare mode', () => {
    const prev = process.env.OMNICODE_SIMPLE
    process.env.OMNICODE_SIMPLE = '1'
    expect(readGithubModelsToken()).toBeUndefined()
    if (prev === undefined) {
      delete process.env.OMNICODE_SIMPLE
    } else {
      process.env.OMNICODE_SIMPLE = prev
    }
  })
})

describe('saveGithubModelsToken / clearGithubModelsToken', () => {
  test('save returns failure in bare mode', () => {
    const prev = process.env.OMNICODE_SIMPLE
    process.env.OMNICODE_SIMPLE = '1'
    const r = saveGithubModelsToken('abc')
    expect(r.success).toBe(false)
    expect(r.warning).toContain('Bare mode')
    if (prev === undefined) {
      delete process.env.OMNICODE_SIMPLE
    } else {
      process.env.OMNICODE_SIMPLE = prev
    }
  })

  test('clear succeeds in bare mode', () => {
    const prev = process.env.OMNICODE_SIMPLE
    process.env.OMNICODE_SIMPLE = '1'
    expect(clearGithubModelsToken().success).toBe(true)
    if (prev === undefined) {
      delete process.env.OMNICODE_SIMPLE
    } else {
      process.env.OMNICODE_SIMPLE = prev
    }
  })
})

