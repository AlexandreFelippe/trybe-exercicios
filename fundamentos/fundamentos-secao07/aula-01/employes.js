const employeeGenerator = (fullName) => {
const email = fullName.toLowerCase().replace(' ', '_');
return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callBack) => {
    const employees = {
      id1: callBack('Pedro Guerra'), 
      id2: callBack('Luiza Drumond'),
      id3: callBack('Carla Paiva'), 
    }
    return employees;
  };

  console.log(newEmployees(employeeGenerator));

  