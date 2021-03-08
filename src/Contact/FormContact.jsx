import React from "react";
import { useForm } from "react-hook-form";
import './FormContact.scss';

export default function FormContact() {
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
   <div className="contact">

     
   </div>
//     <form className ="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
       
//       <div className="uk-inline">
//              <span className="uk-form-icon" uk-icon="icon: user"></span>
//              <input name="name" className="uk-input" type="text" placeholder="Name" ref={register({ required: true })}/>
             
      
//          </div>
// {errors.name && <span>This field is required</span>}
         
//         <div className="uk-inline">
//             <span className="uk-form-icon" uk-icon="icon: mail"></span>
//             <input name="email" className="uk-input" type="email" placeholder="Email" ref={register({ required: true })}/>
            
//         </div>
//     {errors.email && <span>This field is required</span>}

    
//         <div className="uk-inline">
//             <span className="uk-form-icon" uk-icon="icon: pencil"></span>
//             <input name="subject" className="uk-input" type="text" placeholder="Subject" ref={register({ required: true })}/>
           
//         </div>
//      {errors.subject && <span>This field is required</span>}

    
//         <div className="uk-inline messageBox">
//         <span className="uk-form-icon" uk-icon="icon: comment"></span>
            
//             <input name="message" className="uk-input" type="text" placeholder="Message" ref={register({ required: true })}/>
            
//         </div>
//    {errors.message && <span>This field is required</span>}
//       <div><input type="submit" className="uk-button uk-button-primary" /></div>
      
      
//     </form>
  );
}



// export default function FormContact(){
//     return(
//         <div className="form">
//         <form>
//         
//         <div className="flex flex-col">
//             <span className="uk-form-icon" uk-icon="icon: user"></span>
//             <input className="uk-input" type="text" placeholder="Name"/>
//         </div>
//     </div>
    

// </form>
//         </div>
      
//     );
// }