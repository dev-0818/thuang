<template>
  <div class="gallery-view" :class="`${category}-theme`">
    <!-- Header with back button -->
    <header class="gallery-header">
      <button class="back-button" @click="$emit('back')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <h1 class="category-title">{{ category === 'residential' ? 'Residential' : 'Commercial' }}</h1>
      <button class="contact-button" @click="showContactModal = true">
        Contact Us
      </button>
    </header>

    <!-- 3D Wall Gallery Grid -->
    <div class="wall-grid" :class="`${category}-layout`">
      <div 
        v-for="(project, index) in filteredProjects" 
        :key="project.id"
        :class="['wall-item', `size-${getItemSize(index)}`]"
        :style="{ '--item-index': index }"
        @click="openLightbox(project)"
      >
        <picture>
          <source 
            :srcset="`${baseUrl}img/${imageFolder}/600/${project.thumbnail}_result_600.webp`"
            media="(max-width: 768px)"
          />
          <source 
            :srcset="`${baseUrl}img/${imageFolder}/1200/${project.thumbnail}_result_1200.webp`"
            media="(min-width: 769px)"
          />
          <img 
            :src="`${baseUrl}img/${imageFolder}/1200/${project.thumbnail}_result_1200.webp`"
            :alt="project.title"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div class="wall-overlay">
          <h3>{{ project.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <Teleport to="body">
      <div v-if="showContactModal" class="contact-modal-overlay" @click="showContactModal = false">
        <div class="contact-modal" @click.stop>
          <button class="modal-close" @click="showContactModal = false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <h2>Get In Touch</h2>
          <p class="modal-subtitle">Connect with us on social media</p>
          
          <div class="social-links">
            <a href="https://wa.me/6285359820664" target="_blank" class="social-link whatsapp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            
            <a href="https://www.instagram.com/thuangarchitect/" target="_blank" class="social-link instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            
            <a href="mailto:vaval.va98@gmail.com" class="social-link email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div v-if="selectedProject" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="lightbox-content" @click.stop>
          <button 
            class="lightbox-nav prev" 
            @click="prevImage" 
            :disabled="currentImageIndex === 0"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="lightbox-image-container">
            <picture>
              <source 
                :srcset="`${baseUrl}img/${imageFolder}/1200/${currentImage}_result_1200.webp`"
                media="(max-width: 1200px)"
              />
              <source 
                :srcset="`${baseUrl}img/${imageFolder}/1920/${currentImage}_result_1920.webp`"
                media="(min-width: 1201px)"
              />
              <img 
                :src="`${baseUrl}img/${imageFolder}/1920/${currentImage}_result_1920.webp`"
                :alt="`${selectedProject.title} - Image ${currentImageIndex + 1}`"
              />
            </picture>
            <div class="lightbox-info">
              <h3>{{ selectedProject.title }}</h3>
              <p>{{ currentImageIndex + 1 }} / {{ selectedProject.images.length }}</p>
            </div>
          </div>

          <button 
            class="lightbox-nav next" 
            @click="nextImage" 
            :disabled="currentImageIndex === selectedProject.images.length - 1"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <!-- Thumbnail strip -->
        <div class="lightbox-thumbnails">
          <button
            v-for="(image, index) in selectedProject.images"
            :key="index"
            :class="['thumbnail-item', { active: index === currentImageIndex }]"
            @click.stop="currentImageIndex = index"
          >
            <img 
              :src="`${baseUrl}img/${imageFolder}/600/${image}_result_600.webp`"
              :alt="`Thumbnail ${index + 1}`"
            />
          </button>
        </div>
      </div>
    </Teleport>

    <!-- Copyright Footer -->
    <footer class="gallery-footer">
      <p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M15 9.354a4 4 0 1 0 0 5.292"></path>
        </svg>
        Copyright by Thuang Architecture
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial';
  thumbnail: string;
  images: string[];
}

interface Props {
  category: 'residential' | 'commercial';
}

const props = defineProps<Props>();
const emit = defineEmits(['back']);

const baseUrl = import.meta.env.BASE_URL;
const selectedProject = ref<Project | null>(null);
const currentImageIndex = ref(0);
const showContactModal = ref(false);

// Project data organized by prefix
const projects: Project[] = [
  {
    id: 1,
    title: 'CH Project',
    category: 'residential',
    thumbnail: 'CH (1)',
    images: ['CH (1)', 'CH (2)', 'CH (3)', 'CH (4)', 'CH (5)'],
  },
  {
    id: 2,
    title: 'GR Project',
    category: 'residential',
    thumbnail: 'GR (1)',
    images: ['GR (1)', 'GR (2)', 'GR (3)', 'GR (4)', 'GR (5)', 'GR (6)', 'GR (7)', 'GR (8)'],
  },
  {
    id: 3,
    title: 'BTG Project',
    category: 'commercial',
    thumbnail: 'BTG (1)',
    images: ['BTG (1)', 'BTG (2)', 'BTG (3)', 'BTG (4)'],
  },
  {
    id: 4,
    title: 'LXT Project',
    category: 'residential',
    thumbnail: 'LXT (1)',
    images: ['LXT (1)', 'LXT (2)', 'LXT (3)', 'LXT (4)', 'LXT (5)', 'LXT (6)', 'LXT (7)', 'LXT (8)', 'LXT (9)', 'LXT (10)', 'LXT (11)', 'LXT (12)', 'LXT (13)', 'LXT (14)', 'LXT (15)'],
  },
  {
    id: 5,
    title: 'MC Project',
    category: 'residential',
    thumbnail: 'MC (1)',
    images: ['MC (1)', 'MC (2)', 'MC (3)', 'MC (4)', 'MC (5)', 'MC (6)'],
  },
  {
    id: 6,
    title: 'MR Project',
    category: 'residential',
    thumbnail: 'MR (1)',
    images: ['MR (1)', 'MR (2)', 'MR (3)', 'MR (4)', 'MR (5)', 'MR (6)', 'MR (7)', 'MR (8)', 'MR (9)', 'MR (10)', 'MR (11)', 'MR (12)', 'MR (13)'],
  },
  {
    id: 7,
    title: 'RC Project',
    category: 'residential',
    thumbnail: 'RC (1)',
    images: ['RC (1)', 'RC (2)', 'RC (3)', 'RC (4)', 'RC (5)', 'RC (6)', 'RC (7)', 'RC (8)', 'RC (9)', 'RC (10)', 'RC (11)', 'RC (12)', 'RC (13)', 'RC (14)', 'RC (15)', 'RC (16)', 'RC (17)', 'RC (18)', 'RC (19)', 'RC (20)'],
  },
  {
    id: 8,
    title: 'RSKBB Project',
    category: 'residential',
    thumbnail: 'RSKBB (1)',
    images: ['RSKBB (1)', 'RSKBB (2)', 'RSKBB (3)', 'RSKBB (4)'],
  },
  {
    id: 9,
    title: 'RSKBG Project',
    category: 'residential',
    thumbnail: 'RSKBG (1)',
    images: ['RSKBG (1)', 'RSKBG (2)', 'RSKBG (3)', 'RSKBG (4)'],
  },
  {
    id: 10,
    title: 'RSMBR Project',
    category: 'residential',
    thumbnail: 'RSMBR (1)',
    images: ['RSMBR (1)', 'RSMBR (2)', 'RSMBR (3)', 'RSMBR (4)', 'RSMBR (5)', 'RSMBR (6)', 'RSMBR (7)', 'RSMBR (8)', 'RSMBR (9)'],
  },
  {
    id: 11,
    title: 'SJ Project',
    category: 'residential',
    thumbnail: 'SJ (1)',
    images: ['SJ (1)', 'SJ (2)', 'SJ (3)', 'SJ (4)'],
  },
  {
    id: 12,
    title: 'SMLT1 Project',
    category: 'residential',
    thumbnail: 'SMLT1 (1)',
    images: ['SMLT1 (1)', 'SMLT1 (2)', 'SMLT1 (3)', 'SMLT1 (4)', 'SMLT1 (5)', 'SMLT1 (6)', 'SMLT1 (7)', 'SMLT1 (8)', 'SMLT1 (9)', 'SMLT1 (10)', 'SMLT1 (11)', 'SMLT1 (12)', 'SMLT1 (13)', 'SMLT1 (14)', 'SMLT1 (15)'],
  },
  {
    id: 13,
    title: 'SMLT2 Project',
    category: 'residential',
    thumbnail: 'SMLT2 (1)',
    images: ['SMLT2 (1)', 'SMLT2 (2)', 'SMLT2 (3)', 'SMLT2 (4)', 'SMLT2 (5)', 'SMLT2 (6)', 'SMLT2 (7)'],
  },
  {
    id: 14,
    title: 'SMLT2K Project',
    category: 'residential',
    thumbnail: 'SMLT2K (1)',
    images: ['SMLT2K (1)', 'SMLT2K (2)', 'SMLT2K (3)'],
  },
  {
    id: 15,
    title: 'TD Project',
    category: 'residential',
    thumbnail: 'TD (1)',
    images: ['TD (1)', 'TD (2)', 'TD (3)', 'TD (4)', 'TD (5)', 'TD (6)', 'TD (7)', 'TD (8)'],
  },
  {
    id: 16,
    title: 'CBD Project',
    category: 'commercial',
    thumbnail: 'CBD (1)',
    images: ['CBD (1)', 'CBD (2)', 'CBD (3)'],
  },
  {
    id: 17,
    title: 'CKL Project',
    category: 'commercial',
    thumbnail: 'CKL (1)',
    images: ['CKL (1)', 'CKL (2)', 'CKL (3)', 'CKL (4)', 'CKL (5)', 'CKL (6)', 'CKL (7)', 'CKL (8)', 'CKL (9)', 'CKL (10)'],
  },
  {
    id: 18,
    title: 'KALSAM Project',
    category: 'commercial',
    thumbnail: 'KALSAM (1)',
    images: ['KALSAM (1)', 'KALSAM (2)', 'KALSAM (3)', 'KALSAM (4)', 'KALSAM (5)', 'KALSAM (6)', 'KALSAM (7)', 'KALSAM (8)', 'KALSAM (9)', 'KALSAM (10)', 'KALSAM (11)'],
  },
  {
    id: 19,
    title: 'MMTC Project',
    category: 'commercial',
    thumbnail: 'MMTC (1)',
    images: ['MMTC (1)', 'MMTC (2)', 'MMTC (3)'],
  },
  {
    id: 20,
    title: 'MND Project',
    category: 'commercial',
    thumbnail: 'MND (1)',
    images: ['MND (1)', 'MND (2)', 'MND (3)', 'MND (4)', 'MND (5)', 'MND (6)', 'MND (7)', 'MND (8)'],
  },
  {
    id: 21,
    title: 'MTTL Project',
    category: 'commercial',
    thumbnail: 'MTTL (1)',
    images: ['MTTL (1)', 'MTTL (2)', 'MTTL (3)', 'MTTL (4)', 'MTTL (5)', 'MTTL (6)', 'MTTL (7)', 'MTTL (8)', 'MTTL (9)', 'MTTL (10)', 'MTTL (11)', 'MTTL (12)'],
  },
  {
    id: 22,
    title: 'SM Project',
    category: 'commercial',
    thumbnail: 'SM (1)',
    images: ['SM (1)', 'SM (2)', 'SM (3)', 'SM (4)'],
  },
];

const filteredProjects = computed(() => {
  return projects.filter(p => p.category === props.category);
});

// Get folder path based on category
const imageFolder = computed(() => {
  return props.category === 'residential' ? 'RESIDENTAL WEBP' : 'KOMERSIAL WEBP';
});

// Determine item size for bento-box layout
const getItemSize = (index: number): string => {
  // Residential: Chaotic organic pattern
  const residentialPattern = ['large', 'small', 'medium', 'small', 'small', 'large', 'medium', 'small', 'medium', 'small', 'large', 'small', 'small', 'medium', 'large', 'medium', 'small'];
  
  // Commercial: Structured chaos with varied rhythm
  const commercialPattern = ['medium', 'large', 'small', 'medium', 'small', 'large', 'medium', 'small', 'small', 'medium', 'large', 'small', 'medium', 'medium', 'small', 'large'];
  
  const pattern = props.category === 'residential' ? residentialPattern : commercialPattern;
  return pattern[index % pattern.length];
};

const currentImage = computed(() => {
  if (!selectedProject.value) return '';
  return selectedProject.value.images[currentImageIndex.value];
});

const openLightbox = (project: Project) => {
  selectedProject.value = project;
  currentImageIndex.value = 0;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  selectedProject.value = null;
  currentImageIndex.value = 0;
  document.body.style.overflow = '';
};

const nextImage = () => {
  if (selectedProject.value && currentImageIndex.value < selectedProject.value.images.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

// Keyboard navigation
const handleKeyboard = (e: KeyboardEvent) => {
  if (!selectedProject.value) return;
  
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeyboard);
}
</script>

<style scoped>
.gallery-view {
  min-height: 100vh;
  animation: fadeInUp 0.6s ease-out;
  perspective: 1500px;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Residential: Warm earth tones with brown undertones */
.gallery-view.residential-theme {
  background: linear-gradient(135deg, #2a1f1a 0%, #1c1410 100%);
}

/* Commercial: Cool sophisticated blue-grey tones */
.gallery-view.commercial-theme {
  background: linear-gradient(135deg, #1a2332 0%, #0f1419 100%);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.gallery-header {
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  animation: slideDown 0.5s ease-out 0.2s both;
  border-bottom: 1px solid rgba(174, 140, 104, 0.2);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-button:hover {
  color: #d4b896;
  transform: translateX(-4px);
}

.back-button svg {
  transition: all 0.3s ease;
  stroke-width: 2.5;
}

.back-button:hover svg {
  stroke-width: 3;
}

.category-title {
  font-size: 1.75rem;
  font-weight: 300;
  color: #f5f5f5;
  margin: 0;
  letter-spacing: 1px;
}

.contact-button {
  margin-left: auto;
  background: transparent;
  border: 1px solid rgba(212, 184, 150, 0.25);
  color: rgba(212, 184, 150, 0.9);
  padding: 0.65rem 1.75rem;
  border-radius: 24px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  position: relative;
}

.contact-button:hover {
  border-color: rgba(212, 184, 150, 0.6);
  color: #d4b896;
  background: rgba(212, 184, 150, 0.05);
}

/* 3D Wall Grid */
.wall-grid {
  padding: 3rem 2rem;
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
}

/* Commercial: Modern mosaic with larger tiles like residential */
.wall-grid.commercial-layout {
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 230px;
  gap: 1.3rem;
  max-width: 100%;
  padding: 3rem 2.5rem;
}

/* Residential: Dense 5-column organic masonry */
.wall-grid.residential-layout {
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 220px;
  gap: 1rem;
  max-width: 100%;
  padding: 3rem 2.5rem;
}

.wall-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #2a2a2a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: translateZ(0);
  will-change: transform;
  border: 1px solid rgba(174, 140, 104, 0.1);
}

/* Bento-box sizing */
.wall-item.size-large {
  grid-column: span 2;
  grid-row: span 2;
}

.wall-item.size-medium {
  grid-column: span 1;
  grid-row: span 1;
}

.wall-item.size-small {
  grid-column: span 1;
  grid-row: span 1;
}

/* Commercial: Only square tiles - no rectangles */
.commercial-layout .wall-item.size-large {
  grid-column: span 2;
  grid-row: span 2;
}

.commercial-layout .wall-item.size-medium {
  grid-column: span 1;
  grid-row: span 1;
}

.commercial-layout .wall-item.size-small {
  grid-column: span 1;
  grid-row: span 1;
}

/* Residential: More chaotic sizing */
.residential-layout .wall-item.size-large {
  grid-column: span 2;
  grid-row: span 2;
}

.residential-layout .wall-item.size-medium {
  grid-column: span 1;
  grid-row: span 2;
}

/* Some medium items are wide instead of tall */
.residential-layout .wall-item.size-medium:nth-child(4n) {
  grid-column: span 2;
  grid-row: span 1;
}

.residential-layout .wall-item.size-small {
  grid-column: span 1;
  grid-row: span 1;
}

.wall-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(174, 140, 104, 0.3);
  border-color: rgba(174, 140, 104, 0.5);
  z-index: 10;
}

.wall-item picture,
.wall-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.wall-item:hover img {
  transform: scale(1.04);
}

.wall-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
  padding: 3rem 1.5rem 1.5rem;
  color: white;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.wall-item:hover .wall-overlay {
  opacity: 1;
  transform: translateY(0);
}

.wall-overlay h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
  color: #d4b896;
  letter-spacing: 0.5px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 10001;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.lightbox-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90vw;
  max-height: 70vh;
  gap: 2rem;
}

.lightbox-image-container {
  position: relative;
}

.lightbox-image-container picture,
.lightbox-image-container img {
  max-width: 100%;
  max-height: 70vh;
  display: block;
  border-radius: 8px;
}

.lightbox-info {
  position: absolute;
  bottom: -3rem;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
}

.lightbox-info h3 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.lightbox-info p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.lightbox-nav {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.lightbox-nav:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-nav:disabled {
  opacity: 0.2;
  cursor: not-allowed;
  pointer-events: none;
}

/* Thumbnails */
.lightbox-thumbnails {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  overflow-x: auto;
  padding: 1rem;
  max-width: 90vw;
}

.thumbnail-item {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border: 3px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: none;
  padding: 0;
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumbnail-item.active {
  border-color: #ae8c68;
}

.thumbnail-item:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .wall-grid.commercial-layout {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 210px;
    gap: 1.1rem;
    padding: 2rem 1.5rem;
  }
  
  .wall-grid.residential-layout {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    gap: 0.8rem;
    padding: 2rem 1.5rem;
  }  
  .commercial-layout .wall-item.size-large {
    grid-column: span 2;
    grid-row: span 2;
  }
  
  .commercial-layout .wall-item.size-medium {
    grid-column: span 1;
    grid-row: span 1;
  }
}

@media (max-width: 768px) {
  .gallery-header {
    padding: 1rem 1.5rem;
    gap: 1rem;
  }

  .category-title {
    font-size: 1.5rem;
    flex: 1;
  }
  
  .contact-button {
    font-size: 0.8rem;
    padding: 0.5rem 0.875rem;
  }

  /* Single column list view on mobile */
  .wall-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 1rem;
  }
  
  /* All items in list layout - no grid spans */
  .wall-item,
  .wall-item.size-large,
  .wall-item.size-medium,
  .wall-item.size-small,
  .residential-layout .wall-item,
  .commercial-layout .wall-item {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    cursor: pointer;
    background: #2a2a2a;
  }
  
  /* Images fill container completely */
  .wall-item picture {
    display: block;
    width: 100%;
    height: 100%;
  }
  
  .wall-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  
  .wall-item:hover {
    transform: translateY(-4px) scale(1.02);
  }

  .lightbox {
    padding: 1rem;
  }

  .lightbox-close {
    top: 1rem;
    right: 1rem;
  }

  .lightbox-content {
    max-width: 95vw;
    max-height: 60vh;
  }

  .lightbox-image-container img {
    max-height: 60vh;
  }

  .lightbox-nav {
    padding: 0.75rem;
  }

  .lightbox-nav svg {
    width: 24px;
    height: 24px;
  }

  .lightbox-thumbnails {
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .thumbnail-item {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .wall-grid {
    padding: 1rem 0.75rem;
    gap: 0.5rem;
  }
  
  .gallery-header {
    padding: 0.875rem 1rem;
  }

  .lightbox-info {
    bottom: -2.5rem;
  }

  .lightbox-info h3 {
    font-size: 1.25rem;
  }

  .lightbox-info p {
    font-size: 0.875rem;
  }
}

/* Copyright Footer */
.gallery-footer {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

/* Contact Modal */
.contact-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.2s ease;
}

.contact-modal {
  background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
  border: 1px solid rgba(212, 184, 150, 0.2);
  border-radius: 16px;
  padding: 3rem 2.5rem;
  max-width: 480px;
  width: 100%;
  position: relative;
  animation: slideUp 0.25s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;
  border-radius: 6px;
}

.modal-close:hover {
  color: #d4b896;
  background: rgba(212, 184, 150, 0.1);
}

.contact-modal h2 {
  color: #f5f5f5;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 0.5rem 0;
  letter-spacing: 1px;
}

.modal-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  margin: 0 0 2.5rem 0;
  letter-spacing: 0.3px;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1rem;
  letter-spacing: 0.3px;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(212, 184, 150, 0.4);
  transform: translateX(4px);
  color: #d4b896;
}

.social-link svg {
  flex-shrink: 0;
  opacity: 0.9;
}

.social-link:hover svg {
  opacity: 1;
}

.social-link.whatsapp:hover { border-color: rgba(37, 211, 102, 0.5); color: #25D366; }
.social-link.instagram:hover { border-color: rgba(225, 48, 108, 0.5); color: #E1306C; }
.social-link.tiktok:hover { border-color: rgba(255, 0, 80, 0.5); color: #FF0050; }
.social-link.youtube:hover { border-color: rgba(255, 0, 0, 0.5); color: #FF0000; }
.social-link.email:hover { border-color: rgba(212, 184, 150, 0.5); color: #d4b896; }

@media (max-width: 768px) {
  .contact-modal {
    padding: 2rem 1.5rem;
  }
  
  .contact-modal h2 {
    font-size: 1.5rem;
  }
  
  .social-link {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
  
  .social-link svg {
    width: 20px;
    height: 20px;
  }
  
  .contact-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

/* Copyright Footer */
.gallery-footer {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

.gallery-footer p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  margin: 0;
}

.gallery-footer svg {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .gallery-footer {
    padding: 1.5rem 1rem;
  }
  
  .gallery-footer p {
    font-size: 0.85rem;
  }
  
  .gallery-footer svg {
    width: 14px;
    height: 14px;
  }
}</style>