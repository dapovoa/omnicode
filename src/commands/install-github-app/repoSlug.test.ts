import assert from 'node:assert/strict'
import test from 'node:test'

import { extractGitHubRepoSlug } from './repoSlug.ts'

test('keeps owner/repo input as-is', () => {
  assert.equal(extractGitHubRepoSlug('dapovoa/omnicode'), 'dapovoa/omnicode')
})

test('extracts slug from https GitHub URLs', () => {
  assert.equal(
    extractGitHubRepoSlug('https://github.com/dapovoa/omnicode'),
    'dapovoa/omnicode',
  )
  assert.equal(
    extractGitHubRepoSlug('https://www.github.com/dapovoa/omnicode.git'),
    'dapovoa/omnicode',
  )
})

test('extracts slug from ssh GitHub URLs', () => {
  assert.equal(
    extractGitHubRepoSlug('git@github.com:dapovoa/omnicode.git'),
    'dapovoa/omnicode',
  )
  assert.equal(
    extractGitHubRepoSlug('ssh://git@github.com/dapovoa/omnicode'),
    'dapovoa/omnicode',
  )
})

test('rejects malformed or non-GitHub URLs', () => {
  assert.equal(extractGitHubRepoSlug('https://gitlab.com/dapovoa/omnicode'), null)
  assert.equal(extractGitHubRepoSlug('https://github.com/Gitlawb'), null)
  assert.equal(extractGitHubRepoSlug('not actually github.com/dapovoa/omnicode'), null)
  assert.equal(
    extractGitHubRepoSlug('https://evil.example/?next=github.com/dapovoa/omnicode'),
    null,
  )
  assert.equal(
    extractGitHubRepoSlug('https://github.com.evil.example/dapovoa/omnicode'),
    null,
  )
  assert.equal(
    extractGitHubRepoSlug('https://example.com/github.com/dapovoa/omnicode'),
    null,
  )
})
