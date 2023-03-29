export default {
    props:{
        assignment: Object
    },
    template:`
    <li>
        <label>{{assignment.name}}
        <input type="checkbox" v-model="assignment.complete">
        </label>
    </li>
    `
}