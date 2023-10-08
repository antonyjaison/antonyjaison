import crypto from "crypto"

const contactData = [
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
        title: "find-me-also-in",
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
]

export default contactData