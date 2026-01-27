<template>
  <section id="portfolio" class="section portfolio-section">
    <div class="container">
      <div class="section-title fade-in">
        <h2>Recent Projects</h2>
        <p>Explore a selection of my latest interior design projects, showcasing diverse styles and spaces.</p>
      </div>
      <div class="portfolio-grid">
        <div
          class="portfolio-item fade-in"
          v-for="project in portfolio"
          :key="project.id"
          @click="emit('openModal', project)"
        >
          <img :src="project.image" :alt="project.title" loading="lazy" decoding="async" />
          <div class="portfolio-overlay">
            <div class="portfolio-category-icon">
              <svg v-if="project.category === 'Residential'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:0 auto;">
                <path d="M3 11.5L12 4l9 7.5"/>
                <path d="M5 10.5V20a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-4h2v4a1 1 0 0 0 1 1H18a1 1 0 0 0 1-1v-9.5"/>
              </svg>
              <svg v-else-if="project.category === 'Commercial'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:0 auto;">
                <rect x="3" y="7" width="7" height="13" rx="1"/>
                <rect x="14" y="3" width="7" height="17" rx="1"/>
                <path d="M10 13h4"/>
              </svg>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  gallery: string[];
  description: string;
}

const emit = defineEmits(['openModal']);
const baseUrl = import.meta.env.BASE_URL;

const portfolio: Project[] = [
  {
    id: 1,
    title: 'CH Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/CH (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/CH (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/CH (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/CH (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/CH (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/CH (5)_result_1920.webp`,
    ],
    description: 'Modern residential interior design with elegant finishes and contemporary style.',
  },
  {
    id: 2,
    title: 'DCV Project',
    category: 'Commercial',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (7)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (8)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (9)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (10)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/DCV (11)_result_1920.webp`,
    ],
    description: 'Sophisticated commercial space with modern aesthetics and functional design.',
  },
  {
    id: 3,
    title: 'GR Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/GR (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/GR (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/GR (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/GR (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/GR (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/GR (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/GR (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/GR (7)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/GR (8)_result_1920.webp`,
    ],
    description: 'Contemporary residential design featuring clean lines and harmonious color palettes.',
  },
  {
    id: 4,
    title: 'LXT Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (7)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (8)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (9)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (10)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (11)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (12)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (13)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (14)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/LXT (15)_result_1920.webp`,
    ],
    description: 'Luxurious residential interior with refined details and premium finishes.',
  },
  {
    id: 5,
    title: 'MC Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/MC (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/MC (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MC (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MC (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MC (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MC (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MC (6)_result_1920.webp`,
    ],
    description: 'Minimalist residential space with thoughtful design and functional elegance.',
  },
  {
    id: 6,
    title: 'MR Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/MR (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (7)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (8)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (9)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (10)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (11)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (12)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/MR (13)_result_1920.webp`,
    ],
    description: 'Modern residential design with spacious layout and natural lighting.',
  },
  {
    id: 7,
    title: 'RC Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/RC (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (7)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (8)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (9)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (10)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (11)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (12)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (13)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (14)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (15)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (16)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (17)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (18)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (19)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RC (20)_result_1920.webp`,
    ],
    description: 'Comprehensive residential project showcasing versatile design solutions.',
  },
  {
    id: 8,
    title: 'RSKBB Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBB (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBB (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBB (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBB (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBB (4)_result_1920.webp`,
    ],
    description: 'Stylish residential space with balanced aesthetics and comfort.',
  },
  {
    id: 9,
    title: 'RSKBG Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBG (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBG (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBG (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBG (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSKBG (4)_result_1920.webp`,
    ],
    description: 'Contemporary residential interior with sophisticated design elements.',
  },
  {
    id: 10,
    title: 'RSMBR Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (7)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (8)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/RSMBR (9)_result_1920.webp`,
    ],
    description: 'Elegant master bedroom suite with luxurious finishes and serene ambiance.',
  },
  {
    id: 11,
    title: 'SJ Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/SJ (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/SJ (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SJ (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SJ (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SJ (4)_result_1920.webp`,
    ],
    description: 'Modern residential design with clean aesthetics and functional spaces.',
  },
  {
    id: 12,
    title: 'SMLT1 Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (7)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (8)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (9)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (10)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (11)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (12)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (13)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (14)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT1 (15)_result_1920.webp`,
    ],
    description: 'Spacious residential project with open concept and contemporary styling.',
  },
  {
    id: 13,
    title: 'SMLT2 Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2 (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2 (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2 (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2 (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2 (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2 (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2 (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2 (7)_result_1920.webp`,
    ],
    description: 'Modern residential interior with sophisticated design and warm atmosphere.',
  },
  {
    id: 14,
    title: 'SMLT2K Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2K (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2K (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2K (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/SMLT2K (3)_result_1920.webp`,
    ],
    description: 'Elegant residential kitchen design with modern amenities and functionality.',
  },
  {
    id: 15,
    title: 'TD Project',
    category: 'Residential',
    image: `${baseUrl}img/RESIDENTAL WEBP/1920/TD (1)_result_1920.webp`,
    gallery: [
      `${baseUrl}img/RESIDENTAL WEBP/1920/TD (1)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/TD (2)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/TD (3)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/TD (4)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/TD (5)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/TD (6)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/TD (7)_result_1920.webp`,
      `${baseUrl}img/RESIDENTAL WEBP/1920/TD (8)_result_1920.webp`,
    ],
    description: 'Contemporary residential space with thoughtful design and timeless appeal.',
  },
];
</script>

<style scoped>
/* Paste the styles for the .portfolio-section, .portfolio-grid, etc. here */
.portfolio-section {
  background: var(--gray-light);
}

.portfolio-section .section-title {
  margin-top: 0;
}

@media (max-width: 900px) {
  .portfolio-section .section-title {
    margin-top: 0;
  }
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-top: 2rem;
}

.portfolio-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 240px;
  width: 100%;
}

.portfolio-item:hover {
  transform: scale(1.05);
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
}

.portfolio-overlay h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.portfolio-overlay p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.portfolio-category-icon {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  opacity: 0.85;
}

.portfolio-category-icon svg {
  width: 28px;
  height: 28px;
  stroke: var(--primary-color, #222);
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .portfolio-item {
    height: 240px;
  }

  .portfolio-overlay {
    padding: 1.5rem 1rem;
  }

  .portfolio-overlay h3 {
    font-size: 1.1rem;
  }

  .portfolio-overlay p {
    font-size: 0.85rem;
  }

  .portfolio-category-icon {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .portfolio-item {
    height: 200px;
  }
}
</style>