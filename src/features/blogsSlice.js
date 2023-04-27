import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: "Learning Next JS 🚀",
        description:
            "Next JS is a popular React based Frontend Framework that helps us in building Godmode application.Next JS is a popular React based Frontend Framework that helps us in building Godmode application.Next JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning React JS ⚛️",
        description:
            "React JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning Node JS 🚀",
        description:
            "Node JS is a popular Backend Framework that helps us in building Godmode application. ",
    }, {
        title: "Learning Next JS 🚀",
        description:
            "Next JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning React JS ⚛️",
        description:
            "React JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning Node JS 🚀",
        description:
            "Node JS is a popular Backend Framework that helps us in building Godmode application. ",
    }, {
        title: "Learning Next JS 🚀",
        description:
            "Next JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning React JS ⚛️",
        description:
            "React JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning Node JS 🚀",
        description:
            "Node JS is a popular Backend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning Next JS 🚀",
        description:
            "Next JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning React JS ⚛️",
        description:
            "React JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning Node JS 🚀",
        description:
            "Node JS is a popular Backend Framework that helps us in building Godmode application. ",
    }, {
        title: "Learning Next JS 🚀",
        description:
            "Next JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning React JS ⚛️",
        description:
            "React JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning Node JS 🚀",
        description:
            "Node JS is a popular Backend Framework that helps us in building Godmode application. ",
    }, {
        title: "Learning Next JS 🚀",
        description:
            "Next JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning React JS ⚛️",
        description:
            "React JS is a popular React based Frontend Framework that helps us in building Godmode application. ",
    },
    {
        title: "Learning Node JS 🚀",
        description:
            "Node JS is a popular Backend Framework that helps us in building Godmode application. ",
    }
];

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        greetUser(state, action) {
            console.log("Hello User!!");
        },
    },
});

export const selectAllBlogs = (state) => state.blogs;
export const { greetUser } = blogsSlice.actions;
export default blogsSlice.reducer;
