
// this component displays rotating cube
const App = () => {

    return (
        <section className="fixed left-40 bottom-10 board ">
          
          <div className="container ">
          <div className="cube p-4 ">
            <div className="bg-blue-800/80 face front">Javascript</div>
            <div className="bg-rose-800/80 face back">CSS</div>
            <div className="bg-green-600/80 face right">React</div>
            <div className="bg-yellow-600/80 face left">Express</div>
            <div className="bg-slate-700/80 face top">MongoDB</div>
            <div className="bg-cyan-400/80 face bottom">SQL</div>
            <div className="bg-pink-500/80 face other">Angular</div>
            <div className="bg-green-300/80 face another">NodeJs</div>
          </div>
          </div>
        </section>
    );
}

export default App;