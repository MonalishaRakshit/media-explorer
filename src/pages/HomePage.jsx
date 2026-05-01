import ResultGraid from "../components/ResultGraid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div>
      <SearchBar />
      {query != "" ? (
        <div>
          <Tabs /> <ResultGraid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
