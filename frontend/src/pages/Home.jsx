import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth.js'

function Home() {
  const { user } = useAuth()
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative">
        {/* Dark overlay that covers most of the section and fades to transparent at the bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/70 to-transparent"></div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-10 pt-14 text-center">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Connecting Passionate Volunteers With Meaningful Causes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-300">
            A centralized platform for community-driven initiatives—streamlining volunteer registration, onboarding, and program coordination to create lasting social impact.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/volunteer/dashboard"
              onClick={(e) => {
                if (user?.role === 'Admin') e.preventDefault()
              }}
              className={`rounded-full px-8 py-4 font-bold text-white shadow-lg transition-all ${
                user?.role === 'Admin'
                  ? 'bg-emerald-800 cursor-not-allowed opacity-80'
                  : 'bg-emerald-600 shadow-emerald-900/50 hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-emerald-900/80'
              }`}
            >
              Become a Volunteer
            </Link>
            <Link
              to="/programs"
              className="rounded-full border-2 border-stone-600 bg-stone-900/50 px-8 py-4 font-bold text-stone-200 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-stone-400 hover:bg-stone-800"
            >
              Explore Programs
            </Link>
          </div>

          <div className="mx-auto mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
            <p className="mb-6 text-sm font-semibold tracking-widest text-stone-400 uppercase">
              Explore opportunities across key initiative categories
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {['Food Support', 'Education Drives', 'Health & Hygiene Camps'].map((item) => (
                <div key={item} className="group flex items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-emerald-500/10 cursor-default">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                  <p className="text-lg font-bold text-white transition-colors group-hover:text-emerald-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features / Workflow Section */}
      <section className="relative z-20 mx-auto max-w-6xl px-4 pt-4 pb-16">
        <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-10 shadow-2xl backdrop-blur-xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
              Platform Workflow
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">How VolunteerHub Works</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-400">
              A unified platform bridging passionate volunteers with organized social and community initiatives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/10">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-sm font-bold text-emerald-400">1</span>
                <h3 className="text-xl font-bold text-white">Profile Onboarding</h3>
              </div>
              <p className="leading-relaxed text-stone-400">
                Register an account, specify your skills, city, and weekly availability to build a verified volunteer profile ready for community action.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/10">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-sm font-bold text-emerald-400">2</span>
                <h3 className="text-xl font-bold text-white">Program Discovery</h3>
              </div>
              <p className="leading-relaxed text-stone-400">
                Browse active charity drives, educational campaigns, and outreach initiatives filtered by category, location, and dates.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/10">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-sm font-bold text-emerald-400">3</span>
                <h3 className="text-xl font-bold text-white">One-Click Application</h3>
              </div>
              <p className="leading-relaxed text-stone-400">
                Apply directly to programs with a single click and track your approval status in real time from your personal dashboard.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/10">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-sm font-bold text-emerald-400">4</span>
                <h3 className="text-xl font-bold text-white">Admin Management</h3>
              </div>
              <p className="leading-relaxed text-stone-400">
                Organizers review submissions, approve volunteer credentials, create new programs, and monitor community metrics with interactive analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities / Highlights Section */}
      <section className="border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
          <Stat number="100%" label="Screened Volunteers" subtext="Admin-verified profiles ensuring trusted community participation" />
          <Stat number="Real-Time" label="Status Tracking" subtext="Live updates from initial submission through program acceptance" />
          <Stat number="Multi-Role" label="Dedicated Portals" subtext="Tailored, secure dashboards for volunteers and coordinators" />
        </div>
      </section>
    </main>
  )
}

function Stat({ number, label, subtext }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 p-8 text-center transition-all hover:-translate-y-2 hover:bg-white/10 backdrop-blur-md">
      <p className="text-3xl font-bold text-emerald-400 md:text-4xl">{number}</p>
      <p className="mt-3 font-semibold tracking-wide text-white uppercase text-sm">{label}</p>
      {subtext && <p className="mt-1 text-xs text-stone-400 leading-relaxed">{subtext}</p>}
    </div>
  )
}

export default Home
