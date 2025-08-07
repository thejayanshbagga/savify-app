import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

export default function useTranslation() {
  const { language } = useLanguage();
  return translations[language] || translations.EN;
}
