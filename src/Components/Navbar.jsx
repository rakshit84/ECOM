import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import Register from '../Pages/Register'
import { Link } from 'react-router-dom';


const Container = styled.div`
height:60px;
${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
display: flex;
align-items: center;
flex:1;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer ;
`;
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left:25px;
padding:5px;
`;

const Input = styled.input`
 border:none;
 ${mobile({ width: "50px" })}
`

const Center = styled.div`
flex:1;
text-align: center;
`;
const Logo = styled.h1`
font-weight:bold;
${mobile({ fontSize: "24px" })}
`


const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:"gray",fontSize:16}} />
                    </SearchContainer>
                </Left>


                <Center>
                    <Logo><Link to="/" style={{textDecoration:"none",color:"black"}}>Cop-Drop</Link></Logo>
                </Center>
                <Right>
                    <MenuItem><Link to ="/" style={{textDecoration:"none",color:"black"}}>Home</Link></MenuItem>
                    <MenuItem><Link to ="/productlist" style={{textDecoration:"none",color:"black"}}>Products</Link></MenuItem>
                    <MenuItem><Link to ="/register" style={{textDecoration:"none",color:"black"}}>Register</Link></MenuItem>
                    <MenuItem><Link to ="/login" style={{textDecoration:"none",color:"black"}}>Log In</Link></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary"><ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar