import { Video, Category } from './types';
import armStretchThumb from './assets/images/regenerated_image_1779391234031.png';
import thighStretchThumb from './assets/images/thigh_stretch_thumb_1779391103997.png';
import stepUpThumb from './assets/images/step_up_thumb_1779391119232.png';
import adaptedJackingThumb from './assets/images/adapted_jacking_thumb_1779391134986.png';
import rhythmicStepThumb from './assets/images/rhythmic_step_thumb_1779391148664.png';

export const CATEGORIES: Category[] = [
  { id: 'mobilidade-alongamento', title: 'Mobilidade e Alongamento', iconName: 'StretchHorizontal', color: 'bg-emerald-50' },
  { id: 'fortalecimento-postura', title: 'Fortalecimento e Postura', iconName: 'Dumbbell', color: 'bg-indigo-50' },
  { id: 'core-abdominal', title: 'Core e Abdominal', iconName: 'Activity', color: 'bg-blue-50' },
  { id: 'cardio-leve', title: 'Cardio Leve', iconName: 'Footprints', color: 'bg-orange-50' },
];

export const VIDEOS: Video[] = [
  // --- CATEGORY 1: Mobilidade e Alongamento (11 items) ---
  {
    id: '1',
    title: 'Alongamento Borboleta',
    duration: '05:00',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['Sem equipamentos', 'Sentado'],
    intensity: 'Leve',
    isRecommended: true,
    videoUrl: 'https://video.trainiac.fit/exercises/alternating_knees_to_chest/1.0.0/alternating_knees_to_chest_b_960_540.mp4',
    objetivo: 'Alongar os músculos adutores da coxa e melhorar a flexibilidade do quadril.',
    impacto: 'Reduz a rigidez da pelve e melhora a amplitude de movimentos simples diários.',
    instrucoes: [
      'Sente-se no chão com as costas eretas e flexione os joelhos.',
      'Una as solas dos pés, trazendo os calcanhares o mais próximo possível do corpo.',
      'Segure os pés com as mãos e pressione suavemente os joelhos em direção ao solo.',
      'Mantenha a posição respirando profundamente por 30 a 60 segundos.',
      'Sinta a abertura do quadril sem forçar excessivamente.'
    ],
    dicas: [
      'Evite balançar as pernas com força para não tensionar os tendões.',
      'Se necessário, sente-se sobre uma almofada firme para apoiar a coluna.',
      'Mantenha o peito sempre aberto e os ombros relaxados.'
    ]
  },
  {
    id: '2',
    title: 'Alongamento de Braço',
    duration: '04:00',
    thumbnail: armStretchThumb,
    category: 'mobilidade-alongamento',
    tags: ['Sem equipamentos', 'Fácil'],
    intensity: 'Leve',
    objetivo: 'Alongar os ombros e a parte superior das costas, aliviando tensões acumuladas.',
    impacto: 'Alivia dores nas costas decorrentes de longos períodos sentado e melhora a postura.',
    instrucoes: [
      'Fique em pé ou sente-se com a coluna reta.',
      'Passe um dos braços esticado à frente do peito.',
      'Use o outro braço para pressionar o cotovelo de encontro ao corpo.',
      'Mantenha o ombro do braço alongado apontando para baixo.',
      'Segure por 30 segundos de cada lado.'
    ],
    dicas: [
      'Mantenha a cabeça voltada para frente ou gire suavemente sobre o ombro alongado.',
      'Não bloqueie a respiração; relaxe o pescoço durante o movimento.'
    ]
  },
  {
    id: '3',
    title: 'Mobilidade com Bastão',
    duration: '06:30',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['Com bastão', 'Ombros'],
    intensity: 'Leve',
    isRecommended: true,
    objetivo: 'Restaurar a mobilidade da articulação dos ombros e melhorar a expansão torácica.',
    impacto: 'Reduz o encurtamento peitoral, prevenindo dores crônicas nos ombros e pescoço.',
    instrucoes: [
      'Segure um bastão (pode ser um cabo de vassoura) com as mãos bem afastadas.',
      'Eleve o bastão acima da cabeça lentamente com os braços esticados.',
      'Se confortável, leve o bastão um pouco atrás da linha da cabeça.',
      'Retorne devagar até a altura dos quadris.',
      'Repita o movimento de 10 a 12 vezes de forma fluida.'
    ],
    dicas: [
      'Abaixe os ombros longe das orelhas antes de iniciar.',
      'Não force ultrapassar o limite anatômico dos ombros nas primeiras repetições.'
    ]
  },
  {
    id: '4',
    title: 'Balanço de Quadril',
    duration: '05:15',
    thumbnail: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['Sem equipamentos', 'Equilíbrio'],
    intensity: 'Leve',
    objetivo: 'Aquecer e lubrificar a articulação coxofemoral com balanços controlados.',
    impacto: 'Aumenta a estabilidade nas pernas e melhora o equilíbrio dinâmico.',
    instrucoes: [
      'Fique em pé próximo a uma parede ou cadeira para se apoiar.',
      'Mantenha o peso do corpo sobre uma das pernas.',
      'Balance a outra perna livremente para frente e para trás de modo controlado.',
      'Execute de 10 a 15 balanços e troque o lado.',
      'Os movimentos devem ser rítmicos e confortáveis.'
    ],
    dicas: [
      'Mantenha o tronco o mais estável e ereto possível.',
      'Não eleve a perna além do limite em que sua lombar precise arquear.'
    ]
  },
  {
    id: '5',
    title: 'Alongamento Pirâmide',
    duration: '07:00',
    thumbnail: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['Sem equipamentos', 'Posturar'],
    intensity: 'Moderada',
    objetivo: 'Alongar a cadeia posterior das pernas (isquiotibiais) e glúteos.',
    impacto: 'Alivia tensões na região lombar decorrentes de rigidez nas pernas.',
    instrucoes: [
      'Dê um passo médio para frente com um dos pés.',
      'Mantenha ambos os calcanhares apoiados no chão e as pontas apontadas para frente.',
      'Incline o tronco para a frente a partir dos quadris, mantendo a coluna alinhada.',
      'Apoie as mãos na coxa ou na canela, dependendo da sua flexibilidade.',
      'Permaneça na posição por 30 segundos e inverta a perna.'
    ],
    dicas: [
      'Não curve exageradamente as costas, priorize dobrar o quadril.',
      'Mantenha um leve desbloqueio (flexão milimétrica) nos joelhos para proteger a articulação.'
    ]
  },
  {
    id: '6',
    title: 'Rotação de Quadril',
    duration: '04:45',
    thumbnail: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['Sem equipamentos', 'Lombar'],
    intensity: 'Leve',
    objetivo: 'Mobilizar a pelve e a coluna lombar em movimentos circulares profundos.',
    impacto: 'Diminui a rigidez matinal e melhora o retorno venoso nas pernas.',
    instrucoes: [
      'Fique de pé com os pés ligeiramente mais largos que os quadris.',
      'Coloque as mãos firmes em cima dos quadris.',
      'Realize círculos lentos e amplos com o quadril em uma direção.',
      'Faça 10 rotações completas e mude o sentido do giro.',
      'Mantenha os joelhos relaxados durante todo o exercício.'
    ],
    dicas: [
      'Sincronize a respiração com as fases do círculo (inspire ao ir para trás, expire ao ir à frente).',
      'Mantenha a sola dos pés totalmente plantadas no chão.'
    ]
  },
  {
    id: '7',
    title: 'Abraço de Joelho',
    duration: '05:30',
    thumbnail: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['Deitado', 'Relaxar'],
    intensity: 'Leve',
    isRecommended: true,
    objetivo: 'Alongar a musculatura lombar e os músculos glúteos de forma suave.',
    impacto: 'Alívio imediato para desconfortos lombares e compressão sacral.',
    instrucoes: [
      'Deite-se de costas em um colchonete ou superfície firme.',
      'Dobre os joelhos e segure-os com as mãos contra o peito.',
      'Pressione levemente os joelhos em direção ao tronco, relaxando a cabeça.',
      'Você pode balançar suavemente de um lado para o outro para massagear a lombar.',
      'Foque em respirações abdominais profundas por 45 segundos.'
    ],
    dicas: [
      'Mantenha os ombros relaxados e firmes no chão.',
      'Não puxe a cabeça para cima; o pescoço deve estar relaxado no chão.'
    ]
  },
  {
    id: '8',
    title: 'Alongamento de Coxa',
    duration: '04:30',
    thumbnail: thighStretchThumb,
    category: 'mobilidade-alongamento',
    tags: ['De pé', 'Apoio'],
    intensity: 'Leve',
    objetivo: 'Alongar o quadríceps (parte anterior da coxa) e abrir o flexor do quadril.',
    impacto: 'Previne dores nas patelas e melhora o alinhamento da coluna lombar.',
    instrucoes: [
      'Fique em pé e use uma parede ou cadeira para se equilibrar.',
      'Flexione um joelho para trás e segure o tornozelo com a mão correspondente.',
      'Aproxime o calcanhar do glúteo, mantendo os joelhos alinhados lado a lado.',
      'Mantenha o abdômen contraído para evitar hiperlordose.',
      'Segure por 30 segundos em cada perna.'
    ],
    dicas: [
      'Mantenha a coluna reta e olhe fixo num ponto para apoiar o equilíbrio.',
      'Se doer o joelho, puxe com menos intensidade ou use uma toalha ao redor do tornozelo.'
    ]
  },
  {
    id: '9',
    title: 'Moinho de Vento',
    duration: '06:00',
    thumbnail: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['Sem equipamentos', 'Tronco'],
    intensity: 'Moderada',
    objetivo: 'Treinar a rotação torácica ativa com estabilização do quadril.',
    impacto: 'Melhora a mobilidade das costas e costas superiores, reduzindo nós musculares.',
    instrucoes: [
      'Fique em pé com os pés afastados na largura dos ombros.',
      'Abra os braços lateralmente na altura dos ombros.',
      'Incline o tronco para a frente e tente tocar o pé esquerdo com a mão direita.',
      'Gire o peito abrindo o outro braço em direção ao teto.',
      'Retorne ao centro e repita para o lado oposto com controle.'
    ],
    dicas: [
      'Mantenha os joelhos ligeiramente dobrados se a flexibilidade for menor.',
      'Siga a mão elevada com o olhar se possível.'
    ]
  },
  {
    id: '10',
    title: 'Alongamento Gato-Vaca',
    duration: '05:00',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['De joelhos', 'Coluna'],
    intensity: 'Leve',
    objetivo: 'Mobilizar a coluna inteira do cóccix até o pescoço em flexão e extensão.',
    impacto: 'Aumenta a lubrificação discal e relaxa os eretores da espinha.',
    instrucoes: [
      'Apoie-se em quatro apoios (mãos sob os ombros, joelhos sob os quadris).',
      'Ao inspirar, empurre o abdômen para baixo, eleve o quadril e olhe para cima (Gato).',
      'Ao expirar, arredonde as costas para cima, guardando o quadril e olhando o umbigo (Vaca).',
      'Alterne entre as duas poses de forma cadenciada por 10 respirações.',
      'Foque na sensação de fluidez e transição suave.'
    ],
    dicas: [
      'Mantenha os braços bem estendidos sem dobrar os cotovelos.',
      'Pressione o solo com as palmas das mãos para evitar sobrecarregar os punhos.'
    ]
  },
  {
    id: '11',
    title: 'Tornozelo na Parede',
    duration: '04:15',
    thumbnail: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600',
    category: 'mobilidade-alongamento',
    tags: ['Sem equipamentos', 'Fácil'],
    intensity: 'Leve',
    objetivo: 'Melhorar a dorsiflexão do tornozelo, alongando a fáscia plantar e a panturrilha.',
    impacto: 'Melhora o padrão de agachamento e reduz a propensão a entorses.',
    instrucoes: [
      'Fique em pé de frente para uma parede.',
      'Apoie a metade anterior do pé contra a parede, mantendo o calcanhar no chão.',
      'Incline suavemente o quadril e o tronco para a frente em direção à parede.',
      'Sinta o alongamento profundo na panturrilha.',
      'Mantenha a posição por 30 segundos em cada perna.'
    ],
    dicas: [
      'O calcanhar deve tocar o solo firmemente durante todo o exercício.',
      'Ajuste o ângulo do pé na parede para aumentar ou diminuir a tração.'
    ]
  },

  // --- CATEGORY 2: Fortalecimento e Postura (9 items) ---
  {
    id: '12',
    title: 'Ponte de Glúteo',
    duration: '06:00',
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    category: 'fortalecimento-postura',
    tags: ['Sem equipamentos', 'Glúteos'],
    intensity: 'Moderada',
    isRecommended: true,
    objetivo: 'Fortalecer os glúteos, isquiotibiais e músculos do assoalho pélvico.',
    impacto: 'Estabiliza a bacia e atua diretamente na prevenção e alívio da dor lombar.',
    instrucoes: [
      'Deite-se de costas com os joelhos flexionados e pés apoiados no chão na largura dos quadris.',
      'Mantenha os braços ao lado do corpo com as palmas voltadas para baixo.',
      'Comprima os glúteos e empurre os calcanhares contra o chão para elevar o quadril.',
      'Forme uma linha reta dos ombros até os joelhos.',
      'Desça lentamente sem encostar o quadril no chão e repita por 12 vezes.'
    ],
    dicas: [
      'Não arqueie as costas em excesso no topo do movimento.',
      'Foque em ativar a parte posterior das pernas e não forçar os ombros.'
    ]
  },
  {
    id: '13',
    title: 'Super-homem (Costas)',
    duration: '05:30',
    thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    category: 'fortalecimento-postura',
    tags: ['Deitado', 'Costas'],
    intensity: 'Moderada',
    objetivo: 'Fortalecer os eretores da espinha e estabilizadores escapulares posteriores.',
    impacto: 'Alinhamento postural imediato e ativação dos músculos defasados pelo uso do celular.',
    instrucoes: [
      'Deite-se de barriga para baixo em um colchonete.',
      'Estenda os braços à frente da cabeça e as pernas retas para trás.',
      'Ao expirar, eleve simultaneamente o peito, os braços e os pés do chão.',
      'Mantenha o olhar apontado para baixo para alinhar a cervical.',
      'Segure no topo por 2 segundos e retorne de forma controlada. Faça 10 repetições.'
    ],
    dicas: [
      'Não puxe o pescoço para trás; a cabeça acompanha a linha da espinha.',
      'Pense em crescer com os braços para frente e pernas para trás em vez de apenas subir.'
    ]
  },
  {
    id: '14',
    title: 'Caminhada da Minhoca',
    duration: '07:15',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600',
    category: 'fortalecimento-postura',
    tags: ['Sem equipamentos', 'Desafio'],
    intensity: 'Alta',
    objetivo: 'Desenvolver a força integrada do core, estabilidade escapular e flexibilidade posterior.',
    impacto: 'Melhora o tônus muscular de todo o corpo e estabilidade postural de forma global.',
    instrucoes: [
      'Fique em pé com os braços nas laterais do corpo.',
      'Flexione o tronco à frente até apoiar as palmas das mãos no chão (se necessário, dobre levemente os joelhos).',
      'Desloque as mãos para a frente de forma alternada, até atingir uma posição de prancha.',
      'Mantenha os abdominais ativos e, com pequenos passos, caminhe com os pés em direção às mãos.',
      'Fique de pé verticalmente e repita o circuito 6 vezes.'
    ],
    dicas: [
      'Mantenha os quadris firmes sem rebolar lateralmente durante o apoio das mãos.',
      'Execute lentamente para evitar picos de pressão mecânica nas costas.'
    ]
  },
  {
    id: '15',
    title: 'Subida no Degrau',
    duration: '06:00',
    thumbnail: stepUpThumb,
    category: 'fortalecimento-postura',
    tags: ['Com degrau', 'Pernas'],
    intensity: 'Moderada',
    objetivo: 'Fortalecer a coxa (quadríceps) e os glúteos de forma unilateral.',
    impacto: 'Facilita tarefas como subir escadas, carregar peso e melhora a mobilidade dos joelhos.',
    instrucoes: [
      'Posicione-se em frente a um degrau firme ou caixa de exercício.',
      'Coloque o pé direito inteiro sobre o degrau.',
      'Empurre o degrau fazendo força com a perna direita para subir o corpo inteiro.',
      'Apoie o pé esquerdo no degrau apenas para o equilíbrio e desça lentamente com a perna esquerda.',
      'Faça 10 repetições de um lado antes de alternar.'
    ],
    dicas: [
      'Mantenha o joelho apontado na direção dos dedos do pé, sem permitir que colapse para dentro.',
      'Não tome impulso com o pé de baixo; faça a força no quadríceps do pé de cima.'
    ]
  },
  {
    id: '16',
    title: 'Agachamento na Parede',
    duration: '05:00',
    thumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600',
    category: 'fortalecimento-postura',
    tags: ['Isométrico', 'Sem equipamentos'],
    intensity: 'Moderada',
    isRecommended: true,
    objetivo: 'Fortalecer o músculo quadríceps e a articulação do joelho através de esforço isométrico estático.',
    impacto: 'Aumenta consideravelmente a resistência muscular inferior sem impacto direto nas juntas.',
    instrucoes: [
      'Encoste as costas inteiramente em uma parede estável.',
      'Deslize para baixo até que suas coxas fiquem quase paralelas ao solo (ângulo máximo de 90°).',
      'Mantenha os pés afastados na largura dos quadris e calcanhares alinhados abaixo dos joelhos.',
      'Mantenha o peito aberto e braços soltos ou ao longo da parede.',
      'Sustente a posição por 30 a 45 segundos.'
    ],
    dicas: [
      'Certifique-se de que seus joelhos não fiquem à frente dos dedos dos pés.',
      'Respire de forma calma e constante durante a contração isométrica.'
    ]
  },
  {
    id: '17',
    title: 'Descida de Degrau',
    duration: '05:45',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    category: 'fortalecimento-postura',
    tags: ['Pernas', 'Controle'],
    intensity: 'Moderada',
    objetivo: 'Trabalhar a força excêntrica das coxas e o equilíbrio postural fino na descida.',
    impacto: 'Altamente funcional para descer degraus, ladeiras e reforçar os tendões do joelho.',
    instrucoes: [
      'Fique em pé sobre um degrau baixo ou calçada.',
      'Mantenha todo o pé de apoio firme no degrau.',
      'Lentamente, desça o outro calcanhar em direção ao solo tocando de leve.',
      'Mantenha o peso na perna de trás carregando o movimento.',
      'Suba de volta e repita 10 vezes.'
    ],
    dicas: [
      'Realize a descida com o máximo de controle e lentidão possíveis.',
      'Não deixe o pé de apoio desviar do eixo.'
    ]
  },
  {
    id: '18',
    title: 'Exercício Ostra',
    duration: '06:00',
    thumbnail: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600',
    category: 'fortalecimento-postura',
    tags: ['Deitado', 'Quadril'],
    intensity: 'Leve',
    objetivo: 'Isolar e fortalecer o glúteo médio, músculo fundamental para a estabilização do quadril.',
    impacto: 'Estabiliza a marcha e previne dores ocultas nos quadris e na lombar ao caminhar.',
    instrucoes: [
      'Deite-se de lado, com a cabeça apoiada no braço ou em um travesseiro.',
      'Flexione os joelhos em 90 graus e una os calcanhares.',
      'Mantendo os calcanhares grudados, abra as coxas o máximo possível sem girar o quadril traseiro.',
      'Mantenha o quadril de cima apontando para frente.',
      'Retorne lentamente e execute 12 a 15 rotações de cada lado.'
    ],
    dicas: [
      'Use a mão livre para segurar seu osso do quadril e certificar que ele não gire para trás.',
      'Mantenha os pés firmemente unidos durante o abrir e fechar.'
    ]
  },
  {
    id: '19',
    title: 'Flexão na Parede',
    duration: '05:15',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    category: 'fortalecimento-postura',
    tags: ['Membros Superiores', 'Fácil'],
    intensity: 'Leve',
    objetivo: 'Fortalecer o peitoral, ombros e tríceps com menor sobrecarga articular gravitacional.',
    impacto: 'Excelente substituto para flexões de braço convencionais, seguro para qualquer idade.',
    instrucoes: [
      'Fique em pé de frente para uma parede sólida, a um passo de distância.',
      'Apoie as palmas das mãos na parede um pouco mais largas que a linha dos ombros.',
      'Mantendo o corpo reto como uma prancha, flexione os cotovelos trazendo o peito até a parede.',
      'Empurre de volta contra a parede concentrando a força no peito e tríceps.',
      'Faça de 10 a 12 flexões de forma ativa.'
    ],
    dicas: [
      'Não deite a cintura para frente; mantenha o core engajado sem empinar os quadris.',
      'Os cotovelos devem apontar levemente para baixo na diagonal, não abertos para as laterais.'
    ]
  },
  {
    id: '20',
    title: 'Prancha Abdominal',
    duration: '06:30',
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
    category: 'fortalecimento-postura',
    tags: ['Sem equipamentos', 'Core'],
    intensity: 'Alta',
    objetivo: 'Recrutar as fibras mais profundas do transverso do abdômen e estabilizadores espinhais.',
    impacto: 'Reduz significativamente a instabilidade lombar e melhora a simetria de todo o tronco.',
    instrucoes: [
      'Apoie os antebraços e os cotovelos no chão alinhados diretamente embaixo dos ombros.',
      'Estique as pernas para trás e apoie-se nas pontas dos pés.',
      'Mantenha o corpo em uma linha reta, do calcanhar até os ombros.',
      'Contraia as coxas, os glúteos e o abdômen vigorosamente.',
      'Sustente a posição imóvel por 20 a 40 segundos.'
    ],
    dicas: [
      'Não permita que a cintura caia em direção ao solo ou que o quadril suba muito.',
      'Olhe para o chão entre suas mãos para não forçar as vértebras do pescoço.'
    ]
  },

  // --- CATEGORY 3: Core e Abdominal (5 items) ---
  {
    id: '21',
    title: 'Abdominal Cruzado',
    duration: '06:00',
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
    category: 'core-abdominal',
    tags: ['Sem equipamentos', 'Core'],
    intensity: 'Alta',
    isRecommended: true,
    objetivo: 'Exercitar os músculos oblíquos internos e externos do abdômen através de rotações espinhais.',
    impacto: 'Fortalece os estabilizadores rotacionais do tronco e ajuda a afinar a linha da cintura.',
    instrucoes: [
      'Deite-se de costas com os joelhos dobrados e as mãos atrás da cabeça.',
      'Retire levemente as escápulas do chão para manter o abdômen tensionado.',
      'Traga o cotovelo direito em direção ao joelho esquerdo enquanto estica a perna direita.',
      'Mude o lado de maneira coordenada, aproximando o cotovelo esquerdo do joelho direito.',
      'Siga um padrão de respiração uniforme a cada repetição.'
    ],
    dicas: [
      'Não puxe as mãos contra o pescoço; a cabeça repousa levemente sem pressão de alavanca.',
      'A rotação deve partir das costelas e do tórax, não do pescoço.'
    ]
  },
  {
    id: '22',
    title: 'Abdominal Alternado',
    duration: '05:30',
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    category: 'core-abdominal',
    tags: ['Sem equipamentos', 'Reto Abdominal'],
    intensity: 'Alta',
    objetivo: 'Focar na contração excêntrica do reto abdominal de forma isolada.',
    impacto: 'Fortalece a parte frontal do abdômen, melhorando a sustentação postural.',
    instrucoes: [
      'Deite-se no colchoado com as duas pernas erguidas em direção ao teto.',
      'Estique os braços na direção dos pés.',
      'Contraia o abdômen e eleve as costas para tocar nos pés alternadamente.',
      'Desça as escápulas com suavidade sem relas de impacto no chão.',
      'Faça de 15 a 20 toques controlados.'
    ],
    dicas: [
      'Mantenha as pernas tão estendidas quanto suas juntas de flexibilidade permitirem.',
      'Expire ao esticar os braços para alcançar o topo.'
    ]
  },
  {
    id: '23',
    title: 'Abdominal no Sofá',
    duration: '05:00',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    category: 'core-abdominal',
    tags: ['Apoio', 'Adaptado'],
    intensity: 'Leve',
    objetivo: 'Possibilitar o treino de abdômen com assistência física oferecida por um estofado estável.',
    impacto: 'Permite que iniciantes sem força de base nas costas consigam fazer abdominal com segurança.',
    instrucoes: [
      'Sente-se no solo e apoie ou prenda os pés debaixo do sofá estável.',
      'Mantenha os joelhos flexionados a 90° graus.',
      'Incline o tronco para trás até apoiar a lombar levemente em um colchonete ou toalha.',
      'Suba fazendo força no abdômen até a vertical.',
      'Repita o gesto de forma segura descendo devagar.'
    ],
    dicas: [
      'Mantenha o peito alto e os braços cruzados sobre os ombros.',
      'Não puxe de forma brusca para subir; use a ativação gradual do core.'
    ]
  },
  {
    id: '24',
    title: 'Elevação de Pernas',
    duration: '07:00',
    thumbnail: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600',
    category: 'core-abdominal',
    tags: ['Deitado', 'Core Baixo'],
    intensity: 'Alta',
    objetivo: 'Fortalecer a porção infra-abdominal e os flexores do quadril.',
    impacto: 'Ajuda a eliminar a flacidez abdominal profunda e melhora o retorno da bacia.',
    instrucoes: [
      'Deite-se com as costas apoiadas e mãos por baixo dos glúteos para proteção lombar.',
      'Estenda perfeitamente as duas pernas longas à frente.',
      'Ao expirar, eleve as duas pernas até formarem um ângulo reto com o corpo.',
      'Desça as pernas com controle impedindo que encostem no chão.',
      'Abaixe até onde consiga reter sem retirar a lombar do chão. Faça de 10 a 12 movimentos.'
    ],
    dicas: [
      'Se doer as costas lombadas na descida, diminua a descida ou dobre os joelhos levemente.',
      'O esforço precisa ser sentido no abdômen, não no pescoço ou nuca.'
    ]
  },
  {
    id: '25',
    title: 'Elevação de Joelhos Sentado',
    duration: '04:30',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    category: 'core-abdominal',
    tags: ['Sentado', 'Fácil'],
    intensity: 'Leve',
    isRecommended: true,
    objetivo: 'Ativar a musculatura abdominal profunda de forma segura na posição de sentado.',
    impacto: 'Excelente alternativa para idosos ou pessoas com limitações na coluna ao deitar no chão.',
    instrucoes: [
      'Sente-se eretamente em uma cadeira firme e afaste as costas do encosto.',
      'Segure as laterais do assento com as duas mãos para de dar firmeza.',
      'Mantendo o tronco reto, extraia alternadamente um dos joelhos em direção ao peitoral.',
      'Realize uma leve pausa de 1 segundo com o joelho elevado e retorne devagar.',
      'Execute de 10 a 15 repetições de cada lado.'
    ],
    dicas: [
      'Não se curve à frente para encontrar o joelho, traga o joelho até o peito e mantenha as costas retas.',
      'Solte o ar pela boca no momento da subida das pernas.'
    ]
  },

  // --- CATEGORY 4: Cardio Leve (3 items) ---
  {
    id: '26',
    title: 'Polichinelo Adaptado',
    duration: '06:00',
    thumbnail: adaptedJackingThumb,
    category: 'cardio-leve',
    tags: ['Sem equipamentos', 'Sem saltar'],
    intensity: 'Leve',
    isRecommended: true,
    objetivo: 'Trabalhar o condicionamento cardiopulmonar evitando saltos ou choques mecânicos.',
    impacto: 'Trabalho aeróbico completo com impacto zero para os joelhos e calcanhares.',
    instrucoes: [
      'Fique em pé com os pés juntos e braços rente às laterais das pernas.',
      'Abra o braço direito acima da cabeça enquanto dá um passo com o pé direito para o lado da carona.',
      'Retorne de volta ao centro juntando os braços e pés na vertical.',
      'Alterne para o pé esquerdo esticando o braço esquerdo no teto.',
      'Busque manter um ritmo estável por 2 a 3 minutos sem parar.'
    ],
    dicas: [
      'Use sapatos fechados de amortecimento leve para dar conforto plantar.',
      'Respire pelo nariz e expire profundamente pela boca durante o movimento.'
    ]
  },
  {
    id: '27',
    title: 'Marcha Estacionária',
    duration: '08:00',
    thumbnail: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=600',
    category: 'cardio-leve',
    tags: ['Sem equipamentos', 'Simples'],
    intensity: 'Leve',
    objetivo: 'Simular uma caminhada contínua dentro do espaço doméstico, ativando circulação e batimentos.',
    impacto: 'Aumenta as calorias gastas, melhora a disposição corporal e ativa a endorfina digestiva.',
    instrucoes: [
      'Fique de pé com os braços soltos nas laterais.',
      'Marche levantando ligeiramente os joelhos de forma alternada, imitando o ato de andar.',
      'Acompanhe o balanço dos braços de forma cruzada para dar ritmo.',
      'Pratique o passo em ritmo moderado no mesmo local por alguns minutos.',
      'Mantenha as solas tocando o chão sem barulhos bruscos das pisadas.'
    ],
    dicas: [
      'Para incrementar, eleve ainda mais a altura de subida dos joelhos após 2 minutos.',
      'Sua postura deve se manter ereta e ativa durante a marcha.'
    ]
  },
  {
    id: '28',
    title: 'Subida Rítmica',
    duration: '07:30',
    thumbnail: rhythmicStepThumb,
    category: 'cardio-leve',
    tags: ['Com apoio', 'Pulsão'],
    intensity: 'Leve',
    objetivo: 'Desenvolver resistência cardiovascular e fortalecer a coxa através de um passo cadenciado.',
    impacto: 'Ativação ideal para o fôlego e circulação inferior sem exaustão ou sobrecargas extremas.',
    instrucoes: [
      'Posicione-se em frente a um degrau seguro com as mãos livres.',
      'Suba o pé esquerdo, leve o direito também e depois desça o esquerdo seguido do direito.',
      'Repita esta cadência em um ritmo constante (Suba, suba, desça, desça).',
      'Experimente manter o exercício por sequências de 1 a 2 minutos.',
      'Troque a perna de guia que inicia o passo halteres a cada minuto.'
    ],
    dicas: [
      'Apoie o calcanhar todo sobre a base do degrau para dar total segurança aos tendões.',
      'Acelere o ritmo dos braços para incentivar a elevação cardíaca aeróbia.'
    ]
  }
];
