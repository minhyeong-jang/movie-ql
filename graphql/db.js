export const people = [
  {
    id: 0,
    name: "Minhyeong",
    age: 23,
    gender: "male"
  },
  {
    id: 1,
    name: "Test1",
    age: 22,
    gender: "male"
  },
  {
    id: 2,
    name: "Test2",
    age: 22,
    gender: "male"
  },
  {
    id: 3,
    name: "Test3",
    age: 22,
    gender: "male"
  },
  {
    id: 4,
    name: "Test4",
    age: 22,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
}