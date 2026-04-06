import { expect, test } from 'bun:test'

import type { Frame } from './frame.ts'
import { LogUpdate } from './log-update.ts'
import { CharPool, createScreen, HyperlinkPool, StylePool } from './screen.ts'

function createFrame(cursor: Frame['cursor']): Frame {
  const stylePool = new StylePool()
  const charPool = new CharPool()
  const hyperlinkPool = new HyperlinkPool()

  return {
    screen: createScreen(20, 4, stylePool, charPool, hyperlinkPool),
    viewport: { width: 80, height: 24 },
    cursor,
  }
}

test('moves a parked cursor below the rendered frame before returning control', () => {
  const stylePool = new StylePool()
  const log = new LogUpdate({ isTTY: true, stylePool })
  const frame = createFrame({ x: 8, y: 1, visible: false })

  expect(
    log.renderPreviousOutput_DEPRECATED(frame, { x: 8, y: 1 }),
  ).toEqual([
    { type: 'carriageReturn' },
    { type: 'cursorMove', x: 0, y: 2 },
    { type: 'stdout', content: '\n' },
    { type: 'cursorShow' },
  ])
})
