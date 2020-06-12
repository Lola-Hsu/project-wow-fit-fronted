export const addShopItemToCart = (cartItems, addItem, itemQuantity = 1) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.itemId === addItem.itemId
  );
  if (existCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.itemId === addItem.itemId
        ? { ...cartItem, quantity: cartItem.quantity + itemQuantity }
        : cartItem
    );
  }
  return [...cartItems, { ...addItem, quantity: itemQuantity }];
};

export const removeCartItem = (cartItems, itemId) => {
  return cartItems.filter((item) => item.itemId !== itemId);
};

export const unlikeCartItem = (cartFavoriteItems, item) =>
  Object.values(cartFavoriteItems).filter(
    (cartItem) => cartItem.itemId !== item.itemId
  );
