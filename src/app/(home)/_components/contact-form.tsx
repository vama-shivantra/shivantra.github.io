"use client";

import { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeUsJRCZVyWolcbIz4NLB4nsW_M88eVSfYzxt5T3HrI5Rz5AA/formResponse";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "w-full rounded-2xl border-[1px] border-[#cecac8] bg-white px-[1rem] py-[0.75rem] text-[14px] text-[#242424] outline-none transition-colors duration-300 focus:border-[#2b59d1]";
const labelClass = "mb-[0.5rem] block text-[12px] uppercase tracking-[-0.02em] text-[#797776]";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [notification, setNotification] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  const showNotification = (msg: string, type: "success" | "error") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = form;

    if (!name || !email) {
      showNotification("Name and email are required", "error");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      showNotification("Enter a valid email", "error");
      return;
    }

    const params = new URLSearchParams({
      "entry.2131742683": name,
      "entry.988251478": email,
      "entry.1922968647": phone,
      "entry.977598766": subject,
      "entry.1464684411": message,
    });

    try {
      await fetch(`${GOOGLE_FORM_URL}?${params.toString()}`, { method: "POST", mode: "no-cors" });
      showNotification("Your response is submitted. Thank You", "success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitDisabled(true);
      if (
        typeof window !== "undefined" &&
        (window as unknown as { grecaptcha?: { reset: () => void } }).grecaptcha
      ) {
        (window as unknown as { grecaptcha: { reset: () => void } }).grecaptcha.reset();
      }
    } catch {
      showNotification("Error submitting response. Try again", "error");
    }
  };

  if (typeof window !== "undefined") {
    (window as unknown as { enableSubmitBtn: () => void }).enableSubmitBtn = () =>
      setSubmitDisabled(false);
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 flex flex-col gap-[1.25rem]">
      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input
          className={fieldClass}
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          className={fieldClass}
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input
          className={fieldClass}
          id="phone"
          name="phone"
          type="text"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="subject">
          Subject
        </label>
        <input
          className={fieldClass}
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          className={fieldClass}
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <div
        className="g-recaptcha max-w-full overflow-x-auto"
        data-size="compact"
        data-sitekey="6Lc406MrAAAAAO9xqeDSLJzcWFUx6rJLhJi7_Vb0"
        data-callback="enableSubmitBtn"
      />

      <button
        type="submit"
        disabled={submitDisabled}
        className="mt-[0.5rem] w-fit rounded-full bg-[#2b59d1] px-8 py-[1rem] text-[14px] uppercase tracking-[-0.02em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Send Message
      </button>

      {notification && (
        <p
          className={`text-[14px] ${notification.type === "success" ? "text-[#1a7a3c]" : "text-[#c0392b]"}`}
          role="status"
        >
          {notification.msg}
        </p>
      )}
    </form>
  );
}
