import React, { useState, useEffect, useContext } from 'react';
import ShopBagItem from '../components/ShopBagItem';
import { AppContext } from '../App';
import './mybag.css';

function MyBag({ reference }) {
    const { bag } = useContext(AppContext);
    const [total, setTotal] = useState(0);

    const handleTotalPayment = () => {
        return bag
            .map(game => game.price * (1 - game.discount))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            .toFixed(2);
    };

    useEffect(() => {
        setTotal(handleTotalPayment());
    }, [bag]);

    return (
        <section id="bag" className="bag" ref={reference}>
            <div className="container">
                <div className="row mb-2">
                    <h1 className="text-white display-2">My Bag</h1>
                </div>
            </div>
            {bag.length === 0 ? (
                <h2 className="text-white">Your Bag is Empty</h2>
            ) : (
                <>
                    <div className="row">
                        <div className="table-auto">
                            <table className="shopBagTable table-auto border-collapse w-full mt-12 text-[#ffffff]  rounded-[20px]">
                                <thead className=" text-white">
                                    <tr>
                                        <th className="py-2 px-4">No.</th>
                                        <th className="py-2 px-4">Preview</th>
                                        <th className="py-2 px-4">Game</th>
                                        <th className="py-2 px-4">Price</th>
                                        <th className="py-2 px-4">Discount</th>
                                        <th className="py-2 px-4">Payment</th>
                                        <th className="py-2 px-4">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bag.map((game, index) => (
                                        <ShopBagItem
                                            index={index}
                                            key={game._id}
                                            game={game}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row text-white flex justify-between mt-5">
                        <div className="col-lg-2">
                            <div className="itemCount text-[1.3rem]">
                                Total Items: {bag.length}
                            </div>
                        </div>
                        <div className="col-lg-10 flex justify-end">
                            <div className="payment inline-flex text-[1.3rem]">
                                Total: {total}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default MyBag;
