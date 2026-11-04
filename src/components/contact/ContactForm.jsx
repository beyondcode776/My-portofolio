import React, { useState } from 'react';
import { MaskingTape } from '../Doodles';

/**
 * ContactForm Component
 * Tilted graph-paper notebook sheet matching the exact reference image:
 * - 4 Masking tapes on corners
 * - Heading: "SEND A MESSAGE ✉" with hand-drawn envelope and ink underline
 * - Fields:
 *   1. YOUR NAME (placeholder: "Write your name here...")
 *   2. YOUR EMAIL (placeholder: "write your email@domain.com")
 *   3. YOUR MESSAGE / PROJECT DETAILS (placeholder: "Tell me about your project, tech stack, timeline...")
 * - Mustard button: "SEND MESSAGE"
 * - Flying paper airplane / envelope doodle beside button
 * - Direct delivery to kishlaykumar0005@gmail.com via Web3Forms API
 * - Truthful response validation: ONLY reports success when Web3Forms confirms delivery (success: true)
 * - Handles server errors, network errors, and retains visitor data on failure
 *
 * Web3Forms access key is required. Get yours free at https://web3forms.com
 * Enter kishlaykumar0005@gmail.com to generate a key, then set WEB3FORMS_ACCESS_KEY below.
 */

// ─── Web3Forms Access Key ──────────────────────────────────────────────────
// Replace the placeholder below with the real UUID from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'e8822730-9401-47c3-9813-8b53b3319aaf';
// ──────────────────────────────────────────────────────────────────────────

