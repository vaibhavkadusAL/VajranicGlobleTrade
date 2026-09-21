import { useState } from 'react'
import emailjs from '@emailjs/browser'
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

    try {
      // Replace these placeholders with your actual EmailJS credentials
      // Sign up at https://www.emailjs.com/ to get these
      // Make sure your EmailJS template uses {{to_email}} in the "To Email" field
      const serviceId = 'YOUR_SERVICE_ID'
      const templateId = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: email, // This sends the email to the address specified in the input
          message: 'Thank you for your enquiry! We will notify you when we launch.',
        },
        publicKey
      )

      setSuccess(true)
      setEmail('')
    } catch (err) {
      console.error('Failed to send email:', err)
      setError('Failed to send email. Please try again later.')
    }
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
