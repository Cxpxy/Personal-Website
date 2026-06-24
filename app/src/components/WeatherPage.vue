<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
const route = useRoute()
const weatherData = ref([])
// const getWeatherData = async() => {
//     try{
//         const response = await get("https://opendata.cwa.gov.tw/api/v1/rest/datastore/W-C0033-001?Authorization=CWA-FD4624DC-2412-4D7D-8908-753E2B0B9272&format=JSON",{
//             headers:
//             {"accept: application/json"}})
//         weatherData.value = await response.json();
//     }catch(error){
//         console.error('Error getting weather data:',error);
//     }
// };
// onMounted(getWeatherData);
</script>
<template>
    <div>
        weather
    </div>
</template>
