import { rest } from "msw";

const baseURL = "https://moments23.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            pk: 4,
            username: "ahmedo",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 4,
            profile_image: "https://res.cloudinary.com/duv51g0vq/image/upload/v1/media/../default_profile_llqwrh"
        }))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res,ctx)=>{
        return res(ctx.status(200));
    })
];