// ══════════════════════════════════════════════════════
//  ТЕНЬ SITE — shared.js
// ══════════════════════════════════════════════════════

// ── TRANSLATIONS ─────────────────────────────────────
const T = {
  // nav
  nav_home:      { ru:'ГЛАВНАЯ',         en:'HOME' },
  nav_about:     { ru:'О ПРОЕКТЕ',       en:'ABOUT' },
  nav_features:  { ru:'ФУНКЦИИ',         en:'FEATURES' },
  nav_download:  { ru:'СКАЧАТЬ',         en:'DOWNLOAD' },
  nav_privacy:   { ru:'ПРИВАТНОСТЬ',     en:'PRIVACY' },
  nav_terms:     { ru:'УСЛОВИЯ',         en:'TERMS' },
  nav_open:      { ru:'ОТКРЫТЬ →',       en:'OPEN →' },

  // home hero
  hero_badge:    { ru:'анонимный мессенджер · без регистрации · без следов', en:'anonymous messenger · no registration · no traces' },
  hero_sub:      { ru:'Создайте комнату. Поделитесь кодом. Общайтесь.<br>Сообщения исчезают через 5 минут — как будто ничего не было.',
                   en:'Create a room. Share the code. Chat.<br>Messages disappear in 5 minutes — as if nothing happened.' },
  hero_btn1:     { ru:'Открыть мессенджер', en:'Open messenger' },
  hero_btn2:     { ru:'Скачать APK', en:'Download APK' },
  stat1_v:       { ru:'5 мин', en:'5 min' },
  stat1_l:       { ru:'время жизни сообщений', en:'message lifetime' },
  stat2_v:       { ru:'0', en:'0' },
  stat2_l:       { ru:'регистраций', en:'registrations' },
  stat3_v:       { ru:'E2E', en:'E2E' },
  stat3_l:       { ru:'шифрование', en:'encryption' },
  stat4_v:       { ru:'6', en:'6' },
  stat4_l:       { ru:'символов для входа', en:'chars to enter' },

  // home why
  why_k:         { ru:'почему тень', en:'why тень' },
  why_t:         { ru:'Приватность —<br>не опция. Архитектура.',
                   en:'Privacy is not<br>a feature. Architecture.' },
  why_d:         { ru:'Большинство мессенджеров знают ваш телефон, историю, контакты. ТЕНЬ работает иначе — минимум данных по умолчанию.',
                   en:'Most messengers know your phone, history, contacts. ТЕНЬ works differently — minimum data by design.' },

  // feature cards
  f1_t:  { ru:'Без регистрации',       en:'No registration' },
  f1_d:  { ru:'Псевдоним — и вы в чате. Никакого email или телефона.',
           en:'A nickname and you are in. No email or phone needed.' },
  f1_g:  { ru:'Анонимность',           en:'Anonymity' },
  f2_t:  { ru:'Автоудаление',          en:'Auto-delete' },
  f2_d:  { ru:'Сообщения живут 5 минут и исчезают с сервера навсегда.',
           en:'Messages live 5 minutes and vanish from the server forever.' },
  f2_g:  { ru:'5 минут',               en:'5 minutes' },
  f3_t:  { ru:'6-значный код',         en:'6-digit code' },
  f3_d:  { ru:'Доступ в комнату только по коду — никто лишний не войдёт.',
           en:'Room access by code only — no uninvited guests.' },
  f3_g:  { ru:'Безопасность',          en:'Security' },
  f4_t:  { ru:'E2E шифрование',        en:'E2E encryption' },
  f4_d:  { ru:'ECDH P-256 + AES-GCM 256 при разговоре двух участников.',
           en:'ECDH P-256 + AES-GCM 256 for two-person conversations.' },
  f4_g:  { ru:'Криптография',          en:'Cryptography' },
  f5_t:  { ru:'Голос и файлы',         en:'Voice & files' },
  f5_d:  { ru:'Голосовые сообщения, файлы до 10MB. Всё исчезает через 5 минут.',
           en:'Voice messages, files up to 10MB. Everything disappears in 5 minutes.' },
  f5_g:  { ru:'Медиа',                 en:'Media' },
  f6_t:  { ru:'PWA + APK',             en:'PWA + APK' },
  f6_d:  { ru:'iPhone — добавьте на экран. Android — установите APK напрямую.',
           en:'iPhone — add to home screen. Android — install APK directly.' },
  f6_g:  { ru:'Все платформы',         en:'All platforms' },

  // how it works
  how_k: { ru:'как это работает', en:'how it works' },
  how_t: { ru:'Три шага до защищённого чата', en:'Three steps to a secure chat' },
  s1_t:  { ru:'Создайте комнату',      en:'Create a room' },
  s1_d:  { ru:'Нажмите «Создать», введите псевдоним или оставьте пустым — система сгенерирует анонимный ник.',
           en:'Click Create, enter a nickname or leave blank — the system generates an anonymous one.' },
  s2_t:  { ru:'Поделитесь кодом',      en:'Share the code' },
  s2_d:  { ru:'Вы получите 6-значный код комнаты. Отправьте его собеседнику любым способом.',
           en:'You get a 6-digit code. Send it to your contact by any means.' },
  s3_t:  { ru:'Общайтесь',             en:'Chat' },
  s3_d:  { ru:'Текст, голос, файлы, реакции. Через 5 минут всё исчезает с сервера.',
           en:'Text, voice, files, reactions. In 5 minutes everything vanishes from the server.' },
  s4_t:  { ru:'Всё исчезает',          en:'Everything disappears' },
  s4_d:  { ru:'Закройте вкладку — никакой истории, никаких логов, никаких следов.',
           en:'Close the tab — no history, no logs, no traces.' },

  // about page
  ab_k:   { ru:'о проекте', en:'about' },
  ab_big: { ru:'«Каждый разговор должен иметь право <em>исчезнуть</em>»',
            en:'«Every conversation deserves the right to <em>disappear</em>»' },
  ab_p:   { ru:'ТЕНЬ — мессенджер, созданный с нуля с одной идеей: общение не должно оставлять следов без вашего желания. Никаких аккаунтов, никакой истории, никаких метаданных.',
            en:'ТЕНЬ is a messenger built from scratch with one idea: communication should not leave traces without your consent. No accounts, no history, no metadata.' },
  ab_prob_k: { ru:'Проблема', en:'Problem' },
  ab_prob_t: { ru:'Современные мессенджеры знают о вас слишком много',
               en:'Modern messengers know too much about you' },
  ab_prob_d: { ru:'Telegram хранит всю историю. WhatsApp требует телефон. Signal привязан к устройству. Все знают, с кем и когда вы общаетесь.',
               en:'Telegram stores all history. WhatsApp requires a phone. Signal is device-bound. They all know who you talk to and when.' },
  ab_sol_k:  { ru:'Решение', en:'Solution' },
  ab_sol_t:  { ru:'Минимум данных по архитектуре', en:'Minimum data by architecture' },
  ab_sol_d:  { ru:'ТЕНЬ не хранит данные дольше необходимого. Комнаты временные. Ники — псевдонимы. Сервер — маршрутизатор, сообщения живут 5 минут.',
               en:'ТЕНЬ doesn\'t store data longer than necessary. Rooms are temporary. Nicks are pseudonyms. Server is a router — messages live 5 minutes.' },
  tech_k: { ru:'технологии', en:'technology' },
  tech_t: { ru:'Стек', en:'Stack' },
  tech_d: { ru:'Весь проект — несколько сотен строк без фреймворков на фронтенде.',
            en:'The entire project is a few hundred lines of code, no frontend frameworks.' },

  // features full page
  feat_k: { ru:'полный список', en:'full list' },
  feat_t: { ru:'Всё что умеет ТЕНЬ', en:'Everything ТЕНЬ can do' },
  feat_d: { ru:'Мессенджер с полным набором функций — без компромисса с приватностью.',
            en:'A full-featured messenger — without compromising privacy.' },
  ff1_t:  { ru:'Сообщения реального времени',  en:'Real-time messages' },
  ff1_d:  { ru:'WebSocket. Мгновенная доставка. Статусы: отправлено → доставлено → прочитано.',
            en:'WebSocket. Instant delivery. Statuses: sent → delivered → read.' },
  ff2_t:  { ru:'Голосовые сообщения',           en:'Voice messages' },
  ff2_d:  { ru:'Запись прямо в браузере, таймер воспроизведения, работает на iOS Safari.',
            en:'Record in the browser, playback timer, works on iOS Safari.' },
  ff3_t:  { ru:'Файлы до 10MB',                 en:'Files up to 10MB' },
  ff3_d:  { ru:'Изображения — прямо в чате. Документы — скачивание. 5-минутное хранение.',
            en:'Images shown in chat. Documents for download. 5-minute storage.' },
  ff4_t:  { ru:'26 кастомных смайликов',        en:'26 custom emojis' },
  ff4_d:  { ru:'Уникальные SVG в стиле Тень: призрак, глаз, череп, замок, ворон и ещё 21.',
            en:'Unique SVGs in Тень style: ghost, eye, skull, lock, raven and 21 more.' },
  ff5_t:  { ru:'Реакции на сообщения',          en:'Message reactions' },
  ff5_d:  { ru:'Долгое нажатие → выбор реакции из кастомных смайликов. До 3 на сообщение.',
            en:'Long press → pick a reaction from custom emojis. Up to 3 per message.' },
  ff6_t:  { ru:'Закреплённые сообщения',        en:'Pinned messages' },
  ff6_d:  { ru:'Администратор закрепляет сообщение вверху чата — видно всем участникам.',
            en:'Admin pins a message at the top — visible to all participants.' },
  ff7_t:  { ru:'Пересылка сообщений',           en:'Message forwarding' },
  ff7_d:  { ru:'Свайп вправо (мобайл) или контекстное меню → выбор комнаты → пересылка.',
            en:'Swipe right (mobile) or context menu → select room → forward.' },
  ff8_t:  { ru:'Push-уведомления',              en:'Push notifications' },
  ff8_d:  { ru:'VAPID без FCM. Работает на iOS PWA и Android Chrome в фоне.',
            en:'VAPID without FCM. Works on iOS PWA and Android Chrome in background.' },
  ff9_t:  { ru:'Контакты и личные чаты',        en:'Contacts & DMs' },
  ff9_d:  { ru:'Поиск по нику, добавление, личный чат одним нажатием.',
            en:'Search by nick, add contacts, start a DM in one tap.' },
  ff10_t: { ru:'Защита скриншотов',             en:'Screenshot protection' },
  ff10_d: { ru:'Чат размывается при сворачивании. PrintScreen заблокирован в браузере.',
            en:'Chat blurs when minimized. PrintScreen blocked in the browser.' },
  ff11_t: { ru:'Одобрение входа',               en:'Entry approval' },
  ff11_d: { ru:'Администратор одобряет новых участников. Система ожидания с уведомлением.',
            en:'Admin approves new members. Waiting system with notifications.' },
  ff12_t: { ru:'Онлайн-статус',                 en:'Online status' },
  ff12_d: { ru:'«Был 5 минут назад» в профиле. Индикатор набора текста в реальном времени.',
            en:'"Was 5 minutes ago" in profile. Real-time typing indicator.' },

  // download page
  dl_k:    { ru:'установка', en:'installation' },
  dl_t:    { ru:'Скачать ТЕНЬ', en:'Download ТЕНЬ' },
  dl_d:    { ru:'Доступно на всех платформах. Прямая установка без магазинов.',
             en:'Available on all platforms. Direct install without app stores.' },
  dl1_b:   { ru:'РЕКОМЕНДУЕТСЯ', en:'RECOMMENDED' },
  dl1_t:   { ru:'Android APK', en:'Android APK' },
  dl1_d:   { ru:'Нативное приложение. Прямая установка без Google Play.', en:'Native app. Direct install without Google Play.' },
  dl1_how: { ru:'КАК УСТАНОВИТЬ', en:'HOW TO INSTALL' },
  dl1_s1:  { ru:'1. Скачайте APK-файл', en:'1. Download the APK file' },
  dl1_s2:  { ru:'2. Разрешите установку из неизвестных источников', en:'2. Allow install from unknown sources' },
  dl1_s3:  { ru:'3. Откройте скачанный файл', en:'3. Open the downloaded file' },
  dl1_s4:  { ru:'4. Установите и запустите', en:'4. Install and launch' },
  dl1_btn: { ru:'Скачать APK', en:'Download APK' },
  dl2_b:   { ru:'iOS / iPHONE', en:'iOS / iPHONE' },
  dl2_t:   { ru:'iPhone PWA', en:'iPhone PWA' },
  dl2_d:   { ru:'Добавьте на экран через Safari. Работает как нативное с уведомлениями.', en:'Add to home screen via Safari. Works like native with notifications.' },
  dl2_how: { ru:'КАК УСТАНОВИТЬ', en:'HOW TO INSTALL' },
  dl2_s1:  { ru:'1. Откройте ten-app.ru в Safari', en:'1. Open ten-app.ru in Safari' },
  dl2_s2:  { ru:'2. Нажмите кнопку «Поделиться» ⬆', en:'2. Tap the Share button ⬆' },
  dl2_s3:  { ru:'3. Выберите «На экран Домой»', en:'3. Select "Add to Home Screen"' },
  dl2_s4:  { ru:'4. Нажмите «Добавить»', en:'4. Tap "Add"' },
  dl2_btn: { ru:'Открыть в Safari', en:'Open in Safari' },
  dl3_b:   { ru:'ВСЕ БРАУЗЕРЫ', en:'ALL BROWSERS' },
  dl3_t:   { ru:'Веб-версия', en:'Web version' },
  dl3_d:   { ru:'Работает прямо в браузере на любом устройстве. Установка не нужна.', en:'Works in any browser on any device. No installation needed.' },
  dl3_btn: { ru:'Открыть в браузере', en:'Open in browser' },

  // privacy page
  pr_h1:   { ru:'Политика конфиденциальности', en:'Privacy Policy' },
  pr_date: { ru:'Последнее обновление: март 2026 · Действует с момента публикации',
             en:'Last updated: March 2026 · Effective from date of publication' },
  pr_call: { ru:'<strong>Главный принцип:</strong> ТЕНЬ создана с одной целью — анонимное общение без следов. Мы не знаем, кто вы, и намеренно избегаем получения этой информации.',
             en:'<strong>Core principle:</strong> ТЕНЬ was built with one goal — anonymous communication without traces. We don\'t know who you are and deliberately avoid learning this.' },
  pr_h2_1: { ru:'Что мы НЕ собираем', en:'What we do NOT collect' },
  pr_l1:   { ru:'Имена, email, номера телефонов — регистрации нет', en:'Names, email addresses, phone numbers — no registration' },
  pr_l2:   { ru:'IP-адреса пользователей — не сохраняются в базе данных', en:'User IP addresses — not stored in the database' },
  pr_l3:   { ru:'Геолокация — нет запроса и нет доступа', en:'Geolocation — no request and no access' },
  pr_l4:   { ru:'Список контактов устройства — не используется', en:'Device contact list — not used' },
  pr_l5:   { ru:'Идентификационные cookies — не устанавливаются', en:'Identification cookies — not set' },
  pr_l6:   { ru:'Рекламные идентификаторы — не используются', en:'Advertising identifiers — not used' },
  pr_h2_2: { ru:'Что хранится и как долго', en:'What is stored and for how long' },
  pr_s1:   { ru:'<strong>Сообщения</strong> — хранятся максимум 5 минут, затем удаляются автоматически',
             en:'<strong>Messages</strong> — stored for a maximum of 5 minutes, then automatically deleted' },
  pr_s2:   { ru:'<strong>Голосовые сообщения и файлы</strong> — те же 5 минут, затем удаляются',
             en:'<strong>Voice messages and files</strong> — same 5 minutes, then deleted' },
  pr_s3:   { ru:'<strong>Псевдонимы</strong> — только в рамках сессии; анонимные ники удаляются через 5 минут',
             en:'<strong>Pseudonyms</strong> — within session only; anonymous nicks deleted 5 minutes after logout' },
  pr_s4:   { ru:'<strong>Профиль (опционально)</strong> — хранится до удаления вами, удаляется в один клик',
             en:'<strong>Profile (optional)</strong> — stored until you delete it, removable in one click' },
  pr_s5:   { ru:'<strong>Push-подписки</strong> — только с вашего согласия, только для уведомлений',
             en:'<strong>Push subscriptions</strong> — only with your consent, only for notifications' },
  pr_s6:   { ru:'<strong>Технические логи сервера</strong> — без персональных данных, не более 24 часов',
             en:'<strong>Server technical logs</strong> — without personal data, no more than 24 hours' },
  pr_h2_3: { ru:'Локальное хранилище на устройстве', en:'Local storage on device' },
  pr_p3:   { ru:'Приложение использует localStorage браузера для хранения настроек: список чатов (только коды), профиль, контакты. Эти данные никогда не покидают ваше устройство.',
             en:'The app uses browser localStorage for settings: chat list (codes only), profile, contacts. This data never leaves your device.' },
  pr_h2_4: { ru:'Передача данных третьим лицам', en:'Third-party data sharing' },
  pr_p4:   { ru:'Мы не продаём и не монетизируем данные. Реклама отсутствует. Единственное исключение — push-уведомления технически проходят через Apple APNs и Google FCM.',
             en:'We do not sell or monetize data. No advertising. The only exception — push notifications technically pass through Apple APNs and Google FCM.' },
  pr_h2_5: { ru:'Шифрование', en:'Encryption' },
  pr_p5:   { ru:'Все соединения защищены HTTPS/TLS. При разговоре вдвоём — E2E шифрование ECDH P-256 + AES-GCM 256. В этом режиме сервер видит только зашифрованный поток.',
             en:'All connections are HTTPS/TLS. In two-person rooms — E2E encryption ECDH P-256 + AES-GCM 256. The server receives only encrypted data.' },
  pr_h2_6: { ru:'Ваши права', en:'Your rights' },
  pr_r1:   { ru:'Покиньте комнату — ваши сообщения исчезнут через 5 минут', en:'Leave the room — your messages will disappear in 5 minutes' },
  pr_r2:   { ru:'Удалите любое сообщение вручную (долгое нажатие)', en:'Delete any message manually (long press)' },
  pr_r3:   { ru:'Удалите профиль в один клик — немедленно удаляется из базы', en:'Delete your profile in one click — immediately removed from database' },
  pr_r4:   { ru:'Войдите анонимно — ник генерируется автоматически и удаляется через 5 минут', en:'Log in anonymously — nick is auto-generated and deleted in 5 minutes' },
  pr_h2_7: { ru:'Юрисдикция', en:'Jurisdiction' },
  pr_p7:   { ru:'Сервер расположен в Сингапуре (Railway). Сервис предоставляется «как есть». Мы не несём ответственности за содержимое переписки между пользователями.',
             en:'The server is located in Singapore (Railway). Service provided "as is". We are not responsible for the content of user communications.' },

  // terms
  tm_h1:   { ru:'Условия использования', en:'Terms of Use' },
  tm_date: { ru:'Последнее обновление: март 2026', en:'Last updated: March 2026' },
  tm_p0:   { ru:'Используя ТЕНЬ, вы принимаете следующие условия. Если вы не согласны — пожалуйста, не используйте сервис.',
             en:'By using ТЕНЬ you accept these terms. If you disagree — please do not use the service.' },
  tm_h2_1: { ru:'Разрешено', en:'Permitted' },
  tm_a1:   { ru:'Использовать для личного анонимного общения', en:'Use for personal anonymous communication' },
  tm_a2:   { ru:'Создавать неограниченное количество комнат', en:'Create unlimited rooms' },
  tm_a3:   { ru:'Приглашать участников по 6-значному коду', en:'Invite participants via 6-digit code' },
  tm_a4:   { ru:'Использовать на любых устройствах', en:'Use on any device' },
  tm_a5:   { ru:'Удалять сообщения и профиль в любое время', en:'Delete messages and profile at any time' },
  tm_h2_2: { ru:'Запрещено', en:'Prohibited' },
  tm_b1:   { ru:'Использовать для незаконной деятельности', en:'Use for illegal activities' },
  tm_b2:   { ru:'Распространять вредоносный контент, спам, вирусы', en:'Distribute malicious content, spam, viruses' },
  tm_b3:   { ru:'Атаковать, перегружать или взламывать сервис', en:'Attack, overload or hack the service' },
  tm_b4:   { ru:'Выдавать себя за другого человека', en:'Impersonate another person' },
  tm_b5:   { ru:'Использовать ник «ТЕНЬ» без специального разрешения', en:'Use the nick "ТЕНЬ" without special permission' },
  tm_h2_3: { ru:'Ограничение ответственности', en:'Limitation of liability' },
  tm_p3:   { ru:'Сервис предоставляется «как есть». Сообщения удаляются через 5 минут — мы не несём ответственности за потерю данных. Сервис может быть недоступен без предупреждения.',
             en:'Service provided "as is". Messages are deleted after 5 minutes — we are not responsible for data loss. Service may be unavailable without notice.' },
  tm_h2_4: { ru:'Изменение условий', en:'Changes to terms' },
  tm_p4:   { ru:'Мы вправе изменять условия. Продолжение использования сервиса после публикации новых условий означает ваше согласие.',
             en:'We may change the terms at any time. Continued use after new terms are published constitutes acceptance.' },


  // platform buttons (home hero)
  pf_android_l: { ru:'Android',            en:'Android' },
  pf_android_s: { ru:'Скачать APK',        en:'Download APK' },
  pf_ios_l:     { ru:'iPhone',             en:'iPhone' },
  pf_ios_s:     { ru:'Открыть в Safari',   en:'Open in Safari' },
  pf_web_l:     { ru:'Браузер',            en:'Browser' },
  pf_web_s:     { ru:'Открыть онлайн',     en:'Open online' },

  // footer
  foot_copy: { ru:'© 2026 ТЕНЬ · ten-app.ru', en:'© 2026 ТЕНЬ · ten-app.ru' },
};

