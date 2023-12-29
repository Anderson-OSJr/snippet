import Link from 'next/link';
import { db } from '@/db';

export default async function Home() {

  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return(
      <Link key={snippet.id} 
            href={`/snippets/${snippet.id}`}
            className='flex justify-between 
                        items-center p-2 border 
                        rounded'>
        <div>{snippet.title}</div>    
        <div>View</div>    
      </Link>
    );
  })

  return (
    <div className='md:w-3/5 lg:w-2/5 mx-auto mt-20'>
      <div className='flex my-2 justify-between items-center'>
        <h1 className='text-xl font-bold text-indigo-900 mt-2'>Snippets</h1>
        <Link href='/snippets/new'
              className='border rounded py-2 px-5
              bg-indigo-100 border-indigo-400
              text-indigo-800 lg:w-28 text-center'
              >New</Link>
      </div>
      <div className='flex flex-col gap-2 my-4'>{renderedSnippets}</div>
    </div>
  )
}
