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

    return (
        <div className='my-10 border-indigo-200 border-8'>
            <Editor 
                height="40vh"
                theme='vs-dark'
                language='javascript'
                defaultValue={snippet.code}
                options={{minimap: {enabled: false}}}
                onChange={handleEditorChange}/>
        </div>
    );
}