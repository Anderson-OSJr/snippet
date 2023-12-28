import { db } from '@/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import * as actions from '@/actions';

interface SnippetShowPageProps {
    params: {
        id: string,
    }
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {

    /* To check if loading.tsx is running properly */
    await new Promise((r) => setTimeout(r, 1000));

    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.id) }
    }); 
    
    /* "id" in databank is a number, but the "props.params.id" is a string.
    So, it's necessary to make a parseInt() */

    if (!snippet) {
        return notFound();
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

    return(
        <div>
            
            <div className='flex my-4 justify-between items-center'>

                <h1 className='text-xl font-bold text-indigo-900'
                                >ID:{snippet.id} - {snippet.title}</h1>

                <div className='flex gap-2'>

                    <Link   href={`/snippets/${snippet.id}/edit`}
                            className=' py-2 w-28 px-auto text-center border rounded
                                        bg-indigo-50 text-indigo-700
                                        border-indigo-300'>Edit</Link>

                    <form action={deleteSnippetAction}> 
                        <button className=' py-2 w-28 px-auto text-center border rounded
                                            bg-indigo-50 text-indigo-700
                                            border-indigo-300'>Delete</button>                     
                     </form>

                </div> 

            </div>

            <pre className='p-3 my-3 border rounded bg-indigo-50 border-indigo-300'>
                <code>{snippet.code}</code>
            </pre>
            
        </div>
    )
}