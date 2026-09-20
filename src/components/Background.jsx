import './Background.css'

// Number of rising particles — must match the CSS nth-child selectors
const PARTICLE_COUNT = 12

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      {/* Floating blobs */}
      <div className="bg__blob bg__blob--1" />
      <div className="bg__blob bg__blob--2" />
      <div className="bg__blob bg__blob--3" />
      <div className="bg__blob bg__blob--4" />
      <div className="bg__blob bg__blob--5" />

      {/* Rising particles */}
      <div className="bg__particles">
        {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
          <div key={i} className="bg__particle" />
        ))}
      </div>
    </div>
  )
}
