export default NewItemsSchema = {
  name: "NewItems",

  properties: {
    _id: "string",
    farm_name: "string",
    farm_city: "string",
    farmer: "string",
    supervisor: "string",
    type: "string",
    amount_of_milk_produced: "int",
    number_of_cows_head: "int",
    created_at: "date",
    updated_at: "date",
    latitude: "double",
    longitude: "double",
    had_supervision: "bool?"
  },
  primaryKey: "_id"
}