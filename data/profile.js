import crypto from "crypto"

const profileData = [
    {
        id: crypto.randomUUID(),
        title: "personal-info",
        type: "folder",
        content: [
            {
                id: crypto.randomUUID(),
                type: "folder",
                name: "bio",
                for:"bio",
                content: [{ id: crypto.randomUUID(), name: "bio.txt", text: "Hello there! 👋\nI'm Antony Jaison, a passionate Full Stack Developer with a mission to bring digital visions to life. 🚀\n \nBased in Angamaly, Kerala, India, I specialize in crafting web applications that seamlessly blend both front-end and back-end technologies. 💻\n \nWith a strong foundation in IT as a B.Tech student, I've been on this exciting journey for several years. I'm driven by the art of coding, problem-solving, and creating elegant, user-friendly solutions. 🌟\n \nWhen I'm not crafting lines of code, you can find me enjoying movies, web-series, and cheering for my favorite football team. ⚽🎬\n \nI'm a firm believer in continuous learning, and I'm committed to staying at the forefront of the ever-evolving tech landscape. 📚💡\n \nI'm currently working on pushing the boundaries of what's possible in web development and making the internet a more functional and beautiful place. 🌐✨\n \nLet's connect and discuss your next big project. Whether it's about coding, technology trends, or your favorite films, I'm all ears. 🤝🗨️\n"}],
            },
            {
                id: crypto.randomUUID(),
                name: "education",
                type: "folder",
                for:"education",
                content: [
                    { id: crypto.randomUUID(), name: "high-school.txt", text: "High School: St. Joseph's High School, Poovathussery, Ernakulam, Kerala (Grades 1-10) 🏫📚", type: "file" },
                    { id: crypto.randomUUID(),name: "university.txt", text: "Higher Secondary: Brahmanandodayam Higher Secondary School, Kalady, Kerala (Plus One and Plus Two) 🏫📚", type: "file" },
                ],
            },
            {
                id: crypto.randomUUID(),
                name: "interests",
                type: "folder",
                for:"interests",
                content: [{ id: crypto.randomUUID(), type: "file", name: "interests.txt", text: "Interests: \n\n Web Development: My passion for coding drives my interest \n in building web applications and exploring the latest technologies. \n\n Movies & Web-Series: I enjoy diving into the world of cinema, \n discovering compelling stories, and the art of filmmaking. \n\n Football: A dedicated fan, I find excitement and joy in the beautiful game, both as a spectator and a player."
             }],
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        title: "contacts",
        type: "folder",
        content: [{
            id: crypto.randomUUID(),
            name: "antonyjaison639@gmail.com",
            for:"email",
            type: "link",
            href:"mailto:antonyjaison639@gmail.com"
        },
        {
            id: crypto.randomUUID(),
            name: "+91 7736676823",
            for:"phone",
            type: "link",
            href:"tel:7736676823"
        },
        ],
    },
    {
        id: crypto.randomUUID(),
        title: "social-media",
        type: "folder",
        content: [{
            id: crypto.randomUUID(),
            name: "instagram",
            type: "link",
            for:"instagram",
            href:"https://www.instagram.com/antony_jaison__/"
        },
        {
            id: crypto.randomUUID(),
            name: "linkedin",
            type: "link",
            for:"linkedin",
            href:"https://www.linkedin.com/in/antony-jaison-1b9353235/"
        },
        {
            id: crypto.randomUUID(),
            name: "facebook",
            type: "link",
            for:"facebook",
            href:"https://www.facebook.com/antonyjaison456/"
        },
        {
            id: crypto.randomUUID(),
            name: "x",
            type: "link",
            for:"x",
            href:"https://twitter.com/AntonyJaison18"
        },
        ],
    },
    {
        id: crypto.randomUUID(),
        title: "professional-info",
        type: "folder",
        content: [{
            id: crypto.randomUUID(),
            name: "skills",
            type: "folder",
            for:"skills",
            content: [{ id: crypto.randomUUID(), name: "skills.txt", text: "Skills: \n\n- JavaScript \n- HTML \n- CSS \n- React \n- React Native \n- Next.js \n- Vue.js \n- Node.js \n- Tailwind CSS \n- Bootstrap \n- Figma",type: "file"}],
        },],
    },
    {
        id: crypto.randomUUID(),
        title: "hobbies",
        type: "folder",
        content: [
            {
                id: crypto.randomUUID(),
                name: "hobbie",
                type: "folder",
                for:"hobbie",
                content: [{ id: crypto.randomUUID(), name: "hobbie.txt", text: "Hobbies:\n\n - Reading: I find solace and knowledge in \nthe pages of books, exploring various genres.\n\n - Hiking: Nature calls, and I answer by \nhitting the trails, discovering new landscapes.\n\n - Traveling: Exploring new places, cultures, and cuisines is a passion I cherish.\n\n Let's connect and discuss your next big \n project or collaborate on any web development venture.\n I'm here to bring your digital ideas to life! 💻🌐🚀",type: "file" }],
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        title: "images",
        type: "folder",
        content: [
            {
                id: crypto.randomUUID(),
                name: "antony.png",
                type: "image",
                for:"image",
            },
            {
                id: crypto.randomUUID(),
                name: "antony_2.jpg",
                type: "image",
                for:"image",
            },
        ],
    }
]

export default profileData