import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { generateWhatsappUrl } from '@/lib/data';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

function ContactForm(): React.ReactElement {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSend = () => {
    const url = generateWhatsappUrl({ name, phone, email });
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('requestCallback') }} />
        <div className="form">
          <div className="form-hero" style={{ backgroundImage: "url('https://i.ibb.co/0RS3Dvhd/f23dfca5-21bc-4bf8-a561-1f012c3e7582.png')" }}></div>
          <h4 dangerouslySetInnerHTML={{ __html: t('formTitle') }} />
          <div className="field">
            <label htmlFor="name-input" dangerouslySetInnerHTML={{ __html: t('name') }} />
            <input id="name-input" className="input" type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder={t('namePh')} />
          </div>
          <div className="field">
            <label htmlFor="phone-input" dangerouslySetInnerHTML={{ __html: t('phone') }} />
            <input id="phone-input" className="input" type="tel" value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} placeholder={t('phonePh')} />
          </div>
          <div className="field">
            <label htmlFor="email-input" dangerouslySetInnerHTML={{ __html: t('email') }} />
            <input id="email-input" className="input" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder={t('emailPh')} />
          </div>
          <button onClick={handleSend} className="btn send book" dangerouslySetInnerHTML={{ __html: t('sendWhats') }} />
          <a
              href={generateWhatsappUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="cta outline whatsapp-direct"
              aria-label="Contact via WhatsApp"
              dangerouslySetInnerHTML={{ __html: t('contactDirectly') }}
            >
            </a>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