// ── CURRENT LANGUAGE ─────────────────────────────────
let lang = localStorage.getItem('ten_lang') || 'ru';

function t(key) {
  return (T[key] && T[key][lang]) || (T[key] && T[key]['ru']) || key;
}

function applyLang() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const v = t(key);
    if(v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-t-href]').forEach(el => {
    // keep href as is
  });
  document.getElementById('btn-ru').classList.toggle('on', lang === 'ru');
  document.getElementById('btn-en').classList.toggle('on', lang === 'en');
  document.documentElement.lang = lang;
}

function setLang(l) {
  lang = l;
  localStorage.setItem('ten_lang', l);
  applyLang();
}

// ── NAV ACTIVE ────────────────────────────────────────
function setNavActive(pageId) {
  document.querySelectorAll('.nav-center a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === pageId + '.html' ||
      (pageId === 'index' && a.getAttribute('href') === 'index.html'));
  });
}

// ── MOBILE BURGER ────────────────────────────────────
function initBurger() {
  const burger = document.getElementById('burger');
  const center = document.getElementById('nav-center');
  if(!burger || !center) return;
  burger.addEventListener('click', () => center.classList.toggle('open'));
  document.addEventListener('click', e => {
    if(!e.target.closest('nav')) center.classList.remove('open');
  });
}

