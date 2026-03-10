// ============================================
// Formerly Nexus — now self-contained
// All content hardcoded with DWL values
// No external Supabase dependency
// ============================================

// ─────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────

export interface LegalPage {
  page_id: string
  section_order: number
  section_title: string
  section_content: string
}

export interface SiteConfig {
  site_id: string
  site_name: string
  site_type: string
  site_url: string
  legal_entity: string
  contact_email: string
}

export interface FooterLink {
  column_number: number
  column_title: string
  link_order: number
  link_label: string
  link_href: string
  link_type: string
}

// ─────────────────────────────────────────────────
// Hardcoded config
// ─────────────────────────────────────────────────

const SITE_CONFIG: SiteConfig = {
  site_id: "dancingwithlions",
  site_name: "Dancing with Lions",
  site_type: "content",
  site_url: "https://dancingwiththelions.com",
  legal_entity: "Dancing with Lions",
  contact_email: "legal@dancingwiththelions.com",
}

const LEGAL_CONTENT: Record<string, LegalPage[]> = {
  privacy: [
    { page_id: "privacy", section_order: 1, section_title: "Introduction", section_content: "Dancing with Lions (\"we\", \"us\", or \"our\") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you visit https://dancingwiththelions.com." },
    { page_id: "privacy", section_order: 2, section_title: "Information We Collect", section_content: "Information you provide: contact information (name, email) and communications you send us. Information collected automatically: device information, usage data, and cookies." },
    { page_id: "privacy", section_order: 3, section_title: "How We Use Your Information", section_content: "To communicate with you about inquiries, improve our website and services, and send occasional updates if you have opted in." },
    { page_id: "privacy", section_order: 4, section_title: "Your Rights", section_content: "You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at legal@dancingwiththelions.com." },
    { page_id: "privacy", section_order: 5, section_title: "Data Security", section_content: "We implement appropriate security measures including SSL/TLS encryption." },
    { page_id: "privacy", section_order: 6, section_title: "Contact", section_content: "Dancing with Lions. Email: legal@dancingwiththelions.com" },
  ],
  terms: [
    { page_id: "terms", section_order: 1, section_title: "Agreement", section_content: "By accessing or using https://dancingwiththelions.com, operated by Dancing with Lions, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services." },
    { page_id: "terms", section_order: 2, section_title: "Services", section_content: "Dancing with Lions provides data-driven research, analysis, and cultural intelligence as described on our website. All content, features, and functionality are owned by Dancing with Lions and are protected by international copyright, trademark, and other intellectual property laws." },
    { page_id: "terms", section_order: 3, section_title: "User Responsibilities", section_content: "You agree to provide accurate and complete information, comply with all applicable laws, and not misuse or attempt to disrupt our services." },
    { page_id: "terms", section_order: 4, section_title: "Intellectual Property", section_content: "All content on this site, including text, data visualizations, maps, charts, infographics, research documents, and original datasets, is the property of Dancing with Lions and is protected by copyright laws." },
    { page_id: "terms", section_order: 5, section_title: "Limitation of Liability", section_content: "To the maximum extent permitted by law, Dancing with Lions shall not be liable for indirect, incidental, or consequential damages arising from use of our services." },
    { page_id: "terms", section_order: 6, section_title: "Governing Law", section_content: "These terms are governed by the laws of Morocco. Any disputes shall be resolved in the courts of Marrakech." },
    { page_id: "terms", section_order: 7, section_title: "Contact", section_content: "Dancing with Lions. Email: legal@dancingwiththelions.com" },
  ],
  disclaimer: [
    { page_id: "disclaimer", section_order: 1, section_title: "General", section_content: "The information provided on https://dancingwiththelions.com by Dancing with Lions is for general informational and research purposes only. This content does not constitute professional, financial, or legal advice." },
    { page_id: "disclaimer", section_order: 2, section_title: "Accuracy", section_content: "While we make every effort to ensure data and analysis are accurate and up-to-date, we cannot guarantee completeness. Data sources include government agencies, international organizations, and field research. Conditions change frequently." },
    { page_id: "disclaimer", section_order: 3, section_title: "Limitation of Liability", section_content: "Dancing with Lions shall not be liable for any damages arising from use or inability to use this site, reliance on information provided, or errors or omissions in content." },
    { page_id: "disclaimer", section_order: 4, section_title: "Contact", section_content: "Dancing with Lions. Email: legal@dancingwiththelions.com" },
  ],
  "intellectual-property": [],
}

// ─────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────

export async function getLegalPage(pageId: string): Promise<LegalPage[]> {
  return LEGAL_CONTENT[pageId] || []
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return SITE_CONFIG
}

export async function getNetworkSites(): Promise<SiteConfig[]> {
  return [SITE_CONFIG]
}

export async function getFooterLinks(): Promise<FooterLink[]> {
  return []
}

export async function getLegalPageSlugs(): Promise<string[]> {
  return ['privacy', 'terms', 'disclaimer', 'intellectual-property']
}

// No-op — variables already resolved in hardcoded content
export function resolveLegalVariables(
  content: string,
  _siteConfig: SiteConfig | null
): string {
  return content
}
