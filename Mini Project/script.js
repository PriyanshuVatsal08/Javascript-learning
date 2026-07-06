let users = [
  {
    pic: "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg",
    name: "Amit Singh",
    bio: "Frontend Developer passionate about creating modern and responsive websites."
  },
  {
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    name: "Priyansh Sharma",
    bio: "UI/UX Designer who loves crafting beautiful and user-friendly interfaces."
  },
  {
    pic: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    name: "Rahul Verma",
    bio: "Full Stack Developer skilled in React, Node.js, and MongoDB."
  },
  {
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    name: "Priya Sharma",
    bio: "Software Engineer who enjoys solving coding challenges and building scalable apps."
  },
  {
    pic: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_1280.jpg",
    name: "Ananya Gupta",
    bio: "React Developer focused on performance, clean code, and reusable components."
  },
  {
    pic: "https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329_1280.jpg",
    name: "Ravi Patel",
    bio: "Graphic Designer with a passion for branding, creativity, and visual storytelling."
  }
];

let main = document.querySelector("#main");
let inp = document.querySelector("input");

function showUser(arr) {

  // Clear previous cards
  main.innerHTML = "";

  // Show message if no user found
  if (arr.length === 0) {
    main.innerHTML = `<h2 class="no-user">No users found 😢</h2>`;
    return;
  }

  arr.forEach((user) => {

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("big-img");

    let h3 = document.createElement("h3");
    h3.textContent = user.name;

    let p = document.createElement("p");
    p.textContent = user.bio;

    card.append(img, h3, p);

    main.append(card);

  });
}

// Initial users
showUser(users);

// Search
inp.addEventListener("input", function () {

  let value = inp.value.trim().toLowerCase();

  if (value === "") {
    showUser(users);
    return;
  }

  let filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(value);
  });

  showUser(filteredUsers);

});


//****************************************THEME CHANGE CODE********************************************** */
let btn=document.querySelector("button");
let body=document.querySelector("body");

let savedTheme=localStorage.getItem("theme");
if(savedTheme==="dark"){
  body.classList.add("dark");
}else{
  body.classList.add("light");
}

btn.addEventListener("click",function(){
  if(body.classList.contains("light")){
    body.classList.remove("light");
    body.classList.add("dark");

    localStorage.setItem("theme","dark");

    btn.textContent="Dark theme"
  }else{
    body.classList.remove("dark");
    body.classList.add("light");

    localStorage.setItem("theme","light");

    btn.textContent="Light theme"
  }
})