export const ContactForm = ({ className = "", selectedVibes = {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState('idle'); // 'idle' | 'success' | 'activation_required' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const destinationEmail = 'kishlaykumar0005@gmail.com';
  const web3FormsEndpoint = 'https://api.web3forms.com/submit';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submissionState === 'error') {
      setSubmissionState('idle');
      setStatusMessage('');
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a brief message';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionState('idle');
    setStatusMessage('');

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Map active Vibe Check options into a readable label
    const vibeLabels = {
      webApp: 'Web App',
      iotHardware: 'IoT & Robotics Hardware',
      freelanceCollab: 'Freelance / Collab',
      justHi: 'Just saying hi',
    };
    const activeVibes = Object.keys(selectedVibes || {})
      .filter((k) => selectedVibes[k])
      .map((k) => vibeLabels[k] || k)
      .join(', ');

    // Warn if access key has not been replaced yet
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY') {
      setSubmissionState('error');
      setStatusMessage('Web3Forms access key is not configured. Visit https://web3forms.com, generate a key for kishlaykumar0005@gmail.com, and add it to ContactForm.jsx.');
      setIsSubmitting(false);
      return;
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name,
      email: email,
      message: message,
      ...(activeVibes ? { 'Selected Vibe / Interests': activeVibes } : {}),
      subject: `New Portfolio Contact Message from ${name}`,
      replyto: email,
      from_name: 'Kishlay Kumar Portfolio',
    };

    console.log('[Web3Forms] Submitting to:', web3FormsEndpoint);
    console.log('[Web3Forms] Payload:', { ...payload, access_key: '[REDACTED]' });

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('[Web3Forms] HTTP Response status:', response.status);

      let responseData = null;
      const responseText = await response.text();
      console.log('[Web3Forms] Response raw body:', responseText);

      try {
        responseData = JSON.parse(responseText);
        console.log('[Web3Forms] Parsed JSON response:', responseData);
      } catch (jsonErr) {
        console.warn('[Web3Forms] Response is not valid JSON:', jsonErr);
      }

      // Check HTTP status code
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please wait a moment before trying again.');
        } else if (responseData && responseData.message) {
          throw new Error(`Error: ${responseData.message}`);
        } else {
          throw new Error(`Server returned HTTP ${response.status} (${response.statusText || 'Error'}).`);
        }
      }

      // Inspect JSON response — Web3Forms returns { success: true, message: "..." }
      if (responseData) {
        const isSuccess = responseData.success === true || responseData.success === 'true';

        if (isSuccess) {
          console.log('[Web3Forms] Delivery successfully confirmed!');
          setSubmissionState('success');
          return;
        } else {
          throw new Error(responseData.message || 'Web3Forms rejected the submission.');
        }
      } else {
        throw new Error('Received an unparseable response from the form endpoint.');
      }
    } catch (err) {
      console.error('[Web3Forms] Submission failed:', err);
      setSubmissionState('error');
      setStatusMessage(err.message || 'Failed to deliver message. Please try again or use the email link below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualMailto = () => {
    const name = formData.name.trim() || 'Visitor';
    const email = formData.email.trim() || '';
    const message = formData.message.trim() || '';
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Kishlay,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmissionState('idle');
    setStatusMessage('');
  };

  return (
    <div className={`relative ${className}`}>
      {/* Tilted Graph-Paper Sheet */}
      <div
        className="relative p-3 sm:p-4 md:p-4.5 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-0.5"
        style={{
          boxShadow: '3px 4px 10px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
          backgroundImage: `
            linear-gradient(to right, rgba(29, 28, 26, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(29, 28, 26, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
        }}
      >
        {/* 4 Corner Masking Tapes */}
        {/* Top-Left */}
        <div className="absolute -top-2.5 -left-3 pointer-events-none z-20">
          <MaskingTape width="w-12 sm:w-14" height="h-3.5 sm:h-4" angle="-rotate-12" />
        </div>
        {/* Top-Right */}
        <div className="absolute -top-2.5 -right-3 pointer-events-none z-20">
          <MaskingTape width="w-12 sm:w-14" height="h-3.5 sm:h-4" angle="rotate-15" />
        </div>
        {/* Bottom-Left */}
        <div className="absolute -bottom-2.5 -left-3 pointer-events-none z-20">
          <MaskingTape width="w-12 sm:w-14" height="h-3.5 sm:h-4" angle="rotate-6" />
        </div>
        {/* Bottom-Right */}
        <div className="absolute -bottom-2.5 -right-3 pointer-events-none z-20">
          <MaskingTape width="w-12 sm:w-14" height="h-3.5 sm:h-4" angle="-rotate-12" />
        </div>

        {/* Heading: SEND A MESSAGE ✉ with ink underline */}
        <div className="mb-2 sm:mb-2.5">
          <div className="inline-flex items-center gap-2">
            <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-xl text-[#1D1C1A] uppercase tracking-wider underline decoration-[#1D1C1A] decoration-2 underline-offset-3">
              SEND A MESSAGE
            </h3>
            {/* Hand-drawn stamped envelope sketch */}
            <svg viewBox="0 0 28 20" fill="none" className="w-5 sm:w-6 h-4 text-[#1D1C1A]" aria-hidden="true">
              <rect x="1" y="1" width="26" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" fill="#FAF6EE" />
              <path d="M 1 1 L 14 11 L 27 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Form Body: Success State */}
        {submissionState === 'success' ? (
          <div className="p-3 bg-[#EAF7EA] border-2 border-[#1D1C1A] rounded-xs text-center space-y-1.5 animate-fadeIn">
            <div className="text-xl">✓</div>
            <h4 className="font-condensed font-extrabold text-sm sm:text-base text-[#1D1C1A] uppercase tracking-wide">
              MESSAGE SENT!
            </h4>
            <p className="font-hand font-bold text-xs sm:text-[13px] text-[#2E7D32]">
              Your message was confirmed delivered to {destinationEmail}.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-1 inline-flex items-center px-2.5 py-0.5 bg-[#FAF6EE] hover:bg-[#F2C66D] border border-[#1D1C1A] text-xs font-condensed font-bold text-[#1D1C1A] rounded-xs cursor-pointer shadow-2xs transition-colors"
            >
              Write another message ↺
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-2 sm:space-y-2.5">
            {/* Field 1: YOUR NAME */}
            <div>
              <label
                htmlFor="contact-name"
                className="block font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase mb-0.5"
              >
                YOUR NAME
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Write your name here..."
                className={`w-full px-2.5 py-1.5 bg-[#FAF6EE] border-2 rounded-xs font-hand font-bold text-xs sm:text-sm text-[#1D1C1A] placeholder-[#8A8070] shadow-inner focus:outline-hidden focus:ring-1 focus:ring-[#E7BD58] transition-colors ${
                  errors.name ? 'border-[#C0392B]' : 'border-[#1D1C1A]'
                }`}
                style={{
                  borderRadius: '3px 5px 3px 4px',
                }}
              />
              {errors.name && (
                <span className="font-hand font-bold text-[11px] text-[#C0392B] mt-0.5 block">
                  * {errors.name}
                </span>
              )}
            </div>

            {/* Field 2: YOUR EMAIL */}
            <div>
              <label
                htmlFor="contact-email"
                className="block font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase mb-0.5"
              >
                YOUR EMAIL
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="write your email@domain.com"
                className={`w-full px-2.5 py-1.5 bg-[#FAF6EE] border-2 rounded-xs font-hand font-bold text-xs sm:text-sm text-[#1D1C1A] placeholder-[#8A8070] shadow-inner focus:outline-hidden focus:ring-1 focus:ring-[#E7BD58] transition-colors ${
                  errors.email ? 'border-[#C0392B]' : 'border-[#1D1C1A]'
                }`}
                style={{
                  borderRadius: '3px 5px 3px 4px',
                }}
              />
              {errors.email && (
                <span className="font-hand font-bold text-[11px] text-[#C0392B] mt-0.5 block">
                  * {errors.email}
                </span>
              )}
            </div>

            {/* Field 3: YOUR MESSAGE / PROJECT DETAILS */}
            <div>
              <label
                htmlFor="contact-message"
                className="block font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase mb-0.5"
              >
                YOUR MESSAGE / PROJECT DETAILS
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, tech stack, timeline..."
                className={`w-full px-2.5 py-1.5 bg-[#FAF6EE] border-2 rounded-xs font-hand font-bold text-xs sm:text-sm text-[#1D1C1A] placeholder-[#8A8070] shadow-inner focus:outline-hidden focus:ring-1 focus:ring-[#E7BD58] transition-colors resize-y min-h-[58px] ${
                  errors.message ? 'border-[#C0392B]' : 'border-[#1D1C1A]'
                }`}
                style={{
                  borderRadius: '4px 3px 5px 3px',
                }}
              />
              {errors.message && (
                <span className="font-hand font-bold text-[11px] text-[#C0392B] mt-0.5 block">
                  * {errors.message}
                </span>
              )}
            </div>

            {/* Error Banner: Keeps visitor input safe & provides clear retry/fallback options */}
            {submissionState === 'error' && (
              <div className="p-2 sm:p-2.5 bg-[#FDE8E8] border-2 border-[#C0392B] rounded-xs text-left space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-1.5 text-[#C0392B] font-condensed font-extrabold text-xs uppercase tracking-wide">
                  <span>⚠️ DELIVERY FAILED</span>
                </div>
                <p className="font-hand font-bold text-xs text-[#900C3F] leading-tight">
                  {statusMessage || 'Unable to reach the email delivery server.'}
                </p>
                <div className="pt-0.5 flex flex-wrap items-center gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-2 py-0.5 bg-[#FAF6EE] hover:bg-[#F2C66D] border border-[#1D1C1A] text-[11px] font-condensed font-bold text-[#1D1C1A] rounded-xs cursor-pointer shadow-2xs"
                  >
                    Retry Sending ↺
                  </button>
                  <button
                    type="button"
                    onClick={handleManualMailto}
                    className="px-2 py-0.5 bg-[#FAF6EE] hover:bg-[#F2C66D] border border-[#1D1C1A] text-[11px] font-condensed font-bold text-[#1D1C1A] rounded-xs cursor-pointer shadow-2xs"
                  >
                    Send via Email App (Fallback) ↗
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button + Flying envelope doodle */}
            <div className="pt-0.5 flex items-center gap-2.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center px-4 sm:px-5 py-1.5 bg-[#F2C66D] hover:bg-[#E7BD58] text-[#1D1C1A] font-condensed font-extrabold text-xs sm:text-sm rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden disabled:opacity-75 disabled:cursor-wait"
                style={{
                  borderRadius: '3px 6px 4px 5px',
                  boxShadow: '2px 3px 0px #1D1C1A',
                }}
              >
                <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
              </button>

              {/* Hand-drawn flying envelope doodle with motion lines (o=✉) */}
              <div className="flex items-center gap-1 text-[#1D1C1A] pointer-events-none">
                <svg viewBox="0 0 55 24" fill="none" className="w-12 sm:w-14 h-5" aria-hidden="true">
                  {/* Motion loop and dashed lines */}
                  <path d="M 2 14 C 10 22 18 20 22 12 C 24 6 20 2 15 6 C 12 9 14 16 28 14" stroke="#1D1C1A" strokeWidth="1.4" strokeDasharray="3 2" strokeLinecap="round" />
                  <path d="M 28 14 L 38 14" stroke="#1D1C1A" strokeWidth="1.4" strokeDasharray="3 2" />
                  {/* Mini flying paper plane / envelope */}
                  <polygon points="38,8 52,14 38,20 42,14" fill="#FAF6EE" stroke="#1D1C1A" strokeWidth="1.4" strokeLinejoin="round" />
                  <line x1="42" y1="14" x2="52" y2="14" stroke="#1D1C1A" strokeWidth="1.2" />
                </svg>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
