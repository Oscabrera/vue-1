import AssignmentList from "./AssignmentList.js";
export default {
    components:{ AssignmentList },
    template:`
    <assignment-list :assignmens="filters.inProgress" title="In Progress" ></assignment-list>
    <assignment-list :assignmens="filters.completed" title="Completed" ></assignment-list>
    `,
    data() {
        return {
            assignments: [
                {
                    'name': 'Finish project',
                    complete: false,
                    id: 1
                },
                {
                    'name': 'Read chapter 4',
                    complete: false,
                    id: 2
                },
                {
                    'name': 'Turnin homework',
                    complete: false,
                    id: 3
                },
            ]
        }
    },
    computed:{
        filters(){
            return{
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    }
}