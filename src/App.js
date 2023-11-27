import "./App.css";

import Head from "./assesmentComponents/Heads.jsx";
import Careers from "./assesmentComponents/Careers.jsx";
import Communitys from "./assesmentComponents/Communitys.jsx";
import Jobs from "./assesmentComponents/Jobs.jsx";
import Speakers from "./assesmentComponents/Speakers.jsx";
import ProgramDetail from "./assesmentComponents/ProgamDetails.jsx";
import Updates from "./assesmentComponents/Updates.jsx";
import Paths from "./assesmentComponents/Paths.jsx";
import Blogss from "./assesmentComponents/Blogs.jsx";
import Footers from "./assesmentComponents/Footers.jsx";


function App() {
  return (
    <div className="App">
      <div>
      <Head />
      <Careers />
      <Communitys />
      <Jobs />
      <Speakers />
      <ProgramDetail />
      <Updates />
      <Paths />
      <Blogss/>
      <Footers />
    </div>
    </div>
  );
}

export default App;
