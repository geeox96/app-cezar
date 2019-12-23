<template>
  <div id="app" class="fundo">
    <v-app id="inspire">
      <v-card max-width="1400" class="mx-auto elevation-8 color-shadow">
        <v-card-title class="justify-center" primary-title>
          <span class="display-1 font-weight-light"
            >Business Network International</span
          >
        </v-card-title>
        <v-card
          v-for="(item, i) in empresas"
          :key="i"
          class="mx-auto elevation-0"
          max-width="1400"
        >
          <v-card-title>
            <span class="font-weight-light">{{ item.setor }}</span>
          </v-card-title>
          <v-img
            :aspect-ratio="16 / 9"
            max-height="300"
            :src="item.imagem"
          ></v-img>
          <v-card-title>
            <span class=".headline ">{{ item.nome_fantasia }}</span>
            <v-icon @click="abrirInformacoes(item)">mdi-plus</v-icon>
          </v-card-title>

          <v-card-text class="font-weight-bold">
            {{ item.descricao }}
          </v-card-text>

          <v-card class="elevation-0 mx-auto" max-width="400">
            <v-list-item class="grow">
              <v-list-item-avatar>
                <v-img :src="item.foto"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.responsavel }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-divider></v-divider>
            </v-card-actions>
            <v-card-text>
              {{ item.sobre }}
            </v-card-text>
          </v-card>
          <v-card-actions> </v-card-actions>
          <v-divider />
        </v-card>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "App",

  data: () => ({
    empresas: [],
    display: {}
  }),

  mounted() {
    Axios.get("http://localhost:3000/api/empresasA").then(empresas => {
      this.empresas = empresas.data;
    });
  },

  methods: {
    empresa() {
      this.$router.push({ name: "Empresas" });
    },

    pessoa() {
      this.$router.push({ name: "Pessoas" });
    },

    abrirInformacoes(item) {
      this.display = item;
      console.log(this.display);
    }
  }
};
</script>
<style>
.fundo {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(270deg, #6994c9, #77cbcb);
  background-size: 400% 400%;

  -webkit-animation: fundo 30s ease infinite;
  -moz-animation: fundo 30s ease infinite;
  animation: fundo 30s ease infinite;
}

@-webkit-keyframes fundo {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes fundo {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes fundo {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#inspire {
  background: none;
}

.color-shadow {
  --box-shadow-color: blue !important;
}
</style>
