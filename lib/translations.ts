import { additionalTranslations } from './translations-additional'

export type Language = 'en' | 'ar' | 'ru' | 'zh' | 'de' | 'el' | 'es' | 'fr' | 'hi' | 'it' | 'pt' | 'tr'

export interface Translations {
  // Header
  header: {
    features: string
    forUsers: string
    forCreators: string
    news: string
    signIn: string
  }

  // Hero Section
  hero: {
    badge: string
    title1: string
    title2: string
    title2Highlight: string
    description: string
    appStore: string
    googlePlay: string
    downloadOn: string
    getItOn: string
    downloads: string
    activeUsers: string
    verifiedCreators: string
  }

  // Features Section
  features: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    moreEarnings: string
    moreEarningsDesc: string
    verification: string
    verificationDesc: string
    liveStreamRevenue: string
    liveStreamRevenueDesc: string
    cleanCommunity: string
    cleanCommunityDesc: string
    easyVerification: string
    easyVerificationDesc: string
    searchByCategory: string
    searchByCategoryDesc: string
    varietyMatters: string
    varietyMattersDesc: string
    getMoreForLess: string
    getMoreForLessDesc: string
    earnMore: string
    earnMoreDesc: string
  }

  // Testimonials
  testimonials: {
    badge: string
    title: string
    titleHighlight: string
    description: string
  }

  // FAQ
  faq: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    q1: string
    a1: string
    q2: string
    a2: string
    q3: string
    a3: string
    q4: string
    a4: string
    q5: string
    a5: string
    q6: string
    a6: string
    q7: string
    a7: string
    q8: string
    a8: string
    q9: string
    a9: string
    q10: string
    a10: string
    q11: string
    a11: string
    q12: string
    a12: string
    q13: string
    a13: string
    q14: string
    a14: string
    q15: string
    a15: string
    q16: string
    a16: string
    q17: string
    a17: string
    q18: string
    a18: string
  }

  // CTA Section
  cta: {
    badge: string
    title1: string
    title2: string
    description: string
    downloadOn: string
    getItOn: string
    joinUsers: string
  }

  // Footer
  footer: {
    tagline: string
    product: string
    company: string
    legal: string
    features: string
    forUsers: string
    forCreators: string
    news: string
    contact: string
    privacyPolicy: string
    termsOfUse: string
    copyright: string
    madeWith: string
    allRightsReserved: string
  }

  // For Creators Section
  forCreators: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    easyTools: string
    easyToolsDesc: string
    mainBenefit: string
    mainBenefitDesc: string
    authenticity: string
    authenticityDesc: string
    moments: string
    momentsDesc: string
    downloadNow: string
  }

  // Download Reasons Section
  download: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    reason1: string
    reason2: string
    reason3: string
    reason4: string
    reason5: string
    reason6: string
    reason7: string
    reason8: string
    reason9: string
    reason10: string
    cta: string
    ctaDesc: string
    downloadOn: string
    getItOn: string
  }

  // Language selector
  language: {
    english: string
    arabic: string
    german: string
    greek: string
    spanish: string
    french: string
    hindi: string
    italian: string
    portuguese: string
    russian: string
    turkish: string
    chinese: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    // Header
    header: {
      features: 'Features',
      forUsers: 'For Users',
      forCreators: 'For Creators',
      news: 'News',
      signIn: 'Sign In',
    },

    // Hero Section
    hero: {
      badge: 'Now Available on iOS & Android',
      title1: 'Social Media',
      title2: 'Made',
      title2Highlight: 'Better.',
      description: 'Your platform for exciting, spontaneous, genuine videos & photos. Watch and engage with what you like.',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      downloadOn: 'Download on the',
      getItOn: 'Get it on',
      downloads: 'Downloads',
      activeUsers: 'Active Users',
      verifiedCreators: 'Verified Creators',
    },

    // Features Section
    features: {
      badge: 'What Makes us Different',
      title: 'Your Personalized',
      titleHighlight: 'Social Experience',
      description: 'Whether you are a Celebrity, Content Creator or a Streamer that loves to share moments, there is always a place for you on Telefanz.',
      moreEarnings: 'More Earnings',
      moreEarningsDesc: 'Earn Coinzz by creating content or receiving support from your fans — your engagement turns into real value',
      verification: 'Plus+ Verification',
      verificationDesc: 'Verify your identity, choose your profile category, subscribe, and unlock full access with a trusted Blue Tick',
      liveStreamRevenue: 'Live Stream Revenue',
      liveStreamRevenueDesc: 'Go live, receive gifts, and earn Coinzz in real time while interacting with your audience',
      cleanCommunity: 'Clean Community',
      cleanCommunityDesc: 'Only verified users can post or interact, creating a safer, spam-free social media environment',
      easyVerification: 'Easy Verification',
      easyVerificationDesc: 'Quick face and ID verification ensures one real person per account and protects your identity',
      searchByCategory: 'Search By Category',
      searchByCategoryDesc: 'Discover Verified Creators across 95 profile categories and find exactly who you\'re looking for',
      varietyMatters: 'Variety Matters',
      varietyMattersDesc: 'Explore diverse content from creators worldwide across multiple categories and interests',
      getMoreForLess: 'Get More For Less',
      getMoreForLessDesc: 'Affordable Coinzz plans with better value — support creators without overspending',
      earnMore: 'Earn More & More & More',
      earnMoreDesc: 'Telefanz takes Zero Commission on creator earnings — only standard app store fees apply',
    },

    // Testimonials
    testimonials: {
      badge: 'Testimonials',
      title: 'Loved by Creators',
      titleHighlight: 'Worldwide',
      description: 'See what our community has to say about their Telefanz experience.',
    },

    // FAQ
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked',
      titleHighlight: 'Questions',
      description: 'Got questions? We\'ve got answers. If you can\'t find what you\'re looking for, reach out to our support team.',
      q1: 'What is Telefanz?',
      a1: 'Telefanz is a next-generation social media platform and mobile app for watching, creating, and sharing short videos, photos, stories, and live streams. It is built around real identities, verified creators, and a safe global community focused on authentic content.',
      q2: 'How do I join Telefanz?',
      a2: 'You can join Telefanz by downloading the app from the App Store or Google Play Store and signing up using Email, Google, or Apple login. Once registered, you can immediately start watching reels, feeds, and live streams for free.',
      q3: 'Do I need to verify my account?',
      a3: 'No. Verification is not required to watch content. Anyone can browse reels, feeds, and live streams freely. However, to post content (videos, photos, or stories), comment, send messages, go live, or send gifts, users must complete identity verification.',
      q4: 'What happens during verification?',
      a4: 'Verification includes face recognition and government ID validation. Each person can verify only one account. Once approved, you choose your profile category, select a subscription plan, and your account becomes fully active with a Blue Tick.',
      q5: 'What kind of content can I post?',
      a5: 'Verified users can post short videos, photos, and stories, and they can also host live streams. Content can showcase creativity, daily moments, announcements, or real-time interactions with fans and followers.',
      q6: 'What are Coinzz and how do I earn them?',
      a6: 'Coinzz is Telefanz\'s in-app virtual currency. Creators earn Coinzz through gifts from fans during live streams and platform engagement. Coinzz can be redeemed into wallet balance and withdrawn. Telefanz takes zero commission on creator earnings.',
      q7: 'How do gifts work during livestreams?',
      a7: 'During live streams, viewers can send virtual gifts using Coinzz (up to 50,000 Coinzz per gift). Creators receive these gifts instantly and can redeem them later.',
      q8: 'Does Telefanz take any commission from creators?',
      a8: 'No. Telefanz takes zero platform commission on gifts or Coinzz collected. Only standard Apple App Store and Google Play Store fees apply.',
      q9: 'How do I find content I\'m interested in?',
      a9: 'You can browse content using smart discovery modes available for both reels and feeds: Following, Discover, Nearby, and Trending. You can also search verified creators by category from 95 available profile categories.',
      q10: 'Is Telefanz free to use?',
      a10: 'Yes. Telefanz is free to download and use for watching content and live streams. Verification and subscription are required only for users who want to interact, publish content (including stories), or go live.',
      q11: 'What is the Blue Tick?',
      a11: 'The Blue Tick shows that a user\'s identity is verified and that they have full access to Telefanz features, including posting videos, photos, and stories, commenting, messaging, and live streaming.',
      q12: 'What is the Golden Tick?',
      a12: 'The Golden Tick is an exclusive recognition awarded by Telefanz to highly active and consistent creators. It cannot be purchased and is granted based on activity and engagement.',
      q13: 'How does Telefanz keep the platform safe?',
      a13: 'Only verified users can post or interact, and all content is reviewed before going live. Strong moderation policies help maintain a clean, respectful, and scam-free community.',
      q14: 'What social features are available?',
      a14: 'All users can watch reels, feeds, stories, and live streams. Verified users can also like, comment, share, message, follow creators by category, post videos/photos/stories, go live, and send gifts.',
      q15: 'Can I use Telefanz in different languages?',
      a15: 'Yes. Telefanz supports multiple languages to make the platform accessible to users around the world.',
      q16: 'What should I do if I have account or login issues?',
      a16: 'If you experience login or account activation issues, check your email and spam folder for verification messages. If the problem continues, contact support at support@telefanz.com',
      q17: 'Where can I find Telefanz\'s Terms and Privacy Policy?',
      a17: 'You can access Telefanz\'s Terms of Use and Privacy Policy through the links at the bottom of the website or inside the app. These explain how your data is protected and used.',
      q18: 'Who can I contact for help?',
      a18: 'For any questions, feedback, or support requests, please contact us at support@telefanz.com',
    },

    // CTA Section
    cta: {
      badge: 'Join Users Worldwide',
      title1: 'Ready to Join the',
      title2: 'Community?',
      description: 'Download Telefanz today and start connecting with millions of creators and fans around the world. Your audience is waiting.',
      downloadOn: 'Download on the',
      getItOn: 'Get it on',
      joinUsers: 'Join Users Worldwide',
    },

    // For Creators Section
    forCreators: {
      badge: 'For Users & Creators',
      title: 'With Telefanz',
      titleHighlight: 'You Can Do More',
      description: 'You can develop authentic connections with your Fanz on the safest social media platform in the world.',
      easyTools: 'We make it easy for you',
      easyToolsDesc: 'Discover and create your own original videos & photos by providing easy-to-use tools',
      mainBenefit: 'Main Benefit',
      mainBenefitDesc: 'Be entertained and inspired by a global community of Verified Content Creators',
      authenticity: 'Authentic Connections',
      authenticityDesc: 'Develop authentic connections with your Fanz on the safest social media platform in the world',
      moments: 'Every moment counts',
      momentsDesc: 'Share your joy with the world on Telefanz - capture your daily moments effortlessly',
      downloadNow: 'Download Now',
    },

    // Download Reasons Section
    download: {
      badge: 'Get Started Today',
      title: 'Why Download',
      titleHighlight: 'Telefanz',
      description: 'Telefanz is your platform for exciting, spontaneous, genuine videos & photos.',
      reason1: 'Watch endless short videos & photos for free',
      reason2: 'Browse reels & feeds: Following, Discover, Nearby & Trending',
      reason3: 'Search verified creators across 95 profile categories',
      reason4: 'Enjoy free access to LIVE streams worldwide',
      reason5: 'Discover content in a clean, spam-free environment',
      reason6: 'Verify once with face & ID to unlock full interaction',
      reason7: 'One person = one verified account for maximum safety',
      reason8: 'Publish, comment, message & go live as a verified user',
      reason9: 'Send & receive gifts during live streams',
      reason10: 'Earn Coinzz with ZERO platform commission',
      cta: 'So, what are you waiting for?',
      ctaDesc: 'Download the TeleFanz app today and start enjoying a world of connections easily made.',
      downloadOn: 'Download on the',
      getItOn: 'Get it on',
    },

    // Footer
    footer: {
      tagline: 'Social Media Made Better.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      features: 'Features',
      forUsers: 'For Users',
      forCreators: 'For Creators',
      news: 'News',
      contact: 'Contact',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      copyright: 'All Rights Reserved',
      madeWith: 'Made with love for creators everywhere.',
      allRightsReserved: 'Copyright {year} All Rights Reserved by Telefanz Portal.',
    },

    // Language selector
    language: {
      english: 'English',
      arabic: 'العربية',
      german: 'Deutsch',
      greek: 'Ελληνικά',
      spanish: 'Español',
      french: 'Français',
      hindi: 'हिन्दी',
      italian: 'Italiano',
      portuguese: 'Português',
      russian: 'Русский',
      turkish: 'Türkçe',
      chinese: '中文',
    },
  },

  ar: {
    // Header
    header: {
      features: 'المميزات',
      forUsers: 'للمستخدمين',
      forCreators: 'للمنشئين',
      news: 'الأخبار',
      signIn: 'تسجيل الدخول',
    },

    // Hero Section
    hero: {
      badge: 'متاح الآن على iOS و Android',
      title1: 'وسائل التواصل الاجتماعي',
      title2: 'جعلت',
      title2Highlight: 'أفضل.',
      description: 'منصتك لمقاطع فيديو وصور مثيرة وحقيقية وعفوية. شاهد والتزم مع ما تحب.',
      appStore: 'متجر التطبيقات',
      googlePlay: 'Google Play',
      downloadOn: 'التحميل على',
      getItOn: 'احصل عليه على',
      downloads: 'التحميلات',
      activeUsers: 'المستخدمون النشطون',
      verifiedCreators: 'المنشئون المتحققون',
    },

    // Features Section
    features: {
      badge: 'ما يجعلنا مختلفين',
      title: 'تجربتك الاجتماعية',
      titleHighlight: 'المخصصة',
      description: 'سواء كنت مشهوراً أو منشئ محتوى أو مراسلاً تحب مشاركة اللحظات، هناك دائماً مكان لك على Telefanz.',
      moreEarnings: 'المزيد من الأرباح',
      moreEarningsDesc: 'اكسب عملات Coinzz من خلال إنشاء محتوى أو تلقي الدعم من المعجبين - يتحول تفاعلك إلى قيمة حقيقية',
      verification: 'التحقق من Plus+',
      verificationDesc: 'تحقق من هويتك واختر فئة ملفك الشخصي واشترك وأطلق العنان للوصول الكامل مع علامة زرقاء موثوقة',
      liveStreamRevenue: 'دخل البث المباشر',
      liveStreamRevenueDesc: 'ابدأ البث المباشر واستقبل الهدايا واكسب Coinzz في الوقت الفعلي أثناء التفاعل مع جمهورك',
      cleanCommunity: 'مجتمع نظيف',
      cleanCommunityDesc: 'فقط المستخدمون المتحققون يمكنهم النشر أو التفاعل، مما يخلق بيئة وسائط اجتماعية أكثر أماناً وخالية من الرسائل غير المرغوبة',
      easyVerification: 'التحقق السهل',
      easyVerificationDesc: 'يضمن التحقق السريع من الوجه والهوية شخصاً واحداً حقيقياً لكل حساب ويحمي هويتك',
      searchByCategory: 'البحث حسب الفئة',
      searchByCategoryDesc: 'اكتشف المنشئين المتحققين عبر 95 فئة ملف شخصي وابحث عن من تبحث عنه بالضبط',
      varietyMatters: 'التنويع مهم',
      varietyMattersDesc: 'استكشف محتوى متنوع من المنشئين في جميع أنحاء العالم عبر فئات واهتمامات متعددة',
      getMoreForLess: 'احصل على المزيد بأقل',
      getMoreForLessDesc: 'خطط Coinzz ميسورة التكلفة بقيمة أفضل - ادعم المنشئين دون الإنفاق الزائد',
      earnMore: 'اكسب أكثر وأكثر وأكثر',
      earnMoreDesc: 'Telefanz تأخذ صفر عمولة على أرباح المنشئين - فقط رسوم متجر التطبيقات القياسية تنطبق',
    },

    // Testimonials
    testimonials: {
      badge: 'شهادات',
      title: 'يحبها المنشئون',
      titleHighlight: 'في جميع أنحاء العالم',
      description: 'شاهد ما يقوله مجتمعنا عن تجربتهم مع Telefanz.',
    },

    // FAQ
    faq: {
      badge: 'الأسئلة الشائعة',
      title: 'أسئلة',
      titleHighlight: 'متكررة',
      description: 'هل لديك أسئلة؟ لدينا إجابات. إذا لم تتمكن من العثور على ما تبحث عنه، تواصل مع فريق الدعم لدينا.',
      q1: 'ما هو Telefanz؟',
      a1: 'Telefanz هي منصة وسائط اجتماعية من الجيل التالي وتطبيق جوال لمشاهدة وإنشاء ومشاركة مقاطع الفيديو والصور والقصص والبث المباشر. تم بناؤها حول الهويات الحقيقية والمنشئين المتحققين ومجتمع عالمي آمن يركز على المحتوى الأصلي.',
      q2: 'كيف انضم إلى Telefanz؟',
      a2: 'يمكنك الانضمام إلى Telefanz بتحميل التطبيق من App Store أو Google Play Store والاشتراك باستخدام البريد الإلكتروني أو Google أو تسجيل الدخول عبر Apple. بمجرد التسجيل، يمكنك البدء في مشاهدة الملفات والتغذيات والبث المباشر مجاناً على الفور.',
      q3: 'هل أحتاج إلى التحقق من حسابي؟',
      a3: 'لا. التحقق غير مطلوب لمشاهدة المحتوى. يمكن لأي شخص تصفح الملفات والتغذيات والبث المباشر بحرية. ومع ذلك، لنشر محتوى (مقاطع فيديو أو صور أو قصص)، أو التعليق، أو إرسال الرسائل، أو البث المباشر، أو إرسال الهدايا، يجب على المستخدمين إكمال التحقق من الهوية.',
      q4: 'ماذا يحدث أثناء التحقق؟',
      a4: 'يتضمن التحقق التعرف على الوجه والتحقق من الهوية الحكومية. كل شخص يمكنه التحقق من حساب واحد فقط. بمجرد الموافقة، تختار فئة ملفك الشخصي وتختار خطة الاشتراك ويصبح حسابك نشطاً بالكامل مع علامة زرقاء.',
      q5: 'ما نوع المحتوى الذي يمكنني نشره؟',
      a5: 'يمكن للمستخدمين المتحققين نشر مقاطع الفيديو والصور والقصص، ويمكنهم أيضاً استضافة بثوة مباشرة. يمكن للمحتوى عرض الإبداع واللحظات اليومية والإعلانات أو التفاعلات الحية مع المعجبين والمتابعين.',
      q6: 'ما هي عملات Coinzz وكيف اكسبها؟',
      a6: 'Coinzz هي العملة الافتراضية في التطبيق الخاص بـ Telefanz. يكسب المنشئون Coinzz من خلال الهدايا من المعجبين أثناء البث المباشر والتفاعل مع المنصة. يمكن استرجاع Coinzz إلى رصيد محفظة والسحب. Telefanz تأخذ صفر عمولة على أرباح المنشئين.',
      q7: 'كيف تعمل الهدايا أثناء البث المباشر؟',
      a7: 'أثناء البث المباشر، يمكن للمشاهدين إرسال هدايا افتراضية باستخدام Coinzz (حتى 50000 Coinzz لكل هدية). يتلقى المنشئون هذه الهدايا على الفور ويمكنهم استرجاعها لاحقاً.',
      q8: 'هل تأخذ Telefanz أي عمولة من المنشئين؟',
      a8: 'لا. Telefanz تأخذ صفر عمولة منصة على الهدايا أو Coinzz المجمعة. فقط رسوم Apple App Store و Google Play Store القياسية تنطبق.',
      q9: 'كيف أجد المحتوى الذي أهتم به؟',
      a9: 'يمكنك تصفح المحتوى باستخدام أوضاع الاكتشاف الذكية المتاحة للملفات والتغذيات: المتابعة والاكتشاف والقريب والاتجاه. يمكنك أيضاً البحث عن المنشئين المتحققين حسب الفئة من 95 فئة ملف شخصي متاحة.',
      q10: 'هل Telefanz مجاني الاستخدام؟',
      a10: 'نعم. Telefanz مجاني للتحميل والاستخدام لمشاهدة المحتوى والبث المباشر. التحقق والاشتراك مطلوبان فقط للمستخدمين الذين يرغبون في التفاعل أو نشر المحتوى (بما في ذلك القصص) أو البث المباشر.',
      q11: 'ما هي العلامة الزرقاء؟',
      a11: 'تُظهر العلامة الزرقاء أن هوية المستخدم تم التحقق منها وأن لديهم وصول كامل إلى ميزات Telefanz، بما في ذلك نشر مقاطع الفيديو والصور والقصص والتعليق والرسائل والبث المباشر.',
      q12: 'ما هي العلامة الذهبية؟',
      a12: 'العلامة الذهبية هي اعتراف حصري من Telefanz للمنشئين النشطين والمتسقين للغاية. لا يمكن شراؤها ويتم منحها بناءً على النشاط والتفاعل.',
      q13: 'كيف تحافظ Telefanz على سلامة المنصة؟',
      a13: 'فقط المستخدمون المتحققون يمكنهم النشر أو التفاعل، وجميع المحتوى يتم فحصه قبل النشر المباشر. تساعد سياسات الاعتدال القوية في الحفاظ على مجتمع نظيف واحترامي وخالي من الاحتيال.',
      q14: 'ما هي ��يزات الوسائط الاجتماعية المتاحة؟',
      a14: 'يمكن لجميع المستخدمين مشاهدة الملفات والتغذيات والقصص والبث المباشر. يمكن للمستخدمين المتحققين أيضاً الإعجاب والتعليق والمشاركة والرسائل ومتابعة المنشئين حسب الفئة ونشر مقاطع الفيديو / الصور / القصص والبث المباشر وإرسال الهدايا.',
      q15: 'هل يمكنني استخدام Telefanz بلغات مختلفة؟',
      a15: 'نعم. Telefanz يدعم لغات متعددة لجعل المنصة متاحة للمستخدمين في جميع أنحاء العالم.',
      q16: 'ماذا أفعل إذا واجهت مشاكل في الحساب أو تسجيل الدخول؟',
      a16: 'إذا واجهت مشاكل في تسجيل الدخول أو تفعيل الحساب، تحقق من بريدك الإلكتروني ومجلد الرسائل غير المرغوبة للحصول على رسائل التحقق. إذا استمرت المشكلة، اتصل بالدعم على support@telefanz.com',
      q17: 'أين أجد شروط وسياسة الخصوصية الخاصة بـ Telefanz؟',
      a17: 'يمكنك الوصول إلى شروط الاستخدام وسياسة الخصوصية الخاصة بـ Telefanz من خلال الروابط في أسفل الموقع أو داخل التطبيق. هذه تشرح كيف يتم حماية بيانات واستخدامها.',
      q18: 'من يمكنني الاتصال به للحصول على المساعدة؟',
      a18: 'للحصول على أي أسئلة أو ملاحظات أو طلبات دعم، يرجى الاتصال بنا على support@telefanz.com',
    },

    // CTA Section
    cta: {
      badge: 'انضم إلى المستخدمين في جميع أنحاء العالم',
      title1: 'هل أنت مستعد للانضمام إلى',
      title2: 'المجتمع؟',
      description: 'حمل Telefanz اليوم وابدأ في التواصل مع ملايين المنشئين والمعجبين حول العالم. جمهورك في انتظارك.',
      downloadOn: 'التحميل على',
      getItOn: 'احصل عليه على',
      joinUsers: 'انضم إلى المستخدمين في جميع أنحاء العالم',
    },

    // For Creators Section
    forCreators: additionalTranslations.ar.forCreators,

    // Download Reasons Section
    download: additionalTranslations.ar.download,

    // Footer
    footer: {
      tagline: 'وسائل التواصل الاجتماعي جعلت أفضل.',
      product: 'منتج',
      company: 'شركة',
      legal: 'قانوني',
      features: 'المميزات',
      forUsers: 'للمستخدمين',
      forCreators: 'للمنشئين',
      news: 'الأخبار',
      contact: 'اتصل بنا',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfUse: 'شروط الاستخدام',
      copyright: 'جميع الحقوق محفوظة',
      madeWith: 'مصنوع بحب للمنشئين في كل مكان.',
      allRightsReserved: 'حقوق النشر {year} جميع الحقوق محفوظة بواسطة بوابة Telefanz.',
    },

    // Language selector
    language: {
      english: 'English',
      arabic: 'العربية',
      german: 'الألمانية',
      greek: 'اليونانية',
      spanish: 'الإسبانية',
      french: 'الفرنسية',
      hindi: 'الهندية',
      italian: 'الإيطالية',
      portuguese: 'البرتغالية',
      russian: 'الروسية',
      turkish: 'التركية',
      chinese: 'الصينية',
    },
  },

  ru: {
    // Header
    header: {
      features: 'Особенности',
      forUsers: 'Для пользователей',
      forCreators: 'Для создателей',
      news: 'Новости',
      signIn: 'Войти',
    },

    // Hero Section
    hero: {
      badge: 'Теперь доступно на iOS и Android',
      title1: 'Социальные сети',
      title2: 'Сделано',
      title2Highlight: 'Лучше.',
      description: 'Ваша платформа для захватывающих, спонтанных, подлинных видеороликов и фотографий. Смотрите и взаимодействуйте с тем, что вам нравится.',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      downloadOn: 'Загрузите на',
      getItOn: 'Получите на',
      downloads: 'Загрузки',
      activeUsers: 'Активные пользователи',
      verifiedCreators: 'Проверенные создатели',
    },

    // Features Section
    features: {
      badge: 'Что нас отличает',
      title: 'Ваш персональный опыт',
      titleHighlight: 'на платформе',
      description: 'Являетесь ли вы знаменитостью, создателем контента или стримером, который любит делиться моментами, на Telefanz всегда найдется место для вас.',
      moreEarnings: 'Больше заработков',
      moreEarningsDesc: 'Зарабатывайте Coinzz, создавая контент или получая поддержку от своих поклонников — ваше взаимодействие превращается в реальную стоимость',
      verification: 'Верификация Plus+',
      verificationDesc: 'Проверьте свою личность, выберите категорию профиля, подпишитесь и откройте полный доступ с надежной голубой галочкой',
      liveStreamRevenue: 'Доход от прямых трансляций',
      liveStreamRevenueDesc: 'Трансляйте в прямом эфире, получайте подарки и зарабатывайте Coinzz в реальном времени, взаимодействуя с вашей аудиторией',
      cleanCommunity: 'Чистое сообщество',
      cleanCommunityDesc: 'Только проверенные пользователи могут публиковать или взаимодействовать, создавая безопасную среду социальных сетей без спама',
      easyVerification: 'Простая верификация',
      easyVerificationDesc: 'Быстрая проверка лица и удостоверения личности гарантирует одного реального человека на аккаунт и защищает вашу личность',
      searchByCategory: 'Поиск по категориям',
      searchByCategoryDesc: 'Откройте для себя проверенных создателей в 95 категориях профиля и найдите именно того, кого вы ищете',
      varietyMatters: 'Разнообразие важно',
      varietyMattersDesc: 'Изучайте разнообразный контент от создателей со всего мира в различных категориях и интересах',
      getMoreForLess: 'Получите больше за меньше',
      getMoreForLessDesc: 'Доступные планы Coinzz с лучшей стоимостью — поддерживайте создателей без переплаты',
      earnMore: 'Зарабатывайте больше и больше',
      earnMoreDesc: 'Telefanz берет нулевую комиссию с доходов создателей — применяются только стандартные сборы app store',
    },

    // Testimonials
    testimonials: {
      badge: 'Отзывы',
      title: 'Любима создателями',
      titleHighlight: 'по всему миру',
      description: 'Посмотрите, что говорит наше сообщество о своем опыте на Telefanz.',
    },

    // FAQ
    faq: {
      badge: 'Часто задаваемые вопросы',
      title: 'Часто задаваемые',
      titleHighlight: 'вопросы',
      description: 'Есть вопросы? У нас есть ответы. Если вы не можете найти то, что ищете, обратитесь в нашу команду поддержки.',
      q1: 'Что такое Telefanz?',
      a1: 'Telefanz — это платформа социальных сетей нового поколения и мобильное приложение для просмотра, создания и обмена короткими видео, фотографиями, историями и прямыми трансляциями. Она построена на основе подлинных личностей, проверенных создателей и безопасного глобального сообщества, ориентированного на подлинный контент.',
      q2: 'Как присоединиться к Telefanz?',
      a2: 'Вы можете присоединиться к Telefanz, загрузив приложение из App Store или Google Play Store и зарегистрировавшись с помощью электронной почты, Google или Apple. После регистрации вы можете сразу же начать просматривать ленты, кормление и прямые трансляции бесплатно.',
      q3: 'Нужно ли мне проверять свой аккаунт?',
      a3: 'Нет. Верификация не требуется для просмотра контента. Любой может свободно просматривать ленты, кормление и прямые трансляции. Однако для публикации контента (видео, фотографий или историй), комментирования, отправки сообщений, прямых трансляций или отправки подарков пользователи должны пройти проверку личности.',
      q4: 'Что происходит во время верификации?',
      a4: 'Верификация включает распознавание лица и проверку государственного удостоверения личности. Каждый человек может проверить только один аккаунт. После одобрения вы выбираете категорию профиля, выбираете план подписки, и ваш аккаунт становится полностью активным с голубой галочкой.',
      q5: 'Какой контент я могу публиковать?',
      a5: 'Проверенные пользователи могут публиковать короткие видео, фотографии и истории, а также могут проводить прямые трансляции. Контент может демонстрировать творчество, повседневные моменты, объявления или живое взаимодействие с поклонниками и подписчиками.',
      q6: 'Что такое Coinzz и как их заработать?',
      a6: 'Coinzz — это виртуальная валюта Telefanz в приложении. Создатели зарабатывают Coinzz через подарки от поклонников во время прямых трансляций и взаимодействия с платформой. Coinzz можно обменять на баланс кошелька и вывести. Telefanz берет нулевую комиссию с доходов создателей.',
      q7: 'Как работают подарки во время прямых трансляций?',
      a7: 'Во время прямых трансляций зрители могут отправлять виртуальные подарки, используя Coinzz (до 50000 Coinzz за подарок). Создатели получают эти подарки мгновенно и могут обменять их позже.',
      q8: 'Берет ли Telefanz комиссию у создателей?',
      a8: 'Нет. Telefanz не берет комиссию платформы с подарков или собранных Coinzz. Применяются только стандартные комиссии Apple App Store и Google Play Store.',
      q9: 'Как мне найти контент, который меня интересует?',
      a9: 'Вы можете просматривать контент, используя режимы умного обнаружения, доступные для лент и кормления: Подписки, Обнаружение, Поблизости и Тренды. Вы также можете искать проверенных создателей по категориям из 95 доступных категорий профиля.',
      q10: 'Является ли Telefanz бесплатным в использовании?',
      a10: 'Да. Telefanz бесплатно загружать и использовать для просмотра контента и прямых трансляций. Верификация и подписка требуются только для пользователей, которые хотят взаимодействовать, публиковать контент (включая истории) или проводить прямые трансляции.',
      q11: 'Что такое голубая галочка?',
      a11: 'Голубая галочка показывает, что личность пользователя проверена и что они имеют полный доступ к функциям Telefanz, включая публикацию видео, фотографий и историй, комментирование, отправку сообщений и прямые трансляции.',
      q12: 'Что такое золотая галочка?',
      a12: 'Золотая галочка — это эксклюзивное признание от Telefanz для высокоактивных и последовательных создателей. Его невозможно купить, и он предоставляется на основе деятельности и взаимодействия.',
      q13: 'Как Telefanz обеспечивает безопасность платформы?',
      a13: 'Только проверенные пользователи могут публиковать или взаимодействовать, и весь контент проверяется перед публикацией. Строгие политики модерации помогают поддерживать чистое, уважительное и без мошенничества сообщество.',
      q14: 'Какие функции социальных сетей доступны?',
      a14: 'Все пользователи могут просматривать ленты, кормление, истории и прямые трансляции. Проверенные пользователи также могут ставить лайки, комментировать, делиться, отправлять сообщения, следить за создателями по категориям, публиковать видео / фотографии / истории, проводить прямые трансляции и отправлять подарки.',
      q15: 'Могу ли я использовать Telefanz на разных языках?',
      a15: 'Да. Telefanz поддерживает несколько языков, чтобы сделать платформу доступной для пользователей по всему миру.',
      q16: 'Что мне делать, если у меня возникли проблемы с аккаунтом или входом?',
      a16: 'Если у вас возникли проблемы с входом или активацией аккаунта, проверьте свою электронную почту и папку спама для сообщений проверки. Если проблема сохраняется, свяжитесь с поддержкой по адресу support@telefanz.com',
      q17: 'Где я могу найти Условия и Политику конфиденциальности Telefanz?',
      a17: 'Вы можете получить доступ к Условиям использования и Политике конфиденциальности Telefanz через ссылки внизу веб-сайта или внутри приложения. Они объясняют, как ваши данные защищены и используются.',
      q18: 'С кем я могу связаться для получения помощи?',
      a18: 'По любым вопросам, отзывам или запросам поддержки, пожалуйста, свяжитесь с нами по адресу support@telefanz.com',
    },

    // CTA Section
    cta: {
      badge: 'Присоединяйтесь к пользователям со всего мира',
      title1: 'Готовы присоединиться к',
      title2: 'сообществу?',
      description: 'Загрузите Telefanz сегодня и начните общение с миллионами создателей и поклонников по всему миру. Ваша аудитория ждет.',
      downloadOn: 'Загрузите на',
      getItOn: 'Получите на',
      joinUsers: 'Присоединяйтесь к пользователям со всего мира',
    },

    // For Creators Section
    forCreators: additionalTranslations.ru.forCreators,

    // Download Reasons Section
    download: additionalTranslations.ru.download,

    // Footer
    footer: {
      tagline: 'Социальные сети сделаны лучше.',
      product: 'Продукт',
      company: 'Компания',
      legal: 'Юридический',
      features: 'Особенности',
      forUsers: 'Для пользователей',
      forCreators: 'Для создателей',
      news: 'Новости',
      contact: 'Контакт',
      privacyPolicy: 'Политика конфиденциальности',
      termsOfUse: 'Условия использования',
      copyright: 'Все права защищены',
      madeWith: 'Сделано с любовью для создателей везде.',
      allRightsReserved: 'Авторские права {year} Все права защищены Telefanz Portal.',
    },

    // Language selector
    language: {
      english: 'English',
      arabic: 'العربية',
      german: 'Немецкий',
      greek: 'Греческий',
      spanish: 'Испанский',
      french: 'Французский',
      hindi: 'Хинди',
      italian: 'Итальянский',
      portuguese: 'Португальский',
      russian: 'Русский',
      turkish: 'Турецкий',
      chinese: '中文',
    },
  },

  zh: {
    // Header
    header: {
      features: '功能',
      forUsers: '供用户使用',
      forCreators: '供创作者使用',
      news: '新闻',
      signIn: '登录',
    },

    // Hero Section
    hero: {
      badge: '现已在 iOS 和 Android 上提供',
      title1: '社交媒体',
      title2: '做得',
      title2Highlight: '更好。',
      description: '您的平台，用于令人兴奋、自发、真实的视频和照片。观看并与您喜欢的内容互动。',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      downloadOn: '在以下位置下载',
      getItOn: '在以下位置获取',
      downloads: '下载',
      activeUsers: '活跃用户',
      verifiedCreators: '经验证的创作者',
    },

    // Features Section
    features: {
      badge: '让我们与众不同',
      title: '您的个性化',
      titleHighlight: '社交体验',
      description: '无论您是名人、内容创作者还是热爱分享时刻的主播，Telefanz 上总有您的一席之地。',
      moreEarnings: '更多收入',
      moreEarningsDesc: '通过创建内容或获得粉丝的支持来赚取 Coinzz — 您的参与转化为真实价值',
      verification: 'Plus+ 验证',
      verificationDesc: '验证您的身份，选择您的个人资料类别，订阅并使用受信任的蓝色勾号解锁完全访问',
      liveStreamRevenue: '直播收入',
      liveStreamRevenueDesc: '直播、接收礼物并在与观众互动时实时赚取 Coinzz',
      cleanCommunity: '干净的社区',
      cleanCommunityDesc: '只有经过验证的用户才能发布或互动，创建更安全、无垃圾邮件的社交媒体环境',
      easyVerification: '简单验证',
      easyVerificationDesc: '快速的面部和身份证验证确保每个账户只有一个真人，并保护您的身份',
      searchByCategory: '按类别搜索',
      searchByCategoryDesc: '在 95 个个人资料类别中发现经过验证的创作者，找到您要找的人',
      varietyMatters: '多样性很重要',
      varietyMattersDesc: '探索来自全球创作者的多样化内容，跨越多个类别和兴趣',
      getMoreForLess: '花更少的钱获得更多',
      getMoreForLessDesc: '价格合理的 Coinzz 计划提供更好的价值 — 支持创作者而无需过度支出',
      earnMore: '赚更多、更多、更多',
      earnMoreDesc: 'Telefanz 对创作者收入不收取任何佣金 — 仅适用标准应用商店费用',
    },

    // Testimonials
    testimonials: {
      badge: '推荐信',
      title: '受全球创作者喜爱',
      titleHighlight: '全球',
      description: '了解我们的社区对其 Telefanz 体验的看法。',
    },

    // FAQ
    faq: {
      badge: '常见问题',
      title: '常见问题',
      titleHighlight: '解答',
      description: '有问题吗？我们有答案。如果您找不到所需的信息，请与我们的支持团队联系。',
      q1: 'Telefanz 是什么？',
      a1: 'Telefanz 是一个下一代社交媒体平台和移动应用程序，用于观看、创建和分享短视频、照片、故事和直播。它围绕真实身份、经过验证的创作者和专注于真实内容的安全全球社区而构建。',
      q2: '我如何加入 Telefanz？',
      a2: '您可以从 App Store 或 Google Play Store 下载该应用程序并使用电子邮件、Google 或 Apple 登录来注册，从而加入 Telefanz。注册后，您可以立即免费开始观看提要、源和直播。',
      q3: '我需要验证我的账户吗？',
      a3: '否。查看内容不需要验证。任何人都可以自由浏览提要、源和直播。但是，要发布内容（视频、照片或故事）、评论、发送消息、直播或发送礼物，用户必须完成身份验证。',
      q4: '验证期间会发生什么？',
      a4: '验证包括人脸识别和政府身份证验证。每个人只能验证一个账户。获得批准后，您选择您的个人资料类别，选择订阅计划，您的账户将使用蓝色勾号完全激活。',
      q5: '我可以发布什么类型的内容？',
      a5: '经过验证的用户可以发布短视频、照片和故事，也可以举办直播。内容可以展示创意、日常时刻、公告或与粉丝和追随者的实时互动。',
      q6: '什么是 Coinzz，我如何赚取它们？',
      a6: 'Coinzz 是 Telefanz 的应用内虚拟货币。创作者通过直播期间粉丝的礼物和平台参与来赚取 Coinzz。Coinzz 可以兑换成钱包余额并提取。Telefanz 对创作者收入不收取任何佣金。',
      q7: '直播期间礼物如何运作？',
      a7: '在直播期间，观众可以使用 Coinzz 发送虚拟礼物（每份礼物最多 50,000 Coinzz）���创作者立即收到这些礼物，稍后可以兑现。',
      q8: 'Telefanz 对创作者收取佣金吗？',
      a8: '否。Telefanz 对礼物或收集的 Coinzz 不收取任何平台佣金。仅适用标准 Apple App Store 和 Google Play Store 费用。',
      q9: '我如何找到我感兴趣的内容？',
      a9: '您可以使用提供的源和提要的智能发现模式来浏览内容：关注、发现、附近和趋势。您还可以从 95 个可用的个人资料类别中按类别搜索经过验证的创作者。',
      q10: 'Telefanz 免费使用吗？',
      a10: '是的。Telefanz 可免费下载和使用以观看内容和直播。验证和订阅仅对想要互动、发布内容（包括故事）或进行直播的用户需要。',
      q11: '什么是蓝色勾号？',
      a11: '蓝色勾号表示用户身份已验证，他们有权完全访问 Telefanz 功能，包括发布视频、照片和故事、评论、消息传递和直播。',
      q12: '什么是金色勾号？',
      a12: '金色勾号是 Telefanz 对高度活跃和一致的创作者的专属认可。它不能被购买，而是基于活动和参与度授予的。',
      q13: 'Telefanz 如何保持平台安全？',
      a13: '只有经过验证的用户才能发布或互动，所有内容在直播前都会经过审核。强有力的审核政策有助于维持干净、尊重和无欺诈的社区。',
      q14: '有哪些社交功能可用？',
      a14: '所有用户都可以观看提要、源、故事和直播。经过验证的用户还可以点赞、评论、分享、发送消息、按类别关注创作者、发布视频/照片/故事、直播和发送礼物。',
      q15: '我可以用不同的语言使用 Telefanz 吗？',
      a15: '是的。Telefanz 支持多种语言，使全球用户都可以访问该平台。',
      q16: '如果我的账户或登录有问题，我应该怎么做？',
      a16: '如果您在登录或账户激活方面遇到问题，请检查您的电子邮件和垃圾邮件文件夹中的验证消息。如果问题仍然存在，请在 support@telefanz.com 联系支持',
      q17: '在哪里可以找到 Telefanz 的条款和隐私政策？',
      a17: '您可以通过网站底部或应用程序内的链接访问 Telefanz 的使用条款和隐私政策。这些解释了您的数据如何受到保护和使用。',
      q18: '我可以与谁联系寻求帮助？',
      a18: '如有任何疑问、反馈或支持请求，请通过 support@telefanz.com 与我们联系',
    },

    // CTA Section
    cta: {
      badge: '加入全球用户',
      title1: '准备好加入',
      title2: '社区吗？',
      description: '立即下载 Telefanz，开始与全球数百万创作者和粉丝连接。您的观众在等待。',
      downloadOn: '在以下位置下载',
      getItOn: '在以下位置获取',
      joinUsers: '加入全球用户',
    },

    // For Creators Section
    forCreators: additionalTranslations.zh.forCreators,

    // Download Reasons Section
    download: additionalTranslations.zh.download,

    // Footer
    footer: {
      tagline: '社交媒体做得更好。',
      product: '产品',
      company: '公司',
      legal: '法律',
      features: '功能',
      forUsers: '供用户使用',
      forCreators: '供创作者使用',
      news: '新闻',
      contact: '联系我们',
      privacyPolicy: '隐私政策',
      termsOfUse: '使用条款',
      copyright: '版权所有',
      madeWith: '为全球创作者用爱而制。',
      allRightsReserved: '版权 {year} Telefanz Portal 保留所有权利。',
    },

    // Language selector
    language: {
      english: 'English',
      arabic: 'العربية',
      german: '德语',
      greek: '希腊语',
      spanish: '西班牙语',
      french: '法语',
      hindi: '印地语',
      italian: '意大利语',
      portuguese: '葡萄牙语',
      russian: 'Русский',
      turkish: '土耳其语',
      chinese: '中文',
    },
  },
}

export function getTranslation(language: Language): Translations {
  return translations[language] || translations.en
}

export function getLanguageName(language: Language, currentLanguage: Language): string {
  const languageNames: Record<Language, keyof Translations['language']> = {
    en: 'english',
    ar: 'arabic',
    de: 'german',
    el: 'greek',
    es: 'spanish',
    fr: 'french',
    hi: 'hindi',
    it: 'italian',
    pt: 'portuguese',
    ru: 'russian',
    tr: 'turkish',
    zh: 'chinese',
  }
  return getTranslation(currentLanguage).language[languageNames[language]]
}
