import { getItemsBySearch } from "../service/itemsService";
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
      return error;
    }
  }
}
