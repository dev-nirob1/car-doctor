import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const {user} = useContext(AuthContext);

    const handleConfirmOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user.email
        const price = form.price.value;
        const address = form.address.value;
        const date = form.date.value;
        
        const order = {
            customerName : name,
            email,
            price, 
            service: title,
            service_id: _id,
            img,
            date,
            address
        }
        console.log(order)
        fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('order placed successfully')
            }
            console.log(data)})
    }
    return (
        <div className="w-full">
            <h3>Book Service: {title}</h3>
            <form onSubmit={handleConfirmOrder} className="w-3/4 mx-auto">
                <div className="flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required/>

                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered" required/>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Due Price</span>
                        </label>
                        <input type="text" name="price" readOnly defaultValue={`$${price}`} className="input input-bordered" />

                    </div>
                </div>
                <textarea placeholder="Address" name="address" className="textarea textarea-bordered mt-5 textarea-md w-full" required></textarea>

                <div className="my-10">
                    <input className="btn btn-warning btn-block" type="submit" value="Confirm Order" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;