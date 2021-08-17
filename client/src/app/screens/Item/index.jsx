import React from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "../../components/Breadcrumbs";
import ItemDetails from "../../components/ItemDetails";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

import { useRequest } from "../../hooks/useRequest";
import { getItemById } from "../../../services/items";

const Item = () => {
  const { id } = useParams();

  const [data, loading, error] = useRequest(
    {
      initialState: [],
      request: getItemById,
      payload: { id },
    },
    [id]
  );

  const { categories, item } = data;

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={`Artículo con id ${id} no encontrado`} />

  return (
    <>
      <BreadCrumbs categories={categories} />
      <ItemDetails {...item} />
    </>
  );
};

export default Item;
