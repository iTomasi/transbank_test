import "../css/tailwind.css";

const App = function({ Component, pageProps }) {
  return (
    <div
      className="h-screen bg-stone-900 text-white flex justify-center items-center"
    >
      <div>
        <Component {...pageProps}/>
      </div>
    </div>
  )
};

export default App;