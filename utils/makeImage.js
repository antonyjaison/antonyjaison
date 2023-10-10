const makeImage = (imgFor) => {
    switch (imgFor) {
        case "x":
            return "x.svg";
        case "bio":
            return "bio.svg";
        case "education":
            return "bio.svg";
        case "interests":
            return "bio.svg";
        case "email":
            return "mail.svg";
        case "phone":
            return "phone.svg";
        case "instagram":
            return "instagram.svg";
        case "linkedin":
            return "linkedin.svg";
        case "facebook":
            return "facebook.svg";
        case "x":
            return "bio.svg";
        case "skills":
            return "bio.svg";
        case "hobbie":
            return "bio.svg";
        default:
            return "x.svg";
    }
};

export default makeImage