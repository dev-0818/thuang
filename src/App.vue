<template>
  <div id="app">
    <Transition name="page" mode="out-in">
      <!-- Category Selection View -->
      <CategorySelection 
        v-if="currentView === 'category'" 
        @select-category="selectCategory"
        key="category"
      />
      
      <!-- Gallery View -->
      <div v-else-if="currentView === 'gallery'" key="gallery">
        <GalleryView 
          :category="selectedCategory" 
          @back="backToCategory"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CategorySelection from './components/CategorySelection.vue';
import GalleryView from './components/GalleryView.vue';

type View = 'category' | 'gallery';
type Category = 'residential' | 'commercial';

const currentView = ref<View>('category');
const selectedCategory = ref<Category>('residential');

const selectCategory = (category: Category) => {
  selectedCategory.value = category;
  
  // Delay to let expansion animation complete
  setTimeout(() => {
    currentView.value = 'gallery';
  }, 1000);
};

const backToCategory = () => {
  currentView.value = 'category';
};
</script>

<style>
/* Global styles */
:root {
  --primary-color: #ae8c68;
  --text-dark: #2c3e50;
  --gray-medium: #6c7a89;
  --gray-light: #f5f5f5;
  --white: #ffffff;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--gray-light);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #96785e;
}

html {
  scroll-behavior: smooth;
  font-size: 100%;
  scrollbar-width: thin;
  scroll-snap-type: y proximity;
  scrollbar-color: var(--primary-color) var(--gray-light);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--white);
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Loading Screen */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-screen.residential-theme {
  background: linear-gradient(135deg, #3a3a3a 0%, #2c2c2c 100%);
}

/* Page Transition Animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.page-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
