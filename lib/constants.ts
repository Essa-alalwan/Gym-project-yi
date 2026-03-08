// Isa Ebrahim Fitness - Static Content Constants

export const SITE_CONFIG = {
  name: "Isa Ebrahim",
  title: "Online Fitness Coach",
  tagline: "Transform Your Body. Transform Your Life.",
  email: "contact@isaebrahim.com",
  location: "Bahrain",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Transformations", href: "#transformations" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO_CONTENT = {
  headline: "Transform Your Body.",
  subheadline: "Transform Your Life.",
  description: "Structured fitness programs designed to help you achieve real, lasting results. Join 500+ clients who have already transformed their lives with personalized coaching.",
  ctaText: "View Programs",
  secondaryCtaText: "Contact Me",
} as const;

export const TRUST_METRICS = [
  { value: "500+", label: "Clients Transformed" },
  { value: "7+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
] as const;

export const TRANSFORMATIONS = [
  {
    id: 1,
    name: "Ahmed K.",
    beforeImage: "/images/transformations/ahmed-before.jpg",
    afterImage: "/images/transformations/ahmed-after.jpg",
    duration: "12 weeks",
    result: "Lost 18kg",
    testimonial: "Isa's program changed my life. The structured approach made all the difference.",
  },
  {
    id: 2,
    name: "Sarah M.",
    beforeImage: "/images/transformations/sarah-before.jpg",
    afterImage: "/images/transformations/sarah-after.jpg",
    duration: "16 weeks",
    result: "Lost 12kg",
    testimonial: "Finally found a program that works for busy professionals.",
  },
  {
    id: 3,
    name: "Omar H.",
    beforeImage: "/images/transformations/omar-before.jpg",
    afterImage: "/images/transformations/omar-after.jpg",
    duration: "8 weeks",
    result: "Gained 6kg muscle",
    testimonial: "The strength gains have been incredible. Best investment I've made.",
  },
  {
    id: 4,
    name: "Fatima A.",
    beforeImage: "/images/transformations/fatima-before.jpg",
    afterImage: "/images/transformations/fatima-after.jpg",
    duration: "20 weeks",
    result: "Complete recomp",
    testimonial: "From feeling tired to feeling powerful. Thank you, Isa!",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mohammed R.",
    role: "Business Owner",
    avatar: "/images/avatars/mohammed.jpg",
    rating: 5,
    quote: "Isa's coaching is world-class. His attention to detail and constant adjustments to my program kept me progressing week after week. The results speak for themselves.",
  },
  {
    id: 2,
    name: "Layla S.",
    role: "Marketing Manager",
    avatar: "/images/avatars/layla.jpg",
    rating: 5,
    quote: "As a busy professional, I needed a program that fit my lifestyle. Isa delivered exactly that. Down 15kg and feeling stronger than ever.",
  },
  {
    id: 3,
    name: "Khalid B.",
    role: "Engineer",
    avatar: "/images/avatars/khalid.jpg",
    rating: 5,
    quote: "The knowledge Isa brings is exceptional. He doesn't just tell you what to do, he teaches you why. That understanding has been invaluable.",
  },
] as const;

export const PROGRAMS = [
  {
    id: "fat-loss",
    name: "Fat Loss Program",
    subtitle: "Structured approach to sustainable weight loss",
    price: 199,
    currency: "BHD",
    duration: "12 weeks",
    popular: false,
    features: [
      "Personalized nutrition plan",
      "Custom workout program",
      "Weekly check-ins",
      "Form video reviews",
      "WhatsApp support",
      "Progress tracking app",
    ],
    description: "A comprehensive fat loss program designed for sustainable results. We focus on building habits that last, not quick fixes.",
  },
  {
    id: "strength-building",
    name: "Strength Building",
    subtitle: "Build muscle and increase your power",
    price: 249,
    currency: "BHD",
    duration: "16 weeks",
    popular: true,
    features: [
      "Everything in Fat Loss",
      "Advanced periodization",
      "Strength progression tracking",
      "Exercise substitutions",
      "Bi-weekly video calls",
      "Priority support response",
    ],
    description: "For those serious about building strength and muscle. Progressive overload programming tailored to your goals.",
  },
  {
    id: "body-recomposition",
    name: "Body Recomposition",
    subtitle: "Transform your physique completely",
    price: 349,
    currency: "BHD",
    duration: "24 weeks",
    popular: false,
    features: [
      "Everything in Strength Building",
      "Extended coaching duration",
      "Metabolic optimization",
      "Lifestyle coaching",
      "Weekly video calls",
      "VIP 24/7 support",
    ],
    description: "The ultimate transformation package. Lose fat while building muscle for a complete physique overhaul.",
  },
] as const;

export const BENEFITS = [
  {
    id: 1,
    title: "Personalized Programs",
    description: "Every program is built around your goals, schedule, and preferences. No cookie-cutter templates.",
    icon: "Target",
  },
  {
    id: 2,
    title: "Evidence-Based Methods",
    description: "Training and nutrition strategies backed by science. No fads, no gimmicks—just what works.",
    icon: "FlaskConical",
  },
  {
    id: 3,
    title: "Constant Support",
    description: "Direct access to me via WhatsApp. Questions answered, form checked, motivation delivered.",
    icon: "MessageCircle",
  },
  {
    id: 4,
    title: "Progress Tracking",
    description: "Weekly check-ins and adjustments ensure you're always moving toward your goals.",
    icon: "TrendingUp",
  },
  {
    id: 5,
    title: "Flexible Scheduling",
    description: "Programs designed to fit your life, not the other way around. Home or gym workouts available.",
    icon: "Calendar",
  },
  {
    id: 6,
    title: "Lasting Results",
    description: "Learn the skills and habits needed to maintain your results for life.",
    icon: "Award",
  },
] as const;

export const ABOUT_CONTENT = {
  headline: "Meet Your Coach",
  name: "Isa Ebrahim",
  credentials: [
    "Certified Personal Trainer",
    "Sports Nutrition Specialist",
    "7+ Years Coaching Experience",
  ],
  bio: [
    "I've spent over 7 years helping people transform their bodies and lives through structured, evidence-based fitness coaching. What started as a personal passion for fitness evolved into a mission to help others achieve what once seemed impossible.",
    "My approach is simple: understand your goals, build a program that fits your life, and provide the support you need to succeed. No extreme diets, no unrealistic expectations—just consistent progress toward becoming the best version of yourself.",
  ],
  stats: [
    { value: "500+", label: "Clients Coached" },
    { value: "7+", label: "Years Experience" },
    { value: "10,000+", label: "Programs Delivered" },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    question: "How does online coaching work?",
    answer: "After signing up, you'll receive a comprehensive questionnaire about your goals, lifestyle, and preferences. I'll then create your personalized program and we'll connect via WhatsApp for ongoing support. You'll have access to a dedicated app for tracking workouts and progress, with regular check-ins to ensure you're on track.",
  },
  {
    question: "Do I need gym access?",
    answer: "Not necessarily! I can design programs for both gym and home workouts. During our initial consultation, we'll discuss your equipment access and preferences to create a program that works for your situation.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer: "Absolutely accommodated. Whether you're vegetarian, vegan, have allergies, or follow religious dietary guidelines, your nutrition plan will be customized to fit your needs while still achieving your goals.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Most clients notice changes within 2-4 weeks—improved energy, better sleep, and initial body composition changes. Significant transformations typically occur over 8-12 weeks. The key is consistency, and I'll be there to keep you accountable.",
  },
  {
    question: "Can I pause or cancel my program?",
    answer: "Life happens, and I understand that. Programs can be paused for valid reasons, and we can discuss options if you need to cancel. My goal is your success, and flexibility is part of providing excellent service.",
  },
  {
    question: "What makes your coaching different?",
    answer: "Personal attention and accountability. You're not just getting a program—you're getting a coach who genuinely cares about your success. I limit my client roster to ensure everyone gets the attention they deserve.",
  },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "Programs", href: "#programs" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "Fat Loss", href: "#programs" },
    { label: "Strength Building", href: "#programs" },
    { label: "Body Recomposition", href: "#programs" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  ],
} as const;

export const FINAL_CTA = {
  headline: "Ready to Transform?",
  subheadline: "Your journey starts with a single step. Let's take it together.",
  ctaText: "View Programs",
  secondaryText: "Or contact me directly to discuss your goals",
} as const;
