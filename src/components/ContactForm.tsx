import { useId, useState } from 'react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../context/LanguageContext';

type FormStatus = 'idle' | 'success' | 'error';

const ContactForm = () => {
  const { t } = useLanguage();
  const formId = useId();
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    message: '',
    website: '',
  });
  const [errors, setErrors] = useState({ user_name: '', user_email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = () => {
    const next = { user_name: '', user_email: '', message: '' };
    let valid = true;

    if (!form.user_name.trim()) {
      next.user_name = t.form.errors.name;
      valid = false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.user_email.trim());
    if (!emailOk) {
      next.user_email = t.form.errors.email;
      valid = false;
    }
    if (form.message.trim().length < 4) {
      next.message = t.form.errors.message;
      valid = false;
    }

    setErrors(next);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');

    if (form.website.trim()) {
      return;
    }

    if (!validate()) return;

    const publicKey = 'HJ3-0GHe4Q4UpjSkh';
    const serviceId = 'dmytro.potapchuk.dev';
    const templateId = 'template_1b46bj4';

    const payload = {
      user_name: form.user_name.trim(),
      user_email: form.user_email.trim(),
      message: form.message.trim(),
      user_subject: form.user_subject.trim() || '—',
    };

    setLoading(true);

    try {
      await emailjs.send(serviceId, templateId, payload, publicKey);
      setStatus('success');
      setForm({ user_name: '', user_email: '', user_subject: '', message: '', website: '' });
      setErrors({ user_name: '', user_email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const msgLen = form.message.length;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-describedby={`${formId}-status`}>
      <div id={`${formId}-status`} role="status" aria-live="polite" className="sr-only">
        {status === 'success' && t.form.success}
        {status === 'error' && t.form.error}
      </div>

      {status === 'success' && (
        <div className="form-status success" role="alert">
          {t.form.success}
        </div>
      )}
      {status === 'error' && (
        <div className="form-status error" role="alert">
          {t.form.error}
        </div>
      )}

      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>{t.form.honeypotLabel}</label>
        <input
          id={`${formId}-website`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor={`${formId}-name`}>{t.form.name}</label>
        <input
          id={`${formId}-name`}
          type="text"
          name="user_name"
          autoComplete="name"
          value={form.user_name}
          onChange={handleChange}
          placeholder={t.form.namePlaceholder}
          aria-invalid={!!errors.user_name}
          aria-describedby={errors.user_name ? `${formId}-err-name` : undefined}
        />
        {errors.user_name && (
          <p id={`${formId}-err-name`} className="form-error">
            {errors.user_name}
          </p>
        )}
      </div>

      <div className="form-row">
        <label htmlFor={`${formId}-email`}>{t.form.email}</label>
        <input
          id={`${formId}-email`}
          type="email"
          name="user_email"
          autoComplete="email"
          value={form.user_email}
          onChange={handleChange}
          placeholder={t.form.emailPlaceholder}
          aria-invalid={!!errors.user_email}
          aria-describedby={errors.user_email ? `${formId}-err-email` : undefined}
        />
        {errors.user_email && (
          <p id={`${formId}-err-email`} className="form-error">
            {errors.user_email}
          </p>
        )}
      </div>

      <div className="form-row">
        <label htmlFor={`${formId}-subject`}>{t.form.subject}</label>
        <input
          id={`${formId}-subject`}
          type="text"
          name="user_subject"
          value={form.user_subject}
          onChange={handleChange}
          placeholder={t.form.subjectPlaceholder}
          autoComplete="off"
        />
      </div>

      <div className="form-row">
        <label htmlFor={`${formId}-message`}>{t.form.message}</label>
        <textarea
          id={`${formId}-message`}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t.form.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={`${formId}-msg-hint ${errors.message ? `${formId}-err-msg` : ''}`}
        />
        <p id={`${formId}-msg-hint`} className="form-hint">
          {msgLen} {t.form.charCount}
        </p>
        {errors.message && (
          <p id={`${formId}-err-msg`} className="form-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="form-submit" disabled={loading}>
        {loading ? t.form.sending : t.form.submit}
      </button>
    </form>
  );
};

export default ContactForm;
