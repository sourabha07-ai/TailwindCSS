/* eslint-disable no-unexpected-multiline */
import  styled  from 'styled-components';
 
 const Style_component_app = () => {
    const Button = styled.button 
         `background-color :  ${(props) =>(props.primary ? "black" : "green")};
         padding : 10px;
         color:white;
         border-radius:6px;
         cursor:pointer;
         border:none;
         &:hover{ background-color:  ${(props) =>(props.primary ? "blue" : "crimson" )}`;
   return (
     <>
      <Button onClick primary={ true }> Click Me</Button>  <br />
       <br />
       <Button>Click Me 2</Button>
     </>
   )
 }
 
 export default Style_component_app
 
