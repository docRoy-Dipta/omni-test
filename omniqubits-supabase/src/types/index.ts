// ── Database Row Types ────────────────────────────────
// These match the exact column names in your Supabase tables

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  avatar_url: string | null;
  is_active: boolean;
  is_featured: boolean;
  display_order: number;
  created_at: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: PricingFeature[];
  is_featured: boolean;
  cta_text: string;
  cta_link: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  created_at: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}
