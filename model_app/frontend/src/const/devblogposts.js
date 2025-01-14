import Ameya from "../images/Ameya Dehade.jpg";
import Shaopeng from "../images/Shaopeng Zeng.jpg";
import Ian from "../images/Ian Zheng.JPG";
import Xi from "../images/Xi He.jpeg";

// link to default avatar
// "https://www.portent.com/images/2012/02/avatar-jack-small-94x94.jpg"

const articles = [
  {
    id: 1,
    type: "Article",
    date: "March 2021",
    author: "Ameya Dehade",
    author_img: Ameya,
    title: "Machine Learning Explainer",
    subtext:
      "Our model uses the Iterative Proportional Fitting Procedure (IPFP), a classical algorithm in computer science that performs data scaling based on current datasets, to create a mobility network containing information about the number of individuals (agents) traveling from each Census Block Group (CBG) to...",
    href: "/developmentblog/Machine-Learning-Website",
    img: "https://i.postimg.cc/pXP5BBDC/blogpost-Pic1.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 2,
    type: "Article",
    date: "March 2021",
    author: "Xi He",
    author_img: Xi,
    title: "Simulation Development",
    subtext:
      "Currently, the simulation team is working on the severity risk matrix, which is how they decide whether an agent is asymptomatic, mild, severe, or critical after their incubation period is over after exposure. The figure below illustrates the different stages before reaching the severity risk matrix determination...",
    href: "/developmentblog/Simulation-Development",
    img: "https://i.postimg.cc/90w2dKL0/blogpost-Pic4.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    type: "Article",
    date: "March 2021",
    author: "Shaopeng Zeng",
    author_img: Shaopeng,
    title: "Simulation Explainer",
    subtext:
      "Imagine a water balloon is dropped in a crowd. You look around and see those who are near the dropping point got wet, while those who stood far away may have a drop or two, but most are totally dry. Imagine the water is an airborne disease - the Delineo simulation helps us visualize who is in this imaginary...",
    href: "/developmentblog/Simulation-Website",
    img: "https://i.postimg.cc/JnF5Zr1q/2.jpg",
  },
  {
    id: 4,
    type: "Article",
    date: "July 2021",
    author: "Ian Zheng",
    author_img: Ian,
    title: "The Wells-Riley Equation",
    subtext:
      "The Delineo simulation uses the Wells-Riley Equation to simulate how a disease will spread in any given city. The equation and the simulation focus on points of interest (POI's) that include grocery stores, places of worship, and other types of gathering areas where a person might get infected. We apply...",
    href: "/developmentblog/Wells-Riley-Equation",
    img: "https://i.postimg.cc/Y97qZcxc/1.jpg",
  },
];
export default articles;
