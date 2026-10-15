<template>
    <Container class="bg-slate-100">
        <div class="mx-auto max-w-screen-lg">
            <h3 class="text-4xl font-semibold mb-20 text-center">Sponsors/Co-operation Support/Supporting African Embassies</h3>
            <div class="grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">
                <div v-for="sponsor in sponsors" class="bg-white p-8 sm:p-10">
                    <img class="max-h-20 w-full object-contain mix-blend-multiply" :src="sponsor" alt="Transistor"
                         width="158" height="48"/>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
import Container from "@components/layout/Container.vue";
import TimefulLogo from "@assets/timeful-logo.svg";

const sponsors = [

     "https://adnjapan.org/wp-content/uploads/2023/07/IPPON_LOGO.gif",
     "https://adnjapan.org/wp-content/uploads/2023/08/ATC-Logo.png",
     "https://adnjapan.org/wp-content/uploads/2023/07/MIDI-PYRENEES-Inc-Logo.jpeg",
      "https://adnjapan.org/wp-content/uploads/2023/08/4_6-Africa-Samurai.jpg", 
      
       "https://adnjapan.org/wp-content/uploads/2023/07/JETRO_OSAKA.jpg",
     "https://adnjapan.org/wp-content/uploads/2023/07/UNDP.jpg",
      "https://adnjapan.org/wp-content/uploads/2023/08/3_1-KeizaiDoyukai.jpeg",
     "https://adnjapan.org/wp-content/uploads/2024/10/higashiOsakaChamberOfcomerc.png",    
     "https://adnjapan.org/wp-content/uploads/2023/08/EXPO2025LOGOyokoA-scaled.jpg",
      "https://adnjapan.org/wp-content/uploads/2023/07/JICA.jpg",
      "https://adnjapan.org/wp-content/uploads/2024/10/osakaPrefecture.png",
      "https://adnjapan.org/wp-content/uploads/2024/10/yokohamaTicad9.png",    
     "https://adnjapan.org/wp-content/uploads/2023/08/2_2-KIC.jpeg",
     
     "https://adnjapan.org/wp-content/uploads/2023/08/1-BeninEmbassyLogo.png",
     "https://adnjapan.org/wp-content/uploads/2023/08/2-Coat_of_arms_of_Botswana.jpg",
     "https://adnjapan.org/wp-content/uploads/2024/10/DR_Congo_embassy.png",
     "https://adnjapan.org/wp-content/uploads/2024/10/BurkinaFaso_Embassy.png",
     "https://adnjapan.org/wp-content/uploads/2023/08/4-REPUBLIC-OF-GHANA.png",
     "https://adnjapan.org/wp-content/uploads/2024/10/libreria_embassy.png",
     "https://adnjapan.org/wp-content/uploads/2024/10/mozambiq_embassy.png",
     "https://adnjapan.org/wp-content/uploads/2024/10/namibia_embassy.png",
     "https://adnjapan.org/wp-content/uploads/2024/10/senegal_embassy.png",
     
     //"https://adnjapan.org/wp-content/uploads/2023/08/2_3-AMK.jpeg",
     //"https://adnjapan.org/wp-content/uploads/2023/08/2_4-SVAFF-LOGO.png",
     //"https://adnjapan.org/wp-content/uploads/2023/08/2_5-AAK.png",
     //"https://adnjapan.org/wp-content/uploads/2023/08/2_7-Sawasawa.jpg",
     //"https://adnjapan.org/wp-content/uploads/2023/08/2_8-SAIE.png",
    //"https://adnjapan.org/wp-content/uploads/2023/07/JETRO_OSAKA.jpg",
   // "https://adnjapan.org/wp-content/uploads/2023/07/JICA.jpg",
   // "https://adnjapan.org/wp-content/uploads/2023/07/UNDP.jpg",
   // "https://adnjapan.org/wp-content/uploads/2023/07/UNIDO.jpg", 
   // "https://adnjapan.org/wp-content/uploads/2023/07/IPPON_LOGO.gif", 
   // "https://adnjapan.org/wp-content/uploads/2023/07/SARAYA.png",
   // "https://adnjapan.org/wp-content/uploads/2023/08/JH-Grace.jpeg",
   // "https://adnjapan.org/wp-content/uploads/2023/08/Fc-Osaka-Logo.jpeg",
   // "https://adnjapan.org/wp-content/uploads/2023/08/TOBU-TOP-TOUR-Logo.jpeg",
   // "https://adnjapan.org/wp-content/uploads/2023/08/steaAm-BAND-Logo.jpeg",  
   // "https://adnjapan.org/wp-content/uploads/2023/08/3-REPUBLIC-OF-GAMBIA.png", 
   // "https://adnjapan.org/wp-content/uploads/2023/08/5-REPUBLIC-OF-MALAWI.png",
    //"https://adnjapan.org/wp-content/uploads/2023/08/6-Mali.png",
   // "https://adnjapan.org/wp-content/uploads/2023/08/2_1-Seika-University-Africa-Culture-Center.png",
   // "https://adnjapan.org/wp-content/uploads/2023/08/3_1-KeizaiDoyukai.jpeg",
   // "https://adnjapan.org/wp-content/uploads/2023/08/4_1-Think-a-Connect.jpg",
   // "https://adnjapan.org/wp-content/uploads/2023/08/4_2-高山化成.jpeg",
   // "https://adnjapan.org/wp-content/uploads/2023/08/4_3-Nippon-Biodiesel-Fuel-logo.jpeg",
   // "https://adnjapan.org/wp-content/uploads/2023/08/4_4-EMURGO-MIDDLE-EAST-AFRICA.jpeg",
    //"https://adnjapan.org/wp-content/uploads/2023/08/4_5-SEMICON.gif",
   
]
</script>


