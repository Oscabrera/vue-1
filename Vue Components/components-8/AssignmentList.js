import Assignment from "./Assignment.js";
export default {
    components: {Assignment},
    props:{
        assignmens: Array,
        title: String,
    },
    template:`
    <section v-show="assignmens.length">
    <h2 class="font-bold mb-2">{{ title }}</h2>
    <ul class="border border-gray-600 divide-y divide-gray-600">
    <assignment 
        v-for=" assignment in assignmens" 
        :key="assignment.id"
        :assignment="assignment"
     ></assignment>
    </ul>
  </section>
    `
}