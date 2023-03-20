import Realm from "realm";
import ChecklistSchema from "./schemas/ChecklistSchema.js";

export const getRealm = async () => await Realm.open({
  path: "bovcontrol-checklist",
  schema: [ChecklistSchema]
});