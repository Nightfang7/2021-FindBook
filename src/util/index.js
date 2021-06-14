import jsonInfo from "../json/jsonInfo.json";

export const getTitle = url => {
   const json = jsonInfo.find(
     x => x.url === url
   );
   return json.title;
}

export const getBook = title => {
    const json = jsonInfo.find(
      x => x.name === title
    );
    return json.title;
 }