import Head from 'next/head';
import MyProjects from './components/myprojects';
import Board from './components/board';


export default function Home() {
  return(
    <div className="min-h-screen flex flex-col font-sans
    font-medium"
    style={{fontFamily: "newadobe"}} >
      <Head>
        <title>Abdulai Musah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-16 bg-white shadow shadow-slate-200
      text-white font-semibold p-2 flex
      items-center justify-around flex-shrink-0 " >
        
        <a href="mailto:abdulaimusah31@gmail.com">
        <button className="py-1 px-2 bg-blue-800
        hover:bg-blue-600 active:bg-blue-600
        rounded-md " >
          Contact me</button>
        </a>
        {/*<button className="py-1 px-2 bg-indigo-700
        hover:bg-indigo-500 active:bg-indigo-500
        rounded-lg "  >
           Dark Toggle</button> */}
        <a href="https://github.com/abdulaimusah">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        { /* <button className="py-1 px-2 bg-blue-800
        hover:bg-blue-600 active:bg-blue-600
        rounded-md "  >
          About</button> */ }
        </a>
        
      </header>
      <main className="p-4 flex-grow flex flex-col 
      items-center shadow-md shadow-gray-400  
      bg-gradient-to-r from-sky-900/40 
      via-gray-400/50
      to-pink-900/40
      font-smooth " >

<div class="text-7xl font-extrabold">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500
   via-green-500 to-violet-500" 
   style={{fontFamily: "mysoul"}}  >
    
    Abdulai Musah
  </span>
</div>


        <p className="sm:w-2/3 md:w-3/5 p-4
               lg:w-1/2 font-normal text-lg overflow-hidden">
            <p className="overflow-hidden slidetext ">
                
         I'm an expert web developer.<br></br>
        I develop fast, mobile-friendly, responsive, interactive
        and accessible websites and webapps<br/>
        I have expertise in Javascript, ReactJS, Angular, 
        ExpressJS, CSS3, HTML5, SQL, MongoDB, and NodeJS.<br/>
        </p>
        </p>
        <span className="pt-12 block "
        style={{fontFamily:"newitalic"}} 
         >These are projects I have designed and developed</span>
        <MyProjects /> 
      </main>
      <footer className="text-white flex h-72
      items-start justify-center flex-shrink-0 pt-4 "
      style={{perspective: "500px"}} 
       >
        <a href="mailto:abdulaimusah31@gmail.com" >
        <button className="py-1 px-2 bg-blue-800
        hover:bg-blue-600 active:bg-blue-600
        rounded-md wiggle"
         >Send email</button>
        </a>
        <Board />
      </footer>
    </div>

  );
}
