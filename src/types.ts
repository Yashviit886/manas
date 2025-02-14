export interface User {
  id: string;
  name: string;
  email: string;
  doshaProfile: {
    vata: number;
    pitta: number;
    kapha: number;
  };
  wellbeingScore: number;
}

export interface DailyCheck {
  id: string;
  userId: string;
  date: string;
  mood: number;
  energy: number;
  stress: number;
  sleep: number;
  notes?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: 'meditation' | 'yoga' | 'breathing' | 'exercise';
  doshaBalance: {
    vata: number;
    pitta: number;
    kapha: number;
  };
}