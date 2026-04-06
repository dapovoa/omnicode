// Content for the omnicode-api bundled skill.
// Each .md file is inlined as a string at build time via Bun's text loader.

import csharpOmnicodeApi from './omnicode-api/csharp/omnicode-api.md'
import curlExamples from './omnicode-api/curl/examples.md'
import goOmnicodeApi from './omnicode-api/go/omnicode-api.md'
import javaOmnicodeApi from './omnicode-api/java/omnicode-api.md'
import phpOmnicodeApi from './omnicode-api/php/omnicode-api.md'
import pythonAgentSdkPatterns from './omnicode-api/python/agent-sdk/patterns.md'
import pythonAgentSdkReadme from './omnicode-api/python/agent-sdk/README.md'
import pythonOmnicodeApiBatches from './omnicode-api/python/omnicode-api/batches.md'
import pythonOmnicodeApiFilesApi from './omnicode-api/python/omnicode-api/files-api.md'
import pythonOmnicodeApiReadme from './omnicode-api/python/omnicode-api/README.md'
import pythonOmnicodeApiStreaming from './omnicode-api/python/omnicode-api/streaming.md'
import pythonOmnicodeApiToolUse from './omnicode-api/python/omnicode-api/tool-use.md'
import rubyOmnicodeApi from './omnicode-api/ruby/omnicode-api.md'
import skillPrompt from './omnicode-api/SKILL.md'
import sharedErrorCodes from './omnicode-api/shared/error-codes.md'
import sharedLiveSources from './omnicode-api/shared/live-sources.md'
import sharedModels from './omnicode-api/shared/models.md'
import sharedPromptCaching from './omnicode-api/shared/prompt-caching.md'
import sharedToolUseConcepts from './omnicode-api/shared/tool-use-concepts.md'
import typescriptAgentSdkPatterns from './omnicode-api/typescript/agent-sdk/patterns.md'
import typescriptAgentSdkReadme from './omnicode-api/typescript/agent-sdk/README.md'
import typescriptOmnicodeApiBatches from './omnicode-api/typescript/omnicode-api/batches.md'
import typescriptOmnicodeApiFilesApi from './omnicode-api/typescript/omnicode-api/files-api.md'
import typescriptOmnicodeApiReadme from './omnicode-api/typescript/omnicode-api/README.md'
import typescriptOmnicodeApiStreaming from './omnicode-api/typescript/omnicode-api/streaming.md'
import typescriptOmnicodeApiToolUse from './omnicode-api/typescript/omnicode-api/tool-use.md'

// @[MODEL LAUNCH]: Update the model IDs/names below. These are substituted into {{VAR}}
// placeholders in the .md files at runtime before the skill prompt is sent.
// After updating these constants, manually update the two files that still hardcode models:
//   - omnicode-api/SKILL.md (Current Models pricing table)
//   - omnicode-api/shared/models.md (full model catalog with legacy versions and alias mappings)
export const SKILL_MODEL_VARS = {
  OPUS_ID: 'omnicode-opus-4-6',
  OPUS_NAME: 'Omnicode Opus 4.6',
  SONNET_ID: 'omnicode-sonnet-4-6',
  SONNET_NAME: 'Omnicode Sonnet 4.6',
  HAIKU_ID: 'omnicode-haiku-4-5',
  HAIKU_NAME: 'Omnicode Haiku 4.5',
  // Previous Sonnet ID — used in "do not append date suffixes" example in SKILL.md.
  PREV_SONNET_ID: 'omnicode-sonnet-4-5',
} satisfies Record<string, string>

export const SKILL_PROMPT: string = skillPrompt

export const SKILL_FILES: Record<string, string> = {
  'csharp/omnicode-api.md': csharpOmnicodeApi,
  'curl/examples.md': curlExamples,
  'go/omnicode-api.md': goOmnicodeApi,
  'java/omnicode-api.md': javaOmnicodeApi,
  'php/omnicode-api.md': phpOmnicodeApi,
  'python/agent-sdk/README.md': pythonAgentSdkReadme,
  'python/agent-sdk/patterns.md': pythonAgentSdkPatterns,
  'python/omnicode-api/README.md': pythonOmnicodeApiReadme,
  'python/omnicode-api/batches.md': pythonOmnicodeApiBatches,
  'python/omnicode-api/files-api.md': pythonOmnicodeApiFilesApi,
  'python/omnicode-api/streaming.md': pythonOmnicodeApiStreaming,
  'python/omnicode-api/tool-use.md': pythonOmnicodeApiToolUse,
  'ruby/omnicode-api.md': rubyOmnicodeApi,
  'shared/error-codes.md': sharedErrorCodes,
  'shared/live-sources.md': sharedLiveSources,
  'shared/models.md': sharedModels,
  'shared/prompt-caching.md': sharedPromptCaching,
  'shared/tool-use-concepts.md': sharedToolUseConcepts,
  'typescript/agent-sdk/README.md': typescriptAgentSdkReadme,
  'typescript/agent-sdk/patterns.md': typescriptAgentSdkPatterns,
  'typescript/omnicode-api/README.md': typescriptOmnicodeApiReadme,
  'typescript/omnicode-api/batches.md': typescriptOmnicodeApiBatches,
  'typescript/omnicode-api/files-api.md': typescriptOmnicodeApiFilesApi,
  'typescript/omnicode-api/streaming.md': typescriptOmnicodeApiStreaming,
  'typescript/omnicode-api/tool-use.md': typescriptOmnicodeApiToolUse,
}
