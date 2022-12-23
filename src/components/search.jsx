import { useDispatch, useSelector } from "react-redux";
import { configureRoute } from "../../utils/features/paramSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useSelector((state) => state.param.value);

  //sets the search query for the input field
  const handleSearchQuery = (e) => {
    const query = `${e.target.value.toLowerCase()}`;
    dispatch(configureRoute(query));
  };

  //Navigates to page when enter is clicked; only works when a value is entered
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (searchQuery === "") return;

      navigate(`/info/${searchQuery}`);
      dispatch(configureRoute(""));
    }
  };

  return (
    <input
      type="text"
      value={searchQuery}
      name="Search bar"
      placeholder="Search (example: bitcoin)"
      onChange={handleSearchQuery}
      onKeyUp={handleKeyPress}
    />
  );
};

export default Search;
