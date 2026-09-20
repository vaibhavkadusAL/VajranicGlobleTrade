import { useState, useEffect, useRef } from 'react'
import { siteConfig } from '../config/siteConfig'
import './Countdown.css'

// ── localStorage key ─────────────────────────────────────────
const LS_KEY = 'vgt_countdown_end'

// ── Get or initialise the end timestamp ──────────────────────
// On first ever visit the end time is stored in localStorage.
// On every subsequent visit (including refresh) the same stored
// value is used, so the countdown continues from where it left off.
function getEndTime() {
  const stored = localStorage.getItem(LS_KEY)
  if (stored) {
    const parsed = Number(stored)
    if (!Number.isNaN(parsed) && parsed > 0) return parsed
  }
  // First visit — calculate and persist the end time.
  const durationMs = siteConfig.countdownHours * 60 * 60 * 1000
  const endTime = Date.now() + durationMs
  localStorage.setItem(LS_KEY, String(endTime))
  return endTime
}

// ── Helper: pad number to 2 digits ───────────────────────────
const pad = (n) => String(Math.max(0, n)).padStart(2, '0')

// ── Calculate remaining time from a stored end timestamp ─────
function calcTimeLeft(endTime) {
  const diff = endTime - Date.now()
  if (diff <= 0) return null

  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

// ── Single digit block with flip animation ────────────────────
function DigitBlock({ value, label }) {
  const [flipping, setFlipping] = useState(false)
  const prevValue = useRef(value)

  useEffect(() => {
    if (value !== prevValue.current) {
      setFlipping(true)
      const id = setTimeout(() => setFlipping(false), 350)
      prevValue.current = value
      return () => clearTimeout(id)
    }
  }, [value])

  return (
    <div className="countdown__block">
      <div
        className={`countdown__digit${flipping ? ' flip' : ''}`}
        aria-live="polite"
        aria-atomic="true"
      >
        {value}
      </div>
      <span className="countdown__label">{label}</span>
    </div>
  )
}

// ── Initialise end time at module load (once per tab lifetime) ─
// Storing it at module scope means it is computed exactly once,
// never during a React render, and is shared across re-renders.
const END_TIME = getEndTime()

// ── Main Countdown component ──────────────────────────────────
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(END_TIME))

  useEffect(() => {
    const id = setInterval(() => {
      const remaining = calcTimeLeft(END_TIME)
      setTimeLeft(remaining)
      if (remaining === null) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft === null) {
    return (
      <div className="countdown" role="status" aria-live="polite">
        <div className="countdown__live">We Are Live!</div>
      </div>
    )
  }

  const units = [
    { value: pad(timeLeft.days),    label: 'Days'    },
    { value: pad(timeLeft.hours),   label: 'Hours'   },
    { value: pad(timeLeft.minutes), label: 'Minutes' },
    { value: pad(timeLeft.seconds), label: 'Seconds' },
  ]

  return (
    <div
      className="countdown"
      role="timer"
      aria-label={`Time remaining: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}
    >
      {units.map((unit, i) => (
        <div key={unit.label} style={{ display: 'contents' }}>
          <DigitBlock value={unit.value} label={unit.label} />
          {i < units.length - 1 && (
            <span className="countdown__sep" aria-hidden="true">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
