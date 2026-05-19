/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'ru' | 'az';

export const TRANSLATIONS = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact',
      book: 'Book Now',
    },
    hero: {
      subtitle: 'Buta Clinic Aesthetic Specialist',
      title1: 'Natural',
      title2: 'Beauty',
      title3: 'with Professional Care',
      description: 'With over 10 years of experience, Dr. Turkan specializes in advanced dermatology and aesthetic procedures focused on elegant, natural-looking results.',
      bookBtn: 'Book Appointment',
    },
    about: {
      label: 'Meet The Doctor',
      title1: 'Dr. Turkan: A Decade of',
      title2: 'Excellence',
      title3: 'in Dermatology',
      desc1: 'Dr. Turkan graduated from Azerbaijan Medical University between 1999–2005 and has over 10 years of professional experience in dermatology and aesthetic medicine.',
      desc2: 'Currently practicing at Buta Clinic, she is renowned for creating natural aesthetic results and providing deeply personalized patient care.',
      specialties: 'Specialties',
    },
    why: {
      label: 'Excellence',
      title1: 'Why Choose',
      title2: 'Dr. Turkan?',
      items: [
        { title: '10+ Years Experience', desc: 'A decade of refined skill and thousands of successful procedures.' },
        { title: 'Natural-Looking Results', desc: 'Focus on enhancing your unique beauty, never overdoing it.' },
        { title: 'Modern Aesthetic Techniques', desc: 'Using the latest global standards in dermatology and cosmetology.' },
        { title: 'Luxury Clinic Experience', desc: 'Every visit is designed to be a premium, relaxing aesthetic journey.' }
      ]
    },
    services: {
      label: 'Our Expertise',
      title: 'Comprehensive Aesthetic Solutions',
    },
    gallery: {
      label: 'Our Philosophy',
      title: 'Elegant Results',
      subtitle: '"Natural aesthetic results tailored to each patient\'s unique facial features."',
      items: [
        { title: 'Natural Lips', desc: 'Elegant and subtle enhancement.' },
        { title: 'Russian Lips', desc: 'Iconic shape and volume.' },
        { title: 'Botox Treatment', desc: 'Smooth and refined results.' },
        { title: 'Facial Fillers', desc: 'Enhanced contours and lift.' },
      ]
    },
    app: {
      spinTitle: 'Buta',
      spinSubtitle: 'Luxury Clinic Experience',
      expTitle: '10+',
      expSubtitle: 'Years Exp.',
      scroll: 'Scroll',
    },
    testimonials: {
      q1: "Amazing natural results and professional care.",
      q2: "Very comfortable experience with beautiful outcomes.",
    },
    booking: {
      label: 'Appointment',
      title: 'Book Your Consultation',
      desc: 'We focus on personalized care. Leave your details and we will get back to you to confirm your visit.',
      name: 'Full Name',
      phone: 'Phone Number',
      procedure: 'Procedure Interest',
      date: 'Preferred Date',
      submit: 'REQUEST APPOINTMENT',
      sent: 'MESSAGE SENT',
    },
    contact: {
      label: 'Contact Info',
      title: 'Visit Our Clinic',
      phone: 'Phone',
      map: 'View on Google Maps',
    }
  },
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      gallery: 'Галерея',
      contact: 'Контакты',
      book: 'Записаться',
    },
    hero: {
      subtitle: 'Эстетический специалист Buta Clinic',
      title1: 'Естественная',
      title2: 'Красота',
      title3: 'с профессиональным уходом',
      description: 'Имея более чем 10-летний опыт работы, доктор Тюркан специализируется на передовой дерматологии и эстетических процедурах, ориентированных на элегантные, естественные результаты.',
      bookBtn: 'Записаться на прием',
    },
    about: {
      label: 'Познакомьтесь с врачом',
      title1: 'Доктор Тюркан: десятилетие',
      title2: 'мастерства',
      title3: 'в дерматологии',
      desc1: 'Доктор Тюркан окончила Азербайджанский Медицинский Университет в 1999–2005 годах и имеет более 10 лет профессионального опыта в области дерматологии и эстетической медицины.',
      desc2: 'В настоящее время она практикует в клинике Buta Clinic, известна своими естественными эстетическими результатами и глубоко персонализированным уходом за пациентами.',
      specialties: 'Специализации',
    },
    why: {
      label: 'Превосходство',
      title1: 'Почему выбирают',
      title2: 'доктора Тюркан?',
      items: [
        { title: '10+ лет опыта', desc: 'Десятилетие отточенных навыков и тысячи успешных процедур.' },
        { title: 'Естественные результаты', desc: 'Акцент на подчеркивании вашей уникальной красоты.' },
        { title: 'Современные методы', desc: 'Использование последних мировых стандартов в дерматологии.' },
        { title: 'Люксовый сервис', desc: 'Каждый визит — это премиальное и расслабляющее эстетическое путешествие.' }
      ]
    },
    services: {
      label: 'Наш опыт',
      title: 'Комплексные эстетические решения',
    },
    gallery: {
      label: 'Наша философия',
      title: 'Элегантные результаты',
      subtitle: '"Естественные эстетические результаты, адаптированные к уникальным чертам лица каждого пациента."',
      items: [
        { title: 'Натуральные губы', desc: 'Элегантное и тонкое подчеркивание.' },
        { title: 'Russian Lips', desc: 'Культовая форма и объем.' },
        { title: 'Ботокс', desc: 'Гладкие и изысканные результаты.' },
        { title: 'Филлеры для лица', desc: 'Улучшенные контуры и лифтинг.' },
      ]
    },
    app: {
      spinTitle: 'Buta',
      spinSubtitle: 'Люксовый сервис клиники',
      expTitle: '10+',
      expSubtitle: 'Лет опыта',
      scroll: 'Листайте',
    },
    testimonials: {
      q1: "Потрясающие естественные результаты и профессиональный уход.",
      q2: "Очень комфортный опыт с прекрасными результатами.",
    },
    booking: {
      label: 'Запись',
      title: 'Запишитесь на консультацию',
      desc: 'Мы ориентируемся на индивидуальный подход. Оставьте свои данные, и мы свяжемся с вами для подтверждения.',
      name: 'Полное имя',
      phone: 'Номер телефона',
      procedure: 'Интересующая процедура',
      date: 'Желаемая дата',
      submit: 'ОТПРАВИТЬ ЗАЯВКУ',
      sent: 'СООБЩЕНИЕ ОТПРАВЛЕНО',
    },
    contact: {
      label: 'Контактная информация',
      title: 'Посетите нашу клинику',
      phone: 'Телефон',
      map: 'Посмотреть на карте',
    }
  },
  az: {
    nav: {
      about: 'Haqqımızda',
      services: 'Xidmətlər',
      gallery: 'Qalereya',
      contact: 'Əlaqə',
      book: 'Qeydiyyat',
    },
    hero: {
      subtitle: 'Buta Klinikasının Estetik Mütəxəssisi',
      title1: 'Təbii',
      title2: 'Gözəllik',
      title3: 'Peşəkar Qayğı ilə',
      description: '10 ildən artıq təcrübəyə malik olan Dr. Türkan, zərif və təbii görünüşlü nəticələrə yönəlmiş qabaqcıl dermatologiya və estetik prosedurlar üzrə ixtisaslaşmışdır.',
      bookBtn: 'Qəbula yazılın',
    },
    about: {
      label: 'Həkimlə Tanış Olun',
      title1: 'Dr. Türkan: Dermatologiyada',
      title2: 'Mükəmməlliklə',
      title3: 'Dolu On İl',
      desc1: 'Dr. Türkan 1999–2005-ci illərdə Azərbaycan Tibb Universitetini bitirmişdir və dermatologiya və estetik təbabət sahəsində 10 ildən artıq peşəkar təcrübəyə malikdir.',
      desc2: 'Hazırda Buta Klinikasında fəaliyyət göstərir, təbii estetik nəticələri və fərdi pasiyent qayğısı ilə tanınır.',
      specialties: 'İxtisaslar',
    },
    why: {
      label: 'Mükəmməllik',
      title1: 'Niyə',
      title2: 'Dr. Türkanı Seçməli?',
      items: [
        { title: '10+ İllik Təcrübə', desc: 'On illik təkmilləşdirilmiş bacarıq və minlərlə uğurlu prosedur.' },
        { title: 'Təbii Görünüşlü Nəticələr', desc: 'Unikal gözəlliyinizi vurğulamağa fokuslanmışıq.' },
        { title: 'Müasir Estetik Texnikalar', desc: 'Dermatologiyada ən son qlobal standartların tətbiqi.' },
        { title: 'Lüks Klinika Təcrübəsi', desc: 'Hər bir ziyarət premium və rahatladıcı estetik səyahət kimi dizayn edilib.' }
      ]
    },
    services: {
      label: 'Bizim Təcrübəmiz',
      title: 'Hərtərəfli Estetik Həllər',
    },
    gallery: {
      label: 'Fəlsəfəmiz',
      title: 'Zərif Nəticələr',
      subtitle: '"Hər bir pasiyentin unikal üz cizgilərinə uyğunlaşdırılmış təbii estetik nəticələr."',
      items: [
        { title: 'Təbii Dodaqlar', desc: 'Zərif və incə vurğulama.' },
        { title: 'Russian Lips', desc: 'İkonik forma və həcm.' },
        { title: 'Botoks', desc: 'Hamar və zərif nəticələr.' },
        { title: 'Üz Dolğuları', desc: 'Təkmilləşdirilmiş konturlar və liftinq.' },
      ]
    },
    app: {
      spinTitle: 'Buta',
      spinSubtitle: 'Lüks Klinika Təcrübəsi',
      expTitle: '10+',
      expSubtitle: 'İllik Təcrübə',
      scroll: 'Aşağı',
    },
    testimonials: {
      q1: "Möhtəşəm təbii nəticələr və peşəkar qayğı.",
      q2: "Gözəl nəticələrlə çox rahat bir təcrübə.",
    },
    booking: {
      label: 'Qəbul',
      title: 'Məsləhətləşmə üçün Yazılın',
      desc: 'Pərdi qayğıya üstünlük veririk. Məlumatlarınızı qeyd edin, biz sizinlə əlaqə saxlayacağıq.',
      name: 'Tam Adınız',
      phone: 'Telefon Nömrəniz',
      procedure: 'Maraqlandığınız Prosedur',
      date: 'Üstünlük Verdiyiniz Tarix',
      submit: 'MÜRACİƏT ET',
      sent: 'MESAJ GÖNDƏRİLDİ',
    },
    contact: {
      label: 'Əlaqə Məlumatı',
      title: 'Klinikamızı Ziyarət Edin',
      phone: 'Telefon',
      map: 'Xəritədə baxın',
    }
  }
};
