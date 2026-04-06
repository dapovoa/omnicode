import { useEffect, useState } from 'react'
import {
  type OmnicodeAILimits,
  currentLimits,
  statusListeners,
} from './omnicodeAiLimits.js'

export function useOmnicodeAiLimits(): OmnicodeAILimits {
  const [limits, setLimits] = useState<OmnicodeAILimits>({ ...currentLimits })

  useEffect(() => {
    const listener = (newLimits: OmnicodeAILimits) => {
      setLimits({ ...newLimits })
    }
    statusListeners.add(listener)

    return () => {
      statusListeners.delete(listener)
    }
  }, [])

  return limits
}
