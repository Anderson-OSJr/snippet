'use client';

import { useFormState } from "react-dom";
import * as actions from '@/actions';

export default function SnippetCreatePage() {   

    const [formState, action] = useFormState(actions.createSnippet, { message: ''});

    return(
        <div className='w-2/5 mx-auto mt-20 flex flex-col'>
            <form action={action}>

                <h3 className="font-bold text-2xl text-indigo-800 my-3">Create a Snippet</h3>

                <div className="flex flex-col">
                    <div className="flex gap-4 my-3">
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

                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 my-3">
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

                {
                    formState.message ? 
                        <div className="my-2 p-2 bg-red-50 border rounded border-red-100">
                            {formState.message}
                        </div> 
                        : 
                        null
                }

                <button type="submit" 
                        className="rounded p-2 my-3 border bg-indigo-100
                                 border-indigo-400 text-indigo-800">
                    Create Snippet
                </button>
            </form>
        </div>
    )
}