<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore'
import { useUserStore } from '@/stores/user'
import type { IInterview } from '@/interfaces'

const userStore = useUserStore()
const db = getFirestore()

const interviews = ref<IInterview[]>([])
const isLoading = ref<boolean>(true)

const getAllInterviews = async <T extends IInterview>(): Promise<T[]> => {
  const getData = query(
    collection(db, `users/${userStore.userId}/interviews`),
    orderBy('createdAt', 'desc')
  )
  const listDocs = await getDocs(getData)
  return listDocs.docs.map((doc) => doc.data() as T)
}

onMounted(async () => {
  const listInterviews: Array<IInterview> = await getAllInterviews()
  interviews.value = [...listInterviews]
})
</script>

<template>
  <h1>List of interviews</h1>
  <app-datatable :value="interviews">
    <app-column field="company" header="Company"></app-column>
    <app-column field="hrName" header="Name HR"></app-column>
    <app-column field="vacancyLink" header="Vacancy">
      <template #body="slotProps">
        <a :href="slotProps.data.vacancyLink" target="_blank">{{ slotProps.data.vacancyLink }}</a>
      </template>
    </app-column>
    <app-column header="Contacts">
      <template #body="slotProps">
        <div class="contacts">
          <a
            v-if="slotProps.data.contactTelegram"
            :href="`https://t.me/${slotProps.data.contactTelegram}`"
            target="_blank"
            class="contacts__telegram"
          >
            <span class="contacts__icon pi pi-telegram"></span>
          </a>
          <a
            v-if="slotProps.data.contactWhatsApp"
            :href="`https://wa.me/${slotProps.data.contactWhatsApp}`"
            target="_blank"
            class="contacts__whatsapp"
          >
            <span class="contacts__icon pi pi-whatsapp"></span>
          </a>
          <a
            v-if="slotProps.data.contactPhone"
            :href="`https://tel:${slotProps.data.contactPhone}`"
            target="_blank"
            class="contacts__phone"
          >
            <span class="contacts__icon pi pi-phone"></span>
          </a>
        </div>
      </template>
    </app-column>
  </app-datatable>
</template>

<style scoped>
.contacts {
  display: flex;
  align-items: center;
  gap: 20px;
}
.contacts__telegram {
  color: #0088cc;
}
.contacts__whatsapp {
  color: #25d366;
}
.contacts__phone {
  color: #371777;
}
.contacts__icon {
  font-size: 20px;
}
.interview-stages {
  display: flex;
  gap: 5px;
}
</style>
