// Smooth scrolling enhancement for older browsers and small offset for sticky header
(function () {
  const header = document.querySelector(".site-header");

  function scrollWithOffset(event) {
    const target = event.target;
    if (!(target instanceof HTMLAnchorElement)) return;
    const href = target.getAttribute("href");
    if (!href || !href.startsWith("#") || href === "#") return;

    const section = document.querySelector(href);
    if (!section) return;

    event.preventDefault();
    const headerHeight = header ? header.offsetHeight : 0;
    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - (headerHeight + 8);

    window.scrollTo({
      top: offsetTop < 0 ? 0 : offsetTop,
      behavior: "smooth",
    });
  }

  document.addEventListener("click", scrollWithOffset);
})();

// Simple i18n system for static landing page
(function () {
  const translations = {
    tr: {
      appName: "Ezan Plus",
      navFeatures: "Özellikler",
      navPrivacy: "Gizlilik",
      navContact: "İletişim",
      heroTitle: "Ezan Plus",
      heroSubtitle:
        "Türkiye için namaz vakitleri, ezan alarmı ve kıble pusulası.",
      heroDescription:
        "Konumunuza göre güncel namaz vakitleri, özelleştirilebilir ezan bildirimleri ve kolay kullanılan kıble pusulası tek bir sade uygulamada.",
      heroCta: "Yakında Google Play'de",
      featuresTitle: "Özellikler",
      feature1Title: "Güncel namaz vakitleri",
      feature1Body:
        "Konumunuza göre güncel ve doğru namaz vakitlerine hızlıca ulaşın. Şehir seçimi ve otomatik konum desteği ile her zaman doğru saati görün.",
      feature2Title: "Ezan alarmı",
      feature2Body:
        "Namaz vakitleri için ezan sesli bildirimler alın. Sessiz saatler ve tercih ettiğiniz vakitler için hatırlatıcıları kolayca yönetebilirsiniz.",
      feature3Title: "Kıble pusulası",
      feature3Body:
        "Cihazınızın pusulasını kullanarak kıble yönünü pratik şekilde bulun. Net ve sade arayüz sayesinde nereye dönmeniz gerektiğini anında görün.",
      feature4Title: "Sade ve hızlı kullanım",
      feature4Body:
        "Gereksiz karmaşadan uzak, hafif ve hızlı çalışan bir arayüz. Gündelik kullanım için tasarlandı; aradığınız bilgiye tek adımda ulaşın.",
      privacyTitle: "Gizlilik Politikası",
      privacyIntro:
        'Bu Gizlilik Politikası, Ezan Plus mobil uygulamasını ("Uygulama") kullanırken kişisel verilerinizin nasıl işlendiğini açıklar. Uygulamayı kullanarak bu politikada belirtilen uygulamaları kabul etmiş sayılırsınız.',
      privacySection1Title: "1. Topladığımız Veriler",
      privacySection1Body:
        "Uygulama, temel işlevleri sunmak için sınırlı veri kullanır:",
      privacySection2Title: "2. Konum Verisinin Kullanımı",
      privacySection2Body:
        "Konum verisi, yalnızca namaz vakitlerini ve kıble yönünü size en doğru şekilde gösterebilmek amacıyla kullanılır. Konum izni vermek tamamen isteğe bağlıdır ve cihaz ayarlarından istediğiniz zaman kapatabilirsiniz.",
      privacySection3Title: "3. Bildirimler",
      privacySection3Body:
        "Uygulama, namaz vakitlerinde ezan alarmı gönderebilmek için bildirim izni isteyebilir. Bildirim ayarlarını cihazınızın ayarları üzerinden dilediğiniz zaman açıp kapatabilirsiniz.",
      privacySection4Title: "4. Verilerin Saklanması ve Paylaşılması",
      privacySection5Title: "5. Üçüncü Taraf Hizmetleri",
      privacySection5Body:
        "Uygulama, hata takibi, analiz veya bildirim hizmetleri için üçüncü taraf servisler kullanabilir. Bu servisler, kendi gizlilik politikalarına uygun şekilde veri işleyebilir. Kullanılan üçüncü taraf hizmetler Google Play açıklamalarında veya uygulama içi bilgilendirmelerde belirtilir.",
      privacySection6Title: "6. Çocukların Gizliliği",
      privacySection6Body:
        "Uygulama genel kitle için tasarlanmıştır ve bilerek çocuklardan kişisel veri toplamayı hedeflemez. Ebeveynler ve velilerin, çocukların uygulama kullanımlarını takip etmeleri tavsiye edilir.",
      privacySection7Title: "7. Haklarınız",
      privacySection7Body:
        "Geçerli mevzuat kapsamında, kişisel verilerinizle ilgili olarak aşağıdaki haklara sahip olabilirsiniz:",
      privacyContactIntro:
        'Bu haklarınızı kullanmak için bizimle <a href="#contact">iletişim</a> bölümünde yer alan e‑posta adresimiz üzerinden irtibata geçebilirsiniz.',
      privacySection8Title: "8. Gizlilik Politikasındaki Değişiklikler",
      privacySection8Body:
        "Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler yapıldığında, uygulama içinden veya ilgili platformlar üzerinden bilgilendirme yapılabilir. Değişiklikler, yeni sürüm yayınlandıktan sonra yürürlüğe girer.",
      privacySection9Title: "9. İletişim",
      privacySection9Body:
        "Gizlilik politikası veya kişisel verilerinizle ilgili tüm sorularınız için bize aşağıdaki e‑posta adresi üzerinden ulaşabilirsiniz:",
      contactTitle: "İletişim",
      contactBody:
        "Her türlü soru, öneri ve geri bildiriminiz için bize e‑posta gönderebilirsiniz.",
      downloadTitle: "Google Play'den İndir",
      downloadBody:
        "Ezan Plus, yakında Google Play'de kullanıma sunulacaktır. Uygulama yayına alındığında, aşağıdaki butondan mağaza sayfasına ulaşabilirsiniz.",
      downloadNote:
        'Kendi logonuzu kullanmak için yalnızca bu web sitesinin ana klasörüne <strong>logo.jpg</strong> adında bir görsel yerleştirmeniz yeterlidir.',
      downloadCta: "Google Play'de Yakında",
    },
    en: {
      appName: "Ezan Plus",
      navFeatures: "Features",
      navPrivacy: "Privacy",
      navContact: "Contact",
      heroTitle: "Ezan Plus",
      heroSubtitle:
        "Prayer times, adhan alarms and Qibla compass for Turkey and beyond.",
      heroDescription:
        "Get accurate prayer times based on your location, customizable adhan notifications and an easy-to-use Qibla compass in one simple app.",
      heroCta: "Coming soon on Google Play",
      featuresTitle: "Features",
      feature1Title: "Accurate prayer times",
      feature1Body:
        "Quickly access up-to-date and accurate prayer times for your city. Always see the right time with city selection and automatic location support.",
      feature2Title: "Adhan alarms",
      feature2Body:
        "Receive adhan sound notifications for prayer times. Easily manage quiet hours and which prayers you want reminders for.",
      feature3Title: "Qibla compass",
      feature3Body:
        "Use your device's compass to find the Qibla direction in a practical way. Instantly see which direction you should face with a clear interface.",
      feature4Title: "Simple and fast",
      feature4Body:
        "A lightweight, fast interface without unnecessary complexity. Designed for daily use so you can reach what you need in one step.",
      privacyTitle: "Privacy Policy",
      privacyIntro:
        'This Privacy Policy explains how your personal data is processed when you use the Ezan Plus mobile application ("App"). By using the App, you are deemed to accept the practices described in this policy.',
      privacySection1Title: "1. Data We Collect",
      privacySection1Body:
        "The app uses limited data only to provide its core functions:",
      privacySection2Title: "2. Use of Location Data",
      privacySection2Body:
        "Location data is used only to show prayer times and Qibla direction as accurately as possible. Granting location permission is optional and you can turn it off anytime from your device settings.",
      privacySection3Title: "3. Notifications",
      privacySection3Body:
        "The app may request notification permission to send adhan alarms at prayer times. You can enable or disable notifications at any time in your device settings.",
      privacySection4Title: "4. Data Storage and Sharing",
      privacySection5Title: "5. Third‑Party Services",
      privacySection5Body:
        "The app may use third‑party services for error tracking, analytics or notifications. These services may process data in line with their own privacy policies. Any such services are listed in the Google Play description or in‑app notices.",
      privacySection6Title: "6. Children's Privacy",
      privacySection6Body:
        "The app is designed for a general audience and does not knowingly intend to collect personal data from children. Parents and guardians are encouraged to monitor their children's use of the app.",
      privacySection7Title: "7. Your Rights",
      privacySection7Body:
        "Depending on applicable law, you may have the following rights regarding your personal data:",
      privacyContactIntro:
        'To exercise these rights, you can contact us via the e‑mail address provided in the <a href="#contact">contact</a> section.',
      privacySection8Title: "8. Changes to this Privacy Policy",
      privacySection8Body:
        "This Privacy Policy may be updated from time to time. When important changes are made, we may inform you through the app or related platforms. Changes take effect after the new version is published.",
      privacySection9Title: "9. Contact",
      privacySection9Body:
        "For any questions about this Privacy Policy or your personal data, you can reach us via the e‑mail address below:",
      contactTitle: "Contact",
      contactBody:
        "You can send us an e‑mail for any questions, suggestions or feedback.",
      downloadTitle: "Download on Google Play",
      downloadBody:
        "Ezan Plus will soon be available on Google Play. Once the app is published, you will be able to access the store page from the button below.",
      downloadNote:
        'To use your own logo, simply place an image named <strong>logo.jpg</strong> in the root folder of this website.',
      downloadCta: "Coming soon on Google Play",
    },
    // For now, other languages fall back to English text (can be translated later)
    es: null,
    az: null,
    ru: null,
    ar: null,
  };

  const fallbackLang = "en";

  function detectInitialLang() {
    const stored = window.localStorage.getItem("ezanplus_lang");
    if (stored && translations[stored]) return stored;

    const navLang =
      (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (navLang.startsWith("tr")) return "tr";
    if (navLang.startsWith("ar")) return "ar";
    if (navLang.startsWith("es")) return "es";
    if (navLang.startsWith("az")) return "az";
    if (navLang.startsWith("ru")) return "ru";
    return "en";
  }

  function getMessages(lang) {
    const base = translations[lang] || {};
    const fb = translations[fallbackLang];
    return Object.assign({}, fb, base);
  }

  function applyTranslations(lang) {
    const messages = getMessages(lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key || !(key in messages)) return;

      if (
        key === "privacyContactIntro" ||
        key === "downloadNote" ||
        key === "privacyIntro"
      ) {
        el.innerHTML = messages[key];
      } else {
        el.textContent = messages[key];
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("language-select");
    const initialLang = detectInitialLang();

    if (select) {
      if (translations[initialLang]) {
        select.value = initialLang;
      }

      select.addEventListener("change", function () {
        const chosen = select.value;
        window.localStorage.setItem("ezanplus_lang", chosen);
        applyTranslations(chosen);
      });
    }

    applyTranslations(initialLang);
  });
})();
