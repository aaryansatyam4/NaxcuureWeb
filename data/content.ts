import { Content } from '../types';
import { productListEn } from './products/en';
import { Product } from '../types';
import { productListEs } from './products/es';
import { productListFr } from './products/fr';
import { productListRu } from './products/ru';


const jobsEn = [
    { 
        id: 'job-01', 
        title: 'Assistant Manager – Regulatory Affairs (DRA)', 
        location: 'Noida', 
        department: 'Regulatory Affairs',
        link: 'https://forms.gle/PnGXXKpRXevrirSj9'
    },
];

const jobsRu = [
    {
        id: 'job-01',
        title: 'Помощник менеджера по регуляторным вопросам (DRA)',
        location: 'Нойда',
        department: 'Регуляторные вопросы',
        link: 'https://forms.gle/PnGXXKpRXevrirSj9'
    },
];

const jobsFr = [
    {
        id: 'job-01',
        title: 'Directeur Adjoint – Affaires Réglementaires (DRA)',
        location: 'Noida',
        department: 'Affaires Réglementaires',
        link: 'https://forms.gle/PnGXXKpRXevrirSj9'
    },
];

const jobsEs = [
    {
        id: 'job-01',
        title: 'Subgerente – Asuntos Regulatorios (DRA)',
        location: 'Noida',
        department: 'Asuntos Regulatorios',
        link: 'https://forms.gle/PnGXXKpRXevrirSj9'
    },
];


