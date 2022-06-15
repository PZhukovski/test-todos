
 const filteredTasks = (filter, list) => {
  switch (filter) {
      case 'all':
          return list
      case 'active':
          return list.filter(task => task.completed === false)
      case 'completed':
          return list.filter(task => task.completed === true)
      default:
          return list
  }
}
export default filteredTasks;