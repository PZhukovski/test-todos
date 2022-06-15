import { v4 as uuidv4 } from 'uuid';

const transformTask = (value) => {
    return {
        id: uuidv4(),
        task: value,
        completed: false
    }

}
export default transformTask;