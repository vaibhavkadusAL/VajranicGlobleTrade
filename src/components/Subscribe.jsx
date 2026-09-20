import { useState } from 'react'
import { siteConfig } from '../config/siteConfig'
import './Subscribe.css'

// ── Very simple email regex ─────────────────────────────────
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

export default function Subscribe() {
  const [email, setEmail]     = useState('')
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // ── Validation ────────────────────────────────────────
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')

    // ── TODO: replace this stub with a real API call ──────
    // Example:
    //   await fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email }),
    //   })
    // ─────────────────────────────────────────────────────

    setSuccess(true)
    setEmail('')
  }

  return (
    <section className="subscribe" aria-label="Email subscription">
      <p className="subscribe__eyebrow">Be the first to know</p>

      {success ? (
        <div className="subscribe__success" role="status">
          <span className="subscribe__success-icon" aria-hidden="true">✓</span>
          {siteConfig.subscribeSuccessMessage}
        </div>
      ) : (
        <form
          className="subscribe__form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Subscribe for launch notification"
        >
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            className="subscribe__input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError('')
            }}
            autoComplete="email"
            aria-invalid={!!error}
            aria-describedby={error ? 'email-error' : undefined}
          />
          <button type="submit" className="subscribe__btn">
            Notify Me
          </button>
        </form>
      )}

      {error && (
        <p id="email-error" className="subscribe__error" role="alert">
          {error}
        </p>
      )}
    </section>
  )
}
