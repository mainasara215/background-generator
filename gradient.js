var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function setGradient() {
    body.style.background = "linear-gradient(to left, " + color2.value + ", "  + color1.value +")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener('input', setGradient);
color2.addEventListener("input", setGradient);




const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];

  const usernames = [];

  array.forEach(user => {
    usernames.push(user.username + "!");
  });
  
  console.log(usernames);

 const name = array.map((user) => {
    return user.username + "?"});
  console.log(name);

const group = array.filter((owner) => {
  return owner.score > 5; 

})

console.log(group);  

const sum = array.reduce((acc, user) => {
  return acc + user.score
}, 0)
console.log(sum);

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num) => {
// 	console.log(num);
// 	// alert(num);
// 	return num * 2;
// });

// const answer = array.map(user => {
// 	user.items = user.items.map(item => {
// 		return item + "!"
// 	});
// 	return user;
// })
// console.log(answer);

class Animal {
  constructor(name, color, type) {
      this.name = name;
      this.color = color;
      this.type = type;
  }
}

class Cow extends Animal {
  constructor(name, color, type) {
      super(name, color, type)
  }
  sound() {
      console.log(`moos ${this.name}, ${this.color}, ${this.type}`)
  }
}

const theCow = new Cow("shun", "yelloBlck", "mamal");


















const newUser = [
  {
    loginName: "musa",
    needs : "food, money",
    wants: "luxury",
    important: "akhirah"
  },
  {
    loginName: "slim",
    needs: "fees, feeding", 
    wants: "richard mille",
    important: "jannah"
  },
  {
    loginName: "bigss",
    needs: "marriage, child",
    wants: "patek",
    important: "perfumes"
  }
];

const testUser = newUser.map((login) => {
  return login.needs + "!";
});

console.log(testUser);