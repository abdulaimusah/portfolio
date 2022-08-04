
// this component displays rotating cube
const App = () => {

    return (
        <section className=" board pt-4 ">
          
          <div className="container ">
          <div className="cube p-4 ">
            <div className="bg-blue-800/80 face one">Javascript</div>
            <div className="bg-rose-800/80 face two">CSS</div>
            <div className="bg-green-600/80 face three">React</div>
            <div className="bg-yellow-600/80 face four">Express</div>
            <div className="bg-slate-700/80 face five">MongoDB</div>
            <div className="bg-cyan-400/80 face six">SQL</div>
            <div className="bg-pink-500/80 face seven">Angular</div>
            <div className="bg-green-300/80 face eight">NodeJs</div>
          </div>
          </div>
        </section>
    );
}

export default App;