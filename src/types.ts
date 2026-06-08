export interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  category: string;
  tags: string[];
  intensity: 'Leve' | 'Moderada' | 'Alta';
  isRecommended?: boolean;
  objetivo?: string;
  impacto?: string;
  instrucoes?: string[];
  dicas?: string[];
  videoUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  iconName: string;
  color: string;
}
