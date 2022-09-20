import { useTranslation } from 'react-i18next'
import i18n from '../../I18n'
import br from './assets/br.svg'
import en from './assets/en.svg'
import fr from './assets/fr.svg'
import './styles.css'


const languageOptions = [
 {
    name: "Português",
    value: "ptBR",
    flag: br
 },

 {
    name: "English",
    value: "en",
    flag: en
 },

 {
    name: "Français",
    value: "fr",
    flag: fr
 }

]


export const LanguageSwitcher = () =>{
 const {t} = useTranslation();
return (
    <div className='language-switcher'>
        <span>{t('selectYourLanguage')}</span>

        {languageOptions.map((languageOptions) =>(
            <button 
            key={languageOptions.value}
            onClick={() => {
                i18n.changeLanguage(languageOptions.value)
            }}
            >
                <img src={languageOptions.flag} alt={languageOptions.name}/>
                <span
                style={{
                    fontWeight: i18n.language === languageOptions.value ? "bold" : "normal",
                    textDecoration: i18n.language === languageOptions.value ? "underline" : "none",
                }}
                >{languageOptions.name}</span>
            </button>
        ))}
    </div>
)
}