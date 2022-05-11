import { useEffect, useState } from 'react';
import './App.css';

import EditForm from './components/EditForm';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';
import createNewProducts from './services/createNewProducts';
import deleteProducts from './services/deleteProducts';
import editProducts from './services/editProducts';
import getAllProducts from './services/getAllProducts';


function App() {

  const [products, setProducst] = useState([])
  const [newProducst, setNewProducst] = useState({})
  const [deleteId, setDeleteId] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const [editDefValues, setEditDefValues] = useState({})
  const [editFormRes, setEditFormRes] = useState({})

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducst(response.data)
      })
   
  }, [])
  
  useEffect(() => {
    if (newProducst.first_name) {
      createNewProducts(newProducst)
        .then((response) => {
          setProducst([...products, response.data])
          setNewProducst({})
        })
    }
    
  }, [newProducst, products])
  
  useEffect(() => {
    const filterProduct = (id) => {
    const newArr = products.filter((product) => id !== product.id)
    return newArr
   }
    if (editFormRes.id) {
      editProducts(editFormRes.id, editFormRes)
        .then((res) => {

          setProducst([...filterProduct(editFormRes.id), res.data])
          setEditFormRes({})
      })
    } 
  },[editFormRes, products])
    
  useEffect(() => {
    const filterProduct = (id) => {
    const newArr = products.filter((product) => id !== product.id)
    return newArr
   }

    if (deleteId) {
      deleteProducts(deleteId)
        .then((res) => {
        console.log(res)
          setProducst(filterProduct(deleteId))
          setDeleteId('')
    })}
  },[deleteId, products])

 

  
  const handlerOnCreateProduct = (e) => {
    setNewProducst(e)  
  }

   const handlerOnDelete = (id) => {
    console.log(id)  
    setDeleteId(id)  
   }
  
  const handlerOnEdit = (obj) => {
    setEditDefValues(obj)
  }

  const handlerOnEditProduct = (data) => {
 
    setEditFormRes(data)
  }

    const productList = products.map((item) => <UserCard productObj={item} onEdit={handlerOnEdit} onDelete={handlerOnDelete} key={item.id} />)

  return (
    <div className="App">
      <header className="App-header">
        <EditForm onEdit={handlerOnEditProduct} defValues={editDefValues}/>
        <button onClick={() => setDisplayForm(!displayForm)} >Crear nuevo producto</button>
        {displayForm && <UserForm onCreate={handlerOnCreateProduct} />}
        {productList}
      </header>
    </div>
  );
}

export default App; 