export const content: Content = {
  en: {
    nav: { home: 'Home', about: 'About Us', products: 'Products', quality: 'Quality', career: 'Career' },
    footer:{footer1:'Formerly known as Naxcure Healthcare Pvt Ltd.',footer2:'Committed to advancing health and well-being globally.'},
    home: {
      heroTitle: 'Leading Pharmaceutical Excellence',
      heroSubtitle: 'Committed to improving global health through innovative medicines and quality healthcare solutions.',
      announcement: {
          title: 'Join NAXCUURE at CPHI India 2025!',
          text: 'Visit us at CPHI India – Hall RH-B, Stall RH.N18 to explore Naxcuure’s innovation in Pharmaceuticals, Nutraceuticals & Herbals.',
      },
      section1Title: 'Our Commitment to Excellence',
      section1Text: 'Naxcuure Pharma is a next-generation pharmaceutical company with a global presence. Naxcuure is dedicated to offering healthcare professionals and patients premium-quality, affordable specialty products and healthcare solutions designed to help patients lead healthier and happier lives.',
      section1P2: 'The range of Naxcuure products includes branded generic pharmaceuticals, nutraceuticals, and OTC products. Naxcuure is driven by an experienced management team with deep knowledge of the global market and longstanding relationships with key industry leaders and healthcare professionals. This expertise enables Naxcuure to identify the unmet therapeutic needs of the region and address them with healthcare solutions sourced from top manufacturers that maintain stringent quality and regulatory standards as per market requirements.',
      section2Title: 'Global Presence',
      section2Text: 'Naxcuure stands proudly on the global stage, delivering high-quality healthcare solutions across diverse markets. Our international reach reflects our commitment to innovation, excellence, and building lasting partnerships that advance global well-being.',
      section3Title: 'Our Purpose',
      section3Text: 'At Naxcuure, we envision a world where everyone enjoys a healthy and happy life — free from suffering and physical pain. Our mission is to make high-quality medicines accessible to all, empowering people to live longer, healthier, and more active lives. With this commitment, we continuously expand our presence across global markets to bring better health within everyone’s reach.',
      contactSection: {
        title: 'Get in Touch',
        subtitle: 'We are here to answer your questions. Reach out to us and our team will get back to you promptly.',
        address: 'Survey No. 889/1, At Post Jhulasan, Chadasana-Jhulasan Road, B/H. Chadasana ONGC, Ta. Kadi, Dist. Mehsana-382705, Gujarat, India.',
        phone: '+91 9560797538',
        email: 'info@naxcuure.com',
        formName: 'Full Name',
        formEmail: 'Email Address',
        formMessage: 'Your Message',
        formSubmit: 'Send Message',
      }
    },
    about: {
      title: 'About Naxcuure',
      journeyTitle: 'Our Journey',
      cultureTitle: 'Our Culture',
      p1: 'Naxcuure is a progressive healthcare company committed to transforming lives through innovation, science, and care. We focus on developing high-quality Pharmaceutical, Nutraceutical, and Herbal formulations that promote better health and enhance everyday living.',
      p2: 'Driven by a passion for research and excellence, our teams work tirelessly to ensure every product meets the highest standards of quality, safety, and efficacy. From concept to creation, innovation remains at the heart of everything we do.',
      p3: 'At Naxcuure, we believe good health is the foundation of a fulfilling life. With this belief, we continue to expand our global presence, building trust and delivering solutions that empower people to live healthier, happier, and more active lives.',
      missionTitle: 'Our Mission',
      missionText: 'Our mission is healthy and happy life for everyone. At Naxcuure, we dream of people all over the world living without suffering and physical pain. We have a clear goal – to provide access for absolutely everyone to the best medicines that enable people to live longer and maintain healthier and more active lifestyles. And in order to achieve it, our company is constantly striving to significantly expand the geography of its presence in the global pharmaceutical market.',
      visionTitle: 'Our Vision',
      visionText: 'Our Vision is healthy and happy life for everyone. At Naxcuure, we dream of people all over the world living without suffering and physical pain. We have a clear goal – to provide access for absolutely everyone to the best medicines that enable people to live longer and maintain healthier and more active lifestyles. And in order to achieve it, our company is constantly striving to significantly expand the geography of its presence in the global pharmaceutical market.',
      valuesTitle: 'Our Core Values',
     values: [
  { 
    title: 'Excellence', 
    text: 'We strive for uncompromising quality in every product and process, ensuring trust and reliability in all that we deliver.' 
  },
  { 
    title: 'Innovation', 
    text: 'We embrace science and creativity to develop advanced healthcare solutions that enhance well-being and transform lives.' 
  },
  { 
    title: 'Commitment', 
    text: 'We are dedicated to improving global health by expanding access to safe, effective, and affordable medicines.' 
  },
  { 
    title: 'Care', 
    text: 'We act with compassion and responsibility, placing people’s health and happiness at the center of everything we do.' 
  }
]

    },
    products: {
      title: 'Our Product Portfolio',
      intro: 'We offer a diverse and robust portfolio of products across key therapeutic areas, all manufactured to the highest standards of quality, safety, and efficacy.',
      searchPlaceholder: 'Search by product name...',
      filterAll: 'All Therapeutic Areas',
      noResults: 'No products found that match your criteria.',
      backButton: 'Back to Products',
      productDetails: {
        form: 'Pharmaceutical Form',
        substance: 'Active Substance',
        composition: 'Composition',
        indications: 'Indications for Use',
      },
      productList: productListEn,
    },
   quality: {
  title: 'Commitment to Unmatched Quality',
  stringentStandardsTitle: 'Stringent Standards',
  patientSafetyTitle: 'Patient Safety',
  certificationsTitle: 'Certifications and compliances',
  patientSafetyText: 'Our ultimate measure of quality, ensuring every product is safe and effective.',
  certificationsText: 'We uphold global quality standards, recognized across WHO-GMP, EU-GMP, PICS, Uzbekistan, Yemen, NAFDAC, Kenya, Sudan, and Cambodia, reflecting our commitment to excellence and trust worldwide.',
  p1: 'At Naxcuure, quality is not just a process — it is our philosophy. Every stage of our work, from research to manufacturing, is guided by uncompromising standards to ensure that every product we deliver is safe, effective, and dependable.',
  p2: 'Our world-class manufacturing facilities operate in strict compliance with cGMP and other international standards. Regular audits and continuous advancements in technology reinforce our promise of excellence and reliability.',
  p3: 'We maintain end-to-end control of our quality ecosystem — from the careful selection of raw materials to precise manufacturing, testing, packaging, and distribution. For Naxcuure, patient well-being defines the true measure of quality.',
  commitmentTitle: 'Our Quality Promise',
  commitmentText: 'Every product we create carries the assurance of precision, purity, and performance. We are committed to delivering consistent quality across all formulations, ensuring trust and safety in every dose.',
  section2Title: 'Driven by Advanced Quality Systems',
  section2Text: 'Our integrated Quality Management System (QMS) leverages advanced analytical tools and data-driven insights to ensure excellence at every stage. This proactive approach enables Naxcuure to maintain the highest global standards while continually innovating for better health outcomes.'
}
,
    career: {
  title: 'Build Your Future with Naxcuure',
  heroSubtitle: 'Be part of a purpose-driven team shaping the future of global healthcare.',
  introTitle: 'Why Join Naxcuure?',
  introText: 'At Naxcuure, we believe that people are the heart of our success. We foster a culture built on innovation, collaboration, and integrity — where every individual is empowered to learn, lead, and make a difference. Together, we’re advancing healthcare and improving lives across the world.',
  benefitsTitle: 'Life at Naxcuure',
  benefits: [
      'Rewarding Career Growth Opportunities',
      'Comprehensive Health and Wellness Support',
      'Continuous Learning and Skill Development',
      'Inclusive, Supportive, and Collaborative Work Culture',
      'Recognition for Excellence and Innovation',
      'Opportunities to Contribute to Global Healthcare Impact',
  ],
  openingsTitle: 'Join Our Team',
  openingsButton: 'Explore Opportunities',
  jobs: jobsEn,
  form: {
    title: 'Apply for',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    coverLetter: 'Cover Letter',
    resume: 'Upload Resume',
    resumePlaceholder: 'No file chosen',
    submit: 'Submit Application',
    cancel: 'Cancel',
  }
}
,
    contact: {
      title: 'Contact Us',
      p1: 'We are here to answer your questions. Reach out to us and our team will get back to you promptly.',
      address: 'Survey No. 889/1, At Post Jhulasan, Chadasana-Jhulasan Road, B/H. Chadasana ONGC, Ta. Kadi, Dist. Mehsana-382705, Gujarat, India.',
      phone: '+91 9560797538',
      email: 'info@naxcuure.com',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formMessage: 'Your Message',
      formSubmit: 'Send Message',
      formSuccess: 'Thank you for your message. We will get back to you shortly.',
      formError: 'Something went wrong. Please try again.',
    }
  },
  ru: {
        nav: {
            home: "Главная",
            about: "О нас",
            products: "Продукты",
            quality: "Качество",
            career: "Карьера"
        },
        footer: {
  footer1: 'Ранее известная как Naxcure Healthcare Pvt Ltd.',
  footer2: 'Посвящена улучшению здоровья и благополучия во всем мире.'
},

        home: {
            heroTitle: "Лидерство в фармацевтическом превосходстве",
            heroSubtitle: "Стремимся улучшать глобальное здоровье с помощью инновационных лекарств и качественных решений в области здравоохранения.",
            announcement: {
                title: "Присоединяйтесь к NAXCUURE на CPHI India 2025!",
                text: "Посетите нас на CPHI India – Зал RH-B, Стенд RH.N18, чтобы ознакомиться с инновациями Naxcuure в области фармацевтики, нутрицевтики и фитопрепаратов."
            },
            section1Title: "Наше стремление к совершенству",
            section1Text: "Naxcuure Pharma — это фармацевтическая компания нового поколения с глобальным присутствием. Naxcuure стремится предлагать медицинским работникам и пациентам высококачественные, доступные специализированные продукты и решения в области здравоохранения, разработанные, чтобы помочь пациентам вести более здоровый и счастливый образ жизни.",
            section1P2: "Ассортимент продукции Naxcuure включает фирменные дженерики, нутрицевтики и безрецептурные препараты. Naxcuure управляется опытной командой менеджеров с глубоким знанием мирового рынка и давними связями с ключевыми лидерами отрасли и медицинскими работниками. Этот опыт позволяет Naxcuure выявлять неудовлетворенные терапевтические потребности региона и удовлетворять их с помощью решений в области здравоохранения, полученных от ведущих производителей, которые поддерживают строгие стандарты качества и регулирования в соответствии с требованиями рынка.",
            section2Title: "Глобальное присутствие",
            section2Text: "Naxcuure гордо стоит на мировой арене, поставляя высококачественные решения в области здравоохранения на различные рынки. Наш международный охват отражает нашу приверженность инновациям, совершенству и построению долгосрочных партнерств, способствующих глобальному благополучию.",
            section3Title: "Наша Цель",
            section3Text: "В Naxcuure мы видим мир, в котором каждый наслаждается здоровой и счастливой жизнью — свободной от страданий и физической боли. Наша миссия — сделать высококачественные лекарства доступными для всех, давая людям возможность жить дольше, здоровее и активнее. С этой приверженностью мы постоянно расширяем наше присутствие на мировых рынках, чтобы сделать лучшее здоровье доступным для каждого.",
            contactSection: {
                title: "Связаться с нами",
                subtitle: "Мы здесь, чтобы ответить на ваши вопросы. Свяжитесь с нами, и наша команда оперативно ответит вам.",
                address: "Survey No. 889/1, At Post Jhulasan, Chadasana-Jhulasan Road, B/H. Chadasana ONGC, Ta. Kadi, Dist. Mehsana-382705, Gujarat, India.",
                phone: "+91 9560797538",
                email: "info@naxcuure.com",
                formName: "Полное Имя",
                formEmail: "Адрес Электронной Почты",
                formMessage: "Ваше Сообщение",
                formSubmit: "Отправить Сообщение"
            }
        },
        about: {
            title: "О Naxcuure",
            journeyTitle: "Наш путь",
            cultureTitle: "Наша культура",
            p1: "Naxcuure — это прогрессивная компания в сфере здравоохранения, приверженная преобразованию жизни с помощью инноваций, науки и заботы. Мы сосредоточены на разработке высококачественных фармацевтических, нутрицевтических и растительных формул, которые способствуют улучшению здоровья и повышают качество повседневной жизни.",
            p2: "Движимые страстью к исследованиям и совершенству, наши команды неустанно работают, чтобы гарантировать, что каждый продукт соответствует самым высоким стандартам качества, безопасности и эффективности. От концепции до создания, инновации остаются в основе всего, что мы делаем.",
            p3: "В Naxcuure мы верим, что хорошее здоровье — это основа полноценной жизни. С этой верой мы продолжаем расширять наше глобальное присутствие, укрепляя доверие и предлагая решения, которые дают людям возможность жить более здоровой, счастливой и активной жизнью.",
            missionTitle: "Наша Миссия",
            missionText: "Наша миссия – здоровая и счастливая жизнь для каждого. В Naxcuure мы мечтаем о том, чтобы люди во всем мире жили без страданий и физической боли. У нас есть четкая цель – предоставить абсолютно каждому доступ к лучшим лекарствам, которые позволяют людям жить дольше и поддерживать более здоровый и активный образ жизни. И для достижения этой цели наша компания постоянно стремится значительно расширить географию своего присутствия на мировом фармацевтическом рынке.",
            visionTitle: "Наше Видение",
            visionText: "Наше Видение – здоровая и счастливая жизнь для каждого. В Naxcuure мы мечтаем о том, чтобы люди во всем мире жили без страданий и физической боли. У нас есть четкая цель – предоставить абсолютно каждому доступ к лучшим лекарствам, которые позволяют людям жить дольше и поддерживать более здоровый и активный образ жизни. И для достижения этой цели наша компания постоянно стремится значительно расширить географию своего присутствия на мировом фармацевтическом рынке.",
            valuesTitle: "Наши Основные Ценности",
            values: [
                {
                    title: "Совершенство",
                    text: "Мы стремимся к бескомпромиссному качеству в каждом продукте и процессе, обеспечивая доверие и надежность во всем, что мы поставляем."
                },
                {
                    title: "Инновации",
                    text: "Мы используем науку и творчество для разработки передовых решений в области здравоохранения, которые улучшают благополучие и преображают жизнь."
                },
                {
                    title: "Приверженность",
                    text: "Мы нацелены на улучшение глобального здоровья путем расширения доступа к безопасным, эффективным и доступным лекарствам."
                },
                {
                    title: "Забота",
                    text: "Мы действуем с состраданием и ответственностью, ставя здоровье и счастье людей в центр всего, что мы делаем."
                }
            ]
        },
        products: {
            title: "Наш Портфель Продуктов",
            intro: "Мы предлагаем разнообразный и надежный портфель продуктов в ключевых терапевтических областях, все из которых производятся в соответствии с высочайшими стандартами качества, безопасности и эффективности.",
            searchPlaceholder: "Поиск по названию продукта...",
            filterAll: "Все Терапевтические Области",
            noResults: "Продукты, соответствующие вашим критериям, не найдены.",
            backButton: "Назад к Продуктам",
            productDetails: {
                form: "Фармацевтическая Форма",
                substance: "Активное Вещество",
                composition: "Состав",
                indications: "Показания к Применению"
            },
            productList: productListRu
        },
        quality: {
            title: "Приверженность Непревзойденному Качеству",
            stringentStandardsTitle: "Строгие стандарты",
            patientSafetyTitle: "Безопасность пациентов",
            certificationsTitle: "Сертификаты и соответствие",
            patientSafetyText: "Наша высшая мера качества, гарантирующая, что каждый продукт безопасен и эффективен.",
            certificationsText: "Мы поддерживаем мировые стандарты качества, признанные в WHO-GMP, EU-GMP, PICS, Узбекистане, Йемене, NAFDAC, Кении, Судане и Камбодже, что отражает наше стремление к совершенству и доверию во всем мире.",
            p1: "В Naxcuure качество — это не просто процесс, это наша философия. Каждый этап нашей работы, от исследований до производства, руководствуется бескомпромиссными стандартами, чтобы гарантировать, что каждый продукт, который мы поставляем, безопасен, эффективен и надежен.",
            p2: "Наши производственные мощности мирового класса работают в строгом соответствии с cGMP и другими международными стандартами. Регулярные аудиты и постоянное совершенствование технологий укрепляют наше обещание превосходства и надежности.",
            p3: "Мы поддерживаем сквозной контроль нашей экосистемы качества — от тщательного отбора сырья до точного производства, тестирования, упаковки и распространения. Для Naxcuure благополучие пациентов определяет истинную меру качества.",
            commitmentTitle: "Наше Обещание Качества",
            commitmentText: "Каждый продукт, который мы создаем, несет гарантию точности, чистоты и эффективности. Мы стремимся обеспечить стабильное качество всех составов, гарантируя доверие и безопасность в каждой дозе.",
            section2Title: "Обусловлено Передовыми Системами Качества",
            section2Text: "Наша интегрированная Система Менеджмента Качества (QMS) использует передовые аналитические инструменты и данные для обеспечения превосходства на каждом этапе. Этот проактивный подход позволяет Naxcuure поддерживать самые высокие мировые стандарты, постоянно внедряя инновации для улучшения результатов в области здравоохранения."
        },
        career: {
            title: "Стройте Свое Будущее с Naxcuure",
            heroSubtitle: "Станьте частью целеустремленной команды, формирующей будущее глобального здравоохранения.",
            introTitle: "Почему стоит присоединиться к Naxcuure?",
            introText: "В Naxcuure мы верим, что люди — это сердце нашего успеха. Мы развиваем культуру, основанную на инновациях, сотрудничестве и честности, где каждый человек имеет возможность учиться, руководить и влиять на ситуацию. Вместе мы продвигаем здравоохранение и улучшаем жизнь людей по всему миру.",
            benefitsTitle: "Жизнь в Naxcuure",
            benefits: [
                "Перспективы Карьерного Роста",
                "Комплексная Поддержка Здоровья и Благополучия",
                "Непрерывное Обучение и Развитие Навыков",
                "Инклюзивная, Поддерживающая и Совместная Рабочая Культура",
                "Признание За Превосходство и Инновации",
                "Возможности Внести Вклад в Глобальное Здравоохранение"
            ],
            openingsTitle: "Присоединяйтесь к Нашей Команде",
            openingsButton: "Изучить Вакансии",
            jobs: jobsRu,
            form: {
                title: "Подать Заявку на",
                name: "Полное Имя",
                email: "Адрес Электронной Почты",
                phone: "Номер Телефона",
                coverLetter: "Сопроводительное Письмо",
                resume: "Загрузить Резюме",
                resumePlaceholder: "Файл не выбран",
                submit: "Отправить Заявку",
                cancel: "Отмена"
            }
        },
        contact: {
            title: "Связаться с Нами",
            p1: "Мы здесь, чтобы ответить на ваши вопросы. Свяжитесь с нами, и наша команда оперативно ответит вам.",
            address: "Survey No. 889/1, At Post Jhulasan, Chadasana-Jhulasan Road, B/H. Chadasana ONGC, Ta. Kadi, Dist. Mehsana-382705, Gujarat, India.",
            phone: "+91 9560797538",
            email: "info@naxcuure.com",
            formName: "Полное Имя",
            formEmail: "Адрес Электронной Почты",
            formMessage: "Ваше Сообщение",
            formSubmit: "Отправить Сообщение",
            formSuccess: "Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.",
            formError: "Что-то пошло не так. Пожалуйста, попробуйте еще раз.",
        }
    },
fr: {
        nav: {
            home: "Accueil",
            about: "À Propos",
            products: "Produits",
            quality: "Qualité",
            career: "Carrières"
        },
        footer: {
  footer1: 'Anciennement connue sous le nom de Naxcure Healthcare Pvt Ltd.',
  footer2: 'Engagée à améliorer la santé et le bien-être dans le monde entier.'
},

        home: {
            heroTitle: "Leader de l'Excellence Pharmaceutique",
            heroSubtitle: "Engagés à améliorer la santé mondiale grâce à des médicaments innovants et des solutions de soins de santé de qualité.",
            announcement: {
                title: "Rejoignez NAXCUURE au CPHI India 2025 !",
                text: "Venez nous rendre visite au CPHI India – Hall RH-B, Stand RH.N18 pour découvrir les innovations de Naxcuure dans les domaines Pharmaceutique, Nutraceutique et Herbal."
            },
            section1Title: "Notre Engagement envers l'Excellence",
            section1Text: "Naxcuure Pharma est une entreprise pharmaceutique de nouvelle génération avec une présence mondiale. Naxcuure se consacre à offrir aux professionnels de la santé et aux patients des produits de spécialité et des solutions de soins de santé de qualité supérieure et abordables, conçus pour aider les patients à mener une vie plus saine et plus heureuse.",
            section1P2: "La gamme de produits Naxcuure comprend des produits pharmaceutiques génériques de marque, des nutraceutiques et des produits en vente libre (OTC). Naxcuure est dirigée par une équipe de direction expérimentée, possédant une connaissance approfondie du marché mondial et des relations de longue date avec des leaders clés de l'industrie et des professionnels de la santé. Cette expertise permet à Naxcuure d'identifier les besoins thérapeutiques non satisfaits de la région et d'y répondre avec des solutions de santé provenant des meilleurs fabricants qui maintiennent des normes de qualité et réglementaires rigoureuses, conformes aux exigences du marché.",
            section2Title: "Présence Mondiale",
            section2Text: "Naxcuure se dresse fièrement sur la scène mondiale, fournissant des solutions de soins de santé de haute qualité sur divers marchés. Notre portée internationale reflète notre engagement envers l'innovation, l'excellence et la construction de partenariats durables qui font progresser le bien-être mondial.",
            section3Title: "Notre Objectif",
            section3Text: "Chez Naxcuure, nous imaginons un monde où chacun jouit d'une vie saine et heureuse — libre de souffrance et de douleur physique. Notre mission est de rendre les médicaments de haute qualité accessibles à tous, donnant aux gens les moyens de vivre plus longtemps, en meilleure santé et de manière plus active. Forts de cet engagement, nous élargissons continuellement notre présence sur les marchés mondiaux pour mettre une meilleure santé à la portée de tous.",
            contactSection: {
                title: "Nous Contacter",
                subtitle: "Nous sommes là pour répondre à vos questions. Contactez-nous et notre équipe vous répondra rapidement.",
                address: "Survey No. 889/1, At Post Jhulasan, Chadasana-Jhulasan Road, B/H. Chadasana ONGC, Ta. Kadi, Dist. Mehsana-382705, Gujarat, India.",
                phone: "+91 9560797538",
                email: "info@naxcuure.com",
                formName: "Nom Complet",
                formEmail: "Adresse E-mail",
                formMessage: "Votre Message",
                formSubmit: "Envoyer Message"
            }
        },
        about: {
            title: "À Propos de Naxcuure",
            journeyTitle: "Notre parcours",
            cultureTitle: "Notre culture",
            p1: "Naxcuure est une entreprise de soins de santé progressiste engagée à transformer des vies par l'innovation, la science et le soin. Nous nous concentrons sur le développement de formulations Pharmaceutiques, Nutraceutiques et Herbales de haute qualité qui favorisent une meilleure santé et améliorent la vie quotidienne.",
            p2: "Animées par une passion pour la recherche et l'excellence, nos équipes travaillent sans relâche pour garantir que chaque produit répond aux normes les plus élevées de qualité, de sécurité et d'efficacité. Du concept à la création, l'innovation reste au cœur de tout ce que nous faisons.",
            p3: "Chez Naxcuure, nous croyons qu'une bonne santé est le fondement d'une vie épanouie. Forts de cette conviction, nous continuons d'étendre notre présence mondiale, en instaurant la confiance et en fournissant des solutions qui permettent aux gens de vivre une vie plus saine, plus heureuse et plus active.",
            missionTitle: "Notre Mission",
            missionText: "Notre mission est une vie saine et heureuse pour tous. Chez Naxcuure, nous rêvons de personnes partout dans le monde vivant sans souffrance ni douleur physique. Nous avons un objectif clair : fournir l'accès absolu à tous aux meilleurs médicaments qui permettent aux gens de vivre plus longtemps et de maintenir un style de vie plus sain et plus actif. Et pour y parvenir, notre entreprise s'efforce constamment d'étendre considérablement la géographie de sa présence sur le marché pharmaceutique mondial.",
            visionTitle: "Notre Vision",
            visionText: "Notre Vision est une vie saine et heureuse pour tous. Chez Naxcuure, nous rêvons de personnes partout dans le monde vivant sans souffrance ni douleur physique. Nous avons un objectif clair : fournir l'accès absolu à tous aux meilleurs médicaments qui permettent aux gens de vivre plus longtemps et de maintenir un style de vie plus sain et plus actif. Et pour y parvenir, notre entreprise s'efforce constamment d'étendre considérablement la géographie de sa présence sur le marché pharmaceutique mondial.",
            valuesTitle: "Nos Valeurs Fondamentales",
            values: [
                {
                    title: "Excellence",
                    text: "Nous visons une qualité sans compromis dans chaque produit et processus, assurant la confiance et la fiabilité dans tout ce que nous livrons."
                },
                {
                    title: "Innovation",
                    text: "Nous embrassons la science et la créativité pour développer des solutions de soins de santé avancées qui améliorent le bien-être et transforment des vies."
                },
                {
                    title: "Engagement",
                    text: "Nous nous engageons à améliorer la santé mondiale en élargissant l'accès à des médicaments sûrs, efficaces et abordables."
                },
                {
                    title: "Soin",
                    text: "Nous agissons avec compassion et responsabilité, plaçant la santé et le bonheur des personnes au centre de tout ce que nous faisons."
                }
            ]
        },
        products: {
            title: "Notre Portefeuille de Produits",
            intro: "Nous offrons un portefeuille diversifié et robuste de produits à travers des domaines thérapeutiques clés, tous fabriqués selon les normes les plus élevées de qualité, de sécurité et d'efficacité.",
            searchPlaceholder: "Rechercher par nom de produit...",
            filterAll: "Tous les Domaines Thérapeutiques",
            noResults: "Aucun produit trouvé correspondant à vos critères.",
            backButton: "Retour aux Produits",
            productDetails: {
                form: "Forme Pharmaceutique",
                substance: "Substance Active",
                composition: "Composition",
                indications: "Indications d'Utilisation"
            },
            productList: productListFr
        },
        quality: {
            title: "Engagement envers une Qualité Inégalée",
            stringentStandardsTitle: "Normes strictes",
            patientSafetyTitle: "Sécurité des patients",
            certificationsTitle: "Certifications et conformités",
            patientSafetyText: "Notre mesure ultime de la qualité, garantissant que chaque produit est sûr et efficace.",
            certificationsText: "Nous respectons les normes de qualité mondiales, reconnues par WHO-GMP, EU-GMP, PICS, l'Ouzbékistan, le Yémen, NAFDAC, le Kenya, le Soudan et le Cambodge, reflétant notre engagement envers l'excellence et la confiance dans le monde entier.",
            p1: "Chez Naxcuure, la qualité n'est pas seulement un processus, c'est notre philosophie. Chaque étape de notre travail, de la recherche à la fabrication, est guidée par des normes sans compromis pour garantir que chaque produit que nous livrons est sûr, efficace et fiable.",
            p2: "Nos installations de fabrication de classe mondiale fonctionnent en stricte conformité avec les BPFc (cGMP) et d'autres normes internationales. Des audits réguliers et des avancées technologiques continues renforcent notre promesse d'excellence et de fiabilité.",
            p3: "Nous maintenons un contrôle de bout en bout de notre écosystème de qualité — de la sélection minutieuse des matières premières à la fabrication précise, aux tests, à l'emballage et à la distribution. Pour Naxcuure, le bien-être du patient définit la véritable mesure de la qualité.",
            commitmentTitle: "Notre Promesse de Qualité",
            commitmentText: "Chaque produit que nous créons porte l'assurance de la précision, de la pureté et de la performance. Nous nous engageons à fournir une qualité constante pour toutes les formulations, assurant confiance et sécurité à chaque dose.",
            section2Title: "Dirigé par des Systèmes de Qualité Avancés",
            section2Text: "Notre Système de Gestion de la Qualité (SMQ) intégré utilise des outils analytiques avancés et des informations basées sur des données pour garantir l'excellence à chaque étape. Cette approche proactive permet à Naxcuure de maintenir les normes mondiales les plus élevées tout en innovant continuellement pour de meilleurs résultats en matière de santé."
        },
        career: {
            title: "Construisez Votre Avenir avec Naxcuure",
            heroSubtitle: "Faites partie d'une équipe axée sur un objectif qui façonne l'avenir des soins de santé mondiaux.",
            introTitle: "Pourquoi Rejoindre Naxcuure ?",
            introText: "Chez Naxcuure, nous favorisons une culture bâtie sur l'innovation, la collaboration et l'intégrité — où chaque individu est habilité à apprendre, à diriger et à faire la différence. Ensemble, nous faisons progresser les soins de santé et améliorons des vies partout dans le monde.",
            benefitsTitle: "La Vie chez Naxcuure",
            benefits: [
                "Opportunités de Croissance de Carrière Récompensantes",
                "Soutien Complet en Matière de Santé et de Bien-être",
                "Apprentissage Continu et Développement des Compétences",
                "Culture de Travail Inclusive, Solidaire et Collaborative",
                "Reconnaissance de l'Excellence et de l'Innovation",
                "Opportunités de Contribuer à l'Impact Global sur les Soins de Santé"
            ],
            openingsTitle: "Rejoignez Notre Équipe",
            openingsButton: "Explorer les Opportunités",
            jobs: jobsFr,
            form: {
                title: "Postuler pour",
                name: "Nom Complet",
                email: "Adresse E-mail",
                phone: "Numéro de Téléphone",
                coverLetter: "Lettre de Motivation",
                resume: "Télécharger CV",
                resumePlaceholder: "Aucun fichier choisi",
                submit: "Soumettre Candidature",
                cancel: "Annuler"
            }
        },
        contact: {
            title: "Nous Contacter",
            p1: "Nous sommes là pour répondre à vos questions. Contactez-nous et notre équipe vous répondra rapidement.",
            address: "Survey No. 889/1, At Post Jhulasan, Chadasana-Jhulasan Road, B/H. Chadasana ONGC, Ta. Kadi, Dist. Mehsana-382705, Gujarat, India.",
            phone: "+91 9560797538",
            email: "info@naxcuure.com",
            formName: "Nom Complet",
            formEmail: "Adresse E-mail",
            formMessage: "Votre Message",
            formSubmit: "Envoyer Message",
            formSuccess: "Merci pour votre message. Nous vous répondrons sous peu.",
            formError: "Une erreur s'est produite. Veuillez réessayer.",
        },
    
    },
  es: {
        nav: {
            home: "Inicio",
            about: "Nosotros",
            products: "Productos",
            quality: "Calidad",
            career: "Carrera"
        },
        footer: {
  footer1: 'Anteriormente conocida como Naxcure Healthcare Pvt Ltd.',
  footer2: 'Comprometidos con mejorar la salud y el bienestar a nivel mundial.'
},

        home: {
            heroTitle: "Liderando la Excelencia Farmacéutica",
            heroSubtitle: "Comprometidos con la mejora de la salud global a través de medicinas innovadoras y soluciones sanitarias de calidad.",
            announcement: {
                title: "¡Únase a NAXCUURE en CPHI India 2025!",
                text: "Visítenos en CPHI India – Pabellón RH-B, Stand RH.N18 para explorar la innovación de Naxcuure en Productos Farmacéuticos, Nutracéuticos y Herbales."
            },
            section1Title: "Nuestro Compromiso con la Excelencia",
            section1Text: "Naxcuure Pharma es una compañía farmacéutica de próxima generación con presencia global. Naxcuure se dedica a ofrecer a los profesionales de la salud y a los pacientes productos especializados y soluciones sanitarias asequibles y de primera calidad, diseñadas para ayudar a los pacientes a llevar vidas más sanas y felices.",
            section1P2: "La gama de productos Naxcuure incluye productos farmacéuticos genéricos de marca, nutracéuticos y productos de venta libre (OTC). Naxcuure está impulsada por un equipo directivo experimentado con profundo conocimiento del mercado global y relaciones de larga data con líderes clave de la industria y profesionales de la salud. Esta experiencia permite a Naxcuure identificar las necesidades terapéuticas no satisfechas de la región y abordarlas con soluciones sanitarias procedentes de los principales fabricantes que mantienen estrictos estándares regulatorios y de calidad según los requisitos del mercado.",
            section2Title: "Presencia Global",
            section2Text: "Naxcuure se posiciona con orgullo en el escenario global, ofreciendo soluciones sanitarias de alta calidad en diversos mercados. Nuestro alcance internacional refleja nuestro compromiso con la innovación, la excelencia y la construcción de alianzas duraderas que promueven el bienestar global.",
            section3Title: "Nuestro Propósito",
            section3Text: "En Naxcuure, visualizamos un mundo donde todos disfruten de una vida sana y feliz, libre de sufrimiento y dolor físico. Nuestra misión es hacer que los medicamentos de alta calidad sean accesibles para todos, empoderando a las personas para que vivan vidas más largas, más sanas y más activas. Con este compromiso, expandimos continuamente nuestra presencia en los mercados globales para poner una mejor salud al alcance de todos.",
            contactSection: {
                title: "Póngase en Contacto",
                subtitle: "Estamos aquí para responder a sus preguntas. Contáctenos y nuestro equipo se comunicará con usted de inmediato.",
                address: "Survey No. 889/1, At Post Jhulasan, Chadasana-Jhulasan Road, B/H. Chadasana ONGC, Ta. Kadi, Dist. Mehsana-382705, Gujarat, India.",
                phone: "+91 9560797538",
                email: "info@naxcuure.com",
                formName: "Nombre Completo",
                formEmail: "Dirección de Correo Electrónico",
                formMessage: "Su Mensaje",
                formSubmit: "Enviar Mensaje"
            }
        },
        about: {
            title: "Acerca de Naxcuure",
            journeyTitle: "Nuestro viaje",
            cultureTitle: "Nuestra cultura",
            p1: "Naxcuure es una compañía de atención médica progresista comprometida con la transformación de vidas a través de la innovación, la ciencia y el cuidado. Nos enfocamos en desarrollar formulaciones Farmacéuticas, Nutracéuticas y Herbales de alta calidad que promuevan una mejor salud y mejoren la vida diaria.",
            p2: "Impulsados por una pasión por la investigación y la excelencia, nuestros equipos trabajan incansablemente para garantizar que cada producto cumpla con los más altos estándares de calidad, seguridad y eficacia. Desde el concepto hasta la creación, la innovación se mantiene en el corazón de todo lo que hacemos.",
            p3: "En Naxcuure, creemos que la buena salud es la base de una vida plena. Con esta creencia, continuamos expandiendo nuestra presencia global, generando confianza y ofreciendo soluciones que empoderan a las personas para vivir vidas más sanas, felices y activas.",
            missionTitle: "Nuestra Misión",
            missionText: "Nuestra misión es una vida sana y feliz para todos. En Naxcuure, soñamos con personas en todo el mundo viviendo sin sufrimiento ni dolor físico. Tenemos un objetivo claro: proporcionar acceso absoluto a todos a los mejores medicamentos que permitan a las personas vivir más tiempo y mantener estilos de vida más saludables y activos. Y para lograrlo, nuestra compañía se esfuerza constantemente por expandir significativamente la geografía de su presencia en el mercado farmacéutico global.",
            visionTitle: "Nuestra Visión",
            visionText: "Nuestra Visión es una vida sana y feliz para todos. En Naxcuure, soñamos con personas en todo el mundo viviendo sin sufrimiento ni dolor físico. Tenemos un objetivo claro: proporcionar acceso absoluto a todos a los mejores medicamentos que permitan a las personas vivir más tiempo y mantener estilos de vida más saludables y activos. Y para lograrlo, nuestra compañía se esfuerza constantemente por expandir significativamente la geografía de su presencia en el mercado farmacéutico global.",
            valuesTitle: "Nuestros Valores Fundamentales",
            values: [
                {
                    title: "Excelencia",
                    text: "Nos esforzamos por la calidad sin concesiones en cada producto y proceso, asegurando confianza y fiabilidad en todo lo que entregamos."
                },
                {
                    title: "Innovación",
                    text: "Abrazamos la ciencia y la creatividad para desarrollar soluciones sanitarias avanzadas que mejoran el bienestar y transforman vidas."
                },
                {
                    title: "Compromiso",
                    text: "Estamos dedicados a mejorar la salud global expandiendo el acceso a medicamentos seguros, efectivos y asequibles."
                },
                {
                    title: "Cuidado",
                    text: "Actuamos con compasión y responsabilidad, poniendo la salud y la felicidad de las personas en el centro de todo lo que hacemos."
                }
            ]
        },
        products: {
            title: "Nuestro Portafolio de Productos",
            intro: "Ofrecemos un portafolio diverso y robusto de productos en áreas terapéuticas clave, todos fabricados con los más altos estándares de calidad, seguridad y eficacia.",
            searchPlaceholder: "Buscar por nombre del producto...",
            filterAll: "Todas las Áreas Terapéuticas",
            noResults: "No se encontraron productos que coincidan con sus criterios.",
            backButton: "Volver a Productos",
            productDetails: {
                form: "Forma Farmacéutica",
                substance: "Sustancia Activa",
                composition: "Composición",
                indications: "Indicaciones de Uso"
            },
            productList: productListEs
        },
        quality: {
            title: "Compromiso con la Calidad Inigualable",
            stringentStandardsTitle: "Estándares estrictos",
            patientSafetyTitle: "Seguridad del paciente",
            certificationsTitle: "Certificaciones y cumplimientos",
            patientSafetyText: "Nuestra máxima medida de calidad, asegurando que cada producto sea seguro y eficaz.",
            certificationsText: "Mantenemos los estándares de calidad globales, reconocidos en WHO-GMP, EU-GMP, PICS, Uzbekistán, Yemen, NAFDAC, Kenia, Sudán y Camboya, lo que refleja nuestro compromiso con la excelencia y la confianza en todo el mundo.",
            p1: "En Naxcuure, la calidad no es solo un proceso, es nuestra filosofía. Cada etapa de nuestro trabajo, desde la investigación hasta la fabricación, se guía por estándares intransigentes para asegurar que cada producto que entregamos sea seguro, efectivo y confiable.",
            p2: "Nuestras instalaciones de fabricación de clase mundial operan en estricto cumplimiento con cGMP y otros estándares internacionales. Las auditorías regulares y los avances continuos en tecnología refuerzan nuestra promesa de excelencia y fiabilidad.",
            p3: "Mantenemos un control de extremo a extremo de nuestro ecosistema de calidad, desde la cuidadosa selección de materias primas hasta la fabricación precisa, las pruebas, el empaque y la distribución. Para Naxcuure, el bienestar del paciente define la verdadera medida de la calidad.",
            commitmentTitle: "Nuestra Promesa de Calidad",
            commitmentText: "Cada producto que creamos lleva la garantía de precisión, pureza y rendimiento. Estamos comprometidos a ofrecer calidad constante en todas las formulaciones, asegurando confianza y seguridad en cada dosis.",
            section2Title: "Impulsados por Sistemas de Calidad Avanzados",
            section2Text: "Nuestro Sistema Integrado de Gestión de Calidad (QMS) aprovecha herramientas analíticas avanzadas e información basada en datos para asegurar la excelencia en cada etapa. Este enfoque proactivo permite a Naxcuure mantener los más altos estándares globales mientras innova continuamente para mejores resultados de salud."
        },
        career: {
            title: "Construya Su Futuro con Naxcuure",
            heroSubtitle: "Sea parte de un equipo impulsado por un propósito que da forma al futuro de la atención médica global.",
            introTitle: "¿Por Qué Unirse a Naxcuure?",
            introText: "En Naxcuure, creemos que las personas son el corazón de nuestro éxito. Fomentamos una cultura basada en la innovación, la colaboración y la integridad, donde cada individuo está empoderado para aprender, liderar y marcar la diferencia. Juntos, estamos avanzando en la atención médica y mejorando vidas en todo el mundo.",
            benefitsTitle: "Vida en Naxcuure",
            benefits: [
                "Oportunidades de Crecimiento Profesional Gratificantes",
                "Apoyo Integral de Salud y Bienestar",
                "Aprendizaje Continuo y Desarrollo de Habilidades",
                "Cultura de Trabajo Inclusiva, de Apoyo y Colaborativa",
                "Reconocimiento por la Excelencia y la Innovación",
                "Oportunidades para Contribuir al Impacto Global en la Atención Médica"
            ],
            openingsTitle: "Únase a Nuestro Equipo",
            openingsButton: "Explorar Ooportunidades",
            jobs: jobsEs,
            form: {
                title: "Aplicar para",
                name: "Nombre Completo",
                email: "Dirección de Correo Electrónico",
                phone: "Número de Teléfono",
                coverLetter: "Carta de Presentación",
                resume: "Subir Currículum",
                resumePlaceholder: "Ningún archivo elegido",
                submit: "Enviar Solicitud",
                cancel: "Cancelar"
            }
        },
        contact: {
            title: "Contáctenos",
            p1: "Estamos aquí para responder a sus preguntas. Comuníquese con nosotros y nuestro equipo le responderá a la brevedad.",
            address: "Survey No. 889/1, At Post Jhulasan, Chadasana-Jhulasan Road, B/H. Chadasana ONGC, Ta. Kadi, Dist. Mehsana-382705, Gujarat, India.",
            phone: "+91 9560797538",
            email: "info@naxcuure.com",
            formName: "Nombre Completo",
            formEmail: "Dirección de Correo Electrónico",
            formMessage: "Su Mensaje",
            formSubmit: "Enviar Mensaje",
            formSuccess: "Gracias por su mensaje. Nos pondremos en contacto con usted en breve.",
            formError: "Algo salió mal. Por favor, inténtelo de nuevo.",
        },
    },
};
