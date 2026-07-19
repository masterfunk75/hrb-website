import type { LegalDoc, LegalKey } from '@/types/legal';

// EN legal content. ⚠️ Standard skeleton: every "[to confirm]" placeholder must
// be completed by the operator, and the whole reviewed by legal counsel before
// going live. Phone mirrors config/site (PHONE).

export const legalEn: Record<LegalKey, LegalDoc> = {
  mentionsLegales: {
    updated: '19 July 2026',
    intro:
      'In accordance with French law No. 2004-575 of 21 June 2004 on confidence in the digital economy (LCEN), the following information is provided to users of this site.',
    sections: [
      {
        heading: 'Site publisher',
        paragraphs: [
          'This site is published by [company name — to confirm], [legal form — to confirm] with share capital of [amount — to confirm].',
          'Registered office: [address — to confirm], Boulogne-Billancourt, France.',
          'Registration: [SIREN / RCS — to confirm]. Intra-community VAT: [number — to confirm].',
          'Phone: +33 1 49 10 05 45. Email: [contact email — to confirm].',
        ],
      },
      {
        heading: 'Publication director',
        paragraphs: [
          'The publication director is [name of the person responsible — to confirm].',
        ],
      },
      {
        heading: 'Hosting provider',
        paragraphs: [
          'This site is hosted by [name and address of the hosting provider — to confirm].',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'All content on this site (text, images, logo, visual identity) is protected by intellectual property law. Any reproduction, representation or distribution, in whole or in part, without prior written authorisation, is prohibited.',
          'The photographs illustrating the accommodation are [to confirm] the property of the publisher or used with permission.',
        ],
      },
      {
        heading: 'Liability',
        paragraphs: [
          'The publisher strives to ensure the accuracy of the information published on the site. Rates, availability and descriptions are provided for guidance only and are subject to change.',
        ],
      },
      {
        heading: 'Personal data and cookies',
        paragraphs: [
          'The processing of your personal data is described in the Privacy Policy. The use of cookies is detailed on the Cookies page.',
        ],
      },
      {
        heading: 'Applicable law',
        paragraphs: [
          'This site is governed by French law. Any dispute relating to its use falls under the jurisdiction of the French courts.',
        ],
      },
    ],
  },

  confidentialite: {
    updated: '19 July 2026',
    intro:
      'This policy describes how your personal data is processed when you use this site, in accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act.',
    sections: [
      {
        heading: 'Data controller',
        paragraphs: [
          'The data controller is [company name — to confirm], whose contact details appear in the Legal notice.',
        ],
      },
      {
        heading: 'Data collected',
        paragraphs: [
          'Browsing this showcase site does not require creating an account.',
          'When the quote request form (Business area) becomes active, it will collect the data you provide: name, email address, phone, dates and details of your request.',
          'No sensitive data is collected.',
        ],
      },
      {
        heading: 'Purposes and legal bases',
        paragraphs: [
          'To respond to your quote and booking requests (pre-contractual measures and/or consent).',
          'To ensure the proper operation, security and improvement of the site (legitimate interest).',
        ],
      },
      {
        heading: 'Recipients',
        paragraphs: [
          'Your data is intended solely for the services of [the establishment — to confirm] and, where applicable, its technical providers (hosting, booking engine). It is never sold or transferred to third parties for commercial purposes.',
        ],
      },
      {
        heading: 'Retention period',
        paragraphs: [
          'Requests are kept for as long as necessary to process them, then [duration — to confirm] for evidentiary purposes and commercial follow-up.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You have the right to access, rectify, erase, object to, restrict and port your data. To exercise these rights, contact [data officer email — to confirm].',
          'You may also lodge a complaint with the French data protection authority, the CNIL (www.cnil.fr).',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: ['The use of cookies is detailed on the Cookies page.'],
      },
    ],
  },

  cookies: {
    updated: '19 July 2026',
    intro:
      'This page explains which cookies are used on the site and how to manage them.',
    sections: [
      {
        heading: 'What is a cookie?',
        paragraphs: [
          'A cookie is a small file placed on your device when you visit a site, allowing it to remember certain information (for example, a preference).',
        ],
      },
      {
        heading: 'Cookies used',
        paragraphs: [
          'To date, the site uses only a functional language-preference cookie, which remembers your choice between French and English. This cookie is necessary for the site to work and does not require your consent.',
          'The site uses no audience-measurement or advertising cookies. [To confirm if an analytics tool is added later — a consent banner would then be required.]',
        ],
      },
      {
        heading: 'Managing cookies',
        paragraphs: [
          'You can delete or block cookies at any time via your browser settings. Blocking the language cookie may reset your preference on each visit.',
        ],
      },
    ],
  },
};
