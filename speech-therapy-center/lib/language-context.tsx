"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    about_us: "About Us",
    gallery: "Gallery",
    fees_structure: "Fees Structure",
    hostel_facility: "Hostel Facility",
    successful_students: "Successful Students",
    treatments: "Treatments",
    stammering: "Stammering",
    mis_articulation: "Mis-Articulation",
    services: "Services",
    testimonials: "Testimonials",
    contact: "Contact",
    press: "Press Reports",
    faq: "FAQs",
    book_appointment: "Book Appointment",

    // Hero Section
    hero_title: "Empowering Communication Through Expert Speech Therapy",
    hero_description:
      "At India Speech Therapy Center, we help individuals of all ages overcome speech and language challenges with personalized care and proven techniques.",
    our_services: "Our Services",
    contact_us: "Contact Us",

    // About Section
    about_us_title: "About Us",
    about_description: "Dedicated to improving lives through better communication since 2010",
    meet_founder: "Meet Our Founder",
    founder_experience:
      "With over 45 years of experience in speech-language pathology, Bhoop Singh Yadav founded the India Speech Therapy Center with a vision to make quality speech therapy accessible to all. His pioneering techniques and compassionate approach have helped thousands of individuals overcome speech and language barriers.",
    founder_credentials:
      "Bhoop holds a Master's degree in Speech-Language Pathology and is certified by the Indian Speech and Hearing Association. His dedication to the field has earned him numerous accolades and recognition as a leading speech therapist in India.",
    years_experience: "45+ Years Experience",
    certified_specialist: "Certified Specialist",
    award_winning: "Award-Winning Therapist",

    // Services Section
    our_services_title: "Our Services",
    services_description: "Comprehensive speech therapy solutions for all ages and needs",
    learn_more: "Learn more",

    // Service Titles
    speech_delay: "Speech Delay Therapy",
    speech_delay_desc:
      "Specialized therapy for children experiencing delays in speech development, focusing on age-appropriate communication skills.",
    articulation: "Articulation Therapy",
    articulation_desc:
      "Helping individuals correctly produce speech sounds for clearer, more understandable communication.",
    fluency: "Fluency Disorders",
    fluency_desc: "Treatment for stuttering and other fluency issues to improve speech flow and confidence.",
    language: "Language Disorders",
    language_desc:
      "Addressing difficulties with understanding or using language through personalized therapy approaches.",
    voice: "Voice Therapy",
    voice_desc: "Specialized techniques to improve voice quality, pitch, and volume for optimal vocal health.",
    swallowing: "Swallowing Disorders",
    swallowing_desc:
      "Assessment and treatment for difficulties with eating and swallowing for safer and more comfortable nutrition.",

    // Testimonials Section
    testimonials_title: "Testimonials",
    testimonials_description: "Hear from our clients about their transformative experiences",

    // Contact Section
    contact_title: "Contact Us",
    contact_description: "We're here to answer your questions and provide the support you need",
    our_location: "Our Location",
    phone: "Phone",
    email: "Email",
    hours: "Hours",
    monday_sunday: "Monday - Sunday: 9:00 AM - 8:00 PM",

    // FAQ Section
    faq_title: "Frequently Asked Questions",
    faq_description: "Find answers to common questions about speech therapy",

    // Footer
    rights_reserved: "All rights reserved.",
    privacy_policy: "Privacy Policy",
    terms_of_service: "Terms of Service",
    sitemap: "Sitemap",

    // Language
    switch_to_hindi: "हिंदी में देखें",
    switch_to_english: "View in English",

    // FAQ Questions
    faq1_question: "How do we make assessment of psychology?",
    faq1_answer:
      "If you have selected problematic words your psychology is more than 30% and if not selected, less than 30%. Those whose psychology is less than 50%, do not stammer while singing and if they stammer on problematic words during singing, psychology is more than 50%. This is how you assess your psychology.",

    faq2_question: "Why do we stammer on the first letter of the word?",
    faq2_answer:
      "Due to your high speed of the speech, you try to speak out 4 to 6 words in a single go which we term as a four or a six. Your tongue can not go for four or six letters at a time so you stammer on the first letter of the word.",

    faq3_question: "Why we do not stammer while singing?",
    faq3_answer:
      "Stammering is due to shortened breath, high speed and psychology. While starting singing, you take full breath, speed is controlled, and attention is towards the tune of the song. That is why you do not stammer while singing.",

    faq4_question: "Why a stammerer is full of anger?",
    faq4_answer:
      "Because a stammerer despite of having all capabilities cannot perform fully which give him feelings of frustration, anger and discontentment.",

    faq5_question: "Why do we stammer more in front of strangers?",
    faq5_answer:
      "Whenever we try to hide this weakness and speak correctly, more stammering occurs. Because in this situation your mind becomes more attentive towards this problem and due to fear you become uncomfortable resulting increase in the speed of the speech. That is why you stammer more in front of strangers, higher officers, ticket windows, telephone, mobiles etc.",

    faq6_question: "Whether stammering is a hereditary disease?",
    faq6_answer:
      "Stammering is not due to hereditary. However if some of your family member is a stammerer and becomes angry frequently, a child by imitating him and due to his fear become habitual of stammering. Therefore, some people consider it as hereditary.",

    // Press Reports
    press_title: "Press Reports",
    press_description: "Media coverage and publications about India Speech Therapy Center",
    read_article: "Read Article",

    // Appointment Page
    back_to_home: "Back to Home",
    book_your_appointment: "Book Your Appointment",
    appointment_description: "Fill out the form below to schedule a consultation with our speech therapy experts.",
    personal_information: "Personal Information",
    first_name: "First Name",
    last_name: "Last Name",
    email_address: "Email Address",
    phone_number: "Phone Number",
    address: "Address",
    city: "City",
    state: "State",
    pincode: "Pincode",
    appointment_details: "Appointment Details",
    who_for: "Who is the appointment for?",
    myself: "Myself",
    my_child: "My Child",
    someone_else: "Someone Else",
    patient_age: "Patient Age",
    service_type: "Service Type",
    select_service: "Select a service",
    preferred_date: "Preferred Date",
    preferred_time: "Preferred Time",
    morning: "Morning (9AM-12PM)",
    afternoon: "Afternoon (12PM-3PM)",
    evening: "Evening (3PM-6PM)",
    any_time: "Any Time",
    concerns: "Specific Concerns or Questions",
    concerns_placeholder: "Please describe any specific speech or language concerns you have...",
    how_hear: "How did you hear about us?",
    select_option: "Select an option",
    internet_search: "Internet Search",
    doctor_referral: "Doctor Referral",
    friend_family: "Friend or Family",
    social_media: "Social Media",
    other: "Other",
    agree_terms: "I agree to the terms and conditions and privacy policy",
    submit_request: "Submit Appointment Request",
    contact_24h: "Our team will contact you within 24 hours to confirm your appointment.",
    submitting: "Submitting...",

    // Fees Structure
    fees_title: "Fees Structure",
    fees_description: "Information about our treatment courses and accommodation",
    course_duration: "Course Duration",
    course_fee: "Course Fee",
    hostel_charges: "Hostel & Food Charges",
    payment_note: "Payment Note",
    rules_title: "Rules of the Centre",
    print: "Print this page",

    // Treatment Pages
    treatment_title: "Treatment Information",
    follow_us: "Follow Us",
    connect_whatsapp: "Connect on WhatsApp",
    visit_youtube: "Visit our YouTube Channel",
    google_rating: "Google Rating",
  },
  hi: {
    // Header
    home: "होम",
    about: "हमारे बारे में",
    about_us: "हमारे बारे में",
    gallery: "गैलरी",
    fees_structure: "फीस संरचना",
    hostel_facility: "छात्रावास सुविधा",
    successful_students: "सफल छात्र",
    treatments: "उपचार",
    stammering: "हकलाना",
    mis_articulation: "गलत उच्चारण",
    services: "सेवाएं",
    testimonials: "प्रशंसापत्र",
    contact: "संपर्क करें",
    press: "प्रेस रिपोर्ट",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    book_appointment: "अपॉइंटमेंट बुक करें",

    // Hero Section
    hero_title: "विशेषज्ञ स्पीच थेरेपी के माध्यम से संचार को सशक्त बनाना",
    hero_description:
      "इंडिया स्पीच थेरेपी सेंटर में, हम व्यक्तिगत देखभाल और सिद्ध तकनीकों के साथ सभी उम्र के व्यक्तियों को भाषण और भाषा की चुनौतियों को दूर करने में मदद करते हैं।",
    our_services: "हमारी सेवाएं",
    contact_us: "संपर्क करें",

    // About Section
    about_us_title: "हमारे बारे में",
    about_description: "2010 से बेहतर संचार के माध्यम से जीवन में सुधार के लिए समर्पित",
    meet_founder: "हमारे संस्थापक से मिलें",
    founder_experience:
      "भाषण-भाषा विज्ञान में 45 वर्षों से अधिक के अनुभव के साथ, भूप सिंह यादव ने सभी के लिए गुणवत्तापूर्ण स्पीच थेरेपी को सुलभ बनाने के दृष्टिकोण के साथ इंडिया स्पीच थेरेपी सेंटर की स्थापना की। उनकी अग्रणी तकनीकों और करुणामय दृष्टिकोण ने हजारों व्यक्तियों को भाषण और भाषा की बाधाओं को दूर करने में मदद की है।",
    founder_credentials:
      "भूप के पास स्पीच-लैंग्वेज पैथोलॉजी में मास्टर्स डिग्री है और वे इंडियन स्पीच एंड हियरिंग एसोसिएशन द्वारा प्रमाणित हैं। इस क्षेत्र के प्रति उनकी प्रतिबद्धता ने उन्हें कई पुरस्कार और भारत में एक प्रमुख स्पीच थेरेपिस्ट के रूप में मान्यता दिलाई है।",
    years_experience: "45+ वर्षों का अनुभव",
    certified_specialist: "प्रमाणित विशेषज्ञ",
    award_winning: "पुरस्कार विजेता थेरेपिस्ट",

    // Services Section
    our_services_title: "हमारी सेवाएं",
    services_description: "सभी उम्र और जरूरतों के लिए व्यापक स्पीच थेरेपी समाधान",
    learn_more: "और जानें",

    // Service Titles
    speech_delay: "स्पीच डिले थेरेपी",
    speech_delay_desc:
      "भाषण विकास में देरी का अनुभव करने वाले बच्चों के लिए विशेष थेरेपी, उम्र के अनुसार संचार कौशल पर ध्यान केंद्रित करना।",
    articulation: "उच्चारण थेरेपी",
    articulation_desc: "व्यक्तियों को स्पष्ट, अधिक समझने योग्य संचार के लिए भाषण ध्वनियों का सही उत्पादन करने में मदद करना।",
    fluency: "प्रवाह विकार",
    fluency_desc: "भाषण प्रवाह और आत्मविश्वास में सुधार के लिए हकलाने और अन्य प्रवाह संबंधी समस्याओं का उपचार।",
    language: "भाषा विकार",
    language_desc: "व्यक्तिगत थेरेपी दृष्टिकोणों के माध्यम से भाषा को समझने या उपयोग करने में कठिनाइयों का समाधान।",
    voice: "आवाज थेरेपी",
    voice_desc: "इष्टतम वोकल स्वास्थ्य के लिए आवाज की गुणवत्ता, पिच और वॉल्यूम में सुधार के लिए विशेष तकनीकें।",
    swallowing: "निगलने के विकार",
    swallowing_desc: "सुरक्षित और अधिक आरामदायक पोषण के लिए खाने और निगलने में कठिनाइयों का आकलन और उपचार।",

    // Testimonials Section
    testimonials_title: "प्रशंसापत्र",
    testimonials_description: "अपने परिवर्तनकारी अनुभवों के बारे में हमारे ग्राहकों से सुनें",

    // Contact Section
    contact_title: "संपर्क करें",
    contact_description: "हम आपके प्रश्नों का उत्तर देने और आपको आवश्यक सहायता प्रदान करने के लिए यहां हैं",
    our_location: "हमारा स्थान",
    phone: "फोन",
    email: "ईमेल",
    hours: "समय",
    monday_sunday: "सोमवार - रविवार: सुबह 9:00 - शाम 8:00",

    // FAQ Section
    faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    faq_description: "स्पीच थेरेपी के बारे में सामान्य प्रश्नों के उत्तर पाएं",

    // Footer
    rights_reserved: "सर्वाधिकार सुरक्षित।",
    privacy_policy: "गोपनीयता नीति",
    terms_of_service: "सेवा की शर्तें",
    sitemap: "साइटमैप",

    // Language
    switch_to_hindi: "हिंदी में देखें",
    switch_to_english: "View in English",

    // FAQ Questions
    faq1_question: "हम मनोविज्ञान का आकलन कैसे करते हैं?",
    faq1_answer:
      "यदि आपने समस्याग्रस्त शब्दों का चयन किया है तो आपका मनोविज्ञान 30% से अधिक है और यदि चयन नहीं किया है, तो 30% से कम है। जिनका मनोविज्ञान 50% से कम है, वे गाते समय हकलाते नहीं हैं और यदि वे गाते समय समस्याग्रस्त शब्दों पर हकलाते हैं, तो मनोविज्ञान 50% से अधिक है। इस प्रकार आप अपने मनोविज्ञान का आकलन करते हैं।",

    faq2_question: "हम शब्द के पहले अक्षर पर क्यों हकलाते हैं?",
    faq2_answer:
      "भाषण की उच्च गति के कारण, आप एक बार में 4 से 6 शब्द बोलने का प्रयास करते हैं जिसे हम चार या छह कहते हैं। आपकी जीभ एक बार में चार या छह अक्षरों के लिए नहीं जा सकती है इसलिए आप शब्द के पहले अक्षर पर हकलाते हैं।",

    faq3_question: "हम गाते समय क्यों नहीं हकलाते?",
    faq3_answer:
      "हकलाना छोटी सांस, उच्च गति और मनोविज्ञान के कारण होता है। गाना शुरू करते समय, आप पूरी सांस लेते हैं, गति नियंत्रित होती है, और ध्यान गाने की धुन की ओर होता है। इसलिए आप गाते समय नहीं हकलाते।",

    faq4_question: "हकलाने वाला व्यक्ति क्रोध से क्यों भरा होता है?",
    faq4_answer:
      "क्योंकि हकलाने वाला व्यक्ति सभी क्षमताओं के बावजूद पूरी तरह से प्रदर्शन नहीं कर सकता है जिससे उसे निराशा, क्रोध और असंतोष की भावनाएं होती हैं।",

    faq5_question: "हम अजनबियों के सामने अधिक क्यों हकलाते हैं?",
    faq5_answer:
      "जब भी हम इस कमजोरी को छिपाने और सही बोलने का प्रयास करते हैं, तो अधिक हकलाहट होती है। क्योंकि इस स्थिति में आपका मन इस समस्या की ओर अधिक ध्यान देता है और डर के कारण आप असहज हो जाते हैं जिससे भाषण की गति में वृद्धि होती है। इसलिए आप अजनबियों, उच्च अधिकारियों, टिकट खिड़कियों, टेलीफोन, मोबाइल आदि के सामने अधिक हकलाते हैं।",

    faq6_question: "क्या हकलाना एक आनुवंशिक बीमारी है?",
    faq6_answer:
      "हकलाना आनुवंशिकता के कारण नहीं होता है। हालांकि, यदि आपके परिवार का कोई सदस्य हकलाता है और अक्सर क्रोधित होता है, तो एक बच्चा उसकी नकल करके और उसके डर के कारण हकलाने का आदी हो जाता है। इसलिए, कुछ लोग इसे आनुवंशिक मानते हैं।",

    // Press Reports
    press_title: "प्रेस रिपोर्ट",
    press_description: "इंडिया स्पीच थेरेपी सेंटर के बारे में मीडिया कवरेज और प्रकाशन",
    read_article: "लेख पढ़ें",

    // Appointment Page
    back_to_home: "होम पर वापस जाएं",
    book_your_appointment: "अपनी अपॉइंटमेंट बुक करें",
    appointment_description: "हमारे स्पीच थेरेपी विशेषज्ञों के साथ परामर्श शेड्यूल करने के लिए नीचे दिए गए फॉर्म को भरें।",
    personal_information: "व्यक्तिगत जानकारी",
    first_name: "पहला नाम",
    last_name: "अंतिम नाम",
    email_address: "ईमेल पता",
    phone_number: "फोन नंबर",
    address: "पता",
    city: "शहर",
    state: "राज्य",
    pincode: "पिनकोड",
    appointment_details: "अपॉइंटमेंट विवरण",
    who_for: "अपॉइंटमेंट किसके लिए है?",
    myself: "मेरे लिए",
    my_child: "मेरे बच्चे के लिए",
    someone_else: "किसी और के लिए",
    patient_age: "रोगी की उम्र",
    service_type: "सेवा प्रकार",
    select_service: "एक सेवा चुनें",
    preferred_date: "पसंदीदा तारीख",
    preferred_time: "पसंदीदा समय",
    morning: "सुबह (9AM-12PM)",
    afternoon: "दोपहर (12PM-3PM)",
    evening: "शाम (3PM-6PM)",
    any_time: "कोई भी समय",
    concerns: "विशिष्ट चिंताएं या प्रश्न",
    concerns_placeholder: "कृपया अपनी किसी भी विशिष्ट भाषण या भाषा संबंधी चिंताओं का वर्णन करें...",
    how_hear: "आपने हमारे बारे में कैसे सुना?",
    select_option: "एक विकल्प चुनें",
    internet_search: "इंटरनेट खोज",
    doctor_referral: "डॉक्टर रेफरल",
    friend_family: "दोस्त या परिवार",
    social_media: "सोशल मीडिया",
    other: "अन्य",
    agree_terms: "मैं नियम और शर्तों और गोपनीयता नीति से सहमत हूं",
    submit_request: "अपॉइंटमेंट अनुरोध जमा करें",
    contact_24h: "हमारी टीम आपकी अपॉइंटमेंट की पुष्टि करने के लिए 24 घंटे के भीतर आपसे संपर्क करेगी।",
    submitting: "जमा कर रहे हैं...",

    // Fees Structure
    fees_title: "फीस संरचना",
    fees_description: "हमारे उपचार पाठ्यक्रमों और आवास के बारे में जानकारी",
    course_duration: "पाठ्यक्रम अवधि",
    course_fee: "पाठ्यक्रम शुल्क",
    hostel_charges: "छात्रावास और भोजन शुल्क",
    payment_note: "भुगतान नोट",
    rules_title: "केंद्र के नियम",
    print: "इस पृष्ठ को प्रिंट करें",

    // Treatment Pages
    treatment_title: "उपचार जानकारी",
    follow_us: "हमें फॉलो करें",
    connect_whatsapp: "व्हाट्सएप पर जुड़ें",
    visit_youtube: "हमारा यूट्यूब चैनल देखें",
    google_rating: "गूगल रेटिंग",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "hi")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

