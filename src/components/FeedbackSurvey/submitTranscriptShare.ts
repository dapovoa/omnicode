import type { Message } from '../../types/message.js'
import { logForDebugging } from '../../utils/debug.js'

type TranscriptShareResult = {
  success: boolean
  transcriptId?: string
}

export type TranscriptShareTrigger =
  | 'bad_feedback_survey'
  | 'good_feedback_survey'
  | 'frustration'
  | 'memory_survey'

export async function submitTranscriptShare(
  _messages: Message[],
  _trigger: TranscriptShareTrigger,
  _appearanceId: string,
): Promise<TranscriptShareResult> {
  logForDebugging('Transcript sharing disabled (1P removed)', { level: 'info' })
  return { success: true }
}
