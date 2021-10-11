<template>
<div>
  <input type="checkbox" class="w-4 h-4 text-yellow-500 border-yellow-300 rounded focus:ring-yellow-500" v-model="allSelected"> Выбрать все
  <ul>
    <li v-for="caption in captions">
       <input type="checkbox" class="w-4 h-4 text-yellow-500 border-yellow-300 rounded focus:ring-yellow-500 indent"  v-model="caption.selected"> {{ caption.name }}
    </li>
  </ul> 
</div>
</template>

<script>
 
export default {
  name: 'CheckBoxesTree',
 
  data: ()=> ({
    captions: [
      {
      	id: 1,
        name: "Сгенерировать репозиторий в GitHub",
        selected: false,
      },
      {
      	id: 2,
        name: "Сгенерировать 2 автотеста",
        selected: false,
      },
      {
      	id: 3,
        name: "Cгенерировать ещё условие",
        selected: false,
      },
    ]
  }),
  computed: {
  	allSelected: {
      set (selected) {
       this.captions.forEach((caption)=> {
          caption.selected = selected;
        });
      },
      get () {
        return this.captions.every((caption)=> {
          return caption.selected;
        });
      }
    }
  },
}

</script>
