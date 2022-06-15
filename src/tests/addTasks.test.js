
import transformTask from "../components/helpers/transformTask";

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }))
const data = 'by';

describe(transformTask, ()=>{
    test('addTask', ()=>{
        expect(transformTask(data)).toEqual({id: '00000000-0000-0000-0000-000000000000', task: 'by', completed: false})
    })

})