
const profileData = [
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "personal info",
        type: "folder",
        content: [
            {
                id: Math.floor(Math.random() * Date.now()),
                type: "folder",
                name: "bio",
                for:"bio",
                content: [{ id: Math.floor(Math.random() * Date.now()), name: "bio.txt", text: "Hello!\n I'm [Your Name],\n a [Your Age]-year-old [Your Occupation or Student Major],\n from [Your Hometown or Current Location].\n \n I enjoy [Your Interests or Hobbies],\n which I've been doing for [Number of Years].\n \n In my free time,\n I like [Describe what you like to do, e.g., reading, hiking].\n \n I value [Share one of your beliefs or values, e.g., kindness],\n and I'm working towards [Share a personal goal or aspiration].\n \n Let's connect and chat about [Topics or Interests you'd like to discuss]!\n" }],
            },
            {
                id: Math.floor(Math.random() * Date.now()),
                name: "education",
                type: "folder",
                for:"education",
                content: [
                    { id: Math.floor(Math.random() * Date.now()), name: "high-school.txt", text: "lorem ipsumm", type: "file" },
                    { id: Math.floor(Math.random() * Date.now()),name: "university.txt", text: "lorem ipsumm dolor", type: "file" },
                ],
            },
            {
                id: Math.floor(Math.random() * Date.now()),
                name: "interests",
                type: "folder",
                for:"interests",
                content: [{ id: Math.floor(Math.random() * Date.now()), type: "file", name: "interests.txt", text: "lorem ipsumm" }],
            },
        ],
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "contacts",
        type: "folder",
        content: [{
            id: Math.floor(Math.random() * Date.now()),
            name: "antonyjaison639@gmail.com",
            for:"email",
            type: "link",
            href:"mailto:antonyjaison639@gmail.com"
        },
        {
            id: Math.floor(Math.random() * Date.now()),
            name: "+91 7736676823",
            for:"phone",
            type: "link",
            href:"tel:7736676823"
        },
        ],
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "social-media",
        type: "folder",
        content: [{
            id: Math.floor(Math.random() * Date.now()),
            name: "instagram",
            type: "link",
            for:"instagram",
            href:""
        },
        {
            id: Math.floor(Math.random() * Date.now()),
            name: "linkedin",
            type: "link",
            for:"linkedin",
            href:""
        },
        {
            id: Math.floor(Math.random() * Date.now()),
            name: "facebook",
            type: "link",
            for:"facebook",
            href:""
        },
        {
            id: Math.floor(Math.random() * Date.now()),
            name: "x",
            type: "link",
            for:"x",
            href:"https://www.google.com"
        },
        ],
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "professional-info",
        type: "folder",
        content: [{
            id: Math.floor(Math.random() * Date.now()),
            name: "skills",
            type: "folder",
            for:"skills",
            content: [{ id: Math.floor(Math.random() * Date.now()), name: "skills.txt", text: "lorem ipsumm",type: "file"}],
        },],
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "hobbies",
        type: "folder",
        content: [
            {
                id: Math.floor(Math.random() * Date.now()),
                name: "hobbie",
                type: "folder",
                for:"hobbie",
                content: [{ id: Math.floor(Math.random() * Date.now()), name: "hobbie.txt", text: "lorem ipsumm",type: "file" }],
            },
        ],
    }
]

export default profileData