import React, { useState } from 'react';
import axios from 'axios';


const AddProduct =()=>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')

    const handleSubmit = async(ev) => {
        ev.preventDefault();
        return await axios
        .post('/api/products',{name,description,price,image})
        .then((res) => {
          refreshPage();
        })
        .catch((err) => {
          window.alert('try again!');

    
        });
    };
    function refreshPage() {
      window.location.reload(false);
      window.location.replace('/');
    }
    

        return(
            <div>
                <p>Add New Model</p>
                <form onSubmit = {handleSubmit}>
                <label>
                Name: 
                <input onChange={({ target: { value } }) => setName(value)} />
                 </label>
                 <label>
                Price: 
                <input onChange={({ target: { value } }) => setPrice(value)} />
                 </label>
                 <label>
                Description: 
                <input onChange={({ target: { value } }) => setDescription(value)} />
                 </label>
                 <label>
                Image-Url: 
                <input onChange={({ target: { value } }) => setImage(value)} />
                 </label>
                    <button>Add Product</button>
                </form>
            </div>
        )
        
    
}

  
  export default AddProduct;