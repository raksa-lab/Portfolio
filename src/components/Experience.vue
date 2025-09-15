<template>
  <div role="list" aria-label="Work experience timeline">
    <ol class="relative border-s border-zinc-200 dark:border-zinc-700">
      <li
        v-for="(item, index) in experienceItems"
        :key="`experience-${item.id}`"
        class="mb-10 ms-6"
        role="listitem"
      >
        <!-- Improved accessibility and semantic structure -->
        <span
          class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand/20"
          :aria-label="`Timeline marker for ${item.role} position`"
        >
          <span class="h-2 w-2 rounded-full bg-brand" aria-hidden="true"></span>
        </span>

        <div class="space-y-2">
          <h3 class="text-xl font-semibold">
            {{ item.role
            }}<span v-if="item.company"> · {{ item.company }}</span>
          </h3>
          <time
            class="text-sm text-zinc-500"
            :datetime="item.dateTime"
            :aria-label="`Employment period: ${item.period}`"
          >
            {{ item.period }}
          </time>
          <div class="text-zinc-600 dark:text-zinc-300">
            <template v-if="Array.isArray(item.summary)">
              <ul class="list-disc ms-5">
                <li v-for="(point, i) in item.summary" :key="i">{{ point }}</li>
              </ul>
            </template>
            <template v-else>
              {{ item.summary }}
            </template>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  period: string;
  dateTime: string; // ISO format for datetime attribute
  summary: string | string[];
}

const experienceItems: readonly ExperienceItem[] = Object.freeze([
  {
    id: "Volunteer at Air and Tech show.",
    role: "Volunteer at Air and Tech show",
    period: "13-15 December 2024",
    dateTime: "2023-01",
    summary:
      "As a volunteer at the Air and Tech Show, I assisted in organizing and coordinating various activities and helped manage the flow of attendees. This experience allowed me to strengthen my communication and problem-solving skills, work effectively under pressure, and collaborate with a diverse team. I also gained insights into event management, public interaction, and the importance of teamwork in large-scale technical exhibitions.",
  },
  {
    id: "Volunteer at TVET DAY 2025.",
    role: "Volunteer at TVET DAY 2025",
    period: "15-16 June 2025",
    dateTime: "2025-06",
    summary: [
      "Volunteered at the 8th National Day of Technical and Vocational Education and Training (TVET), June 15–16, 2025, at Koh Pich Convention and Exhibition Center.",
      "Supported event preparation, logistics, and on-site coordination for thousands of attendees, including students, educators, companies, and government representatives.",
      "Collaborated with organizers, volunteers, and participants to ensure smooth and professional event execution.",
      "Participated in the recognition ceremony for institutions and companies contributing to Cambodia’s TVET development.",
    ],
  },
  {
    id: "Volunteer at Mekong Major & Career Fest.",
    role: "Volunteer at Mekong Major & Career Fest.",
    // company: 'Freelance',
    period: "25-27 October 2024",
    dateTime: "2019-01/2021-12",
    summary: [
      "Assisted with event registration and guided participants.",
      "Supported booth setup and provided help to company reps.",
      "Helped manage stage flow and coordinated on-stage activities.",
      "Improved public speaking, communication, and teamwork skills.",
    ],
  },
  {
    id: "7th Engineering Day 2024.",
    role: "7th Engineering Day 2024.",
    // company: 'Freelance',
    // period: "26 October 2024",
    dateTime: "2019-01/2021-12",
    summary: [
      "Presented a Solar Tracking System project that optimizes solar panel alignment to maximize energy efficiency.",
      "Selected as one of the Top 3 projects among participants for innovation, technical implementation, and practical impact.",
    ],
  },
]);
</script>
