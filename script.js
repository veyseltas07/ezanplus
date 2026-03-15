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
      storeNote:
        "Uygulama, Google Play ve Apple App Store mağaza kurallarına uygun olarak geliştirilmektedir. Yayın süreçleri tamamlandığında her iki mağazanın bağlantıları da bu sayfada yer alacaktır.",
      downloadTitle: "Google Play'den İndir",
      downloadBody:
        "Ezan Plus, yakında Google Play'de kullanıma sunulacaktır. Uygulama yayına alındığında, aşağıdaki butondan mağaza sayfasına ulaşabilirsiniz.",
      downloadNote:
        'Kendi logonuzu kullanmak için yalnızca bu web sitesinin ana klasörüne <strong>app_icon.png</strong> adında bir görsel yerleştirmeniz yeterlidir.',
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
      storeNote:
        "The app is being developed in accordance with Google Play and Apple App Store guidelines. Once the publishing process is complete, links to both stores will be provided on this page.",
      downloadTitle: "Download on Google Play",
      downloadBody:
        "Ezan Plus will soon be available on Google Play. Once the app is published, you will be able to access the store page from the button below.",
      downloadNote:
        'To use your own logo, simply place an image named <strong>app_icon.png</strong> in the root folder of this website.',
      downloadCta: "Coming soon on Google Play",
    },
    ar: {
      appName: "Ezan Plus",
      navFeatures: "المميزات",
      navPrivacy: "الخصوصية",
      navContact: "التواصل",
      heroTitle: "Ezan Plus",
      heroSubtitle: "مواقيت الصلاة، تنبيهات الأذان، وبوصلة القبلة لتركيا وما حولها.",
      heroDescription:
        "احصل على مواقيت صلاة دقيقة حسب موقعك، وتنبيهات أذان قابلة للتخصيص، وبوصلة قبلة سهلة الاستخدام في تطبيق واحد بسيط.",
      heroCta: "قريباً على Google Play",
      featuresTitle: "المميزات",
      feature1Title: "مواقيت صلاة دقيقة",
      feature1Body:
        "اطّلع بسرعة على مواقيت الصلاة المحدثة لمدينتك. اختر مدينتك أو استخدم تحديد الموقع التلقائي لرؤية الوقت الصحيح دائماً.",
      feature2Title: "تنبيهات الأذان",
      feature2Body:
        "استقبل تنبيهات صوت الأذان في أوقات الصلاة. يمكنك بسهولة ضبط الأوقات الصامتة واختيار الصلوات التي تريد التنبيه لها.",
      feature3Title: "بوصلة القبلة",
      feature3Body:
        "استفد من بوصلة جهازك لتحديد اتجاه القبلة بطريقة عملية. واجهة واضحة تبين لك فوراً الاتجاه الذي يجب التوجه إليه.",
      feature4Title: "واجهة بسيطة وسريعة",
      feature4Body:
        "تطبيق خفيف وسريع بدون تعقيد غير ضروري، مصمم للاستخدام اليومي للوصول السريع إلى المعلومات التي تحتاجها.",
      privacyTitle: "سياسة الخصوصية",
      privacyIntro:
        'توضح سياسة الخصوصية هذه كيفية معالجة بياناتك الشخصية عند استخدامك لتطبيق Ezan Plus ("التطبيق"). باستخدامك للتطبيق، فإنك تقبل بالممارسات الموضحة في هذه السياسة.',
      privacySection1Title: "1. البيانات التي نجمعها",
      privacySection1Body:
        "يستخدم التطبيق قدراً محدوداً من البيانات فقط لتقديم الوظائف الأساسية:",
      privacySection2Title: "2. استخدام بيانات الموقع",
      privacySection2Body:
        "تُستخدم بيانات الموقع فقط لعرض مواقيت الصلاة واتجاه القبلة بدقة قدر الإمكان. منح صلاحية الموقع اختياري ويمكنك إيقافه في أي وقت من إعدادات جهازك.",
      privacySection3Title: "3. الإشعارات",
      privacySection3Body:
        "قد يطلب التطبيق إذن الإشعارات لإرسال تنبيهات الأذان عند دخول مواقيت الصلاة. يمكنك تفعيل الإشعارات أو إيقافها من إعدادات جهازك في أي وقت.",
      privacySection4Title: "4. تخزين البيانات ومشاركتها",
      privacySection5Title: "5. خدمات الطرف الثالث",
      privacySection5Body:
        "قد يستخدم التطبيق خدمات خارجية لتتبع الأخطاء أو التحليلات أو الإشعارات. قد تقوم هذه الخدمات بمعالجة البيانات وفقاً لسياسات الخصوصية الخاصة بها. يتم ذكر هذه الخدمات في صفحة التطبيق على Google Play أو داخل التطبيق.",
      privacySection6Title: "6. خصوصية الأطفال",
      privacySection6Body:
        "التطبيق موجه لجميع الفئات ولا يستهدف جمع بيانات شخصية من الأطفال عن قصد. يُنصح الآباء والأوصياء بمتابعة استخدام أطفالهم للتطبيق.",
      privacySection7Title: "7. حقوقك",
      privacySection7Body:
        "قد يكون لك، وفقاً للقانون المعمول به، بعض الحقوق المتعلقة ببياناتك الشخصية، مثل الوصول أو التصحيح أو الحذف أو تقييد المعالجة.",
      privacyContactIntro:
        'لممارسة هذه الحقوق يمكنك التواصل معنا عبر عنوان البريد الإلكتروني الموجود في قسم <a href="#contact">التواصل</a>.',
      privacySection8Title: "8. التغييرات على سياسة الخصوصية",
      privacySection8Body:
        "قد يتم تحديث سياسة الخصوصية هذه من وقت لآخر. عند إجراء تغييرات مهمة، قد نعلمك من خلال التطبيق أو المنصات ذات الصلة. تصبح التغييرات سارية بعد نشر النسخة الجديدة.",
      privacySection9Title: "9. التواصل",
      privacySection9Body:
        "لأي أسئلة حول سياسة الخصوصية هذه أو بياناتك الشخصية، يمكنك التواصل معنا عبر البريد الإلكتروني أدناه:",
      contactTitle: "التواصل",
      contactBody:
        "يمكنك إرسال بريد إلكتروني إلينا لأي أسئلة أو اقتراحات أو ملاحظات.",
      storeNote:
        "يتم تطوير التطبيق بما يتوافق مع قواعد ومتطلبات متجري Google Play و Apple App Store. بعد اكتمال عملية النشر ستتم إضافة روابط كلا المتجرين في هذه الصفحة.",
      downloadTitle: "التحميل من Google Play",
      downloadBody:
        "سيكون تطبيق Ezan Plus متاحاً قريباً على Google Play. بعد نشر التطبيق، ستتمكن من الوصول إلى صفحة المتجر من الزر أدناه.",
      downloadNote:
        'لاستخدام شعارك الخاص، ضع صورة باسم <strong>app_icon.png</strong> في المجلد الرئيسي لهذا الموقع.',
      downloadCta: "قريباً على Google Play",
    },
    ru: {
      appName: "Ezan Plus",
      navFeatures: "Возможности",
      navPrivacy: "Конфиденциальность",
      navContact: "Контакты",
      heroTitle: "Ezan Plus",
      heroSubtitle:
        "Время молитв, уведомления азана и компас киблы для Турции и других стран.",
      heroDescription:
        "Получайте точные времена молитв в зависимости от вашего местоположения, настраиваемые уведомления азана и удобный компас киблы в одном простом приложении.",
      heroCta: "Скоро в Google Play",
      featuresTitle: "Возможности",
      feature1Title: "Точное время молитв",
      feature1Body:
        "Быстро просматривайте актуальное и точное время молитв для вашего города. Всегда видьте правильное время благодаря выбору города и автоматическому определению местоположения.",
      feature2Title: "Уведомления азана",
      feature2Body:
        "Получайте аудио‑уведомления азана во время молитв. Легко настраивайте тихие часы и выбирайте, для каких молитв нужны напоминания.",
      feature3Title: "Компас киблы",
      feature3Body:
        "Используйте компас устройства, чтобы легко определить направление киблы. Понятный интерфейс сразу показывает, в какую сторону нужно повернуться.",
      feature4Title: "Просто и быстро",
      feature4Body:
        "Лёгкий и быстрый интерфейс без лишней сложности. Разработано для ежедневного использования, чтобы вы могли получить нужную информацию в один шаг.",
      privacyTitle: "Политика конфиденциальности",
      privacyIntro:
        'Настоящая Политика конфиденциальности объясняет, как обрабатываются ваши персональные данные при использовании мобильного приложения Ezan Plus ("Приложение"). Используя Приложение, вы принимаете практики, описанные в этой политике.',
      privacySection1Title: "1. Собираемые данные",
      privacySection1Body:
        "Приложение использует ограниченный объём данных только для предоставления основных функций:",
      privacySection2Title: "2. Использование данных о местоположении",
      privacySection2Body:
        "Данные о местоположении используются только для максимально точного отображения времени молитв и направления киблы. Предоставление доступа к геолокации является добровольным, вы можете отключить его в настройках устройства в любой момент.",
      privacySection3Title: "3. Уведомления",
      privacySection3Body:
        "Приложение может запрашивать разрешение на отправку уведомлений, чтобы показывать азан во время молитв. Вы можете включать и отключать уведомления в настройках устройства в любое время.",
      privacySection4Title: "4. Хранение и передача данных",
      privacySection5Title: "5. Сторонние сервисы",
      privacySection5Body:
        "Приложение может использовать сторонние сервисы для отслеживания ошибок, аналитики или уведомлений. Эти сервисы могут обрабатывать данные в соответствии со своей политикой конфиденциальности. Используемые сервисы указываются в описании на Google Play или во внутренних уведомлениях приложения.",
      privacySection6Title: "6. Конфиденциальность детей",
      privacySection6Body:
        "Приложение предназначено для широкой аудитории и не нацелено на сознательный сбор персональных данных детей. Родителям и опекунам рекомендуется контролировать использование приложения детьми.",
      privacySection7Title: "7. Ваши права",
      privacySection7Body:
        "В зависимости от применимого законодательства вы можете иметь следующие права в отношении ваших персональных данных: доступ, исправление, удаление, ограничение обработки и др.",
      privacyContactIntro:
        'Чтобы воспользоваться этими правами, вы можете связаться с нами по адресу электронной почты, указанному в разделе <a href="#contact">Контакты</a>.',
      privacySection8Title: "8. Изменения в Политике конфиденциальности",
      privacySection8Body:
        "Настоящая Политика конфиденциальности может время от времени обновляться. При существенных изменениях мы можем уведомить вас через Приложение или соответствующие платформы. Изменения вступают в силу после публикации новой версии.",
      privacySection9Title: "9. Контакты",
      privacySection9Body:
        "По любым вопросам о Политике конфиденциальности или ваших персональных данных вы можете связаться с нами по адресу электронной почты ниже:",
      contactTitle: "Контакты",
      contactBody:
        "Вы можете написать нам по электронной почте по любым вопросам, предложениям или отзывам.",
      storeNote:
        "Приложение разрабатывается в соответствии с правилами магазинов Google Play и Apple App Store. После завершения публикации ссылки на оба магазина будут доступны на этой странице.",
      downloadTitle: "Скачать в Google Play",
      downloadBody:
        "Приложение Ezan Plus скоро будет доступно в Google Play. После публикации вы сможете открыть страницу магазина по кнопке ниже.",
      downloadNote:
        'Чтобы использовать собственный логотип, поместите изображение с именем <strong>app_icon.png</strong> в корневую папку этого сайта.',
      downloadCta: "Скоро в Google Play",
    },
  };

  const fallbackLang = "en";

  function detectInitialLang() {
    const stored = window.localStorage.getItem("ezanplus_lang");
    if (stored && translations[stored]) return stored;

    const navLang =
      (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (navLang.startsWith("tr")) return "tr";
    if (navLang.startsWith("ar")) return "ar";
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
