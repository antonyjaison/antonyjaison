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
                content: [{ id: crypto.randomUUID(), name: "bio.txt", text: "Hello!\n I'm [Your Name],\n a [Your Age]-year-old [Your Occupation or Student Major],\n from [Your Hometown or Current Location].\n \n I enjoy [Your Interests or Hobbies],\n which I've been doing for [Number of Years].\n \n In my free time,\n I like [Describe what you like to do, e.g., reading, hiking].\n \n I value [Share one of your beliefs or values, e.g., kindness],\n and I'm working towards [Share a personal goal or aspiration].\n \n Let's connect and chat about [Topics or Interests you'd like to discuss]!\n" }],
            },
            {
                id: crypto.randomUUID(),
                name: "education",
                type: "folder",
                for:"education",
                content: [
                    { id: crypto.randomUUID(), name: "high-school.txt", text: "lorem ipsumm", type: "file" },
                    { id: crypto.randomUUID(),name: "university.txt", text: "lorem ipsumm dolor", type: "file" },
                ],
            },
            {
                id: crypto.randomUUID(),
                name: "interests",
                type: "folder",
                for:"interests",
                content: [{ id: crypto.randomUUID(), type: "file", name: "interests.txt", text: "lorem ipsumm" }],
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
            href:""
        },
        {
            id: crypto.randomUUID(),
            name: "linkedin",
            type: "link",
            for:"linkedin",
            href:""
        },
        {
            id: crypto.randomUUID(),
            name: "facebook",
            type: "link",
            for:"facebook",
            href:""
        },
        {
            id: crypto.randomUUID(),
            name: "x",
            type: "link",
            for:"x",
            href:"https://www.google.com"
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
            content: [{ id: crypto.randomUUID(), name: "skills.txt", text: "lorem ipsumm",type: "file"}],
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
                content: [{ id: crypto.randomUUID(), name: "hobbie.txt", text: "lorem ipsumm",type: "file" }],
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