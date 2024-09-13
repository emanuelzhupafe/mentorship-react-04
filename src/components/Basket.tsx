import React, { useEffect, useState } from "react";
import { SelectedProduct } from "./SelectedProduct";
import type { Product as ProductType } from '../assets/data/list'

interface Props {
    selectedProducts: ProductType[];
    placeOrder: any;
    history: any;
    onAddItem: (prod: ProductType) => void;
    onRemoveItem: (prod: ProductType) => void;
    unselect: (product: ProductType, select: boolean) => void;
}

export const Basket = ({ placeOrder, history, selectedProducts, onAddItem, onRemoveItem }: Props) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const calcPrice = () => {
        let price = 0;
        selectedProducts.forEach((p) => {
            price += p.price * p.amount;
        });
        setTotalPrice(price);
    };

    useEffect(() => {
        calcPrice();
    }, [selectedProducts])


    const onMinusClick = (prod: ProductType) => {
        onRemoveItem(prod);
        // prod is not updated here
    };

    const onPlusClick = (prod: ProductType) => {
        onAddItem(prod);
    };

    const goBack = () => {
        history.push("/");
    };

    return (
        <div style={{ padding: "20px" }}>
            <button
                className="btn btn-outline-primary"
                onClick={goBack}
            >
                Go To Product List
            </button>
            <div style={{ textAlign: "center" }}>
                <div className="basket">
                    {selectedProducts?.map((prod, i) => (
                        <SelectedProduct
                            key={i}
                            product={prod}
                            onMinusClick={onMinusClick}
                            onPlusClick={onPlusClick}
                        />
                    ))}
                    {selectedProducts.length === 0 && (
                        <p style={{ marginTop: "50px" }}>EMPTY BASKET</p>
                    )}
                </div>
                <p>Total amount: {totalPrice} den</p>
                <button
                    className="btn btn-primary"
                    onClick={placeOrder}
                >
                    Place order
                </button>
            </div>
        </div>
    );
}
