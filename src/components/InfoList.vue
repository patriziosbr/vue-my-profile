<template>
  <section>
      <ul>
          <li v-for="info, index in contactInfo" :key="index">
              <p><strong>{{ info.staticInfo }}: </strong> {{ info.personaInfo }} </p> 
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    name: "InfoList",
    data() {
        return {
            contactInfo: [
                {
                    staticInfo: 'Age',
                    personaInfo: 28
                },
                {
                    staticInfo: 'Resicence',
                    personaInfo: 'ROME'
                },
                {
                    staticInfo: 'E-mail',
                    personaInfo: 'sbrozzi.patrizio@gmail.com'
                },
                {
                    staticInfo: 'Phone',
                    personaInfo: '+39 3880539162'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    section {
        display: flex;
        
        align-items: flex-end;
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            p {
                margin-bottom: 0.5rem;
            }
            strong {
                color: #0d6efd;
            }
        }
    }
@media (min-width: 576px) {

    section {
        justify-content: center;
    }

}

</style>