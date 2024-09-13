import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import productList, { Product } from "./assets/data/list";
import {Basket} from "./components/Basket";
import {ProductList} from "./components/ProductList";

export const App = () => {
    const [products, setProducts] = useState<Product[]>(productList);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const clickProduct = (prod: Product) => {
      setProducts(prevState => {
        return prevState.map(p => {
          if(p.id === prod.id) {
            return {
              ...p,
              selected: !p.selected
            }
          }
          return p
        })
      })
      const findSelectedProd = selectedProducts.find(p => p.id === prod.id);
      if(findSelectedProd) {
        setSelectedProducts(prevState => {
          return prevState.filter(p => p.id !== findSelectedProd.id)
        })
      } else {
        setSelectedProducts([...selectedProducts, {...prod, selected: true, amount: 1}])
      }
    };

    const placeOrder = () => {
      setSelectedProducts([]);
      setProducts(prevState => {
        return prevState.map(p => {
          return {
            ...p,
            selected: false
          }
        })
      });
    };

    const onAddItem = (prod: Product) => {
      setProducts(prevState => {
        return prevState.map(p => {
          if(p.id === prod.id) {
            return {
              ...p,
              amount: p.amount + 1
            }
          }
          return p;
        })
      })
      setSelectedProducts(prevState => {
        return prevState.map(p => {
          if(p.id === prod.id) {
            return {
              ...p,
              amount: p.amount + 1
            }
          }
          return p;
        })
      })
    }

    const onRemoveItem = (prod: Product) => {

      if(prod.amount === 1) {
        setSelectedProducts(prevState => {
          return prevState.filter(p => p.id !== prod.id)
        })
        setProducts(prevState => {
          return prevState.map(p => {
            if(p.id === prod.id) {
              return {
                ...p,
                selected: false
              }
            }
            return p;
          })
        })
      } else {
        setSelectedProducts(prevState => {
          return prevState.map(p => {
            if(p.id === prod.id) {
              return {
                ...p,
                amount: p.amount - 1
              }
            }
            return p;
          })
        })
        setProducts(prevState => {
          return prevState.map(p => {
            if(p.id === prod.id) {
              return {
                ...p,
                amount: p.amount - 1
              }
            }
            return p;
          })
        })
      }
    }

    return (
        <div className="App">
            <Router>
                <Route
                    path="/"
                    exact
                    render={(props: any) => (
                        <ProductList
                            {...props}
                            products={products}
                            clickProduct={clickProduct}
                        />
                    )}
                />
                <Route
                    path="/basket"
                    render={(props: any) => (
                        <Basket
                            {...props}
                            selectedProducts={selectedProducts}
                            unselect={clickProduct}
                            onAddItem={onAddItem}
                            onRemoveItem={onRemoveItem}
                            placeOrder={placeOrder}
                        />
                    )}
                />
            </Router>
        </div>
    );
  }