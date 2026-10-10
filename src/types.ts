export interface IntakeFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  needs: string[];
  message: string;
  source?: string;
}

export interface IntakeSubmissionResult {
  success: boolean;
  message: string;
  previewUrl?: string | null;
  messageId?: string;
  data?: {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    industry: string;
    needs: string;
    submittedAt: string;
  };
  error?: string;
}
