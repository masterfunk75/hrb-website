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

  cgv: {
    updated: '20 July 2026',
    intro:
      'These terms of sale ("Terms") govern stays booked directly with [company name — to confirm], operator of the Boulogne Résidence Hôtel apart-hotel (the "hotel"), whether via the site, by phone or on site. Any booking implies unreserved acceptance of these Terms.',
    sections: [
      {
        heading: 'Purpose',
        paragraphs: [
          'These Terms set out the rights and obligations of the parties for the booking of accommodation (rooms and studios) offered by the hotel. They apply to any direct booking and prevail over any other document, subject to the particular conditions accepted at the time of booking.',
        ],
      },
      {
        heading: 'Booking',
        paragraphs: [
          'Bookings are made via the hotel’s secure booking engine, by phone on +33 1 49 10 05 45, or on site. A booking is firm only once a confirmation has been sent by email, summarising the stay dates, the accommodation category and the amount.',
          'The guest warrants the accuracy of the information provided at the time of booking.',
        ],
      },
      {
        heading: 'Rates',
        paragraphs: [
          'Rates are shown in euros, all taxes included, [per accommodation and per night — to confirm]. The tourist tax [is charged in addition, per the applicable scale — to confirm].',
          'The rates that apply are those in force at the time of booking. The hotel reserves the right to change them at any time, without affecting bookings already confirmed.',
        ],
      },
      {
        heading: 'Payment',
        paragraphs: [
          'Payment terms are specified at the time of booking: [card guarantee, deposit or payment of all or part of the stay — to confirm], with the balance paid [on arrival or on departure — to confirm]. Accepted means of payment are [to confirm].',
          'Card payments made through the booking engine are secured by the payment provider.',
        ],
      },
      {
        heading: 'Cancellation and amendment',
        paragraphs: [
          'Cancellation and amendment conditions depend on the rate chosen and are shown at the time of booking and on the confirmation. Unless otherwise stated: [applicable deadlines and fees — to confirm].',
          'Some promotional rates may be non-amendable and non-refundable; this is indicated before the booking is validated.',
        ],
      },
      {
        heading: 'No-show',
        paragraphs: [
          'If the guest fails to arrive on the scheduled arrival date without prior cancellation, [the first night or the entire stay — to confirm] may be charged and the booking cancelled.',
        ],
      },
      {
        heading: 'Right of withdrawal',
        paragraphs: [
          'In accordance with Article L221-28, 12° of the French Consumer Code, the right of withdrawal does not apply to accommodation services provided on a specified date. Bookings are therefore governed by the cancellation conditions above, and not by a fourteen-day withdrawal period.',
        ],
      },
      {
        heading: 'Arrival and departure',
        paragraphs: [
          'Check-in is from [time — to confirm] and check-out is by [time — to confirm] at the latest. Any late arrival or early departure must be notified to the hotel and does not give rise to a refund.',
        ],
      },
      {
        heading: 'Stay and house rules',
        paragraphs: [
          'The accommodation is made available for the number of people stated at the time of booking; its capacity may not be exceeded. [Conditions regarding pets, smoking and noise — to confirm.]',
          'The guest undertakes to use the accommodation peacefully and to comply with the hotel’s house rules.',
        ],
      },
      {
        heading: 'Liability',
        paragraphs: [
          'The hotel cannot be held liable for non-performance due to force majeure or the act of a third party. Its liability is limited as provided for by law.',
        ],
      },
      {
        heading: 'Complaints and mediation',
        paragraphs: [
          'Any complaint about the stay must be sent to the hotel at [email — to confirm] as soon as possible.',
          'In accordance with Articles L611-1 et seq. of the French Consumer Code, the guest may use a consumer mediator free of charge to seek the amicable resolution of a dispute: [mediator name and contact details — to confirm].',
        ],
      },
      {
        heading: 'Personal data',
        paragraphs: [
          'Data collected at the time of booking is processed in accordance with the hotel’s Privacy Policy, available on the site.',
        ],
      },
      {
        heading: 'Governing law and disputes',
        paragraphs: [
          'These Terms are governed by French law. In the event of a dispute, and after an attempt at amicable resolution or mediation, the French courts have jurisdiction.',
        ],
      },
    ],
  },
};
