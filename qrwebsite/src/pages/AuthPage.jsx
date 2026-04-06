import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const COPY = {
  login: {
    eyebrow: "Welcome back",
    title: "Sign in to manage and save your QR codes",
    submit: "Sign In",
    alternateLabel: "Need an account?",
    alternateLink: "/register",
    alternateCta: "Create one",
  },
  register: {
    eyebrow: "Start building",
    title: "Create your account and launch your first QR workflow",
    submit: "Create Account",
    alternateLabel: "Already registered?",
    alternateLink: "/login",
    alternateCta: "Sign in",
  },
};

const AuthPage = ({ mode }) => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copy = COPY[mode];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (mode === "login") {
        await login(form);
      } else {
        await register(form);
      }

      const redirectTo = location.state?.from?.pathname ?? "/dashboard";
      navigate(redirectTo, { replace: true });
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,74,198,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(188,72,0,0.14),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8 self-center">
          <span className="inline-flex rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-primary">
            {copy.eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-on-surface md:text-6xl">
              {copy.title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
              Use one place to generate instant QR previews, download PNGs, and save short links tied to your account.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-outline-variant/20 bg-white/75 p-5 ambient-shadow">
              <div className="text-2xl font-black text-primary">Live</div>
              <p className="mt-2 text-sm text-on-surface-variant">Preview every QR before you export it.</p>
            </div>
            <div className="rounded-3xl border border-outline-variant/20 bg-white/75 p-5 ambient-shadow">
              <div className="text-2xl font-black text-primary">Saved</div>
              <p className="mt-2 text-sm text-on-surface-variant">Keep your generated redirect links organized.</p>
            </div>
            <div className="rounded-3xl border border-outline-variant/20 bg-white/75 p-5 ambient-shadow">
              <div className="text-2xl font-black text-primary">Fast</div>
              <p className="mt-2 text-sm text-on-surface-variant">Create download-ready PNG codes in one request.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-outline-variant/20 bg-white/90 p-8 shadow-[0_30px_80px_-35px_rgba(0,74,198,0.35)] backdrop-blur">
          <div className="mb-8 space-y-2">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-on-surface-variant">Account Access</p>
            <h2 className="text-3xl font-black tracking-tight text-on-surface">{copy.submit}</h2>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-on-surface-variant">Email</span>
              <input
                className="w-full rounded-2xl border border-outline-variant/25 bg-surface-container-lowest px-5 py-4 text-on-surface outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-semibold text-on-surface-variant">Password</span>
              <input
                className="w-full rounded-2xl border border-outline-variant/25 bg-surface-container-lowest px-5 py-4 text-on-surface outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                type="password"
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                placeholder="Minimum backend policy applies"
                required
              />
            </label>

            {error ? (
              <div className="rounded-2xl border border-error/15 bg-error-container px-4 py-3 text-sm text-on-error-container">
                {error}
              </div>
            ) : null}

            <button
              className="w-full rounded-2xl premium-gradient px-5 py-4 text-base font-bold text-white transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : copy.submit}
            </button>
          </form>

          <p className="mt-6 text-sm text-on-surface-variant">
            {copy.alternateLabel}{" "}
            <Link className="font-semibold text-primary hover:underline" to={copy.alternateLink}>
              {copy.alternateCta}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;

