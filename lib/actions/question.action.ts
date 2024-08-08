'use server';

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: Object) {
    try {
        connectToDatabase();
    } catch (error) {

    }
}