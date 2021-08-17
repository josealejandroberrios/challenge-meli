import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import PATHS from "../../../constants/paths";
import { toAbsoluteUrl } from "../../../utils/assetsHelpers";
import { encodeQueryString } from "../../../utils/formatterQueryString";
import { useParseLocationSearch } from "../../hooks/useParseLocationSearch";

import "./styles.scss";

const NavBar = () => {
  const history = useHistory();
  const { search: searchQuery } = useParseLocationSearch();
  const [searchValue, setSearchValue] = useState(searchQuery ?? "");

  useEffect(() => {
    if (!searchQuery) setSearchValue("");
  }, [searchQuery]);

  const handleInptuChange = useCallback((event) => {
    const { value } = event.target;
    setSearchValue(value);
  }, []);

  const hanldeSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!searchValue) return null;

      history.push({
        pathname: PATHS.ITEMS,
        search: encodeQueryString({ search: searchValue }),
      });
    },
    [history, searchValue]
  );

  return (
    <header className="navbar">
      <div className="navbar__wrapped">
        <Link to={PATHS.HOME} className="navbar__link">
          <img
            className="navbar__logo"
            src={toAbsoluteUrl("/Logo_ML@2x.png")}
            alt="Mercado Libre"
          />
        </Link>

        <form onSubmit={hanldeSubmit} className="navbar__form">
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={searchValue}
            onChange={handleInptuChange}
            className="navbar__form__input"
          />

          <button className="navbar__form__button" type="submit">
            <img
              src={toAbsoluteUrl("/ic_Search@2x.png")}
              alt="Buscar"
              className="navbar__form__button__icon"
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default NavBar;
