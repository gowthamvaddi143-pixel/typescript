
import { useEffect, useState, type BaseSyntheticEvent } from "react"
import { type FakestoreContract } from "../contracts/FakeStoreContract"
import axios from "axios";
import { NavBar } from "../controlled-components/Navbar.";

export function Home(){

    

        const [products , setProducts] = useState<FakestoreContract[]>();
        const [categories, setCayegories] =useState<string[]>([])

        function LoadProducts(){
              axios.get(`https://fakestoreapi.com/products`)
            .then(response=>{
                setProducts(response.data)
            })
        }

        function LoadCategories(){
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(response=>{
                setCayegories(response.data)
            })
        }   


        useEffect(()=>{

            LoadCategories();
            LoadProducts();
          
        },[])

        function handleCategoryChange(e:BaseSyntheticEvent){
            alert(`
              value=  ${e.target.value}
                `)

        }
return(
        <div className="container-fluid">

            <NavBar title="Amazon" menuItems={['HOME','SHOP','CONTECT']}/> 
        <h1>Home</h1>
        <select onChange={handleCategoryChange}>
            {
                categories.map(category=><option key={category}>{category.toUpperCase()}</option>)
            }
        </select>
        <ol>
            {
                products?.map(product=><li key={product.id}>{product.title}</li>)
            }
        </ol>

    </div>
    )

    
}