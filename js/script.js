const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
        const pizzaInMenu = this.pizzas.includes(pizzaName);
        console.log(pizzaInMenu);
        if (pizzaInMenu) {
            return onSuccess(pizzaName);
        }
        return onError(pizzaName);
  }
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(pizzaName) {
}

// Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
