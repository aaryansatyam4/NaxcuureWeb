import { Language } from '../types';

export type DosageForm = 'tablet' | 'capsule' | 'sachet' | '';

export const categories: { id: string; label: Record<Language, string> }[] = [
  { id: "allergy-respiratory", label: { en: "Allergy / Respiratory", es: "Alergia / Respiratorio", fr: "Allergie / Respiratoire", ru: "Аллергия / Респираторные" } },
  { id: "anticoagulant-antiplatelet", label: { en: "Anti-Coagulant / Anti-Platelet", es: "Anticoagulantes / Antiplaquetarios", fr: "Anticoagulants / Antiplaquettaires", ru: "Антикоагулянты / Антиагреганты" } },
  { id: "anti-diabetic", label: { en: "Anti-Diabetic", es: "Antidiabéticos", fr: "Antidiabétiques", ru: "Противодиабетические" } },
  { id: "anti-hyperlipidemic", label: { en: "Anti-Hyperlipidemic", es: "Antihiperlipidémicos", fr: "Hypolipémiants", ru: "Гиполипидемические" } },
  { id: "anti-hypertensive", label: { en: "Anti-Hypertensive", es: "Antihipertensivos", fr: "Antihypertenseurs", ru: "Антигипертензивные" } },
  { id: "anti-infective", label: { en: "Anti-Infective", es: "Antiinfecciosos", fr: "Anti-infectieux", ru: "Противоинфекционные" } },
  { id: "cardiac-antianginal", label: { en: "Cardiac / Anti-Anginal", es: "Cardíacos / Antianginosos", fr: "Cardiaques / Antiangineux", ru: "Кардиологические / Антиангинальные" } },
  { id: "diuretic", label: { en: "Diuretic", es: "Diuréticos", fr: "Diurétiques", ru: "Диуретики" } },
  { id: "gastrointestinal", label: { en: "Gastrointestinal", es: "Gastrointestinal", fr: "Gastro-intestinal", ru: "Желудочно-кишечные" } },
  { id: "general-medicine", label: { en: "General Medicine", es: "Medicina General", fr: "Médecine Générale", ru: "Общая медицина" } },
  { id: "neurology", label: { en: "Neurology", es: "Neurología", fr: "Neurologie", ru: "Неврология" } },
  { id: "nutrition-supplement", label: { en: "Nutrition / Supplement", es: "Nutrición / Suplementos", fr: "Nutrition / Compléments", ru: "Питание / Добавки" } },
  { id: "pain-inflammation", label: { en: "Pain / Inflammation", es: "Dolor / Inflamación", fr: "Douleur / Inflammation", ru: "Боль / Воспаление" } },
  { id: "pipeline", label: { en: "Pipeline / Development", es: "En Desarrollo", fr: "En Développement", ru: "В разработке" } },
  { id: "psychiatry", label: { en: "Psychiatry", es: "Psiquiatría", fr: "Psychiatrie", ru: "Психиатрия" } },
  { id: "renal-hepatology", label: { en: "Renal / Hepatology / Urology", es: "Renal / Hepatología / Urología", fr: "Rénal / Hépatologie / Urologie", ru: "Нефрология / Гепатология / Урология" } },
  { id: "urology", label: { en: "Urology", es: "Urología", fr: "Urologie", ru: "Урология" } },
  { id: "vascular", label: { en: "Vascular", es: "Vascular", fr: "Vasculaire", ru: "Сосудистые" } },
  { id: "womens-health-bone", label: { en: "Women's Health / Bone", es: "Salud de la Mujer / Ósea", fr: "Santé Féminine / Os", ru: "Женское здоровье / Кости" } },
  { id: "respiratory", label: { en: "Respiratory", es: "Respiratorio", fr: "Respiratoire", ru: "Респираторные" } },
  { id: "pain-fever", label: { en: "Pain / Fever", es: "Dolor / Fiebre", fr: "Douleur / Fièvre", ru: "Боль / Температура" } },
  { id: "vitamin", label: { en: "Vitamin", es: "Vitaminas", fr: "Vitamines", ru: "Витамины" } },
];

export const dosageForms: Record<Exclude<DosageForm, ''>, Record<Language, string>> = {
  tablet: { en: 'Tablet', es: 'Comprimido', fr: 'Comprimé', ru: 'Таблетки' },
  capsule: { en: 'Capsule', es: 'Cápsula', fr: 'Gélule', ru: 'Капсулы' },
  sachet: { en: 'Sachet', es: 'Sobre', fr: 'Sachet', ru: 'Саше' },
};
