import Link from 'next/link'
import { ReactNode, useState, useEffect } from 'react'
import Subscribe from '@/components/ui/subscribe'
import { useTranslation } from '@/hooks/useTranslation'

type LinkData = {
  href: string
  label: string
}

type Section = {
  title?: string
  links: LinkData[]
}

type ContactInformation = {
  email?: string
  phone?: string
}

type Props = {
  sections: Section[]
  contactInformation?: ContactInformation
  paymentIcons?: ReactNode[]
  className?: string
}

export default function Footer({
  sections,
  contactInformation,
  paymentIcons,
  className = ''
}: Props) {
  const { t } = useTranslation();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className={className}>
        <div className="container">
            <div className="footer-grid">
                <div className="footer-newsletter">
                    <h3>{t('footerNewsletterTitle')}</h3>
                    <p>{t('footerNewsletterText')}</p>
                    <Subscribe />
                </div>

                {sections.map(({ title, links }, i) => (
                    <div key={i} className={`footer-section footer-links-${i + 1}`}>
                        {title && <h4>{title}</h4>}
                        <ul>
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                
                <div className="footer-section footer-contact">
                    <h4>{t('footerContactUs')}</h4>
                     <ul>
                        {contactInformation?.email && (
                            <li>
                                <Link href={`mailto:${contactInformation.email}`}>
                                    {contactInformation.email}
                                </Link>
                            </li>
                        )}
                        {contactInformation?.phone && (
                            <li>
                                <Link href={`tel:${contactInformation.phone}`}>
                                    {contactInformation.phone}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `${t('footerRightsPrefix')}${year}${t('footerRightsSuffix')}`,
                  }}
                />

                {paymentIcons && <div className="payment-icons">{paymentIcons}</div>}
            </div>
        </div>
    </footer>
  )
}