
import "../../public/random-quote-image.png";


const MyProjects = () => {

    const items = [
        {name: "E-commerce App",
        picture: "/shop.PNG", 
        repo: "https://github.com/abdulaimusah/shop",
        site: "https://shop-ashen-tau.vercel.app/"},
        {name: "Random Quote and Image App",
        picture: "/random-quote-image.PNG", 
        repo: "https://github.com/abdulaimusah/random-quote-image",
        site: "https://random-quote-image.vercel.app/image"},
    ]


    return(
       <section className="flex flex-col items-center
       pt-10" >
           { items.map(item => (
               <div className="sm:w-3/4 md:w-3/5
               lg:w-2/5 pb-12" >
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
                           rounded-sm">View github repo</button>

                       </a>
                   </div>
                   <img src={item.picture} 
                   alt={item.name} 
                   className="rounded shadow shadow-gray-200
                   w-full h-auto border border-gray-300 " />
                   
               </div>
           ))}
       </section> 
    );
}
export default MyProjects;