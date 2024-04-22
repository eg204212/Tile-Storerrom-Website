import { useState } from 'react';

export function App() {


  const [formToShow, setFormToShow] = useState('SignIn');
  const handleFormSwitch = (form) => {
    setFormToShow(form);

  };

  return (
    /*
       <BrowserRouter>
        <Routes>
        <Route path='/Login' element={<SignIn onFormSwitch={handleFormSwitch} />}></Route>
          <Route path='/Login as a staff' element={<StaffLogin onFormSwitch={handleFormSwitch}/>}></Route>
        </Routes>
       </BrowserRouter>
    */
    );
}
