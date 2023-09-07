import jacketImage from "../assets/jackets.png";
import chatImage from "../assets/chat.png";
import blogImage from "../assets/blog.png";
import gameImage from "../assets/game.png";
import dreamsImage from "../assets/dreams.png";

const ProjectCardData = [
    {
        imgscr: blogImage,
        title: "Personal Blog",
        text: "Next.js, GraphQL, HTML, and Tailwind", 
        view: "https://faith-blog.vercel.app/",
        code: "https://github.com/faithnicoletti/blog-graphql"
    },
    {
        imgscr: chatImage,
        title: "Chat Messenging App",
        text: "Built with Python, HTML, and CSS", 
        view: "https://shy-bush-5706.fly.dev/",
        code: "https://github.com/shakiba333/chatapp"
    }, 
    {
        imgscr: jacketImage,
        title: "Ecommerce Website",
        text: "Full MERN Stack, HTML  and CSS", 
        view: "https://project4-jackets-frontend.onrender.com/",
        code: "https://github.com/faithnicoletti/project4-jackets"
    },
    {
        imgscr: dreamsImage,
        title: "Organization Goals Website",
        text: "Javascript, Express/Node, and MongoDB", 
        view: "https://white-field-5993.fly.dev/",
        code: "https://github.com/faithnicoletti/bucketList-project2"
    },
    {
        imgscr: gameImage,
        title: "Minesweeper Game",
        text: "Build with Javascript, HTML and CSS", 
        view: "https://main--ornate-sorbet-d2b205.netlify.app/",
        code: "https://github.com/faithnicoletti/faithGameProject1"
    }
]

export default ProjectCardData;