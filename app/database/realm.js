import Realm from "realm";
import ChecklistSchema from "./schemas/ChecklistSchema.js";
import EditedItemsSchema from "./schemas/EditedItemsSchema.js";
import NewItemsSchema from "./schemas/NewItemsSchema.js";

export const getRealm = async () => await Realm.open({
  path: "bovcontrol-checklist",
  schema: [ChecklistSchema, EditedItemsSchema, NewItemsSchema]
});