



const MyProjects = () => {

    const items = [
        {name: "E-commerce App",
        picture: "/shop.PNG", 
        repo: "https://github.com/abdulaimusah/shop",
        site: "https://shop-ashen-tau.vercel.app/"},
        {name: "Blog", 
        picture: "/blog.PNG", 
        repo: "https://github.com/abdulaimusah/blog-frontend",
        site: "https://blog-ochre-beta.vercel.app/"},
        {name: "Random Quote and Image App",
        picture: "/webimage.PNG", 
        repo: "https://github.com/abdulaimusah/random-quote-image",
        site: "https://random-quote-image.vercel.app/image"}
        
    ]


    return(
       <section className="flex flex-col items-center
       pt-10 
        " 
        style={{perspective: "500px"}}
        >
           { items.map(item => (
               <div className="sm:w-2/3 md:w-3/5 
               lg:w-1/2 pb-12 "
               style={{perspective: "1000px"}}
                >
                   <h2 className="font-semibold 
                   mb-2" >{item.name}</h2>
                   <div className="p-2 flex items-center
                   gap-8 mb-2" >
                       <a href={item.site} target="blank" > 
                         <button className="px-2 py-1
                           bg-cyan-900 text-white
                           rounded-sm">Visit</button>
                       </a>
                       <a href={item.repo} target="blank" >
                           <button className="px-2 py-1
                           bg-cyan-900 text-white
                           rounded-sm">View Git repository</button>

                       </a>
                   </div>
                   <img src={item.picture} 
                   alt={item.name} 
                   className=" w-full h-auto rotateitem "
                    />
                   
               </div>
           ))}
       </section> 
    );
}
export default MyProjects;