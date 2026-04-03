"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  consultation: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  consultation: "車種の相談",
  message: "",
};

function isValidEmail(email: string) {
  // Simple, pragmatic validation (no external libs).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function CtaSection() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [error, setError] = useState<string | null>(null);

  const consultationOptions = useMemo(
    () => ["車種の相談", "買取", "修理", "その他"],
    [],
  );

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    // Allow the page/modal container to scroll as needed.
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Allow other sections (e.g., hero buttons) to open this reservation modal.
  useEffect(() => {
    const openReservationForm = () => {
      setError(null);
      setSubmitted(false);
      setValues(initialValues);
      setOpen(true);
    };

    // Deterministic imperative hook (used by HeroSection buttons).
    (window as any).__openReservationForm = openReservationForm;

    const handler = () => openReservationForm();
    window.addEventListener("open-reservation-form", handler as EventListener);
    return () => {
      window.removeEventListener(
        "open-reservation-form",
        handler as EventListener,
      );
      if ((window as any).__openReservationForm === openReservationForm) {
        delete (window as any).__openReservationForm;
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const onOpen = () => {
    setError(null);
    setSubmitted(false);
    setValues(initialValues);
    setOpen(true);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!values.name.trim()) {
      setError("お名前を入力してください。");
      return;
    }
    if (!isValidEmail(values.email)) {
      setError("メールアドレスを正しく入力してください。");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <section id="contact" className="bg-trust-navy py-section-gap text-center">
        {/* Anchor for Hero "CONTACT US" smooth scroll */}
        <div id="google-map" className="scroll-mt-[88px]" />
        <div id="contact-form" className="scroll-mt-[88px]" />
        <div className="mx-auto max-w-[640px] px-lg">
          <h2 className="text-section-title font-extralight leading-[1.42] text-white">
            まずは、
            <br />
            お気軽にご相談ください。
          </h2>
          <p className="mb-lg mt-md text-body leading-[2.05] text-white/65">
            購入・売却・修理に関するご相談を、専門スタッフが丁寧にお伺いします。オンラインでのご相談も承ります。
          </p>
          <div className="flex flex-wrap justify-center gap-sm">
            <button
              type="button"
              onClick={onOpen}
              className="font-en btn-premium inline-flex items-center gap-2 bg-white px-10 py-4 text-caption uppercase tracking-[0.12em] text-trust-navy hover:bg-neutral-100"
            >
              無料相談を予約する →
            </button>
            <a
              href="tel:0222202264"
              className="font-en btn-premium inline-flex items-center gap-2 border border-white/30 bg-transparent px-10 py-4 text-caption uppercase tracking-[0.12em] text-white hover:border-white"
            >
              022-220-2264
            </a>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[2000] flex items-start justify-center bg-black/50 px-4 py-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="無料相談フォーム"
          onMouseDown={(e) => {
            // Close when clicking the backdrop (not the card).
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-[600px] max-h-none h-auto my-auto rounded-sm border border-white/15 bg-trust-navy text-white shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <p className="font-en text-label uppercase tracking-[0.3em] text-white/60">
                  Reservation
                </p>
                <h3 className="mt-1 text-section-title text-white">
                  無料相談を予約する
                </h3>
              </div>
              <button
                type="button"
                className="rounded-sm border border-white/15 bg-transparent px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              {submitted ? (
                <div className="space-y-6 text-center">
                  <p className="text-section-title text-white">
                    お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
                  </p>
                  <button
                    type="button"
                    className="mx-auto font-en btn-premium inline-flex items-center gap-2 bg-white px-10 py-4 text-caption uppercase tracking-[0.12em] text-trust-navy hover:bg-neutral-100"
                    onClick={() => setOpen(false)}
                  >
                    閉じる →
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5 pb-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <label className="mb-2 block text-xs font-medium text-white/75">
                        お名前 <span className="text-white/60">*</span>
                      </label>
                      <input
                        value={values.name}
                        onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
                        type="text"
                        required
                        className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
                        placeholder="例）山田 太郎"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 block text-xs font-medium text-white/75">
                        メールアドレス <span className="text-white/60">*</span>
                      </label>
                      <input
                        value={values.email}
                        onChange={(e) =>
                          setValues((prev) => ({ ...prev, email: e.target.value }))
                        }
                        type="email"
                        required
                        className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
                        placeholder="example@example.com"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 block text-xs font-medium text-white/75">
                        電話番号
                      </label>
                      <input
                        value={values.phone}
                        onChange={(e) =>
                          setValues((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        type="tel"
                        className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
                        placeholder="例）090-1234-5678"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 block text-xs font-medium text-white/75">
                        ご相談内容
                      </label>
                      <select
                        value={values.consultation}
                        onChange={(e) =>
                          setValues((prev) => ({
                            ...prev,
                            consultation: e.target.value,
                          }))
                        }
                        className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                      >
                        {consultationOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-black">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 block text-xs font-medium text-white/75">
                      お問い合わせ詳細
                    </label>
                    <textarea
                      value={values.message}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, message: e.target.value }))
                      }
                      rows={5}
                      className="w-full resize-none rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
                      placeholder="例）ランドクルーザー70の購入相談、予算は〜万円で、ローンも検討しています。"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-rose-200" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="mx-auto block font-en btn-premium inline-flex w-full items-center justify-center gap-2 bg-white px-10 py-4 text-caption uppercase tracking-[0.12em] text-trust-navy hover:bg-neutral-100"
                  >
                    送信する →
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
