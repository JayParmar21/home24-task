import { getServerData } from "../../fetch";
import { Category } from "../../types/types"

type getCatigoriesType = {
    categories: Category[] 
}

const getCategoriesGQL = () => `{
    categories(ids: "156126", locale: de_DE) {
        name
        urlPath
        articleCount
        childrenCategories {
            name
            urlPath
        }
        categoryArticles(first: 50) {
            articles {
                name
                variantName
                prices {
                    currency
                    regular {
                    value
                    }
                }
                images(
                    format: WEBP
                    maxWidth: 200
                    maxHeight: 200
                    limit: 1
                ) {
                    path
                }
            }
        }
    }
}`

export const getCatigories = async (fn: (data:Category[])=> void) => {
    const {categories} = await getServerData<getCatigoriesType>(getCategoriesGQL);
    return fn(categories || []);
};