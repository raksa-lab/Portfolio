





<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div 
      v-for="group in skillGroups" 
      :key="`skill-group-${group.id}`"
      class="container-card p-4"
    >
      <!-- Improved accessibility and semantic structure -->
      <h3 class="font-semibold mb-2">{{ group.name }}</h3>
      <ul class="flex flex-wrap gap-2" role="list" :aria-label="`${group.name} skills`">
        <li 
          v-for="skill in group.items" 
          :key="`${group.id}-${skill}`"
          class="px-2 py-1 text-xs rounded-lg border border-zinc-200 dark:border-zinc-700"
          role="listitem"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SkillGroup {
  id: string
  name: string
  items: readonly string[]
}

const skillGroups: readonly SkillGroup[] = Object.freeze([
  { 
    id: 'Languages',
    name: 'Languages & Technologies', 
    items: Object.freeze(['HTML5', 'CSS3', 'JavaScript', 'C++' , 'Java' ,'MySQL'])
  },
  { 
    id: 'frameworks',
    name: 'Frameworks & Libraries', 
    items: Object.freeze(['React Vite', 'React js', 'Router' , 'Tailwind' , 'Bootstrap'] )
  },
  { 
    id: 'styling',
    name: 'Styling & Design', 
    items: Object.freeze(['Tailwind', 'Bootstrap', 'Responsive'])
  },
  
  { 
    id: 'deployment',
    name: 'Build & Deploy', 
    items: Object.freeze(['GitHub Actions'])
  },
  { 
    id: 'Languages',
    name: 'Languages ', 
    items: Object.freeze(['English', 'Khmer'])
  },
  { 
    id: 'Soft Skills',
    name: 'Soft Skills', 
    items: Object.freeze(['Communication', 'Teamwork', 'Problem Solving'])
  },
])
</script>
