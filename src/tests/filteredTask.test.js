import filteredTasks from '../components/helpers/filteredTasks';

const data =[
 {id: '8a61f519-13da-4b2f-9d50-fcf0174706d3', task: 'by', completed: false},
 {id: 'd91aad77-07e9-4d69-ac20-93cdf5a42615', task: 'hello', completed: true},
 {id: 'ed6885f7-b8f2-4c8f-9c18-04007d18f464', task: 'hi', completed: false},
]

describe(filteredTasks, ()=>{
    test('filterActive' , ()=>{
        expect(filteredTasks('active', data )).toEqual([{id: '8a61f519-13da-4b2f-9d50-fcf0174706d3', task: 'by', completed: false},{id: 'ed6885f7-b8f2-4c8f-9c18-04007d18f464', task: 'hi', completed: false}])
    })
    test('filterAll' , ()=>{
        expect(filteredTasks('all', data )).toEqual([
            {id: '8a61f519-13da-4b2f-9d50-fcf0174706d3', task: 'by', completed: false},
            {id: 'd91aad77-07e9-4d69-ac20-93cdf5a42615', task: 'hello', completed: true},
            {id: 'ed6885f7-b8f2-4c8f-9c18-04007d18f464', task: 'hi', completed: false},
           ])
    })
    test('filterCompleted' , ()=>{
        expect(filteredTasks('completed', data )).toEqual([
            {id: 'd91aad77-07e9-4d69-ac20-93cdf5a42615', task: 'hello', completed: true}
           ])
    })
})