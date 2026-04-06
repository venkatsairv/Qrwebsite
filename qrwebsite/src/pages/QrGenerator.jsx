import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiRequest, withAuth } from "../lib/api";

const QrGenerator = () => {
  const { token, isAuthenticated } = useAuth();
  const [text, setText] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [savedCodes, setSavedCodes] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const blobUrlRef = useRef(null);

  useEffect(() => {
    if (!isAuthenticated || !token) {
      setSavedCodes([]);
      return;
    }

    setIsLoadingHistory(true);
    apiRequest("/api/qr/my", {
      headers: withAuth(token),
    })
      .then((data) => {
        setSavedCodes(data);
      })
      .catch((requestError) => {
        setError(requestError.message);
      })
      .finally(() => {
        setIsLoadingHistory(false);
      });
  }, [isAuthenticated, token]);

  useEffect(() => {
    return () => {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, []);

  const generatePreview = async () => {
    setError("");
    setMessage("");
    setIsGenerating(true);

    try {
      const response = await fetch("/api/qr/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          width: 320,
          height: 320,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text() || "Could not generate QR code");
      }

      const blob = await response.blob();
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }

      const objectUrl = URL.createObjectURL(blob);
      blobUrlRef.current = objectUrl;
      setPreviewUrl(objectUrl);
      setMessage("QR preview is ready to download.");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQr = () => {
    if (!previewUrl) {
      setError("Generate a preview before downloading.");
      return;
    }

    const link = document.createElement("a");
    link.href = previewUrl;
    link.download = "etherqr-code.png";
    link.click();
  };

  const saveQr = async () => {
    if (!isAuthenticated || !token) {
      setError("Sign in before saving QR links to your account.");
      return;
    }

    setError("");
    setMessage("");
    setIsSaving(true);

    try {
      const created = await apiRequest("/api/qr/create", {
        method: "POST",
        headers: withAuth(token),
        body: JSON.stringify({
          originalUrl: text,
        }),
      });

      setSavedCodes((current) => [created, ...current]);
      setMessage("Short link saved to your dashboard.");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text.trim()) {
      setError("Enter a URL or text value first.");
      return;
    }

    await generatePreview();
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 selection:bg-secondary-container selection:text-on-secondary-container">
      <header className="mb-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Full Stack QR Flow
          </span>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            Generate, download, and save QR codes from the real backend
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-on-surface-variant">
            This page is now wired to your Spring Boot API. Public users can preview and download PNG codes, and signed-in users can also save redirect links to their account.
          </p>
        </div>

        <div className="rounded-[2rem] border border-outline-variant/20 bg-white/80 p-6 ambient-shadow">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-on-surface-variant">Account Status</p>
          <p className="mt-3 text-2xl font-black text-on-surface">
            {isAuthenticated ? "Authenticated" : "Guest mode"}
          </p>
          <p className="mt-2 text-sm leading-7 text-on-surface-variant">
            {isAuthenticated ? "You can save and revisit QR links in your dashboard." : "You can still create previews right now, then sign in when you want to save them."}
          </p>
          {!isAuthenticated ? (
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white" to="/login">
                Sign In
              </Link>
              <Link className="rounded-xl border border-outline-variant/25 px-4 py-3 text-sm font-semibold text-on-surface" to="/register">
                Create Account
              </Link>
            </div>
          ) : (
            <Link className="mt-5 inline-flex rounded-xl border border-outline-variant/25 px-4 py-3 text-sm font-semibold text-on-surface" to="/dashboard">
              Open dashboard
            </Link>
          )}
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] border border-outline-variant/20 bg-white/75 p-8 ambient-shadow">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-[0.28em] text-on-surface-variant">
                Destination Content
              </label>
              <textarea
                className="min-h-40 w-full rounded-[1.5rem] border border-outline-variant/25 bg-surface-container-lowest px-5 py-4 text-base text-on-surface outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                placeholder="https://your-product-page.com or any text payload"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>

            {message ? (
              <div className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-on-primary-fixed-variant">
                {message}
              </div>
            ) : null}

            {error ? (
              <div className="rounded-2xl border border-error/15 bg-error-container px-4 py-3 text-sm text-on-error-container">
                {error}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-2xl premium-gradient px-6 py-4 text-sm font-bold text-white transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate preview"}
              </button>
              <button
                className="rounded-2xl border border-outline-variant/25 bg-white px-6 py-4 text-sm font-bold text-on-surface transition hover:border-primary"
                type="button"
                onClick={downloadQr}
              >
                Download PNG
              </button>
              <button
                className="rounded-2xl border border-outline-variant/25 bg-surface-container-low px-6 py-4 text-sm font-bold text-on-surface transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-70"
                type="button"
                onClick={saveQr}
                disabled={!isAuthenticated || isSaving}
              >
                {isSaving ? "Saving..." : "Save to account"}
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest p-8 ambient-shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-on-surface-variant">Preview</p>
              <h2 className="mt-2 text-2xl font-black text-on-surface">Live QR output</h2>
            </div>
            <div className="rounded-full bg-primary/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              PNG 320x320
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] bg-[linear-gradient(135deg,_rgba(0,74,198,0.08),_rgba(188,72,0,0.08))] p-8">
            <div className="flex min-h-96 items-center justify-center rounded-[1.5rem] border border-outline-variant/20 bg-white">
              {previewUrl ? (
                <img className="h-72 w-72 rounded-xl object-contain" src={previewUrl} alt="Generated QR code preview" />
              ) : (
                <div className="max-w-sm text-center">
                  <p className="text-xl font-bold text-on-surface">Your QR preview will appear here</p>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                    Enter a URL, click generate, and the frontend will fetch the PNG directly from your backend.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12 rounded-[2rem] border border-outline-variant/20 bg-white/80 p-8 ambient-shadow">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-on-surface-variant">Saved history</p>
            <h2 className="mt-2 text-2xl font-black text-on-surface">Account QR links</h2>
          </div>
          <div className="text-sm text-on-surface-variant">
            {isAuthenticated ? (isLoadingHistory ? "Loading your saved QR codes..." : `${savedCodes.length} saved`) : "Sign in to save and load history"}
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {savedCodes.length > 0 ? (
            savedCodes.map((code) => (
              <article key={code.id} className="rounded-[1.5rem] border border-outline-variant/20 bg-surface-container-low p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Short code {code.shortCode}</p>
                <p className="mt-3 break-all text-sm text-on-surface">{code.originalUrl}</p>
                <a
                  className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                  href={code.redirectUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {code.redirectUrl}
                </a>
              </article>
            ))
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-outline-variant/35 px-6 py-10 text-center text-on-surface-variant">
              {isAuthenticated ? "No saved QR links yet. Generate one and click save to account." : "Guest sessions do not keep history. Sign in to unlock saved links."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default QrGenerator;
