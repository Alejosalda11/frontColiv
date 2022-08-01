<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="('Services And Room')"/>
      <div class=""></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <div>
          <b-table striped outlined hover head-row-variant="dark" :items="items" :fields="fields"></b-table>
  </div>
    </b-colxx>
  </b-row>
  
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>