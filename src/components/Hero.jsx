import { motion } from "framer-motion";
import StarsBg from "./StarsBg";
import { PROFILE } from "../data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <StarsBg />

      <div className="container-px max-w-6xl mx-auto py-28 md:py-36">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left: Headline and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="badge">Open to Relocation</span>
              <span className="badge">MERN</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Building scalable web apps with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-accent to-blue-400">
                {" "}delightful UX
              </span>
            </h1>

            <p className="text-slate-300/90 mt-5 text-lg">
              {PROFILE.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn">Explore Projects</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
              <a href={`mailto:${PROFILE.email}?subject=Hello ${PROFILE.name}`} className="btn-secondary">
                Email Me
              </a>
              {PROFILE.resume && (
                <a href={PROFILE.resume} download="Dipesh_Gaikar_Resume.pdf" className="btn-secondary">
                  Download Resume
                </a>
              )}
            </div>

            <div className="mt-8 text-sm text-slate-400">
              {PROFILE.location} • {PROFILE.role}
            </div>
          </motion.div>

          {/* Right: Bigger Photo */}
          {PROFILE.photo && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="justify-self-center md:justify-self-end"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* amplified glow for bigger image */}
                <div
                  className="absolute -inset-8 -z-10 rounded-[2rem] bg-cyan-500/15 blur-2xl"
                  aria-hidden="true"
                />
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.photoAlt || PROFILE.name}
                  width={768}
                  height={768}
                  loading="eager"
                  decoding="async"
                  className="
                    w-56 h-56
                    sm:w-72 sm:h-72
                    md:w-80 md:h-80
                    lg:w-96 lg:h-96
                    xl:w-[28rem] xl:h-[28rem]
                    rounded-2xl object-cover border border-white/10 shadow-glow
                  "
                />
                {/* subtle ring scaled up */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-cyan-400/20"
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* existing corner glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        aria-hidden="true"
      />
    </div>
  );
}