import { afterEach, expect, test } from 'bun:test'

import { getSystemPrompt, DEFAULT_AGENT_PROMPT } from './prompts.js'
import { CLI_SYSPROMPT_PREFIXES, getCLISyspromptPrefix } from './system.js'
import { GENERAL_PURPOSE_AGENT } from '../tools/AgentTool/built-in/generalPurposeAgent.js'
import { EXPLORE_AGENT } from '../tools/AgentTool/built-in/exploreAgent.js'

const originalSimpleEnv = process.env.OMNICODE_SIMPLE

afterEach(() => {
  process.env.OMNICODE_SIMPLE = originalSimpleEnv
})

test('CLI identity prefixes describe Omnicode', () => {
  expect(getCLISyspromptPrefix()).toContain('Omnicode')
  expect(getCLISyspromptPrefix()).not.toContain("Anthropic's official CLI for Omnicode")

  for (const prefix of CLI_SYSPROMPT_PREFIXES) {
    expect(prefix).toContain('Omnicode')
    expect(prefix).not.toContain("Anthropic's official CLI for Omnicode")
  }
})

test('simple mode identity describes Omnicode', async () => {
  process.env.OMNICODE_SIMPLE = '1'

  const prompt = await getSystemPrompt([], 'gpt-4o')

  expect(prompt[0]).toContain('Omnicode')
  expect(prompt[0]).not.toContain("Anthropic's official CLI for Omnicode")
})

test('built-in agent prompts describe Omnicode', () => {
  expect(DEFAULT_AGENT_PROMPT).toContain('Omnicode')
  expect(DEFAULT_AGENT_PROMPT).not.toContain("Anthropic's official CLI for Omnicode")

  const generalPrompt = GENERAL_PURPOSE_AGENT.getSystemPrompt({
    toolUseContext: { options: {} as never },
  })
  expect(generalPrompt).toContain('Omnicode')
  expect(generalPrompt).not.toContain("Anthropic's official CLI for Omnicode")

  const explorePrompt = EXPLORE_AGENT.getSystemPrompt({
    toolUseContext: { options: {} as never },
  })
  expect(explorePrompt).toContain('Omnicode')
  expect(explorePrompt).not.toContain("Anthropic's official CLI for Omnicode")
})
