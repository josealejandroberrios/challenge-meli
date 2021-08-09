import {
  getCategoriesById,
  getItemById,
  getItemDescriptionById,
  getItemsBySearch,
} from "../service/itemsService";
import { FIRM_RESPONSE } from "../constants";
import {
  categoriesFormatter,
  itemFormatter,
} from "../utils/responseFormatters";

export default class ItemsController {
  static async searchItems({ search }) {
    try {
      const response = await getItemsBySearch({ search: search });
      const { results, filters } = response.data;

      const categoriesFilters = filters.filter(
        (item) => item.id === "category"
      );

      const parseItems = results.map((result) => itemFormatter(result));

      return {
        ...FIRM_RESPONSE,
        items: parseItems,
        categories: categoriesFormatter(categoriesFilters[0]?.values[0]),
      };
    } catch (error) {
      return error.response.data;
    }
  }

  static async itemDetails({ id }) {
    try {
      const [detailsResponse, descriptionResponse] = await Promise.all([
        getItemById({ id }),
        getItemDescriptionById({ id }),
      ]);

      const { category_id, sold_quantity, ...restDetails } =
        detailsResponse.data;

      const { plain_text } = descriptionResponse.data;

      const item = {
        ...itemFormatter(restDetails),
        sold_quantity,
        description: plain_text,
      };

      const responseCategories = await getCategoriesById({ id: category_id });

      return {
        ...FIRM_RESPONSE,
        item,
        categories: categoriesFormatter(responseCategories.data),
      };
    } catch (error) {
      return error.response.data;
    }
  }
}
