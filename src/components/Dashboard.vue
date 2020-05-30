<template>
    <section>
        <h1 class="title" id="profile"> {{ name }}'s Contributions</h1>
        <div class="container table">
                <b-table
                    :data="data"
                    :columns="columns">
                </b-table>
        <b-field>
        <router-link to="/add" class="button is-primary">
                    Add
        </router-link>
        </b-field>
        </div>
    </section>
</template>

<script>
export default {
        name: 'Dashboard',
        data() {
            const data = [
                { 'id': 1, 'Rain': '12', 'date': '2016-10-15 13:43:27' },
                { 'id': 2, 'Rain': '15',  'date': '2016-12-15 06:00:53'},
                { 'id': 3, 'Rain': '100',  'date': '2016-04-26 06:26:28'},
                { 'id': 4, 'Rain': '2',  'date': '2016-04-10 10:28:46'},
                { 'id': 5, 'Rain': '4',  'date': '2016-12-06 14:38:38'}
            ]

            return {
                data,
                name: "Joe" ,
                selected: data[1],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'Rain',
                        label: 'Rain in mm',
                        centered: true
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                ]
            }
        }
    }
</script>
<style scoped>
    .table{
        margin-left: 25vw;
        margin-right: 25vw;
    }
     .title{
     margin-top:10vw;
     background-color:hsl(217, 71%, 53%);
     color: white;
     margin-left: 25vw;
     margin-right: 25vw;
     padding-top: 10px;
     padding-bottom: 10px;
 }
 .button{
  float: right;
  margin-top: 1vw;
}
</style>