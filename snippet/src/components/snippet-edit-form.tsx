'use client';

import type { Snippet } from '@prisma/client';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '@/actions';

interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm( {snippet}: SnippetEditFormProps ) {

    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = '') => {
        setCode(value);
    }

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

    return (
        <div className='w-2/5 mx-auto mt-20'>
            <div className='my-10 border-indigo-200 rounded border-4 p-2'>
                <Editor 
                    height="40vh"
                    theme='vs-dark'
                    language='javascript'
                    defaultValue={snippet.code}
                    options={{minimap: {enabled: false}}}
                    onChange={handleEditorChange}
                />
                <form action={editSnippetAction}>
                    <button type='submit' 
                            className='p-2 border rounded
                            bg-indigo-100 text-indigo-800
                            m-2 w-28 border-indigo-400'>Save</button>
                </form>
            </div>
        </div>
    );
}