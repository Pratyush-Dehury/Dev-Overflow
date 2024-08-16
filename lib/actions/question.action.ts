'use server';

import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { CreateQuestionParams, GetQuestionParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: GetQuestionParams) {
    try {
        await connectToDatabase();
        const questions = await Question.find({})
            .populate({ path: 'tags', model: Tag })
            .populate({ path: 'author', model: User })
            .sort({ createdAt: -1 });
        return { questions };
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function createQuestion(params: CreateQuestionParams) {
    try {
        await connectToDatabase();
        const { title, content, tags, author, path } = params;
        const question = await Question.create({ title, content, author });

        const tagDocuments = [];

        for (const tag of tags) {
            const existingTags = await Tag.findOneAndUpdate(
                { name: { $regex: new RegExp(`^${tag}$`, "i") } },
                { $setOnInsert: { name: tag }, $push: { questions: question._id } },
                { upsert: true, new: true }
            );

            tagDocuments.push(existingTags._id);
        }

        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } },
        });

        revalidatePath(path);
    } catch (error) {

    }
}