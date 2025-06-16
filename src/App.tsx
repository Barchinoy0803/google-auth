import { useTranslation } from "react-i18next";
import { features } from "./constants";
import { GoogleLogin } from '@react-oauth/google';

const App = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="font-sans text-gray-900">
      <div className="flex gap-4 items-center justify-between">
        <div className="p-4 text-right flex justify-end items-center gap-4">
        <select
          onChange={handleLanguageChange}
          defaultValue={i18n.language}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="en">English</option>
          <option value="uz">O‘zbekcha</option>
          <option value="ru">Русский</option>
        </select>
      </div>
        <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      
      </div>

      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">{t("heroTitle")}</h1>
          <p className="text-xl mb-8">{t("heroDesc")}</p>
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            {t("heroBtn")}
          </button>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">{t("featuresTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="rounded-lg shadow-lg overflow-hidden">
              <img src={f.image} alt={t(f.title)} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{t(f.title)}</h3>
                <p className="text-gray-600">{t(f.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-24 bg-cover bg-center text-white text-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=80)',
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 max-w-2xl mx-auto rounded-lg">
          <h2 className="text-3xl font-bold mb-4">{t("trustedByProfessionals")}</h2>
          <p className="mb-6 text-lg">{t("trustedDesc")}</p>
          <div className="font-semibold">— Jane Doe, Product Designer</div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">{t("getStarted")}</h2>
        <p className="mb-6 max-w-xl mx-auto">{t("signUpDesc")}</p>
        <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold">
          {t("createAccount")}
        </button>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="mb-2">&copy; {t("year")}</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">{t("privacyPolicy")}</a>
          <a href="#" className="hover:text-white">{t("terms")}</a>
          <a href="#" className="hover:text-white">{t("contact")}</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
