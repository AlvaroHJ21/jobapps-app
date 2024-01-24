export interface Application {
  id: number;
  title: string;
  link: string;
  modality: number;
  status: number;
  description: string;
  comments: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  currency: number;
  company: string;
  location: string;
  platform_id: number;
  min_salary: number;
  max_salary: number;
  to_agree: boolean;
  platform: Platform;
}

export interface Platform {
  id: number;
  name: string;
  url: string;
  user: string;
  created_at: Date;
  updated_at: Date;
}
