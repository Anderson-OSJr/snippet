'use server';

import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet (id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code },
    });

    //Altera o caching da homepage
    revalidatePath(`/snippets/${String(id)}`);

    redirect(`/snippets/${String(id)}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    });

    //Altera o caching da homepage
    revalidatePath('/');

    redirect('/');
}

export async function createSnippet(
    formState: {message: string}, 
    formData: FormData
) {  
    try {
        // Check the user's inputs and make sure they're valid:
        const title = formData.get('title');
        const code = formData.get('code');

        if (typeof title !== 'string' || title.length < 5) {
            return {
                message: 'Title must be a longer string...'
            }
        }

        if (typeof code !== 'string' || code.length < 10) {
            return {
                message: 'Code must be longer...'
            }
        }

        // Create a new record in the database:
        await db.snippet.create({
            data: {
                title,
                code,
            }
        });

    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                message: error.message
            }
        } else {
            return {
                message: 'Something went wrong...'
            }
        }
    }
    //console.log(snippet);

    //Altera o caching da homepage
    revalidatePath('/');

    // Redirect the user back to the root route:
    redirect('/');
}