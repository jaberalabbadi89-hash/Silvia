'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend UI only - no submission logic as requested
  };

  return (
    <section
      id="anchors-mj443gvr3"
      aria-labelledby="contact-heading"
      className="w-full bg-[#E8E6E6]/54 py-20 scroll-mt-20"
    >
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-stretch justify-center px-6 md:flex-row">
        {/* Left Column: Contact info card (Green) */}
        <div className="flex w-full flex-col justify-between rounded-t-[30px] bg-[#50956D] p-8 text-white md:w-[433px] md:rounded-l-[30px] md:rounded-tr-none md:p-12">
          <div>
            <h2 id="contact-heading" className="font-sans text-[38px] leading-[1.2] font-bold">
              {t('title')}
            </h2>
            <p className="mt-6 font-sans text-base leading-[1.5] font-normal text-white/90">
              {t('description')}
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <svg
                  className="h-5 w-5"
                  viewBox="30.499 30 139 139.999"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M154.708 115.415a80.404 80.404 0 0 1-17.641-4.416c-6.242-2.359-13.345-.836-18.104 3.896l-6.198 6.229a101.805 101.805 0 0 1-33.919-34.089l6.205-6.237c4.695-4.773 6.21-11.918 3.865-18.193a81.55 81.55 0 0 1-4.401-17.771C83.323 36.349 76.039 30 67.572 30l-.168.001H47.635c-.515 0-1.033.023-1.53.07-4.561.414-8.69 2.589-11.625 6.125-2.937 3.538-4.326 8.015-3.908 12.667C32.79 69.86 40 90.325 51.401 108.016c10.361 16.39 24.455 30.558 40.73 40.953 17.546 11.437 37.809 18.683 58.672 20.961.515.046 1.031.069 1.534.069h.077c9.456-.039 17.118-7.808 17.081-17.302v-19.825c.19-8.733-6.144-16.231-14.787-17.457zm6.845 17.412v19.887c.02 5.1-4.094 9.265-9.173 9.286-.294-.002-.58-.012-.793-.03-19.563-2.137-38.629-8.955-55.17-19.736-15.327-9.79-28.576-23.108-38.334-38.543C47.34 87.021 40.557 67.769 38.477 48.08a9.218 9.218 0 0 1 2.098-6.752 9.138 9.138 0 0 1 7.06-3.326h19.808c.032-.002.062-.002.092-.002 4.566 0 8.476 3.404 9.111 7.918a89.669 89.669 0 0 0 4.834 19.497c1.259 3.366.445 7.194-2.055 9.736l-8.369 8.412a4.022 4.022 0 0 0-.646 4.812c9.73 17.199 23.917 31.461 41.028 41.241a3.948 3.948 0 0 0 4.766-.647l8.353-8.396a9.212 9.212 0 0 1 9.728-2.08 88.214 88.214 0 0 0 19.35 4.85c4.63.656 8.034 4.691 7.918 9.386v.098z" />
                </svg>
              </div>
              <a
                href={`tel:${t('phone')}`}
                className="font-sans text-base font-normal hover:underline"
              >
                {t('phone')}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <svg
                  className="h-5 w-5"
                  viewBox="20 44.5 160 110.999"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M109.336 104.331a17.481 17.481 0 0 1-18.671 0L20.222 59.784H20v78.442c0 9.54 7.784 17.273 17.386 17.273h125.228c9.602 0 17.386-7.733 17.386-17.273V59.784h-.222l-70.442 44.547z" />
                  <path d="M22.578 44.5l.215.125 68.173 43.111a16.917 16.917 0 0 0 18.069 0l68.173-43.111.215-.125H22.578z" />
                </svg>
              </div>
              <a
                href={`mailto:${t('email')}`}
                className="font-sans text-base font-normal hover:underline"
              >
                {t('email')}
              </a>
            </div>

            {/* Location Status */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <svg
                  className="h-5 w-5"
                  viewBox="42 20.5 116 159"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M99.999 179.5l-4.053-4.877C93.746 171.972 42 109.349 42 78.612 42 46.569 68.018 20.5 99.999 20.5 131.985 20.5 158 46.569 158 78.612c0 30.738-51.743 93.361-53.948 96.011l-4.053 4.877zm0-148.434c-26.166 0-47.455 21.328-47.455 47.545 0 20.481 31.206 63.869 47.455 84.264 16.252-20.394 47.458-63.783 47.458-84.264-.001-26.217-21.289-47.545-47.458-47.545z" />
                </svg>
              </div>
              <p className="font-sans text-base leading-[1.4] font-normal whitespace-pre-line">
                {t('travelStatus')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Message Form (White) */}
        <div className="flex flex-1 flex-col justify-between rounded-b-[30px] border border-t-0 border-[#E8E6E6] bg-[#FFFFFF] p-8 md:rounded-r-[30px] md:rounded-bl-none md:border-t md:border-l-0 md:p-12">
          <h3 className="font-sans text-[27px] font-bold text-black">{t('formTitle')}</h3>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name-input" className="sr-only">
                {t('nameLabel')}
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t('nameLabel')}
                autoComplete="name"
                className="h-12 w-full rounded-[11px] border border-[#E8E6E6] px-4 font-sans text-base text-black placeholder-[#808080] transition-colors focus:border-[#50956D] focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email-input" className="sr-only">
                {t('emailLabel')}
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t('emailLabel')}
                autoComplete="email"
                className="h-12 w-full rounded-[11px] border border-[#E8E6E6] px-4 font-sans text-base text-black placeholder-[#808080] transition-colors focus:border-[#50956D] focus:outline-none"
              />
            </div>

            {/* Phone Input */}
            <div className="flex flex-col">
              <label htmlFor="phone-input" className="sr-only">
                {t('phoneLabel')}
              </label>
              <input
                id="phone-input"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('phoneLabel')}
                autoComplete="tel"
                className="h-12 w-full rounded-[11px] border border-[#E8E6E6] px-4 font-sans text-base text-black placeholder-[#808080] transition-colors focus:border-[#50956D] focus:outline-none"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label htmlFor="message-textarea" className="sr-only">
                {t('messageLabel')}
              </label>
              <textarea
                id="message-textarea"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={t('messageLabel')}
                className="w-full resize-none rounded-[11px] border border-[#E8E6E6] p-4 font-sans text-base text-black placeholder-[#808080] transition-colors focus:border-[#50956D] focus:outline-none"
              />
            </div>

            {/* Checkbox Consent */}
            <div className="mt-2 flex items-start gap-3">
              <input
                id="policy-checkbox"
                type="checkbox"
                name="agree"
                required
                checked={formData.agree}
                onChange={handleChange}
                className="mt-0.5 h-5 w-5 rounded border-[#E8E6E6] text-[#50956D] focus:ring-[#50956D]"
              />
              <label
                htmlFor="policy-checkbox"
                className="font-sans text-sm leading-tight text-[#595959]"
              >
                {t('agreeText')}{' '}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#50956D] hover:underline"
                >
                  {t('policyLinkText')}
                </a>{' '}
                *
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 h-12 w-full self-end rounded-[10px] bg-[#50956D] font-sans text-base font-medium text-white shadow-sm transition-colors hover:bg-[#407757] focus:outline-none md:w-auto md:px-8"
            >
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
