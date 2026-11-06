// Builds the assistant's system instructions from the site's own content.
// Used server-side only (api/chat.ts), so the product list is not shipped to the browser for the chatbot.
import { Content } from '../types';
import { catalogue, categories, dosageForms } from '../data/catalogue';

/** Builds the assistant's instructions + site content (answers must come only from this). */
export const generateContext = (content: Content['en']) => {
  const home = `
# Naxcuure Home Page Information
- Main Slogan: ${content.home.heroTitle}: ${content.home.heroSubtitle}
- Announcement: ${content.home.announcement.title} — ${content.home.announcement.text}
- Commitment: ${content.home.section1Title}: ${content.home.section1Text} ${content.home.section1P2}
- Presence: ${content.home.section2Title}: ${content.home.section2Text}
- Future: ${content.home.section3Title}: ${content.home.section3Text}
- Contact: ${content.home.contactSection.address} | ${content.home.contactSection.phone} | ${content.home.contactSection.email}
  `;

  const about = `
# About Naxcuure
- Description: ${content.about.p1} ${content.about.p2} ${content.about.p3}
- Mission: ${content.about.missionTitle}: ${content.about.missionText}
- Vision: ${content.about.visionTitle}: ${content.about.visionText}
- Values: ${content.about.values.map((v) => `${v.title}: ${v.text}`).join('; ')}
- Leadership: ${content.about.leadershipText1} ${content.about.leadershipText2}
  `;

  const products = `
# Products
- Intro: ${content.products.intro}
- Product catalogue by therapeutic category (name — dosage form — strength):
${categories
  .map((c) => {
    const items = catalogue
      .filter((p) => p.category === c.id)
      .map((p) => `  - ${p.name}${p.form ? ` — ${dosageForms[p.form].en}` : ''}${p.strength ? ` — ${p.strength}` : ''}`)
      .join('\n');
    return `## ${c.label.en}\n${items}`;
  })
  .join('\n')}
  `;

  const quality = `
# Quality Commitment
- ${content.quality.p1} ${content.quality.p2} ${content.quality.p3}
- Promise: ${content.quality.commitmentText}
- Systems: ${content.quality.section2Text}
- ${content.quality.certificationsTitle}: ${content.quality.certificationsText}
  `;

  const career = `
# Careers at Naxcuure
- Why join: ${content.career.introText}
- Benefits: ${content.career.benefits.join(', ')}
- Openings:
${content.career.jobs.map((j) => `  - Title: ${j.title}\n    Department: ${j.department}\n    Location: ${j.location}`).join('\n')}
  `;

  return `You are NaxBot — a helpful and concise AI assistant for Naxcuure (a pharmaceutical company).
Follow these rules EXACTLY:

1. ANSWER ONLY using the information provided below (do NOT fabricate facts).
2. Be friendly, professional, and concise. Reply in the language the user writes in.
3. If the user asks for medical advice, legal advice, competitor info, pricing, or anything outside of the provided information, respond that you can only provide information found on Naxcuure's website and recommend contacting the company or a qualified professional.
4. Do NOT state how many products Naxcuure has. If the user asks about the catalogue, availability, pricing or ordering, answer from the product list where possible and invite them to get in touch via the Contact page on the website for details.

Now, here is the site information you should use to answer queries:
---
${[home, about, products, quality, career].join('\n\n')}
---`;
};
