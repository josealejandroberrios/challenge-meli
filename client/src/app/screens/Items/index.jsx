import React from "react";

import BreadCrumbs from "../../components/Breadcrumbs";
import ItemsList from "../../components/ItemsList";

import { useParseLocationSearch } from "../../hooks/useParseLocationSearch";
import { useRequest } from "../../hooks/useRequest";
import { getItemBySearch } from "../../../services/items";

const Items = () => {
  const { search } = useParseLocationSearch();

  const [data, loading, error] = useRequest(
    {
      initialState: [],
      request: getItemBySearch,
      payload: { query: search },
    },
    [search]
  );

  const { categories, items } = data;

  if (loading) return <span>...Cargando</span>;

  return (
    <>
      <BreadCrumbs categories={categories} />
      <ItemsList items={items} />
    </>
  );
};

export default Items;
