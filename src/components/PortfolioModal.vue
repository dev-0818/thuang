<template>
  <div v-if="project" class="modal" @click="emit('close')">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="emit('close')">&times;</button>
      <img :src="project.image" :alt="project.title" />
      <div class="modal-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.category }}</p>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const props = defineProps<{
  project: Project | null;
}>();

console.log('PortfolioModal props:', props.project);

const emit = defineEmits(['close']);
</script>

<style scoped>
/* Paste the styles for the .modal, .modal-content, etc. here */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: var(--white);
  border-radius: 12px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--white);
  cursor: pointer;
  z-index: 1;
}

.modal-content img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

.modal-info {
  padding: 2rem;
}

.modal-info h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}
</style>