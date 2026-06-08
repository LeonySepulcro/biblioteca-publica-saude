import { Video } from '../types';

/**
 * Simulates a Google Drive folder structure:
 * Root > [Category Name] > [Intensity Level] > [File Name.mp4]
 */
export interface DriveFile {
  path: string; // e.g., "Saúde SUS/Caminhada/Leve/Caminhada_Basica.mp4"
  title: string;
  duration: string;
  thumbnail: string;
  tags: string[];
}

const SIMULATED_DRIVE_FILES: DriveFile[] = [
  {
    path: "SUS_Salute/Fortalecimento/Moderada/Agachamento_Lateral.mp4",
    title: "Agachamento Lateral",
    duration: "02:30",
    thumbnail: "/src/assets/images/side_lunge_thumbnail_png_1779206661906.png",
    tags: ["Sem equipamentos"]
  },
  {
    path: "SUS_Salute/Fortalecimento/Moderada/Pernas_Cadeira.mp4",
    title: "Fortalecimento de Pernas com Cadeira",
    duration: "04:20",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
    tags: ["Sentado", "Menos de 5 min"]
  },
  {
    path: "SUS_Salute/Caminhada/Leve/Caminhada_15min.mp4",
    title: "Caminhada em Casa de 15 Minutos",
    duration: "15:00",
    thumbnail: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=600",
    tags: ["Sem equipamentos"]
  },
  {
    path: "SUS_Salute/Saúde Mental/Leve/Meditacao_Stress.mp4",
    title: "Meditação Guiada: Alívio de Stress",
    duration: "05:30",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    tags: ["Menos de 5 min"]
  },
  {
    path: "SUS_Salute/Melhor Idade/Leve/Mobilidade_Idosos.mp4",
    title: "Mobilidade Articular para Idosos",
    duration: "10:15",
    thumbnail: "/src/assets/images/mobility_seniors_thumb_1779206772539.png",
    tags: ["Sentado", "Sem equipamentos"]
  },
  {
    path: "SUS_Salute/Exercícios em Casa/Alta/Cardio_Intenso.mp4",
    title: "Treino de Cardio Intenso sem Impacto",
    duration: "20:00",
    thumbnail: "/src/assets/images/intense_cardio_no_impact_thumb_1779206787871.png",
    tags: ["Sem equipamentos"]
  }
];

export function mapDriveToVideos(): Video[] {
  return SIMULATED_DRIVE_FILES.map((file, index) => {
    const parts = file.path.split('/');
    // Structure: Root (0) > Category (1) > Intensity (2) > Filename (3)
    const categoryName = parts[1];
    const intensity = parts[2] as Video['intensity'];

    // Map category name to ID (simpler for filtering)
    const categoryIdMap: Record<string, string> = {
      "Alongamento": "alongamento",
      "Fortalecimento": "fortalecimento",
      "Caminhada": "caminhada",
      "Saúde Mental": "mente",
      "Melhor Idade": "melhor-idade",
      "Exercícios em Casa": "casa"
    };

    return {
      id: `drive-${index}`,
      title: file.title,
      duration: file.duration,
      thumbnail: file.thumbnail,
      category: categoryIdMap[categoryName] || 'casa',
      tags: file.tags,
      intensity: intensity,
      isRecommended: index % 2 === 0, // Mock recommendation
      videoUrl: index === 0 ? 'https://drive.google.com/file/d/1hQ3K-Pw-FV1R5L1c1rYeVHvurvohDzGY/preview?loop=1&playlist=1hQ3K-Pw-FV1R5L1c1rYeVHvurvohDzGY' : undefined
    };
  });
}
