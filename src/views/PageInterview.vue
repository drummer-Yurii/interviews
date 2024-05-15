<script setup lang="ts">

</script>

<template>
    <div class="content-interview">
        <app-card>
            <template #title>Interview at the company</template>
            <template #content>
                <div class="flex flex-column gap-2">
                    <label for="company">Company</label>
                    <app-input-text class="input mb-3" id="company" />
                </div>
                <div class="flex flex-column gap-2">
                    <label for="vacancyLink">Vacancy description (link)</label>
                    <app-input-text class="input mb-3" id="vacancyLink" />
                </div>
                <div class="flex flex-column gap-2">
                    <label for="hrName">Contact (name)</label>
                    <app-input-text class="input mb-3" id="hrName" />
                </div>
                <div class="flex flex-column gap-2">
                    <label for="contactTelegram">Telegram username HR</label>
                    <app-input-text class="input mb-3" id="contactTelegram" />
                </div>
                <div class="flex flex-column gap-2">
                    <label for="contactWhatsApp">WhatsApp HR</label>
                    <app-input-text class="input mb-3" id="contactWhatsApp" />
                </div>
                <div class="flex flex-column gap-2">
                    <label for="contactPhone">Phone HR</label>
                    <app-input-text class="input mb-3" id="contactPhone" />
                </div>
            </template>
        </app-card>
    </div>
</template>

<style scoped>
.content-interview {
    max-width: 600px;
    margin: auto;
}

.input {
    width: 100%;
}

.interview-stage {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>