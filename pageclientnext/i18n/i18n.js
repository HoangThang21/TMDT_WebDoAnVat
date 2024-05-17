import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Product":'Product',
      'Category':'Category',
      'Select language':'Select language',
      'Address':'Address',
      'Phone':'Phone',
      'Company':'Company',
      'Last issued':'Last issued',
      'Date of first issue':'Date of first issue',
      'Tax code':'Tax code',
      'Legal representative':'Legal representative',
    }
  },
  vi: {
    translation: {
      "Home": "Trang chủ",
      "Product":"Sản phẩm",
      'Category':'Danh mục',
      'Select language':'Chọn ngôn ngữ',
      'Address':'Địa chỉ',
      'Phone':'Điện thoại',
      'Company':'Công ty',
      'Last issued':'cấp lần cuối',
      'Date of first issue':'ngày cấp lần đầu',
      'Tax code':'Mã số thuế',
      'Legal representative':'Người đại điện theo pháp luật',
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vi",
     // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;