'use server';

import prisma from "../db";

export const createQuestion = async (params: Object) => {
    try {
        const post = await prisma.post.create({
            data: {
                title: "Hello World",
                content: "This is a test post 2",
            }
        });

        console.log(post);
    } catch (error) {
        console.log(error);
    }
};