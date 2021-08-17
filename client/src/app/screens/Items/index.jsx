import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumbs from "../../components/Breadcrumbs";
import ItemsList from "../../components/ItemsList";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

import { useParseLocationSearch } from "../../hooks/useParseLocationSearch";
import { useRequest } from "../../hooks/useRequest";
import { getItemBySearch } from "../../../services/items";

const Items = () => {
  const { search } = useParseLocationSearch();

  const [data, loading] = useRequest(
    {
      initialState: [],
      request: getItemBySearch,
      payload: { query: search },
    },
    [search]
  );

  const { categories, items } = data;

  if (loading) return <Loader />;

  if (items.length < 1)
    return (
      <>
        <Helmet>
          <title>No se encontraron resultados con los criterios de busqueda</title>
        </Helmet>

        <ErrorMessage message="No se encontraron resultados con los criterios de busqueda" />
      </>
    );

  return (
    <>
      <Helmet>
        <title>{`Buscar: ${search}`}</title>
        <meta
          name="description"
          content="Busca el producto que quieres encontrar"
        />
      </Helmet>

      <BreadCrumbs categories={categories} />
      <ItemsList items={items} />
    </>
  );
};

export default Items;