// ── MATRIX RAIN ──────────────────────────────────────
function initMatrix(canvasId) {
  const canvas = document.getElementById(canvasId);
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const CHARS = 'ТЕНЬ·01';
  const SZ = 13, SPD = 0.35;
  let cols, drops;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    cols  = Math.ceil(canvas.width / SZ);
    drops = Array.from({length: cols}, (_, i) => -Math.random() * (canvas.height / SZ) * (1 + i % 4));
  }

  function tick() {
    ctx.fillStyle = 'rgba(8,10,15,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `bold ${SZ - 1}px "JetBrains Mono", monospace`;
    for(let i = 0; i < cols; i++) {
      const r = Math.floor(drops[i]);
      const ch = CHARS[((r % CHARS.length) + CHARS.length) % CHARS.length];
      // head — bright white
      ctx.fillStyle = 'rgba(255,255,255,.9)';
      ctx.fillText(ch, i * SZ, r * SZ);
      // trail — green fade
      for(let j = 1; j <= 8; j++) {
        const a = (1 - j / 9) * .55;
        ctx.fillStyle = `rgba(0,229,160,${a})`;
        const py = (r - j) * SZ;
        if(py > 0) ctx.fillText(CHARS[((r - j) % CHARS.length + CHARS.length) % CHARS.length], i * SZ, py);
      }
      drops[i] += SPD;
      if(drops[i] * SZ > canvas.height && Math.random() > .975) drops[i] = 0;
    }
    requestAnimationFrame(tick);
  }
  resize();
  new ResizeObserver(resize).observe(canvas);
  tick();
}

// ── SCROLL REVEAL ────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── CURSOR GLOW ──────────────────────────────────────
function initCursorGlow() {
  const g = document.createElement('div');
  g.style.cssText = 'position:fixed;width:280px;height:280px;border-radius:50%;pointer-events:none;z-index:0;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(0,229,160,.04) 0%,transparent 70%);transition:left .08s,top .08s';
  document.body.appendChild(g);
  document.addEventListener('mousemove', e => { g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; });
}

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  initBurger();
  initReveal();
  initCursorGlow();
});
