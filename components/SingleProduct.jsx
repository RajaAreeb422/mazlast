import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import Link from "next/link";
  import { useEffect, useState } from 'react';
  
  
  
  
  const SingleProduct = ({ item }) => {
    const [path,setPath]=useState('')
   
  
    // const [items, setItems] = useState([])
    useEffect(() => {
      
      
     
    }, [])
    return (
  
      <Link href='/productdescp/[id]' as={`/productdescp/${item.id}`} >
      <Container>
        
        {/* <Circle /> */}
        {/* <div style={{display:'flex',flexDirection:'column'}}> */}

       
          
          <h5>{item.name}</h5>
          <p>{item.part}</p>
          
          
          <Image src={item.img}/>
          <p> Sku : {item.sku}</p>
          <p>Price: {item.price}</p>
          <p>Incl Val:{item.tax}</p> 

        <Info>
         
          <Link href='/productdescp/[id]' as={`/productdescp/${item.id}`} >
            <Icon >
              <SearchOutlined />
            </Icon>
          </Link>
          
  
        </Info>
        
      </Container>
      </Link>
    );
  };
  
  export default SingleProduct;
  
  
  const Div = styled.div`
    opacity: 0;
    height:100px;
    width:200px;
    background-color:red;
   
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 200px;
    height: 430px;
    padding:10px;
    background-color:whitesmoke;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;

const PriceCol = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
  `;

  
  const Image = styled.img`
    height:200px ;
    align-items:center;
    //width:200px;
  
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  const Title = styled.p`
  font-size: 14px;
  /* display: flex; */
  margin-top: 300px;
  margin-left: 300px;
  align-items: center;
  justify-content: space-between;
  
  `;
  const TInfo = styled.div`
  position: absolute;
  margin-right: 100%;
 
  `;
  
  const StyledLink = styled(Link)`
                  color: #000000;
                  &:focus, &:hover, &:visited, &:link, &:active {
                      text-decoration: none;
      }
                  `;
  