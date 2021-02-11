// Data definition
const reactProjects = [
  {
    name: "Jammming",
    description:
      "Website app that allows users to search the Spotify library, create a custom playlist and save it to their Spotify account.",
    img: "./img/jammming.png",
    url: "https://thirsty-elion-d32e4e.netlify.app/",
  },
  {
    name: "Passing Thoughts",
    description:
      "Place for our passing thoughts. Once you add a short thought, it’ll disappear after just 15 seconds.",
    img: "./img/passing.png",
    url: "https://stoic-yonath-e8d4fb.netlify.app/",
  },
  {
    name: "Color Generator",
    description:
      "Tool that will return multiple tints and shades of the specified color (in hex format). Based on John Smilga's tutorial.",
    img: "./img/color-mixer.png",
    url: "https://color-generator-subakmil.netlify.app/",
  },
  {
    name: "Tours",
    description:
      "Website that displays multiple tours recommendations. Based on John Smilga's tutorial.",
    img: "./img/tours.png",
    url: "https://tours-subakmil.netlify.app/",
  },
  {
    name: "Copycat",
    description:
      "Simple app that copies the user input. Clicking on the image of the cat will toggle whether or not it is able to copy the user.",
    img: "./img/copycat.png",
    url: "https://copycat-subakmil.netlify.app/",
  },
];

// Age auto-update
function ageCalculator() {
  const myBirthday = new Date("October 05, 92");
  const actualDate = new Date();

  const myYear = myBirthday.getFullYear();
  const actualYear = actualDate.getFullYear();
  const actualMonth = actualDate.getMonth() + 1;
  const actualDay = actualDate.getUTCDate();
  const yearDiff = actualYear - myYear;
  let age;

  if (actualMonth < 10 || (actualMonth == 10 && actualDay < 5)) {
    age = yearDiff - 1;
    return age;
  } else {
    age = yearDiff;
    return age;
  }
}

document.getElementById("ageJs").innerHTML = ageCalculator();

// Display React projects

console.log(reactProjects);

const listOfProjects = reactProjects.map((item) => {
  return `<div class="individual-project">
      <h4>${item.name}</h4>
      <a href=${item.url} target="_blank">
        Go to website &#8599;
      </a>
      <p>${item.description}</p>
    </div>`;
});

// const listOfProjects = reactProjects.map((item) => {
//   return `<div class="individual-project">
//       <a href=${item.url} target="_blank">
//         <img src=${item.img} alt=${item.name}/>
//         <p><strong>${item.name}: </strong>${item.description}</p>
//       </a>
//     </div>`;
// });

document.getElementById("react-projects").innerHTML = listOfProjects.join(" ");
