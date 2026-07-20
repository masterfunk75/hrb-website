import type { LegalDoc, LegalKey } from '@/types/legal';

// Contenu légal FR. ⚠️ Squelette standard : toutes les mentions « [à confirmer] »
// doivent être complétées par le responsable, et l'ensemble revu par un conseil
// juridique avant mise en ligne. Le téléphone reflète config/site (PHONE).

export const legalFr: Record<LegalKey, LegalDoc> = {
  mentionsLegales: {
    updated: '19 juillet 2026',
    intro:
      'Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), les informations suivantes sont portées à la connaissance des utilisateurs du site.',
    sections: [
      {
        heading: 'Éditeur du site',
        paragraphs: [
          'Le site est édité par [raison sociale — à confirmer], [forme juridique — à confirmer] au capital de [montant — à confirmer].',
          'Siège social : [adresse — à confirmer], Boulogne-Billancourt.',
          'Immatriculation : [SIREN / RCS — à confirmer]. TVA intracommunautaire : [numéro — à confirmer].',
          'Téléphone : +33 1 49 10 05 45. Adresse e-mail : [e-mail de contact — à confirmer].',
        ],
      },
      {
        heading: 'Directeur de la publication',
        paragraphs: [
          'Le directeur de la publication est [nom du responsable — à confirmer].',
        ],
      },
      {
        heading: 'Hébergeur',
        paragraphs: [
          'Le site est hébergé par [nom et adresse de l’hébergeur — à confirmer].',
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        paragraphs: [
          'L’ensemble des contenus présents sur le site (textes, images, logo, charte graphique) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite.',
          'Les photographies illustrant les logements sont [à confirmer] la propriété de l’éditeur ou utilisées avec autorisation.',
        ],
      },
      {
        heading: 'Responsabilité',
        paragraphs: [
          'L’éditeur s’efforce d’assurer l’exactitude des informations diffusées sur le site. Les tarifs, disponibilités et descriptifs sont donnés à titre indicatif et sont susceptibles d’évoluer.',
        ],
      },
      {
        heading: 'Données personnelles et cookies',
        paragraphs: [
          'Le traitement de vos données personnelles est décrit dans la Politique de confidentialité. L’utilisation des cookies est détaillée dans la page Cookies.',
        ],
      },
      {
        heading: 'Droit applicable',
        paragraphs: [
          'Le présent site est soumis au droit français. Tout litige relatif à son utilisation relève de la compétence des tribunaux français.',
        ],
      },
    ],
  },

  confidentialite: {
    updated: '19 juillet 2026',
    intro:
      'La présente politique décrit comment vos données personnelles sont traitées lorsque vous utilisez ce site, conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.',
    sections: [
      {
        heading: 'Responsable du traitement',
        paragraphs: [
          'Le responsable du traitement est [raison sociale — à confirmer], dont les coordonnées figurent dans les Mentions légales.',
        ],
      },
      {
        heading: 'Données collectées',
        paragraphs: [
          'La navigation sur ce site vitrine ne nécessite la création d’aucun compte.',
          'Lorsque le formulaire de demande de devis (Espace Pro) sera actif, il collectera les données que vous fournissez : nom, adresse e-mail, téléphone, dates et détails de votre demande.',
          'Aucune donnée sensible n’est collectée.',
        ],
      },
      {
        heading: 'Finalités et bases légales',
        paragraphs: [
          'Répondre à vos demandes de devis et de réservation (mesures précontractuelles et/ou consentement).',
          'Assurer le bon fonctionnement, la sécurité et l’amélioration du site (intérêt légitime).',
        ],
      },
      {
        heading: 'Destinataires',
        paragraphs: [
          'Vos données sont destinées aux seuls services de [l’établissement — à confirmer] et, le cas échéant, à ses prestataires techniques (hébergement, moteur de réservation). Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.',
        ],
      },
      {
        heading: 'Durée de conservation',
        paragraphs: [
          'Les demandes sont conservées le temps nécessaire à leur traitement, puis [durée — à confirmer] à des fins de preuve et de suivi de la relation commerciale.',
        ],
      },
      {
        heading: 'Vos droits',
        paragraphs: [
          'Vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité de vos données. Pour l’exercer, contactez [e-mail du référent — à confirmer].',
          'Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'L’utilisation des cookies est détaillée dans la page Cookies.',
        ],
      },
    ],
  },

  cookies: {
    updated: '19 juillet 2026',
    intro:
      'Cette page explique quels cookies sont utilisés sur le site et comment les gérer.',
    sections: [
      {
        heading: 'Qu’est-ce qu’un cookie ?',
        paragraphs: [
          'Un cookie est un petit fichier déposé sur votre appareil lors de la visite d’un site, permettant d’en mémoriser certaines informations (par exemple une préférence).',
        ],
      },
      {
        heading: 'Cookies utilisés',
        paragraphs: [
          'À ce jour, le site n’utilise qu’un cookie fonctionnel de préférence de langue, qui mémorise votre choix entre le français et l’anglais. Ce cookie est nécessaire au bon fonctionnement du site et ne requiert pas votre consentement.',
          'Le site n’utilise aucun cookie de mesure d’audience ni de publicité. [À confirmer si un outil de statistiques est ajouté ultérieurement — un bandeau de consentement serait alors requis.]',
        ],
      },
      {
        heading: 'Gérer les cookies',
        paragraphs: [
          'Vous pouvez à tout moment supprimer ou bloquer les cookies via les réglages de votre navigateur. Le blocage du cookie de langue peut réinitialiser votre préférence à chaque visite.',
        ],
      },
    ],
  },

  cgv: {
    updated: '20 juillet 2026',
    intro:
      'Les présentes conditions générales de vente (CGV) régissent les réservations de séjour effectuées en direct auprès de [raison sociale — à confirmer], exploitant l’appart-hôtel Boulogne Résidence Hôtel (« l’établissement »), que ce soit via le site, par téléphone ou sur place. Toute réservation implique l’acceptation sans réserve des présentes CGV.',
    sections: [
      {
        heading: 'Objet',
        paragraphs: [
          'Les présentes CGV définissent les droits et obligations des parties dans le cadre de la réservation de logements (chambres et studios) proposés par l’établissement. Elles s’appliquent à toute réservation en direct et prévalent sur tout autre document, sous réserve des conditions particulières acceptées lors de la réservation.',
        ],
      },
      {
        heading: 'Réservation',
        paragraphs: [
          'Les réservations s’effectuent via le moteur de réservation sécurisé de l’établissement, par téléphone au +33 1 49 10 05 45, ou sur place. La réservation n’est ferme qu’après confirmation adressée par courrier électronique, récapitulant les dates de séjour, la catégorie de logement et le montant.',
          'Le client garantit l’exactitude des informations communiquées lors de la réservation.',
        ],
      },
      {
        heading: 'Tarifs',
        paragraphs: [
          'Les tarifs sont indiqués en euros, toutes taxes comprises, [par logement et par nuit — à confirmer]. La taxe de séjour [est perçue en sus, selon le barème en vigueur — à confirmer].',
          'Les tarifs applicables sont ceux en vigueur au moment de la réservation. L’établissement se réserve le droit de les modifier à tout moment, sans effet sur les réservations déjà confirmées.',
        ],
      },
      {
        heading: 'Paiement',
        paragraphs: [
          'Les modalités de paiement sont précisées lors de la réservation : [empreinte bancaire, acompte ou paiement de tout ou partie du séjour — à confirmer], le solde étant réglé [à l’arrivée ou au départ — à confirmer]. Les moyens de paiement acceptés sont [à confirmer].',
          'Les paiements par carte réalisés via le moteur de réservation sont sécurisés par le prestataire de paiement.',
        ],
      },
      {
        heading: 'Annulation et modification',
        paragraphs: [
          'Les conditions d’annulation et de modification dépendent du tarif choisi et sont indiquées lors de la réservation ainsi que sur la confirmation. À défaut de mention contraire : [délais et frais applicables — à confirmer].',
          'Certains tarifs promotionnels peuvent être non modifiables et non remboursables ; cette caractéristique est indiquée avant la validation de la réservation.',
        ],
      },
      {
        heading: 'Non-présentation (no-show)',
        paragraphs: [
          'En cas de non-présentation du client à la date d’arrivée prévue, sans annulation préalable, [la première nuit ou la totalité du séjour — à confirmer] pourra être facturée et la réservation annulée.',
        ],
      },
      {
        heading: 'Droit de rétractation',
        paragraphs: [
          'Conformément à l’article L221-28, 12° du Code de la consommation, le droit de rétractation ne s’applique pas aux prestations d’hébergement fournies à une date déterminée. Les réservations sont donc régies par les conditions d’annulation ci-dessus, et non par un délai de rétractation de quatorze jours.',
        ],
      },
      {
        heading: 'Arrivée et départ',
        paragraphs: [
          'L’arrivée (check-in) s’effectue à partir de [heure — à confirmer] et le départ (check-out) au plus tard à [heure — à confirmer]. Toute arrivée tardive ou tout départ anticipé doit être signalé à l’établissement et ne donne pas lieu à remboursement.',
        ],
      },
      {
        heading: 'Séjour et règlement intérieur',
        paragraphs: [
          'Le logement est mis à disposition pour le nombre de personnes indiqué lors de la réservation ; sa capacité ne peut être dépassée. [Conditions relatives aux animaux, au tabac et aux nuisances sonores — à confirmer.]',
          'Le client s’engage à user paisiblement du logement et à respecter le règlement intérieur de l’établissement.',
        ],
      },
      {
        heading: 'Responsabilité',
        paragraphs: [
          'La responsabilité de l’établissement ne saurait être engagée en cas d’inexécution due à un cas de force majeure ou au fait d’un tiers. Elle est limitée dans les conditions prévues par la loi.',
        ],
      },
      {
        heading: 'Réclamations et médiation',
        paragraphs: [
          'Toute réclamation relative au séjour doit être adressée à l’établissement à [e-mail — à confirmer] dans les meilleurs délais.',
          'Conformément aux articles L611-1 et suivants du Code de la consommation, le client peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d’un litige : [nom et coordonnées du médiateur — à confirmer].',
        ],
      },
      {
        heading: 'Données personnelles',
        paragraphs: [
          'Les données collectées lors de la réservation sont traitées conformément à la Politique de confidentialité de l’établissement, accessible sur le site.',
        ],
      },
      {
        heading: 'Droit applicable et litiges',
        paragraphs: [
          'Les présentes CGV sont soumises au droit français. En cas de litige, et après tentative de résolution amiable ou de médiation, les tribunaux français sont compétents.',
        ],
      },
    ],
  },
};
