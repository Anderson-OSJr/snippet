import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function SnippetCreatePage() {

    async function createSnippet(formData: FormData) {
        // this needs to be a server action:
        'use server';

        // Check the user's inputs and make sure they're valid:
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        // Create a new record in the database:
        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            }
        });
        console.log(snippet);

        // Redirect the user back to the root route:
        redirect('/');
    }

    return(
        <>
            <form action={createSnippet}>

                <h3 className="font-bold m-3">Create a Snippet</h3>

                <div className="flex flex-col gap-4 m-3">
                    <div className="flex gap-4">
                        <label  htmlFor="title" className="w-12">
                            Title
                        </label>
                        <input 
                            name="title"
                            className="border rounded p-2 w-full"
                            id="title"                            
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 m-3">
                    <div className="flex gap-4">
                        <label  htmlFor="code" className="w-12">
                            Code
                        </label>
                        <textarea 
                            name="code"
                            className="border rounded p-2 w-full"
                            id="code"                            
                        />
                    </div>
                </div>

                <button type="submit" className="rounded p-2 bg-indigo-200 m-3">
                    Create Snippet
                </button>
            </form>
        </>
    )
}