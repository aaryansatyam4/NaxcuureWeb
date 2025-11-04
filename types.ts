
export type PageName = 'Home' | 'About' | 'Products' | 'Quality' | 'Career';

export type Page = {
  name: PageName;
  productId?: string;
};

export type Language = 'en' | 'ru' | 'fr' | 'es';

export interface Product {
    id: string;
    srNo: string;
    productName: string;
    therapeuticArea: string;
    pharmaceuticalForm: string;
    activeSubstance: string;
    composition: string;
    indicationsForUse: string;
} 

export interface JobOpening {
    id: string;
    title: string;
    location: string;
    department: string;
}

export type ChatMessage = {
  role: 'user' | 'model';
  text: string;
};

export interface Content {
  [key: string]: {
    nav: {
      home: string;
      about: string;
      products: string;
      quality: string;
      career: string;
    };
    home: {
      heroTitle: string;
      heroSubtitle: string;
      announcement: {
          title: string;
          text: string;
      };
      section1Title: string;
      section1Text: string;
      section1P2: string;
      section2Title: string;
      section2Text: string;
      section3Title: string;
      section3Text: string;
      contactSection: {
        title: string;
        subtitle: string;
        address: string;
        phone: string;
        email: string;
        formName: string;
        formEmail: string;
        formMessage: string;
        formSubmit: string;
      }
    };
    about: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
      missionTitle: string;
      missionText: string;
      visionTitle: string;
      visionText: string;
      valuesTitle: string;
      values: { title: string; text: string }[];
    };
    products: {
      title: string;
      intro: string;
      searchPlaceholder: string;
      filterAll: string;
      noResults: string;
      backButton: string;
      productDetails: {
        form: string;
        substance: string;
        composition: string;
        indications: string;
      };
      productList: Product[];
    };
    quality: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
      commitmentTitle: string;
      commitmentText: string;
      section2Title: string;
      section2Text: string;
    };
    career: {
      title: string;
      heroSubtitle: string;
      introTitle: string;
      introText: string;
      benefitsTitle: string;
      benefits: string[];
      openingsTitle: string;
      openingsButton: string;
      jobs: JobOpening[];
      form: {
        title: string;
        name: string;
        email: string;
        phone: string;
        coverLetter: string;
        resume: string;
        resumePlaceholder: string;
        submit: string;
        cancel: string;
      }
    };
    // FIX: Add contact property to support the Contact page content.
    contact: {
      title: string;
      p1: string;
      address: string;
      phone: string;
      email: string;
      formName: string;
      formEmail: string;
      formMessage: string;
      formSubmit: string;
    };
    footer: {
        rights: string;
    }
  };
}