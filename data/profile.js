
const profileData = [
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "personal info",
        content: [
            {
                id: Math.floor(Math.random() * Date.now()),
                name: "bio",
                content: [{ id: Math.floor(Math.random() * Date.now()), name: "bio.txt", text: "lorem ipsumm" }],
            },
            {
                id: Math.floor(Math.random() * Date.now()),
                name: "education",
                content: [
                    { id: Math.floor(Math.random() * Date.now()), name: "high-school.txt", text: "lorem ipsumm" },
                    { id: Math.floor(Math.random() * Date.now()), name: "university.txt", text: "lorem ipsumm dolor" },
                ],
            },
            {
                id: Math.floor(Math.random() * Date.now()),
                name: "interests",
                content: [{ id: Math.floor(Math.random() * Date.now()), name: "interests.txt", text: "lorem ipsumm" }],
            },
        ],
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "contacts",
        content: [{
            id: Math.floor(Math.random() * Date.now()),
            name: "bio",
            content: [{ id: Math.floor(Math.random() * Date.now()), name: "bio.txt", text: "lorem ipsumm" }],
        },],
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "professional-info",
        content: [{
            id: Math.floor(Math.random() * Date.now()),
            name: "bio",
            content: [{ id: Math.floor(Math.random() * Date.now()), name: "bio.txt", text: "lorem ipsumm" }],
        },],
    },
    {
        id: Math.floor(Math.random() * Date.now()),
        title: "hobbies",
        content: [
            {
                id: Math.floor(Math.random() * Date.now()),
                name: "bio",
                content: [{ id: Math.floor(Math.random() * Date.now()), name: "bio.txt", text: "lorem ipsumm" }],
            },
        ],
    }
]

export default profileData